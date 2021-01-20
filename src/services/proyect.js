import axios from 'axios'


const BASE_URL = process.env.REACT_APP_URL_API
class productService {

    static url = `${BASE_URL}/proyect`

    static async getProyect () {
       
        try {
            const {data} = await axios.get(productService.url) 
            return data
        } catch (error) {
            console.log(error);
        }
    }
}

export default productService