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
	const [size, setSize] = useState('select')
	const [price, setPrice] = useState('select')
	const [dateFrom, setDateFrom] = useState('')
	const [dateTo, setDateTo] = useState('')
	const handlerCountry = (e) => setCountry(e.target.value)
	const handlerSize = (e) => setSize(e.target.value)
	const handlerPrice = (e) => setPrice(e.target.value)
	const handlerDateFrom = (e) => setDateFrom(e.target.value)
	const handlerDateTo = (e) => setDateTo(e.target.value)

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
			(price === 'todos' || price === 'select'
				? true
				: parseInt(price, 0) === hotel.price)
		)
	})

	const disponibilidad = []
	newHotelsData.map((hotel) =>
		disponibilidad.push({
			'nombre:': hotel.name,
			'desde:': new Date(hotel.availabilityFrom),
			'hasta:': new Date(hotel.availabilityTo),
		})
	)
	console.table(disponibilidad)
	const resetFilters = () => {
		setCountry('select')
		setPrice('select')
		setSize('select')
	}
	return (
		<div>
			<Header dateFrom={dateFrom} />
			<Filter
				country={country}
				handlerCountry={handlerCountry}
				size={size}
				handlerSize={handlerSize}
				price={price}
				handlerPrice={handlerPrice}
				dateFrom={dateFrom}
				handlerDateFrom={handlerDateFrom}
				dateTo={dateTo}
				handlerDateTo={handlerDateTo}
				resetFilters={resetFilters}
			/>
			<div className='hoteles'>
				<Results newHotelsData={newHotelsData} price={price} />
			</div>
			<Footer />
		</div>
	)
}

export default App
