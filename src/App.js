import './App.css'
import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'
import { Filter } from './components/filter/filter'
import { hotelsData } from './components/data/data'
import { useState } from 'react'
import { Results } from './components/results/results'
import React from 'react'

function App() {
	const [country, setCountry] = useState('select')
	const handleCountry = (e) => setCountry(e.target.value)
	const [size, setSize] = useState('select')
	const handleSize = (e) => setSize(e.target.value)
	const [price, setPrice] = useState('select')
	const handlePrice = (e) => setPrice(e.target.value)
	const newHotelsData = hotelsData.filter((hotel) => {
		return (
			(country === 'todos' || country === 'select'
				? true
				: country === hotel.country) &&
			(size === 'todos' || size === 'select'
				? true
				: size === 'chico'
				? hotel.rooms < 11
				: size === 'mediano'
				? hotel.rooms > 10 && hotel.rooms < 21
				: hotel.rooms > 20) &&
			(price === 'todos' || price === 'select' ? true : price == hotel.price)
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
				<Results newHotelsData={newHotelsData} price={price} />
			</div>
			<Footer />
		</div>
	)
}

export default App
