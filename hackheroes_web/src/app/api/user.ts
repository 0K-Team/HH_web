import {User} from "../types/user";
const baseUrl = '/api/v1/';

export const fetchLoggedUser = async () :Promise <User> =>{
    const response = await fetch(`${baseUrl}user/me`);
    return await response.json() as User;
}
export const changeUsername = async (name: string) :Promise <User> =>{
    const response = await fetch(`${baseUrl}user/me/username`, {method: 'PATCH', body: JSON.stringify({ username: name })});
    return await response.json() as User;
}

export const changeFirstName = async (name: string) :Promise <User> =>{
    const response = await fetch(`${baseUrl}user/me/firstName`, {method: 'PATCH', body: JSON.stringify({ firstName: name })});
    return await response.json() as User;
}
export const changeLastName = async (name: string) :Promise <User> =>{
    const response = await fetch(`${baseUrl}user/me/lastName`, {method: 'PATCH', body: JSON.stringify({ lastName: name })});
    return await response.json() as User;
}
export const changeLocation = async (name: string) :Promise <User> =>{
    const response = await fetch(`${baseUrl}user/me/location`, {method: 'PATCH', body: JSON.stringify({ location: name })});
    return await response.json() as User;
}
