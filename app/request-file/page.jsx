'use client';

import {useState} from 'react';
import {useSession} from 'next-auth/react';
import {useRouter} from 'next/navigation';

import FileRequestForm from "@components/FileRequestForm";


const RequestFile = () => {
    const router = useRouter();
    const {data: session} = useSession();
    const [submitting, setSubmitting] = useState(false);
    const [request, setRequest] = useState({
        fileNo: '',
        fileName: '',
        title: '',
        type: '',
        description: '',
        whereFrom: '',
        whereFromDept: '',
        goingTo: '',
        goingToDept: '',
        
    })

    const createLog = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        console.log(request);

        try {
            const response = await fetch("/api/request/new", {
              method: "POST",
              body: JSON.stringify({
                userId: session?.user.id,
                fileNo: request.fileNo,
                fileName: request.fileName,
                title: request.title,
                type: request.type,
                description: request.description,
                whereFrom: request.whereFrom,
                whereFromDept: request.whereFromDept,
                goingTo: request.goingTo,
                goingToDept: request.goingToDept,
              }),
            });

            if(response.ok){
                router.push('/')
                console.log("Operation successful!")
            }
        } catch (error) {
            console.log(error);
        }
        finally{
            setSubmitting(false);
        }
    }


  return (
    <FileRequestForm
    type = "Request"
    request = {request}
    setRequest={setRequest}
    submitting={submitting}
    handleSubmit={createLog}
    />
  )
}

export default RequestFile