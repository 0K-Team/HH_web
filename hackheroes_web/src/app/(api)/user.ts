import {User} from "../types/user";
const baseUrl = 'https://ecoheroapi.q1000q.me/';

export const fetchLoggedUser = async () :Promise <User> =>{
    const response = await fetch(`${baseUrl}user/me`);
    return await response.json() as User;

}
