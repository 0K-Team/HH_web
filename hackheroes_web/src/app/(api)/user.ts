import {User} from "../types/user";
const baseUrl = 'https://ecohero.q1000q.me/api/';

export const fetchLoggedUser = async () :Promise <User> =>{
    const response = await fetch(`${baseUrl}user/me`);
    return await response.json() as User;

}
