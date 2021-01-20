
import axios from 'axios'

const BASER_URL = process.env.REACT_APP_URL_API

class toolService {

    static url = `${BASER_URL}/tool`
    
    static async getTools () {

        try {
            
            const {data} = await axios.get(toolService.url)
            return data

        } catch (error) {
            console.log(error);
        }

    }
}

export default toolService