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
	const handlerCountry = (e) => setCountry(e.target.value)
	const [size, setSize] = useState('select')
	const handlerSize = (e) => setSize(e.target.value)
	const [price, setPrice] = useState('select')
	const handlerPrice = (e) => setPrice(e.target.value)
	const [dateFrom, setDateFrom] = useState('')
	const handlerDateFrom = (e) => {
		console.log(new Date(e.target.value + ' 00:00'))
		if (
			new Date(e.target.value + ' 00:00') < new Date(dateFrom + ' 00:00') ||
			new Date(dateFrom + ' 00:00') > new Date(dateTo + ' 00:00')
		) {
			alert('La fecha seleccionada es invalida, intentelo nuevamente')
		} else {
			setDateFrom(e.target.value)
		}
	}
	const [dateTo, setDateTo] = useState('')
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

	return (
		<div>
			<Header />
			<Filter
				country={country}
				handlerCountry={handlerCountry}
				size={size}
				handlerSize={handlerSize}
				price={price}
				handlerPrice={handlerPrice}
				dateFrom={dateFrom}
				handlerDateFrom={handlerDateFrom}
			/>
			<div className='hoteles'>
				<Results newHotelsData={newHotelsData} price={price} />
			</div>
			<Footer />
		</div>
	)
}

export default App
