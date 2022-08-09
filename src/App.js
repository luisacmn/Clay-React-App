import React, {useEffect, useState} from 'react';
import {getUsers} from './request';
import AddUserForm from './AddUserForm';
import Table from './component/Table';

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getUsers().then(res => {
			setUsers(res.items);
		})
	}, []);

	return (
		<div className="row">
			<div className="col-4">
				<AddUserForm />
			</div>	
			<div className="col-8">
				<h1>Users:</h1>
				<Table users={users}/>
			</div>
		</div>
	);
}

export default App;

