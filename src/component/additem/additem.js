import React, { useState } from "react";
import { collection, setDoc ,doc,addDoc} from "firebase/firestore";
import { db } from "../../utils/firebase/firebase";
import { useCollection, useCollectionData } from 'react-firebase-hooks/firestore';
import { async } from "@firebase/util";
// import firebase from "firebase"
import storage from "../../utils/firebase/firebase";
// import { storage } from "./firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


function AddItem(){

    const query=collection(db,"categories");
    const [docs, loading, error] = useCollectionData(query);
    console.log("docssssssss ",docs)


    function SingleUpload(e){
        e.preventDefault()
        const uploadTask=storage.ref("singleImage")/////////////create a folder named singleimage 
        .child("Image1")///////////// this will be name tha name of image
        .put(singleImage)
        uploadTask.on(
            "state_change",(snapshot)=>{
                let progress=((snapshot.bytesTransferred/snapshot.totalBytes)*100);
                console.log("progress",progress)
            },
            (err)=>{
                console.log("erroe",err)
            },()=>{
                storage.ref("singleImage").child("image1").getDownloadUrl().then((imageUrl)=>{
                    db.collection("images").add({
                        imgUrl:imageUrl
                    })
                })
            }
        )
    }






    const [name,setname]=useState("")
    const [url,seturl]=useState(docs)
    // const [file,setfile]=useState(null)

    const [singleImage,setSingleImage]=useState("")

    function handleImage(e){
        e.preventDefault()
        let pickedFile;
        if (e.target.files && e.target.files.lenght>0){
            pickedFile=e.target.files[0];
            setSingleImage(pickedFile)
        }
    }

    const [id,setid]=useState(0)
    const [price,setprice]=useState(0)
    const [reate,setreate]=useState(0)
    const [percent, setPercent] = useState(0);
    const [filee, setFilee] = useState("");

        function handleChange(event) {
        event.preventDefault()
                setFilee(event.target.files[0]);
        }
        function handleUpload() {
            console.log("doneeeee")
                    if (!filee) {
                        alert("Please upload an image first!");
                    }
                    console.log("name name ", filee.name)
                    const storageRef = ref(storage, `${filee.name}`);
             
                    // progress can be paused and resumed. It also exposes progress updates.
                    // Receives the storage reference and the file to upload.
                    const uploadTask = uploadBytesResumable(storageRef, filee);
             
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
                                console.log("ur",url);
                            });
                        }
                    );
            console.log("done")
                };
   async function add(e){
        e.preventDefault()
        console.log("e.preventDefault",e)
        docs[0].items.push({name:name,imageUrl:url,id,price,reate})
        console.log("ddddd",docs)
        const docRef=doc(db,"categories","fitness")
        await setDoc(docRef,{title:"fitness",items:docs[0].items})
    }


    return(
        <div>
             {loading && "Loading ..."}
            
            {docs?.map((element)=>{
                return(
                    <div>
                        {element.title}
                    </div> 
                )
            })} 
            {/* <button onClick={SingleUpload}> upload </button> */}


            <form action=""
             onSubmit={add}
             >

                <div>
                    <label htmlFor="">url</label>
                    <input type="text" onChange={(e)=>{
                        seturl(e.target.value)
                    }}/>
                </div>
                <div>
                    <label htmlFor="">name</label>
                    <input type="text" onChange={(e)=>{
                        setname(e.target.value)
                    }} />
                </div>
                <div>
                    <label htmlFor="">id</label>
                    <input type="number"onChange={(e)=>{
                        setid(e.target.value)
                    }} />
                </div>
                <div>
                    <label htmlFor="">id</label>
                    <input type="number"onChange={(e)=>{
                        setid(e.target.value)
                    }} />
                </div>
                <div>
                    <label htmlFor="">price</label>
                    <input type="number" onChange={(e)=>{
                        setprice(e.target.value)
                    }} />
                </div>

                <div>
                    <label htmlFor="">reate</label>
                    <input type="number"onChange={(e)=>{
                        setreate(e.target.value)
                    }} />
                </div>
                <button>submit</button>
            </form>

        </div>
    )

}export default AddItem