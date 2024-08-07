import {connectToDB} from '@utils/database';
import Log from '@models/log';

export const GET = async (request) => {

    try {
        await connectToDB();

        const logs = await Log.find().populate('entryOperator');

        return new Response(JSON.stringify(logs), {status: 200})
    } catch (error) {
        console.log(error);
        return new Response(`Could not find all Logs: ${error}`, {status: 500})
    }
}