import axios from "axios"


export const UserServices = {

    async getAllDataUser() {
        try {
            const response = await axios.get('http://localhost:3030/users/')
            return response.data
        } catch (error) {
            console.error(error)
        }

    },

    async saveDataUser(data) {
        try {
            const response = await axios.post('http://localhost:3030/users/', data)
            return response.data
        } catch (error) {
            console.error(error)
        }
    },

    async deleteUser(id) {
        try {
            const response = await axios.delete('http://localhost:3030/users/' + id,)
            return response.data
        } catch (error) {
            console.error(error)
        }

    }


}