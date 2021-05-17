import './cards.css'

export function Cards(props) {
	function priceCalculator() {
		for (let i = 0; i === props.price; i++) {
			return (
				<div>
					<img className='dolar-img' src='./images/price.svg' />
				</div>
			)
		}
	}
	function booked() {
		alert(` El hotel "${props.name}" se ha reservado satisfactoriamente`)
	}
	return (
		<div className='cards'>
			<img className='image' src={props.photo} alt='Foto del hotel'></img>
			<h3 className='title-cards'>{props.name}</h3>
			<p className='text-cards'>{props.description}</p>
			<div className='location-div'>
				<img src='./images/location.svg' className='location-img'></img>
				<p className='extra-info location-text'>
					{props.city}, {props.country}
				</p>
			</div>
			<div className='room-div'>
				<img src='./images/room.svg' className='room-img'></img>
				<p className='extra-info rooms-text'>{props.rooms}</p>
				<div>{priceCalculator()}</div>
			</div>
			<button className='book' onClick={booked}>
				Reservá ahora
			</button>
		</div>
	)
}
