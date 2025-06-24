import axios from "axios"

export const CompanyServices = {

    async getAllData() {
        try {
            const response = await axios.get('http://localhost:3030/companies')
            return response.data
        } catch (error) {
            console.error(error)
        }

    }
}