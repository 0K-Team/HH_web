import {User} from "../types/user";
const baseUrl = '/api/v1/';

export const fetchLoggedUser = async () :Promise <User> =>{
    const response = await fetch(`${baseUrl}user/me`);
    return await response.json() as User;
}
export const changeUsername = async (name: string) :Promise <User> =>{
    const response = await fetch(`${baseUrl}user/me/username/${name}`, {method: 'PATCH'});
    return await response.json() as User;
}

export const changeFirstName = async (name: string) :Promise <User> =>{
    const response = await fetch(`${baseUrl}user/me/firstName/${name}`, {method: 'PATCH'});
    return await response.json() as User;
}
export const changeLastName = async (name: string) :Promise <User> =>{
    const response = await fetch(`${baseUrl}user/me/lastName/${name}`, {method: 'PATCH'});
    return await response.json() as User;
}