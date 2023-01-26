import axios from "axios";
import { URL, URL_SIGNIN } from "../globalconsts";

export const updateUsers = async (result) => {
    try {
        await axios.patch(URL, result);
    } catch (error) {
        console.log(error);
    }
}

export const deleteUsers = async (ids) => {
    try {
        await axios.delete(URL, {data: ids});
    } catch (error) {
        console.log(error);
    }
}

export const signIn = async (name, password) => {
    try {
        const user = await axios.post(URL_SIGNIN, {
            name, password
        });
        return user.data;
    } catch (error) {
        console.log(error);
    }
}