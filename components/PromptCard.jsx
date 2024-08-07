'use client';

import { useState } from "react";
import {useSession} from 'next-auth/react'
import Image from 'next/image';
import { usePathname, useRouter } from "next/navigation";


const PromptCard = ({log, handleTagClick, handleEdit, handleDelete}) => {
  const {data: session} = useSession();
  const pathname = usePathname();

  // const [copied, setCopied] = useState("");

  // const handleCopy = () => {
  //   setCopied(log.prompt);
  //   navigator.clipboard.writeText(log.prompt);
  //   setTimeout(() => setCopied(""), 3000);
  // }
  
  return (
    <div className="prompt_card">
      <div className="flex items-start gap-5">
        <div className=" flex justify-start items-center gap-3 cursor-pointer">
        <Image
          src={log?.entryOperator.image}
          alt="user_image"
          width={40}
          height={40}
          className="rounded-full object-contain"
        />
        </div>
        <div className='flex flex-col'>
            <h3 className='font-satoshi font-semibold text-gray-900'>
              <span>
              {log?.entryOperator.username} 
              </span>
              <span> | </span>
              <span>
               {log?.entryOperator.fileNo}
              </span>
            </h3>
            <p className='font-inter text-sm text-gray-500'>
              {log?.entryOperator.email}
            </p>
        </div>


        {/* <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={copied === log.prompt
              ? '/assets/icons/tick.svg'
              : '/assets/icons/copy.svg'
            }
            width={12}
            height={12}
          />
        </div> */}
      </div>

      {/* <p className="my-2 font-satoshi texttext-sm text-gray-700"> 
        {log.fileNo}
      </p> */}
      <p className="my-2 font-satoshi text-sm text-gray-700"> 
        <span className="font-semibold">Title:</span> {log.title}
      </p>
      <p className="my-2 font-satoshi text-sm text-gray-700"> 
      <span className="font-semibold">Document type: </span> {log.type}
      </p>
      <p className="my-2 font-satoshi text-sm text-gray-700"> 
      <span className="font-semibold">Desc: </span> {log.description}
      </p>
      <p className="my-2 font-satoshi text-sm text-gray-700"> 
      <span className="font-semibold">Date: </span>
        {new Date(log.dateCreated).toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true
        })}
      </p>

      <p className="my-2 font-satoshi text-sm text-gray-700"> 
      <span className="font-semibold">Status: </span> 
      <span className={`px-2 text-sm rounded-md ${log.status === "Received" ? "bg-green-400" : log.status === "Unreceived" ? "bg-red-400" : "bg-yellow-400"}`}>{log.status}</span>
      </p>
      {/* <p className="font-inter text-sm blue_gradient cursor-pointer" 
      onClick={() => handleTagClick && handleTagClick(log.tag)}
      >
        #{log.tag}
      </p> */}



      {/* {
        session?.user.id === log.entryOperator._id && pathname === '/profile' && (
          <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
            <p className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}>
              Edit
            </p>  
            <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
            >Delete</p>
          </div>
        )
      } */}
      </div>
  )
}

export default PromptCard