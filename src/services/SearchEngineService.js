import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:808/';

class SearchEngineService {

    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }
}

export default new SearchEngineService();
