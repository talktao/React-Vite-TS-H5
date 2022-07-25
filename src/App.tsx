import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { routes } from './router';

function App() {

	return (
		<Suspense fallback={<div />} >
			<BrowserRouter >
				<Routes>
					<Route path='/' element={<Navigate to='/home' />} />
					{routes.map((item: any) => <Route key={item.path} path={item.path} element={<item.component />} />)}
				</Routes>
			</BrowserRouter>
		</Suspense>
	);
}

export default App;
