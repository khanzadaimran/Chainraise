// import React, { useState , useEffect } from 'react';

// import {storage} from '../Firebase';
// import { ref, uploadBytes ,listAll,getDownloadURL } from 'firebase/storage';
// import { v4 } from 'uuid';

// export default function Imag() {

// const [imageUpload, setImageUpload]= useState(null);
// const [imageList ,setImageList] = useState([]);

// const imageListRef = ref (storage , "images/")

// const uploadImage = () => {

//     if (imageUpload == null)
//     return;
//     const imageRef = ref( storage, 'images/imageUpload.name + v4()');
//     uploadBytes( imageRef , imageUpload).then ((snapshot) => {
//         getDownloadURL(snapshot.ref).then((url) =>{
//             setImageList((prev) => [...prev,url])
//         })
        
//     });
// };

// useEffect (() => {
//     listAll(imageListRef).then((response)=>{
//         response.items.forEach((item)=>{
//             getDownloadURL(item).then((url) =>{
//                 setImageList((prev) => [...prev,url]);
//             });
//         });
//     });

// }, []);

//   return (
//     <div className='App'>
//         <input type='file' onChange={(event) => {setImageUpload (event.target.files[0]);}} />
//         <button onClick={uploadImage}>
//         uplaod Image
//         </button>
//   {imageList.map((url) =>{
//     return <img src={url}/>
//   })}
//     </div>
//   )
// }


// import { useState, useEffect } from "react";
// import {
//   ref,
//   uploadBytes,
//   getDownloadURL,
//   listAll,
//   list,
// } from "firebase/storage";
// import { storage } from "../Firebase";
// import { v4 } from "uuid";

// function Imag() {
//   const [imageUpload, setImageUpload] = useState(null);
//   const [imageUrls, setImageUrls] = useState([]);

//   const imagesListRef = ref(storage, "images/");
//   const uploadFile = () => {
//     if (imageUpload == null) return;
//     const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
//     uploadBytes(imageRef, imageUpload).then((snapshot) => {
//       getDownloadURL(snapshot.ref).then((url) => {
//         setImageUrls((prev) => [...prev, url]);
//       });
//     });
//   };

//   useEffect(() => {
//     listAll(imagesListRef).then((response) => {
//       response.items.forEach((item) => {
//         getDownloadURL(item).then((url) => {
//           setImageUrls((prev) => [...prev, url]);
//         });
//       });
//     });
//   }, []);

//   return (
//     <div className="App">
//       <input
//         type="file"
//         onChange={(event) => {
//           setImageUpload(event.target.files[0]);
//         }}
//       />
//       <button onClick={uploadFile}> Upload Image</button>
//       {imageUrls.map((url) => {
//         return <img src={url} />;
//       })}
//     </div>
//   );
// }

// export default Imag;

    // import React from 'react'
    // import { storage_bucket } from './Firesbasee'
    // import { ref ,uploadBytesResumable } from 'firebase/storage'

    // export default function imag() {

    //     const uploadFile = (e) => {
    //         let file = e.target.files[0];

    //         let fileRef = ref(storage_bucket, file.name);
    //         const uploadTask -

    //     }
    //   return (
    //     <input type="file" onChange={uploadFile}  />
    //   )
    // }
