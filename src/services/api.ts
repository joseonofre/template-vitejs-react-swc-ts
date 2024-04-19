import axios from "axios";

const fetcher = (url: string) => axios.get(`${import.meta.env.VITE_API}${url}`).then(res => res.data)

export default fetcher;