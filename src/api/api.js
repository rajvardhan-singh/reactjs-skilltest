import axios from 'axios'

// const url = ''

export const apiCall = async () => {
    try {
        const data = await axios.get(`https://reqres.in/api/users?page=1`)
        const nextData = await axios.get(`https://reqres.in/api/users?page=2`)

        return { firstData: data.data.data, nextData: nextData.data.data }
    } catch (error) {
        console.log("error while calling uploadFile api ", error.message);

    }
}