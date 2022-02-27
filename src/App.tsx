import React from 'react';
import './App.css';
import { Card, CardVariant } from './components/Card';

function App() {
	return (
		<div>
			<Card
				height='200px'
				width='200px'
				variant={CardVariant.outlined}
				onClick={(num: number) => console.log("Button was clicked!", num)}
			>
				<button>Button</button>
			</Card>
		</div>
	);
}

export default App;
