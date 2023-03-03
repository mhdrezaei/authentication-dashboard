import axios from 'axios'

//interface for the Helper
interface Params {
        baseUrl: string
    headers : any
    method: string
}

//helper config
const config: Params = {
    baseUrl: "https://jsonplaceholder.typicode.com/",
    headers: {
        "Authorization": "",
            },
    method: 'post'
}

const postConfig: Params = {
    baseUrl: "https://jsonplaceholder.typicode.com/",
    headers: {
                "Authorization": "" 
            },
    method: 'post'
}

//helper function to be exported
export  const postAPI = async (url: string, data: any): Promise<any> =>{
    return await axios({
        ...postConfig,
        url: `${postConfig.baseUrl}/${url}`,
        data
    }).then ( (response) => {
        console.log(response)
        return {
            status: response.status,
            data: response.data
        }
    }).catch((error) =>{
        console.log(error)
        return {
            status: error.status,
            data: error.response
        }
    })
}