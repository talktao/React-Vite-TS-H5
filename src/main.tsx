import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'mobx-react';
import './index.css';
import 'lib-flexible/flexible';
import store from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider {...store}>
			<App />
		</Provider>
	</React.StrictMode>
);
