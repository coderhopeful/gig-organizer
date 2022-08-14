import axios from "axios"

export const axiosInstance = axios.create({

    baseURL:"https://gig-organizer.herokuapp.com/"
})