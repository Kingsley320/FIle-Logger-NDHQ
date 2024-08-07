import React from 'react'
import Link from "next/link";


const Form = ({ type, log, setLog, submitting, handleSubmit}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} File Movement</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and keep track of documents in the department, this helps with accurate record keeping and swift reovery of files
      </p>

      <form 
      action=""
      onSubmit={handleSubmit}
      className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        {/* <label htmlFor="">
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            File Number
          </span>
          <input 
          value={log.fileNo}
          onChange={(e) => setLog({ ...log, fileNo: e.target.value })}
          placeholder="example: p.12345"
          required
          className="form_input"/>
        </label> */}

        <label htmlFor="">
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Title
          </span>
          <input 
          value={log.title}
          onChange={(e) => setLog({ ...log, title: e.target.value })}
          placeholder="example: File for John Doe, p.1234"
          required
          className="form_input"/>
        </label>

        {/* <label htmlFor="">
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            File Name
          </span>
          <input 
          value={log.fileName}
          onChange={(e) => setLog({ ...log, fileName: e.target.value })}
          placeholder="example: Oluwaseyi Owolabi"
          required
          className="form_input"/>
        </label> */}

        <label htmlFor="">
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Type
          </span>
          <select className='form_select'
          value={log.type}
          onChange={(e) => setLog({ ...log, type: e.target.value })}  
          >
            <option value="">Select Document Type</option>
            <option value="FILE">FILE</option>
            <option value="MAIL">MAIL</option>
          </select>
        </label>

        <label htmlFor="">
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Description
          </span>

          <textarea 
          value={log.description}
          onChange={(e) => setLog({ ...log, description: e.target.value })}
          placeholder="Document is needed for?..."
          required
          className="form_textarea"></textarea>
        </label>
        
       <div className='w-full flex gap-3'>
       <label htmlFor="" className='w-full'>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Coming From
          </span>
          <select className='form_select'
          value={log.whereFrom}
          onChange={(e) => setLog({ ...log, whereFrom: e.target.value })}  
          >
            <option value="">Select Sending Officer</option>
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
          value={log.whereFromDept}
          onChange={(e) => setLog({ ...log, whereFromDept: e.target.value })}  
          >
            <option value="">Select Department</option>
            <option value="POOL">POOL</option>
            <option value="HRM">HRM</option>
            <option value="PRS">PRS</option>
            <option value="PPRU">PPRU</option>
          </select>
        </label>
       </div>

       <div className='w-full flex gap-3'>
       <label htmlFor="" className="w-full">
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Going To
          </span>
          <select className='form_select'
          value={log.goingTo}
          onChange={(e) => setLog({ ...log, goingTo: e.target.value })}  
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
          value={log.goingToDept}
          onChange={(e) => setLog({ ...log, goingToDept: e.target.value })}  
          >
            <option value="">Select Department</option>
          <option value="POOL">POOL</option>
            <option value="HRM">HRM</option>
            <option value="PRS">PRS</option>
            <option value="PPRU">PPRU</option>
          </select>
        </label>
       </div>


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

export default Form