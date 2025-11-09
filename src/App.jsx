import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import BentleyBentayga from './pages/cars/BentleyBentayga'
import RollsRoycePhantom from './pages/cars/RollsRoycePhantom'
import RollsRoyceGhost from './pages/cars/RollsRoyceGhost'
import RangeRover from './pages/cars/RangeRover'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="cars/bentley-bentayga" element={<BentleyBentayga />} />
        <Route path="cars/rolls-royce-phantom" element={<RollsRoycePhantom />} />
        <Route path="cars/rolls-royce-ghost" element={<RollsRoyceGhost />} />
        <Route path="cars/range-rover" element={<RangeRover />} />
      </Route>
    </Routes>
  )
}

export default App