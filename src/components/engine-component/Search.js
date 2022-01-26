import useFetch from "./useFetch";
import ResponseClass from './ResponseClass';
import { useHistory, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";



const Search = (props) => {
  const location = useLocation();
  const { error, isPending, data: response } = useFetch('http://localhost:8080/' + location.state.search)

  return (
    <div className="search-area">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { response && <ResponseClass response={response} /> }
    </div>
  );
}

export default Search;