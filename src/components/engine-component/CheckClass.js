import React from 'react';
import SearchEngineService from '../../services/SearchEngineService';

class CheckClass extends React.Component {

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

    render (){
        return (
            <div>
                <h1 className = "text-center"> Users List</h1>
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
                                     <td> {user.link}</td>

                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default CheckClass;
