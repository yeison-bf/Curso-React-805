import axios from "axios"

export const CompanyServices = {

    async getAllData() {
        try {
            const response = await axios.get('http://localhost:3030/companies')
            return response.data
        } catch (error) {
            console.error(error)
        }
    },

     async postData(data) {
        try {
            const response = await axios.post('http://localhost:3030/companies', data)
            return response.data
        } catch (error) {
            console.error(error)
        }
    },

      async deleteData(id) {
        try {
            const response = await axios.delete('http://localhost:3030/companies'+id,)
            return response.data
        } catch (error) {
            console.error(error)
        }
    },


}