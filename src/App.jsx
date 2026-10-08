import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

// Layout & Page Components
import Navbar from './components/Navbar'
import Home from './components/Home'
import NextPage from './components/NextPage'
import ThreePage from './components/ThreePage'
import FourPage from './components/FourPage'
import Single from './components/Single'
import Facilities from './components/Facilities'
import Dining from './components/Dining'
import Login from './components/Login'
import Contact from './components/Contact'
import Event from './components/Event'
import FivePage from './components/FivePage'
import Wedding from './components/Wedding'
import Corporate from './components/Corporate'
import Birthday from './components/Birthday'

// Forms (1 to 50)
import One from './forms/One'
import Two from './forms/Two'
import Three from './forms/Three'
import Four from './forms/Four'
import Five from './forms/Five'
import Six from './forms/Six'
import Seven from './forms/Seven'
import Eight from './forms/Eight'
import Nine from './forms/Nine'
import Ten from './forms/Ten'
import Eleven from './forms/Eleven'
import Twelve from './forms/Twelve'
import Thirteen from './forms/Thirteen'
import Fourteen from './forms/Fourteen'
import Fifteen from './forms/Fifteen'
import Sixteen from './forms/Sixteen'
import Seventeen from './forms/Seventeen'
import Eighteen from './forms/Eighteen'
import Nineteen from './forms/Nineteen'
import Twenty from './forms/Twenty'
import TwentyOne from './forms/TwentyOne'
import TwentyTwo from './forms/TwentyTwo'
import TwentyThree from './forms/TwentyThree'
import TwentyFour from './forms/TwentyFour'
import TwentyFive from './forms/TwentyFive'
import TwentySix from './forms/TwentySix'
import TwentySeven from './forms/TwentySeven'
import TwentyEight from './forms/TwentyEight'
import TwentyNine from './forms/TwentyNine'
import Thirty from './forms/Thirty'
import ThirtyOne from './forms/ThirtyOne'
import ThirtyTwo from './forms/ThirtyTwo'
import ThirtyThree from './forms/ThirtyThree'
import ThirtyFour from './forms/ThirtyFour'
import ThirtyFive from './forms/ThirtyFive'
import ThirtySix from './forms/ThirtySix'
import ThirtySeven from './forms/ThirtySeven'
import ThirtyEight from './forms/ThirtyEight'
import ThirtyNine from './forms/ThirtyNine'
import Forty from './forms/Forty'
import FortyOne from './forms/FortyOne'
import FortyTwo from './forms/FortyTwo'
import FortyThree from './forms/FortyThree'
import FortyFour from './forms/FortyFour'
import FortyFive from './forms/FortyFive'
import FortySix from './forms/FortySix'
import FortySeven from './forms/FortySeven'
import FortyEight from './forms/FortyEight'
import FortyNine from './forms/FortyNine'
import Fifty from './forms/Fifty'
import Congrats from './congratulations/congrats '

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/nextpage" element={<NextPage />} />
        <Route path="/threepage" element={<ThreePage />} />
        <Route path="/fourpage" element={<FourPage />} />
        <Route path="/single" element={<Single />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event" element={<Event />} />
        <Route path="/fivepage" element={<FivePage />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/birthday" element={<Birthday />} />

        {/* Forms 1 to 50 */}
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
        <Route path="/four" element={<Four />} />
        <Route path="/five" element={<Five />} />
        <Route path="/six" element={<Six />} />
        <Route path="/seven" element={<Seven />} />
        <Route path="/eight" element={<Eight />} />
        <Route path="/nine" element={<Nine />} />
        <Route path="/ten" element={<Ten />} />
        <Route path="/eleven" element={<Eleven />} />
        <Route path="/twelve" element={<Twelve />} />
        <Route path="/thirteen" element={<Thirteen />} />
        <Route path="/fourteen" element={<Fourteen />} />
        <Route path="/fifteen" element={<Fifteen />} />
        <Route path="/sixteen" element={<Sixteen />} />
        <Route path="/seventeen" element={<Seventeen />} />
        <Route path="/eighteen" element={<Eighteen />} />
        <Route path="/nineteen" element={<Nineteen />} />
        <Route path="/twenty" element={<Twenty />} />
        <Route path="/twentyone" element={<TwentyOne />} />
        <Route path="/twentytwo" element={<TwentyTwo />} />
        <Route path="/twentythree" element={<TwentyThree />} />
        <Route path="/twentyfour" element={<TwentyFour />} />
        <Route path="/twentyfive" element={<TwentyFive />} />
        <Route path="/twentysix" element={<TwentySix />} />
        <Route path="/twentyseven" element={<TwentySeven />} />
        <Route path="/twentyeight" element={<TwentyEight />} />
        <Route path="/twentynine" element={<TwentyNine />} />
        <Route path="/thirty" element={<Thirty />} />
        <Route path="/thirtyone" element={<ThirtyOne />} />
        <Route path="/thirtytwo" element={<ThirtyTwo />} />
        <Route path="/thirtythree" element={<ThirtyThree />} />
        <Route path="/thirtyfour" element={<ThirtyFour />} />
        <Route path="/thirtyfive" element={<ThirtyFive />} />
        <Route path="/thirtysix" element={<ThirtySix />} />
        <Route path="/thirtyseven" element={<ThirtySeven />} />
        <Route path="/thirtyeight" element={<ThirtyEight />} />
        <Route path="/thirtynine" element={<ThirtyNine />} />
        <Route path="/forty" element={<Forty />} />
        <Route path="/fortyone" element={<FortyOne />} />
        <Route path="/fortytwo" element={<FortyTwo />} />
        <Route path="/fortythree" element={<FortyThree />} />
        <Route path="/fortyfour" element={<FortyFour />} />
        <Route path="/fortyfive" element={<FortyFive />} />
        <Route path="/fortysix" element={<FortySix />} />
        <Route path="/fortyseven" element={<FortySeven />} />
        <Route path="/fortyeight" element={<FortyEight />} />
        <Route path="/fortynine" element={<FortyNine />} />
        <Route path="/fifty" element={<Fifty />} />

        <Route path="/congrats" element={<Congrats />} />


      </Routes>
    </div>
  )
}

export default App