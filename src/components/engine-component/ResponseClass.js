import React, { Component } from "react";
import Header from './Header';

class ResponseClass extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

    render() {
        const {errors} = this.state;
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
                  </form>
                  </center>
                </div>
              </div>
            </div>
            );
        }
    }

    export default ResponseClass;
