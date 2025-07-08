import axios from "axios";

export async function getDataUsers() {
    const response = await axios.get('http://localhost:3030/users');
    return response.data
}
