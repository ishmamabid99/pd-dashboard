import { authAlova } from "..";

export const postSignin = () => authAlova.Post("/signin", {
    data:{
        username:"ishmam_101",
        password:"114353"
    }
});