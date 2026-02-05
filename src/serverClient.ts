import { StreamChat } from "stream-chat";

export const apiKey = process.env.STREAM_API_KEY as string;
export const apiSecret = process.env.STREAM_API_SECRET as string;

if(!apiKey || !apiSecret){
    throw new Error("missing STREAM_API_KEY || STREAM_API_SECRET")
}

export const ServerClient = new StreamChat(apiKey, apiSecret)