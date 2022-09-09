import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './Home'

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
import { LoremIpsumGenerator } from './apps/LoremIpsumGenerator'
import { Notes } from './apps/Notes'
import { PearsonRegression } from './apps/PearsonRegression'
import { ProductLandingPage } from './apps/ProductLandingPage'
import { Quiz } from './apps/Quiz'
import { RandomMealGenerator } from './apps/RandomMealGenerator'
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
				<Route path='/lorem-ipsum-generator' element={<LoremIpsumGenerator />} />
				<Route path='/notes' element={<Notes />} />
				<Route path='/pearson-regression' element={<PearsonRegression />} />
				<Route path='/product-landing-page' element={<ProductLandingPage />} />
				<Route path='/quiz' element={<Quiz />} />
				<Route path='/random-meal-generator' element={<RandomMealGenerator />} />
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