import React from 'react'
import Link from "next/link";


const FileRequestForm = ({ type, request, setLog, submitting, handleSubmit}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="green_gradient">{type} File Request</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} for Files from the Registry when authorized to do so
      </p>

      <form 
      action=""
      onSubmit={handleSubmit}
      className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label htmlFor="">
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            File Number
          </span>
          <input 
          value={request.fileNo}
          onChange={(e) => setLog({ ...request, fileNo: e.target.value })}
          placeholder="example: p.12345"
          required
          className="form_input"/>
        </label>


        <label htmlFor="">
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            File Name
          </span>
          <input 
          value={request.fileName}
          onChange={(e) => setLog({ ...request, fileName: e.target.value })}
          placeholder="example: Oluwaseyi Owolabi"
          required
          className="form_input"/>
        </label>

        <label htmlFor="">
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Description
          </span>

          <textarea 
          value={request.description}
          onChange={(e) => setLog({ ...request, description: e.target.value })}
          placeholder="Document is needed for?..."
          required
          className="form_textarea"></textarea>
        </label>
        
       <div className='w-full flex gap-3'>
       <label htmlFor="" className='w-full'>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Requesting Officer's Rank
          </span>
          <select className='form_select'
          value={request.requestingOfficer}
          onChange={(e) => setLog({ ...request, whereFrom: e.target.value })}  
          >
            <option value="">Officer's Rank</option>
            <option value="DIR">DIRECTOR</option>
            <option value="DD">DEPUTY DIRECTOR</option>
            <option value="AD">ASSITANT DIRECTOR</option>
          </select>
        </label>
        <label htmlFor="" className="w-full">
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Department
          </span>
          <select className='form_select'
          value={request.whereFromDept}
          onChange={(e) => setLog({ ...request, whereFromDept: e.target.value })}  
          >
            <option value="">Select Department</option>
            <option value="POOL">POOL</option>
            <option value="HRM">HRM</option>
            <option value="PRS">PRS</option>
            <option value="PPRU">PPRU</option>
          </select>
        </label>
       </div>

       {/* <div className='w-full flex gap-3'>
       <label htmlFor="" className="w-full">
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Going To
          </span>
          <select className='form_select'
          value={request.goingTo}
          onChange={(e) => setLog({ ...request, goingTo: e.target.value })}  
          >
            <option value="">Select Receiving Officer</option>
          <option value="POOL">POOL</option>
            <option value="DIR">DIRECTOR</option>
            <option value="DD">DEPUTY DIRECTOR</option>
            <option value="AD">ASSITANT DIRECTOR</option>
          </select>
        </label>
        <label htmlFor="" className="w-full">
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Department
          </span>
          <select className='form_select'
          value={request.goingToDept}
          onChange={(e) => setLog({ ...request, goingToDept: e.target.value })}  
          >
            <option value="">Select Department</option>
          <option value="POOL">POOL</option>
            <option value="HRM">HRM</option>
            <option value="PRS">PRS</option>
            <option value="PPRU">PPRU</option>
          </select>
        </label>
       </div> */}


        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href='/' className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button 
          type='submit'
          disabled={submitting}
          className='px-5 py-1.5 text-sm bg-green-600 rounded-full text-white'
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default FileRequestForm