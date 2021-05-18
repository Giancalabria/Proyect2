import './cards.css'

export function Cards(props) {
	const priceQuantity = [...Array(props.price).keys()]

	return (
		<div className='cards'>
			<img className='image' src={props.photo} alt='Foto del hotel'></img>
			<h3 className='title-cards'>{props.name}</h3>
			<p className='text-cards'>{props.description}</p>
			<div className='location-div'>
				<img
					src='./images/location.svg'
					className='location-img'
					alt='Icono de localización'
				></img>
				<p className='extra-info location-text'>
					{props.city}, {props.country}
				</p>
			</div>
			<div className='room-div'>
				<img
					src='./images/room.svg'
					className='room-img'
					alt='Icono de un cuarto'
				></img>
				<p className='extra-info rooms-text'>{props.rooms}</p>
			</div>
			{priceQuantity.map((price, index) => (
				<img
					key={index}
					className='dolar-image'
					src='./images/dolar.svg'
					alt='Icono del simbolo peso'
				/>
			))}
			<button className='book' onClick={props.onBooked}>
				Reservá ahora
			</button>
		</div>
	)
}
