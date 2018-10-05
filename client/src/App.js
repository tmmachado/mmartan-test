import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Subheader from './components/subheader/subheader';
import Main from './components/main/main';

class App extends Component {

	state = {
		search: ''
	}

	handleSearchChange = (event) => {
		this.setState({ search: event.target.value });
	};

	render() {
		return (
			<div className="App">
				<Header searchChanged={(event) => this.handleSearchChange} />
				<Subheader searchTerm={this.state.search} />
				<Main searchTerm={this.state.search} />
			</div>
		);
	}
}

export default App;
