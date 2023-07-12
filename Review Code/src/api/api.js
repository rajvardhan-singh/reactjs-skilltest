import axios from 'axios'

// const url = ''

export const apiCall = async (randomPageNumber) => {
    try {
        const data = await axios.get(`https://reqres.in/api/users?page=${randomPageNumber}`)
        return { data: data.data.data }
    } catch (error) {
        console.log("error while calling uploadFile api ", error.message);

    }
}