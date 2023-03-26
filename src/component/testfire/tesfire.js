import { useState } from "react";
// import { storage } from "./firebaseConfig";
import storage from "../../utils/firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Button from "../button/button";
import "./fire.scss"
 
function TestFire({fun}) {
        // State to store uploaded file
        const [file, setFile] = useState("");
        
       // progress
        const [percent, setPercent] = useState(0);
    
            // Handle file upload event and update state
            function handleChange(event) {
                setFile(event.target.files[0]);
            }
         
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
                    <label htmlFor="filephoto">Choose Photo</label>
                    </div>
                    <Button onClick={handleUpload}>Upload to Storage</Button>
                    <p className="donepre">{percent} % done</p>
                </div>
        );
}

export default TestFire;
