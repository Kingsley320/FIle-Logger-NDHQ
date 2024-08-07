import {connectToDB} from '@utils/database';
import Log from '@models/log'

export const POST = async (req) => {
    const {userId, title, type, description, whereFrom, whereFromDept,goingTo, goingToDept,} = await req.json();

    try {
        await connectToDB();   
        const newLog = new Log({ 
            entryOperator: userId,
            // fileNo,
            // fileName,
            title,
            type,
            description,
            whereFrom,
            whereFromDept,
            goingTo,
            goingToDept,
        })
        console.log(newLog);
        await newLog.save();
        return new Response(JSON.stringify(newLog), {status: 201})
    } catch (error) {
        console.log(error)
        return new Response("Failed to create a new Prompt", {status:500})
    }
}