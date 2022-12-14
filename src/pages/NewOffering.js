import React from 'react'
import { AiOutlineUser } from "react-icons/ai";
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../Firebase";
import { v4 } from "uuid";

import FileUpload from '../FileUpload/FileUpload';
import FileList from '../FileList/FileList';



export default function NewOffering() {

  const [files, setFiles] = useState([])

  const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
  }
  const [imageUpload, setImageUpload] = useState();
  const [imageUrls, setImageUrls] = useState([]);

  const [fileUpload, setFileUpload] = useState();
  const [fileUrls, setFileUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
    
  };


  const filesListRef = ref(storage, "files/");
  const uploadFiles = () => {
    if (fileUpload == null) return;
    const fileRef = ref(storage, `filess/${fileUpload.name + v4()}`);
    uploadBytes(fileRef, fileUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setFileUrls((prev) => [...prev, url]);
      });
    });
    
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);


  useEffect(() => {
    listAll(filesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setFileUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  return (
    <div className=' w-full'>

      <div className='flex '>

        <div className='flex flex-col h-screen lg:w-[25%] '>

          <div className=' text-2xl font-bold tracking-wide lg:pl-20 md:pl-9 pt-4  '>
            ChainRaise
          </div>


          <div className='w-full'>

            <div className=' flex pt-20'>


              <div className='flex flex-col h-screen lg:w-[50%] w-36 lg:pl-10 md:pl-5 '>

                <div className=' text-sm font-semibold   text-slate-400 border-t py-4 '>
                  Offering
                </div>
                <div className=' text-sm font-semibold   text-slate-400 border-t py-4 '>
                  Status
                </div>
                <div className=' text-sm font-semibold   text-slate-400 border-t py-4'>
                  Goal
                </div>
                <div className=' text-sm font-semibold   text-slate-400 border-t py-4'>
                  Pledged
                </div>
                <div className=' text-sm font-semibold   text-slate-400 border-t py-4'>
                  Start Date
                </div>
                <div className=' text-sm font-semibold   text-slate-400 border-t py-4'>
                  End Date
                </div>

              </div>



              <div className='flex flex-col  h-screen w-[50%] lg:pr-10 md:pr-2 '>

                <div className=' text-sm  border-t py-4   '>
                  Test Offering
                </div>
                <div className=' text-sm  border-t py-4'>
                  Active
                </div>
                <div className=' text-sm  border-t py-4'>
                  $500000000
                </div>
                <div className=' text-sm  border-t py-4'>
                  $0
                </div>
                <div className=' text-sm  border-t py-4'>
                  06-14-2022
                </div>
                <div className=' text-sm  border-t py-4'>
                  06-21-2022
                </div>

              </div>

            </div>

          </div>



        </div>


        <div className='flex flex-col h-screen lg:w-[50%]  '>

          <div className='flex justify-center  lg:space-x-8 md:space-x-2  pb-10 '>

            <button className='mt-5 text-sm font-semibold'>
              Browse Offerings
            </button>
            <button className=' mt-5  text-sm font-semibold lg:pr-5'>
              Raise
            </button>
            <div className='lg:pt-1 md:pt-4 lg:text-4xl text-slate-300 '>
              |
            </div>
            <button className='mt-5 text-sm font-semibold lg:pl-5'>
              Your Profile
            </button>
            <button className='mt-5 text-sm font-semibold'>
              Settings
            </button>

          </div>

          <div className='flex flex-col border-x-2 h-screen '>
            <div className=' mx-8  mt-10  lg:h-96  border-dashed border-2 border-slate-400 rounded-xl  bg-zinc-300 '>

              <div className='flex lg:mt-5 md:my-4'>

                <div className=' lg:ml-10 md:ml-3 lg:text-lg md:text-sm  font-semibold'>
                  New Offering Section
                </div>
                <button className='lg:ml-52 border-2 px-5 py-1 rounded-md text-white bg-red-700'>
                  Delete
                </button>
                <button className='lg:ml-3  md:mr-2  border-2 px-4 py-1 rounded-md text-white bg-blue-800'>
                  Save
                </button>

              </div>
              <div className='md:mx-2  md:space-y-1  '>
                <div className=' '>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight " id="username" type="text" placeholder="Section Title   "></input>
                </div>

                <div className=' '>
                  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight " id="username" type="text" placeholder="Section Subtitle   "></input>
                </div>

                <div className=' mb-4'>
                  <input class="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight " id="username" type="text" placeholder="Section Description   "></input>
                </div>

              </div>


              <div id='slider' className='flex flex-cols-6 px-6  w-ful h-32 overflow-x-scroll scroll   scroll-smooth' >
                {imageUrls.map((url) => {
                  return <img src={url} />;
                })}
              </div>
             
              <div className='ml-32 pt-2 '>
                <input
                  type="file"
                  onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                  }} />

                <button onClick={uploadFile} className=' border rounded-md border-black md:text-xs bg-blue-800 text-white lg:px-5 lg:py-1'>
                  Upload
                </button>
              </div>

            </div>

            <div className='  mx-8  mt-5   lg:h-52  md:h-32  border-dashed border-2 border-slate-400 rounded-xl  '>

              <div className='flex justify-center  lg:mt-32 md:mt-16  font-semisbold '>
                Create a new section
              </div>


            </div>

          </div>

        </div>


        <div className='flex flex-col h-screen lg:w-[25%] '>

          <div className='flex justify-end lg:space-x-6 md:space-x-8 mr-10 mt-3  '>
            <button className='lg:mt-1 md:mt-2 text-sm font-semibold b'>
              Sign Out
            </button>

            <div className='  lg:text-4xl md:text-3xl md:mt-3 border-black rounded-full border-2 border-solid  '>
              <AiOutlineUser />
            </div>
          </div>

          <div className=' font-semibold mt-14 ml-8 text-lg '>
          Documents
        </div>
                  
        <div >
  
        <FileUpload files={files} setFiles={setFiles}
          removeFile={removeFile} />
        <FileList files={files} removeFile={removeFile} />
      </div>

  
  
          </div>

        </div>

      </div>

    
  )
}
