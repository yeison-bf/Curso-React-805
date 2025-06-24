import axios from "axios"

export const RolesServices = {

    async getAllData() {
        try {
            const response = await axios.get('http://localhost:3030/roles')
            return response.data
        } catch (error) {
            console.error(error)
        }

    }
}