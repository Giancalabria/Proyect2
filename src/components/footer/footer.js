import './footer.css'

export function Footer() {
	return (
		<footer className='footer'>
			<div className='icons-div'>
				<a href='https://www.spotify.com' target='_blank'>
					<i className='fab fa-spotify icons'></i>
				</a>
				<a href='https://www.instagram.com/' target='_blank'>
					<i className='fab fa-instagram icons'></i>
				</a>
				<a href='https://twitter.com/' target='_blank'>
					<i className='fab fa-twitter icons'></i>
				</a>
				<a href='https://www.facebook.com/' target='_blank'>
					<i className='fab fa-facebook icons'></i>
				</a>
				<a href='https://web.telegram.org/' target='_blank'>
					<i className='fab fa-telegram icons'></i>
				</a>
			</div>
		</footer>
	)
}
