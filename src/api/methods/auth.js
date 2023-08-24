import { authAlova } from "..";

export const getData = () => authAlova.POST("/signin",{
    username:"ishmam_101",
    password:"114354"
})