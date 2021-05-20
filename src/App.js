import './App.css'
import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'
import { Filter } from './components/filter/filter'
import { hotelsData } from './components/data/data'
import { useEffect, useState } from 'react'
import { Results } from './components/results/results'
import React from 'react'

function App() {
	const [country, setCountry] = useState('select')
	const [size, setSize] = useState('select')
	const [price, setPrice] = useState('select')
	const [dateFrom, setDateFrom] = useState('')
	const [dateTo, setDateTo] = useState('')
	const [filteredHotels, setFilteredHotels] = useState([])
	const handlerCountry = (e) => setCountry(e.target.value)
	const handlerSize = (e) => setSize(e.target.value)
	const handlerPrice = (e) => setPrice(e.target.value)

	function todayDate() {
		let d = new Date(),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear()

		if (month.length < 2) month = '0' + month
		if (day.length < 2) day = '0' + day

		return [year, month, day].join('-')
	}

	const handlerDateFrom = (e) => {
		if (new Date(e.target.value) < new Date(todayDate())) {
			alert(`La fecha seleccionada no puede ser anterior al ${todayDate()}`)
		} else {
			setDateFrom(e.target.value)
		}
	}

	const handlerDateTo = (e) => {
		if (new Date(e.target.value) >= new Date(dateFrom)) {
			setDateTo(e.target.value)
		} else {
			alert(`La fecha seleccionada no puede ser anterior al ${dateFrom}`)
		}
	}

	useEffect(() => {
		const countryFilter = (hotel) => {
			return country === 'todos' || country === 'select'
				? true
				: country === hotel.country
		}
		const sizeFilter = (hotel) => {
			return size === 'todos' || size === 'select'
				? true
				: size === 'chico'
				? hotel.rooms < 11
				: size === 'mediano'
				? hotel.rooms > 10 && hotel.rooms < 21
				: hotel.rooms > 20
		}
		const priceFilter = (hotel) => {
			return price === 'todos' || price === 'select'
				? true
				: parseInt(price, 0) === hotel.price
		}
		const dateFilter = (hotel) => {
			return !dateFrom || !dateTo
				? true
				: hotel.availabilityFrom <= new Date(dateFrom).valueOf() &&
						hotel.availabilityTo >= new Date(dateFrom).valueOf() &&
						hotel.availabilityFrom <= new Date(dateTo).valueOf() &&
						hotel.availabilityTo >= new Date(dateTo).valueOf()
		}
		const filteredHotels = hotelsData.filter((hotel) => {
			return (
				countryFilter(hotel) &&
				priceFilter(hotel) &&
				sizeFilter(hotel) &&
				dateFilter(hotel)
			)
		})
		setFilteredHotels(filteredHotels)
	}, [price, country, size, dateFrom, dateTo])

	const resetFilters = () => {
		setCountry('select')
		setPrice('select')
		setSize('select')
		setDateFrom('')
		setDateTo('')
	}

	return (
		<div>
			<Header
				dateFrom={dateFrom}
				dateTo={dateTo}
				size={size}
				price={price}
				country={country}
			/>
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
				<Results filteredHotels={filteredHotels} price={price} />
			</div>
			<Footer />
		</div>
	)
}

export default App
