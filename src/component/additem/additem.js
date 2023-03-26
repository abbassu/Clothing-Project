import React, { useEffect, useState } from "react";
import { collection, setDoc ,doc,addDoc} from "firebase/firestore";
import { db } from "../../utils/firebase/firebase";
import { useCollection, useCollectionData } from 'react-firebase-hooks/firestore';
import { async } from "@firebase/util";
import TestFire from "../testfire/tesfire";
import Button from "../button/button";
import FormInput from "../fom-input/form-input";
import "./additem.scss"
function AddItem(){

    const query=collection(db,"categories");
    const [docs, loading, error] = useCollectionData(query);
    console.log("docs ------------ ",docs)

    const defaultformFields={
        name:'',
        url:'',
        id:'',
        price:'',
        department:'',
        reate:''
    }
    const [formFields,setformfields]=useState(defaultformFields)

    // const [name,setname]=useState("")
    // const [url,seturl]=useState("")
    // const [id,setid]=useState(0)
    // const [price,setprice]=useState(0)
    // const [department,setdepartment]=useState("")
    // const [reate,setreate]=useState(0)

    useEffect(()=>{
        console.log("form",formFields)
    },[formFields])

    const putUrl= (element)=>{
        console.log("added url ")
       setformfields({...formFields,url:element})
    }

    const{name,url,id,price,department,reate}=formFields

    function handleChange(event){
        const {name,value }=event.target
        setformfields({...formFields,[name]:value})
    }

    async function add(e){
    console.log("department",department)
        e.preventDefault()
        console.log("e.preventDefault",e)
        let variable=-1;
        docs.forEach((doc,index)=>{
            if(doc.title.toLowerCase() === department.toLowerCase()){
                variable=index
            console.log("varirir",variable)}
        })
        docs[variable].items.push({name:name,imageUrl:url,id,price,reate})
        console.log("variable",variable,"---------","departemnt",department)
        const docRef=doc(db,"categories",department)
        await setDoc(docRef,{title:department,items:docs[variable].items})
    }

    return(
        <div className="">
            <h1>Add Product</h1>
            <div className="additem">

                <form action=""onSubmit={add} >
                    {/* <FormInput
                        labelName="Url" 
                        optionInput={
                            {
                                onChange:handleChange,
                                type:"text",
                                // required:true,
                                value:url,
                                name:"url"
                            }
                        }
                    /> */}
                    <FormInput
                        labelName="Name" 
                        optionInput={
                            {
                                onChange:handleChange,
                                type:"text",
                                required:true,
                                value:name,
                                name:"name"
                            }
                        }
                    />
                    <FormInput
                        labelName="ID" 
                        optionInput={
                            {
                                // type:"number",
                                onChange:handleChange,
                                required:true,
                                value:id,
                                name:"id"
                            }
                        }
                    />
                    <FormInput
                        labelName="Price" 
                        optionInput={
                            {
                                type:"number",
                                onChange:handleChange,
                                required:true,
                                value:price,
                                name:"price"
                            }
                        }
                    />
                    <FormInput
                        labelName="Department" 
                        optionInput={
                            {
                                type:"text",
                                onChange:handleChange,
                                required:true,
                                value:department,
                                name:"department"
                            }
                        }
                    />
                    <FormInput
                        labelName="Reate" 
                        optionInput={
                            {
                                type:"number",
                                onChange:handleChange,
                                required:true,
                                value:reate,
                                name:"reate"
                            }
                        }
                    />
                    <Button>Submit</Button>
                </form>

                <div className="imim">
                <img src={url} alt="" />
                <TestFire fun={putUrl} type="button"/>
                </div>




            </div>
            {/* {loading && "Loading ..."} */}
            
        </div>
    )

}export default AddItem