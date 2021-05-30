import './App.css'
import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'
import { Filter } from './components/filter/filter'
import { hotelsData } from './data/data'
import { useEffect, useState } from 'react'
import { Results } from './components/results/results'
import { stringToUnixDate, stringToday } from './utils/date'
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

	const handlerDateFrom = (e) => {
		switch (true) {
			case stringToUnixDate(e.target.value) <
				new Date().setHours(0, 0, 0, 0, 0):
				alert(`La fecha seleccionada no puede ser anterior al ${stringToday()}`)
				break
			case stringToUnixDate(e.target.value) > stringToUnixDate(dateTo):
				setDateTo('')
				setDateFrom(e.target.value)
				break
			default:
				setDateFrom(e.target.value)
				break
		}
	}

	const handlerDateTo = (e) => {
		switch (true) {
			case stringToUnixDate(e.target.value) >= stringToUnixDate(dateFrom):
				setDateTo(e.target.value)
				break
			case dateFrom === '':
				alert('Debe ingresar una fecha de llegada primero')
				break
			case stringToUnixDate(e.target.value) < stringToUnixDate(dateFrom):
				alert(`La fecha seleccionada no puede ser anterior al ${dateFrom}`)
				break
			default:
				break
		}
	}

	useEffect(() => {
		const countryFilter = (hotel) => {
			return country === 'todos' || country === 'select'
				? true
				: country === hotel.country
		}

		const sizeFilter = (hotel) => {
			switch (size) {
				case 'todos':
				case 'select':
					return true
				case 'chico':
					return hotel.rooms < 11
				case 'mediano':
					return hotel.rooms > 10 && hotel.rooms < 21
				case 'grande':
					return hotel.rooms > 20
				default:
					return true
			}
		}
		const priceFilter = (hotel) => {
			return price === 'todos' || price === 'select'
				? true
				: parseInt(price, 0) === hotel.price
		}
		const dateFilter = (hotel) => {
			return !dateFrom || !dateTo
				? true
				: stringToUnixDate(dateFrom) >= hotel.availabilityFrom &&
						stringToUnixDate(dateTo) <= hotel.availabilityTo
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
		<main id='App'>
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
			<section className='hoteles'>
				<Results filteredHotels={filteredHotels} price={price} />
			</section>
			<Footer />
		</main>
	)
}

export default App
