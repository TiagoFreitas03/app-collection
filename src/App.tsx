import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import { Bin2Dec } from './apps/Bin2Dec'
import { BorderRadiusPreviewer } from './apps/BorderRadiusPreviewer'
import { Calculator } from './apps/Calculator'
import { CauseEffect } from './apps/CauseEffect'
import { CountdownTimer } from './apps/CountdownTimer'
import { Csv2Json } from './apps/Csv2Json'
import { DollarsToCents } from './apps/DollarsToCents'

const Home = () => {
	return (
		<div>
			<Link to='/bin-2-dec'>Bin 2 Dec</Link>
			<Link to='/border-radius-previewer'>Border Radius Previewer</Link>
			<Link to='/calculator'>Calculator</Link>
			<Link to='/cause-effect'>Cause Effect</Link>
			<Link to='/countdown-timer'>Countdown Timer</Link>
			<Link to='/csv-2-json'>CSV 2 JSON</Link>
			<Link to='/dollars-to-cents'>Dollars To Cents</Link>
		</div>
	)
}

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/bin-2-dec' element={<Bin2Dec />} />
				<Route path='/border-radius-previewer' element={<BorderRadiusPreviewer />} />
				<Route path='/calculator' element={<Calculator />} />
				<Route path='/cause-effect' element={<CauseEffect />} />
				<Route path='/countdown-timer' element={<CountdownTimer />} />
				<Route path='/csv-2-json' element={<Csv2Json/>} />
				<Route path='/dollars-to-cents' element={<DollarsToCents/>} />				
			</Routes>
		</BrowserRouter>
	)
}