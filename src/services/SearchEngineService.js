import axios from 'axios';

const URL = `http://localhost:8080/search`;

class SearchEngineService{
    response(search) {
        axios.body(search);
        return axios.get(URL);
      }
}

export default new SearchEngineService();
