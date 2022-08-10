import React from 'react'
import { AiOutlineUser } from "react-icons/ai";



export default function NewOffering() {
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
            <div className=' mx-8  mt-10  lg:h-72  border-dashed border-2 border-slate-400 rounded-xl  bg-zinc-300 '>
            
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
            <div className=' border rounded-md  border-black bg-white text-gray-400 pl-5 py-1'>
            Section Title
            
            </div>
            <div   className=' border rounded-md border-black bg-white text-gray-400 pl-5 py-1'> Section Subtitle</div>
            <div className=' border rounded-md border-black bg-white text-gray-400 pl-5 py-4'> Section Description</div>
            </div>
            <div className='flex space-x-4 justify-center mt-12 md:mb-3 md:mx-4'>
            
            <button className=' border rounded-md border-black md:text-xs bg-blue-800 text-white lg:px-5 lg:py-1'>
            + New Media
            </button>
            <button className=' border rounded-md border-black md:text-xs bg-blue-800 text-white lg:px-5 lg:py-1'>
            + New Media
            </button>
            <button className=' border rounded-md border-black md:text-xs bg-blue-800 text-white lg:px-5 lg:py-1'>
            + New Media
            </button>
            <button className=' border rounded-md border-black md:text-xs bg-blue-800 text-white lg:px-5 lg:py-1'>
            + New Media
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

          <div className='flex justify-end lg:space-x-10 md:space-x-8 lg:pr-16 md:mr-28 lg:pt-4  '>
            <button className='lg:mt-1 md:mt-2 text-sm font-semibold b'>
              Sign Out
            </button>

            <div className='  lg:text-4xl md:text-3xl md:mt-3 border-black rounded-full border-2 border-solid  '>
              <AiOutlineUser />
            </div>
          </div>


          <div className='flex mt-16 ml-5 md:mr-28 '>
            <div className=' font-semibold pt-1 text-lg '>
              Documents
            </div>

            <button className=' lg:ml-32 md:ml-10 bg-blue-700 text-white px-3 py-1  border rounded-lg '>
              Add
            </button>

          </div>

          <div className=' border-t  ml-5 lg:mr-12 md:mr-28 mt-6  py-5 '></div>



          <div className='flex border-2 ml-5 lg:mr-12 md:mr-28  py-2 rounded-t-md   '>
            <div className='text-sm lg:px-10 md:ml-3  font-semibol'>
              form_c.pdf
            </div>
            <button className='text-sm lg:mx-14  md:ml-12  font-bold text-blue-700 '>
              Remove
            </button>

          </div>

          <div className='flex border-2 ml-5 lg:mr-12 md:mr-28   py-2 rounded-b-md  '>
            <div className='text-sm lg:px-10 md:ml-3  font-semibold'>
              articles.pdf
            </div>
            <button className='text-sm lg:mx-14  md:ml-12  font-bold text-blue-700 '>
              Remove
            </button>
          </div>

        </div>

      </div>

    </div>
  )
}
