import React, { Component } from "react";
import Header from './Header';
import SearchEngineService from '../../services/SearchEngineService';
import useFetch from "./useFetch";

import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";


const ResponseClass = ({ response }) => {
  const location = useLocation();
  const [search, setSearch] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(search);

    history.push({
      pathname: '/search',
      state: { search: search }
    });
  }

  return (
    <div>
      <div className="outer-response">
        <div className="inner-response">
          <center>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder={location.state.search}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              name="search"
              required/>

            <br/>
            <button type="submit" className="search-property-response">Search</button> <br/><br/><br/><br/>
            <h6> we found this on the server for {location.state.search}</h6>
            <br/><br/>
            <div>
              <table className = "table table-striped">
                <thead>
                  <tr>
                    <td> Title</td>
                    <td> Link</td>
                  </tr>
                </thead>
                <tbody>
                  {
                    response.map(
                                 request =>
                                           <tr>
                                            <td> {request.title}</td>
                                            <td><a href= {request.link}  target="_blank">{request.link}</a></td>
                                          </tr>
                                )
                    }

                  </tbody>
                </table>
              </div>
            </form>
            </center>
          </div>
        </div>
      </div>
    );
  }
  export default ResponseClass;
