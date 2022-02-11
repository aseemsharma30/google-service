import React from "react";
//import React, { Component } from "react";
//import useFetch from "./useFetch";
//import ResponseClass from './ResponseClass';
//import Search from './Search'
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Form,
  Container,
  Input,
  Label,
 } from "reactstrap";
//import Header from './Header';

const SearchEngine = () => {
  const [search, setSearch] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(search);
    history.push({
      pathname: '/search/' + search,
      state: { search: search }
    });
  }

  return (
    <div className="mx-auto">
        <div className="outer">
            <div className="inner">
              <Container className="text-center">
                <Form onSubmit={handleSubmit}>
                    <br/><br/><br/>
                    <h3>Welcome to Personalized Search Engine</h3>
                    <div className="form-group">
                        <br/><br/>
                        <Label>Search your Query</Label>
                        <br/><br/>
                          <Input
        										bsSize="sm"
        										type="search"
        										placeholder="Search..."
        										value={search}
        										onChange={(e) => setSearch(e.target.value)}
        										name="search"
        										required/>
                        <br/>
                        <Button color="primary" size="sm" type="submit" className="search-property">Search</Button>
                      </div>
                      <br/>
                  </Form>
                </Container>

                </div>
              </div>
            </div>
            );
        }



    export default SearchEngine;
