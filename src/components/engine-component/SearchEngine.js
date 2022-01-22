import React, { Component } from "react";
import Header from './Header';
import SearchEngineService from '../../services/SearchEngineService';


class SearchEngine extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  response = (e) => {
    e.preventDefault();
      SearchEngineService.response(this.state.search).then(
        (res) => {
          this.setState({ loginres: res.data });
          this.props.history.push('/response');
        }
      );
    };

    responseMock = (event) => {
      event.preventDefault();
      this.props.history.push("/response");
    };

    render() {
        const {errors} = this.state;
        const { search } = this.state

        return (
          <div>
            <div className="outer">
              <div className="inner">
                <center>
                <form onSubmit={this.submitHandler} noValidate>
                  <br/><br/><br/>
                  <h3>Welcome to Personalized Search Engine</h3>
                    <div className="form-group">
                      <br/><br/>
                      <label>Search your Query</label>
                      <br/><br/>
                      <input type="text" className="form-control" placeholder="write here.." required={true} name="search" required/>
                      <br/>
                      <button type="submit" className="search-property" onClick={this.responseMock}>Search</button>
                    </div>
                    <br/>
                  </form>
                  </center>
                </div>
              </div>
            </div>
            );
        }
    }

    export default SearchEngine;
