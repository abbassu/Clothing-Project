import { useEffect, useState } from "react";
// import { storage } from "./firebaseConfig";
import storage from "../../utils/firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { DeleteProduct } from "../../utils/firebase/firebase";
import Button from "../button/button";
import "./fire.scss"
import Compressor from 'compressorjs';
import Resizer from "react-image-file-resizer";

function TestFire({fun}) {
        const [file, setFile] = useState("");
        const [editfile, seteditFile] = useState("");

        const [percent, setPercent] = useState(0);
      async  function handleChange(event) {
             
        await setFile(event.target.files[0])


        }

        const comp=async ()=>{
                // console.log("before",file)
      await new Compressor(file, {
                quality: 0.4, // 0.6 can also be used, but its not recommended to go below.
                success: (compressedResult) => {

                  seteditFile(compressedResult)
                },
              });
        }

        useEffect(()=>{
                comp()
        },[file])
        
        const handleUpload = async () => {

                if (!editfile) {
                    alert("Please upload an image first!");
                }
                const storageRef = ref(storage, `/files/${file.name}`);
                const uploadTask = uploadBytesResumable(storageRef, editfile);
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const percent = Math.round(
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        );
                        setPercent(percent);
                    },
                    (err) => console.log(err),
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        fun(url)
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
                </div>
        );
}

export default TestFire;
