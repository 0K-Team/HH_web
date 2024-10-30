import {User} from "../types/user";
const baseUrl = '/v1/';

export const fetchLoggedUser = async () :Promise <User> =>{
    const response = await fetch(`${baseUrl}user/me`);
    return await response.json() as User;

}
