import React, { Component } from "react";
import useFetch from "./useFetch";
import ResponseClass from './ResponseClass';
import Search from './Search'

import { useState } from "react";
import { useHistory } from "react-router-dom";

import Header from './Header';

const SearchEngine = () => {
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
        <div className="outer">
            <div className="inner">
                <center>
                <form onSubmit={handleSubmit}>
                    <br/><br/><br/>
                    <h3>Welcome to Personalized Search Engine</h3>
                    <div className="form-group">
                        <br/><br/>
                        <label>Search your Query</label>
                        <br/><br/>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="write here.."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            name="search"
                            required/>
                        <br/>
                        <button type="submit" className="search-property">Search</button>
                      </div>
                      <br/>
                  </form>
                  </center>
                </div>
              </div>
            </div>
            );
        }



    export default SearchEngine;
