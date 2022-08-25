import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from 'components';
import { HomePage } from 'pages';

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<HomePage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
