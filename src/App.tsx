import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './Home'

import { Bin2Dec } from './apps/Bin2Dec'
import { BorderRadiusPreviewer } from './apps/BorderRadiusPreviewer'
import { Calculator } from './apps/Calculator'
import { ChristmasLights } from './apps/ChristmasLights'
import { CountdownTimer } from './apps/CountdownTimer'
import { Csv2Json } from './apps/Csv2Json'
import { DollarsToCents } from './apps/DollarsToCents'
import { FlipImage } from './apps/FlipImage'
import { Json2Csv } from './apps/Json2Csv'
import { Notes } from './apps/Notes'
import { PearsonRegression } from './apps/PearsonRegression'
import { PomodoroClock } from './apps/PomodoroClock'
import { ProductLandingPage } from './apps/ProductLandingPage'
import { RandomMealGenerator } from './apps/RandomMealGenerator'
import { RandomNumberGenerator } from './apps/RandomNumberGenerator'
import { RomanToDecimal } from './apps/RomanToDecimal'
import { SliderDesign } from './apps/SliderDesign'
import { Stopwatch } from './apps/Stopwatch'
import { VigenereCipher } from './apps/VigenereCipher'
import { WordFrequency } from './apps/WordFrequency'

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/bin-2-dec' element={<Bin2Dec />} />
				<Route path='/border-radius-previewer' element={<BorderRadiusPreviewer />} />
				<Route path='/calculator' element={<Calculator />} />
				<Route path='/christmas-lights' element={<ChristmasLights />} />
				<Route path='/countdown-timer' element={<CountdownTimer />} />
				<Route path='/csv-2-json' element={<Csv2Json />} />
				<Route path='/dollars-to-cents' element={<DollarsToCents />} />
				<Route path='/flip-image' element={<FlipImage />} />
				<Route path='/json-2-csv' element={<Json2Csv />} />
				<Route path='/notes' element={<Notes />} />
				<Route path='/pearson-regression' element={<PearsonRegression />} />
				<Route path='/pomodoro-clock' element={<PomodoroClock />} />
				<Route path='/product-landing-page' element={<ProductLandingPage />} />
				<Route path='/random-meal-generator' element={<RandomMealGenerator />} />
				<Route path='/random-number' element={<RandomNumberGenerator />} />
				<Route path='/roman-to-decimal' element={<RomanToDecimal />} />
				<Route path='/slider-design' element={<SliderDesign />} />
				<Route path='/stopwatch' element={<Stopwatch />} />
				<Route path='/vigenere-cipher' element={<VigenereCipher />} />
				<Route path='/word-frequency' element={<WordFrequency />} />
			</Routes>
		</BrowserRouter>
	)
}
