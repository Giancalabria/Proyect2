import styles from './cards.module.scss'

export function Cards(props) {
	const priceQuantity = [...Array(props.price).keys()]

	return (
		<article className={styles.cards}>
			<img
				className={styles.image}
				src={props.photo}
				alt='Foto del hotel'
			></img>
			<h3 className={styles.title}>{props.name}</h3>
			<p className={styles.text}>{props.description}</p>
			<div className={styles.location}>
				<img
					src='./images/location.svg'
					className={styles.location_image}
					alt='Icono de localización'
				></img>
				<p className={styles.extra_info}>
					{props.city}, {props.country}
				</p>
			</div>
			<div className={styles.room}>
				<img
					src='./images/room.svg'
					className={styles.room_image}
					alt='Icono de un cuarto'
				></img>
				<p className={styles.extra_info}>{props.rooms}</p>
			</div>
			<div className={styles.dolar}>
				{priceQuantity.map((index) => (
					<img
						key={index}
						className={styles.dolar_image}
						src='./images/dolar.svg'
						alt='Icono del simbolo peso'
					/>
				))}
			</div>
			<button className={styles.book} onClick={props.onBooked}>
				Reservá ahora
			</button>
		</article>
	)
}
