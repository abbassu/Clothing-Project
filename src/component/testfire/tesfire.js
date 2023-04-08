import { useEffect, useState } from "react";
// import { storage } from "./firebaseConfig";
import storage from "../../utils/firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Button from "../button/button";
import "./fire.scss"
import Compressor from 'compressorjs';
import Resizer from "react-image-file-resizer";

function TestFire({fun}) {
        // State to store uploaded file
        const [file, setFile] = useState("");
        
       // progress
        const [percent, setPercent] = useState(0);
    
            // Handle file upload event and update state
           function handleChange(event) {
               setFile(event.target.files[0])

            }

        const resizeFile = (file) => new Promise(resolve => {
                Resizer.imageFileResizer(file, 450, 500, 'JPG', 100, 0,
                uri => {
                  resolve(uri);
                }, 'base64' );
            });

                const onChangekkk = async () => {
                // const file = event.target.files[0];
                const image = await resizeFile(file);
                setFile(image)
                console.log("resize",image);
                }     

        const comp=()=>{
                // console.log("------befor comp",file)
        new Compressor(file, {
                
                quality: 0.6, // 0.6 can also be used, but its not recommended to go below.
                success: (compressedResult) => {
                  // compressedResult has the compressed file.
                  // Use the compressed file to upload the images to your server.        
                   setFile(compressedResult)
                  console.log("------after comp",compressedResult)
                },
              });



              
        }

        useEffect(()=>{
                console.log(",,,,,,,,,,,,,,,------",file)
        },[file])
         
            const handleUpload = () => {
                if (!file) {
                    alert("Please upload an image first!");
                }
         
                const storageRef = ref(storage, `/files/${file.name}`);
         
                // progress can be paused and resumed. It also exposes progress updates.
                // Receives the storage reference and the file to upload.
                const uploadTask = uploadBytesResumable(storageRef, file);
         
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const percent = Math.round(
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        );
         
                        // update progress
                        setPercent(percent);
                    },
                    (err) => console.log(err),
                    () => {
                        // download url
                        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        fun(url)
                            console.log("rtl",url);
                        });
                    }
                );
            };
         
            return (
                <div className="ioio">
                    <div className="choose">
                                <input type="file" onChange={handleChange} accept="/image/*" id="filephoto" />
                        
                    <label htmlFor="filephoto">Choose Photo  <i class="fa-sharp fa-solid fa-image"></i>  <span className="pluss">+</span>   </label>
                    </div>
                    
                    <Button onClick={handleUpload}>Upload to Storage</Button>

        

                    <p className="donepre">{percent} % done  </p>
                        <button onClick={comp}> compress</button>
                        {/* <button onClick={onChangekkk}> resize</button> */}
                </div>
        );
}

export default TestFire;
