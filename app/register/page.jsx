'use client';

import {useState} from 'react';
import {useSession} from 'next-auth/react';
import {useRouter} from 'next/navigation';

import Form from '@components/Form';

const createLog = () => {
    const router = useRouter();
    const {data: session} = useSession();
    const [submitting, setSubmitting] = useState(false);
    const [log, setLog] = useState({
        // fileNo: '',
        // fileName: '',
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

        console.log(log);

        try {
            const response = await fetch("/api/log/new", {
              method: "POST",
              body: JSON.stringify({
                userId: session?.user.id,
                // fileNo: log.fileNo,
                // fileName: log.fileName,
                title: log.title,
                type: log.type,
                description: log.description,
                whereFrom: log.whereFrom,
                whereFromDept: log.whereFromDept,
                goingTo: log.goingTo,
                goingToDept: log.goingToDept,
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
    <Form
    type = "Register"
    log = {log}
    setLog={setLog}
    submitting={submitting}
    handleSubmit={createLog}
    />
  )
}

export default createLog