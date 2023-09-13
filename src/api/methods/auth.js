import { authAxios } from "..";

export const userSignin = async (data) => {
    try {
        const { username, password } = { ...data }
        authAxios.post('/signin', {
            username,
            password
        })
    }
    catch (err) {
        console.log(err)
    }
}
export const userRegistration = async (data) => {
    try {
        const { username, email, password } = { ...data }
        const res = await authAxios.post("/signup", {
            username,
            email,
            password
        })
        console.log(res.status)
    }
    catch (err) {
        console.log(err)
    }
}
export const userLogout = async () => {
    try {
        const res = await authAxios.post("/logout")
        console.log(res)
    }
    catch (err) {
        console.log(err);
    }
}
export const userRefreshToken = async (token) => {
    try {
        const res = await authAxios.post("/refreshtoken",{
            refreshToken:token
        })
        console.log(res)
    }
    catch (err) {
        console.log(err)
    }
}