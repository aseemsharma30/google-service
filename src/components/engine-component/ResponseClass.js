import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Header from './Header';
//import SearchEngineService from '../../services/SearchEngineService';
//import useFetch from "./useFetch";
import { Form, FormGroup, Input, Button, Container } from "reactstrap"
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
		<div className="mx-auto">
			<div className="outer-response">
				<div className="inner-response" className="text-center">
					<Form onSubmit={handleSubmit}>
						<Container>
							<FormGroup>
								<div>
									<Input
										bsSize="sm"
										type="search"
										placeholder="Search..."
										value={search}
										onChange={(e) => setSearch(e.target.value)}
										name="search"
										required/>
								</div>
								</FormGroup>
								<br/>
								<Button color="primary" type="submit" className="search-property-response">Search</Button>

						 <br/><br/><br/><br/>
							<h6> We found this on the server for {location.state.search}</h6>
							<br/><br/>
							<div>
								<table className = "table table-striped">
									<thead>
										<tr>
											<td> Title </td>
											<td> Link </td>
										</tr>
									</thead>
									<tbody>
										{
											response.map(
												request =>
												<tr>
													<td>
														{request.title}
													</td>
													<td>
														<a href= {request.link} rel="noopener noreferrer" target="_blank">
															{request.link}
														</a>
													</td>
												</tr>
											)
										}
										</tbody>
									</table>
								</div>
								</Container>
						</Form>
					</div>
				</div>
			</div>
		);
	}
	export default ResponseClass;
