import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Employee from '@models/employee';

import { connectToDB } from '@utils/database';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {

        async session({session}) {
            const sessionUser = await Employee.findOne({
                email: session.user.email
            })

            session.user.id = sessionUser._id.toString()
            
            return session;
        },
        async signIn({profile}){
            try {
                // serverless -> lambda -> dynamodb
                await connectToDB();
                console.log(profile);
                /// check uf a user already exist
                const employeeExists = await Employee.findOne({
                    email: profile.email
                });
                //else create a new user
                if(!employeeExists){
                    await Employee.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture
                        
                    })
                }
                
                return true;
            } catch (error) {
                console.log(`Error checking if user exists, ${error}`);
                return false;
            }
        },
    }
})

export {handler as GET, handler as POST};