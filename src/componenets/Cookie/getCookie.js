import Cookie from "js-cookie";

const cookies = (name) => {
    return Cookie.get(name)
}
export default cookies