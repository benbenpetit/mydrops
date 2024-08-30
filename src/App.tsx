import './App.scss'
import Star from './star'

function App() {
	return (
		<div className='grid'>
			<header>
				<h1>mydrops</h1>
				<Star />
			</header>
			<nav>
				<ul>
					<li>All</li>
					<li>Active</li>
					<li>Upcoming</li>
					<li>Closed</li>
					<div className='end'>
						<li className='search'>
							<div>
								<span>Search Airdrop</span>
							</div>
						</li>
						<li>
							<a href='#'>Login</a>
						</li>
					</div>
				</ul>
			</nav>
			<aside>
				<h3>Introduction</h3>
				<span>About Airdrops</span>
				<figure>
					<img src='arrows.svg' alt='Schéma' />
				</figure>
				<div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
						doloribus at adipisci similique? Porro beatae cum expedita totam
						nemo inventore.
					</p>
					<p>Lorem ipsum dolor sit amet consectetur.</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
						assumenda a magnam provident. Recusandae esse ipsam modi facilis,
						culpa itaque quos rerum. Natus reprehenderit molestiae omnis facilis
						rerum veritatis, nulla expedita placeat dolorum quis ipsum sit nam
						exercitationem? Officiis optio velit laborum.
					</p>
				</div>
			</aside>
			<main>
				<h3>How It Works</h3>
				<h1 title='Best platform for announcing airdrops'>
					<span>BEST PLATFORM</span>
					<span>FOR ANNOUNCING</span>
					<span>AIRDROPS</span>
				</h1>
				<a href='#'>Get Started</a>
			</main>
		</div>
	)
}

export default App
