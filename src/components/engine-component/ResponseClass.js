import React, { Component } from "react";
import Header from './Header';
import SearchEngineService from '../../services/SearchEngineService';

class ResponseClass extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      users:[]
    }
  }

  componentDidMount(){
      SearchEngineService.getUsers().then((response) => {
          this.setState({ users: response.data})
      });
  }


    render() {
        return (
          <div>
            <div className="outer-response">
              <div className="inner-response">
                <center>
                <form>
                  <input type="text" className="form-control" placeholder="write here.." required={true} name="username" required/>
                  <br/>
                  <button type="submit" className="search-property-response">Search</button> <br/><br/>
                  <h6> we found this on the server.... </h6>

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
                                  this.state.users.map(
                                      user =>
                                      <tr>
                                           <td> {user.title}</td>
                                           <td><a href= {user.link}  target="_blank">{user.link}</a></td>

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
    }

    export default ResponseClass;
