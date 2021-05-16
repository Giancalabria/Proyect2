import './App.css'
import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'
import { Filter } from './components/filter/filter'
import { hotelsData } from './components/data/data'
import { useState } from 'react'
import { Results } from './components/results/results'
import React from 'react'

function App() {
	const [country, setCountry] = useState('Todos')
	const handleCountry = (e) => setCountry(e.target.value)
	const [size, setSize] = useState('Todos')
	const handleSize = (e) => setSize(e.target.value)
	const [price, setPrice] = useState('Todos')
	const handlePrice = (e) => setPrice(e.target.value)
	const newHotelsData = hotelsData.filter((hotel) => {
		return (
			(country === 'Todos' ? true : country === hotel.country) &&
			(size === 'Todos'
				? true
				: size === 'Chico'
				? hotel.rooms < 11
				: size === 'Mediano'
				? hotel.rooms > 10 && hotel.rooms < 21
				: hotel.rooms > 20) &&
			(price === 'Todos' ? true : price == hotel.price)
		)
	})

	return (
		<div>
			<Header />
			<Filter
				country={country}
				handleCountry={handleCountry}
				size={size}
				handleSize={handleSize}
				price={price}
				handlePrice={handlePrice}
			/>
			<div className='hoteles'>
				<Results newHotelsData={newHotelsData} />
			</div>
			<Footer />
		</div>
	)
}

export default App
