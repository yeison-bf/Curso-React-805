import axios from "axios"

export const AuhtLogin = async (user, password) => {
    const data = await axios.post('http://localhost:3030/login',
        {
            "email": user, 
            "password": password
        }
    )
    return data.data;
}
