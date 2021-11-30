import React, {useState, useEffect} from 'react';
import {List} from './List';
import {Alert} from './Alert';

const getLocalStorage = () => {
	let list = localStorage.getItem('list');
	if(list) {
		return JSON.parse(list);
	}
	return [];
}

function App() {
	const [name, setName] = useState('');
	const [list, setList] = useState(getLocalStorage());
	const [isEditing, setIsEditing] = useState(false);
	const [editId, setEditId] = useState(null);
	const [alert, setAlert] = useState({show: false, msg: '', type: ''});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name.trim()) {
			showAlert(true, 'danger', 'Please enter a value');
		} else if (name && isEditing) {
			setList(list.map((item) => {
				if (editId === item.id) {
					return {...item, title: name};
				}
				return item;
			}));
			setName('');
			setIsEditing(false);
			setEditId(null);
			showAlert(true, 'success', 'value change');
		} else {
			showAlert(true, 'success', 'Item added successfully');
			const newItem = {id: new Date().getTime().toString(), title: name};
			setList([...list, newItem]);
			setName('');
		}
	};

	const showAlert = (show = false, type = '', msg = '') => {
		setAlert({show, type, msg});
	};

	const clearList = () => {
		showAlert(true, 'danger', 'Empty list');
		setList([]);
	};

	const removeItem = (id) => {
		showAlert(true, 'danger', 'Item removed');
		const filteredList = list.filter(item => item.id !== id);
		setList(filteredList);
	};

	const editItem = (id) => {
		const specificId = list.find(item => item.id === id);
		setIsEditing(true);
		setEditId(id);
		setName(specificId.title);
	};

	useEffect(() => {
		localStorage.setItem('list', JSON.stringify(list));
	}, [list]);

	return (
		<section className="section-center">
			<form className="grocery-form" onSubmit={handleSubmit}>
				{alert.show && <Alert {...alert} list={list} removeAlert={showAlert}/>}
				<h3>Grocery bud</h3>
				<div className="form-control">
					<input type="text" className="grocery" placeholder="e.g eggs" value={name}
					       onChange={(e) => setName(e.target.value)}/>
					<button type="submit" className="submit-btn">
						{isEditing ? 'edit' : 'submit'}
					</button>
				</div>
			</form>
			{list.length > 0
			&&
			<div className="grocery-container">
				<List items={list} removeItem={removeItem} editItem={editItem}/>
				<button className="clear-btn" onClick={clearList}>
					clear items
				</button>
			</div>
			}
		</section>
	);
}

export default App;
