import axios from "axios"


export const UserServices = {

    async getAllDataUser(){
        const response = await axios.get('http://localhost:3030/users/')
        return response.data
    },

    async getDataUserById(){

    }


}