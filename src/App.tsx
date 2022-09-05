import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import { Bin2Dec } from './apps/Bin2Dec'
import { BorderRadiusPreviewer } from './apps/BorderRadiusPreviewer'
import { Calculator } from './apps/Calculator'
import { CauseEffect } from './apps/CauseEffect'
import { ChristmasLights } from './apps/ChristmasLights'
import { ColorCycle } from './apps/ColorCycle'
import { CountdownTimer } from './apps/CountdownTimer'
import { Csv2Json } from './apps/Csv2Json'
import { DollarsToCents } from './apps/DollarsToCents'
import { DynamicCSSVariables } from './apps/DynamicCSSVariables'
import { FirstDatabaseApp } from './apps/FirstDatabaseApp'
import { FlipImage } from './apps/FlipImage'
import { GithubStatus } from './apps/GithubStatus'
import { Hello } from './apps/Hello'
import { IOTMailboxSimulator } from './apps/IOTMailboxSimulator'
import { JsInputValidation } from './apps/JsInputValidation'
import { Json2Csv } from './apps/Json2Csv'
import { KeyValue } from './apps/KeyValue'
import { RandomNumberGenerator } from './apps/RandomNumberGenerator'
import { Recipe } from './apps/Recipe'
import { RomanToDecimal } from './apps/RomanToDecimal'
import { SliderDesign } from './apps/SliderDesign'
import { Stopwatch } from './apps/Stopwatch'
import { TrueOrFalse } from './apps/TrueOrFalse'
import { VigenereCipher } from './apps/VigenereCipher'
import { Weather } from './apps/Weather'
import { WindChill } from './apps/WindChill'
import { WordFrequency } from './apps/WordFrequency'

const Home = () => {
	return (
		<div>
			<Link to='/bin-2-dec'>Bin 2 Dec</Link>
			<Link to='/border-radius-previewer'>Border Radius Previewer</Link>
			<Link to='/calculator'>Calculator</Link>
			<Link to='/cause-effect'>Cause Effect</Link>
			<Link to='/christmas-lights'>Christmas Lights</Link>
			<Link to='/color-cycle'>Color Cycle</Link>
			<Link to='/countdown-timer'>Countdown Timer</Link>
			<Link to='/csv-2-json'>CSV 2 JSON</Link>
			<Link to='/dollars-to-cents'>Dollars To Cents</Link>
			<Link to='/dynamic-css-var'>Dynamic CSS Variables</Link>
			<Link to='/first-db-app'>First DB App</Link>
			<Link to='/flip-image'>Flip Image</Link>
			<Link to='/github-status'>GitHub Status</Link>
			<Link to='/iot-mailbox-simulator'>IOT Mailbox Simulator</Link>
			<Link to='/js-input-validation'>JS Input Validation</Link>
			<Link to='/hello'>Hello App</Link>
			<Link to='/json-2-csv'>JSON 2 CSV</Link>
			<Link to='/key-value'>Key Value</Link>
			<Link to='/random-number'>Random Number Generator</Link>
			<Link to='/recipe'>Recipe</Link>
			<Link to='/roman-to-decimal'>Roman to Decimal</Link>
			<Link to='/slider-design'>Slider Design</Link>
			<Link to='/stopwatch'>Stopwatch</Link>
			<Link to='/true-or-false'>True or False</Link>
			<Link to='/vigenere-cipher'>Vigenere Cipher</Link>
			<Link to='/weather'>Weather</Link>
			<Link to='/wind-chill'>Wind Chill</Link>
			<Link to='/word-frequency'>Word Frequency</Link>
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
				<Route path='/christmas-lights' element={<ChristmasLights />} />
				<Route path='/color-cycle' element={<ColorCycle />} />
				<Route path='/countdown-timer' element={<CountdownTimer />} />
				<Route path='/csv-2-json' element={<Csv2Json />} />
				<Route path='/dollars-to-cents' element={<DollarsToCents />} />
				<Route path='/dynamic-css-var' element={<DynamicCSSVariables />} />
				<Route path='/first-db-app' element={<FirstDatabaseApp />} />
				<Route path='/flip-image' element={<FlipImage />} />
				<Route path='/github-status' element={<GithubStatus />} />
				<Route path='/iot-mailbox-simulator' element={<IOTMailboxSimulator />} />
				<Route path='/js-input-validation' element={<JsInputValidation />} />
				<Route path='/hello' element={<Hello />} />
				<Route path='/json-2-csv' element={<Json2Csv />} />
				<Route path='/key-value' element={<KeyValue />} />
				<Route path='/random-number' element={<RandomNumberGenerator />} />
				<Route path='/recipe' element={<Recipe />} />
				<Route path='/roman-to-decimal' element={<RomanToDecimal />} />
				<Route path='/slider-design' element={<SliderDesign />} />
				<Route path='/stopwatch' element={<Stopwatch />} />
				<Route path='/true-or-false' element={<TrueOrFalse />} />
				<Route path='/vigenere-cipher' element={<VigenereCipher />} />
				<Route path='/weather' element={<Weather />} />
				<Route path='/wind-chill' element={<WindChill />} />
				<Route path='/word-frequency' element={<WordFrequency />} />
			</Routes>
		</BrowserRouter>
	)
}