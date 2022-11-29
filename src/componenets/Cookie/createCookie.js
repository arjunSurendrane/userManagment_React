import Cookie from "js-cookie";


const createCookie = (cookieName, token) => {
    Cookie.set(cookieName, token, {
        expires: 1,
        path: '/'
    })
}

export default createCookie