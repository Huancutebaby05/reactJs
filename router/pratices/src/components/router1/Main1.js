import {Routes, Route, Link} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';

function Router1(){
    return(
        <div>
            <ul>
                <li>
                    <Link to={`/`}>Home</Link>
                </li>
                <li>
                    <Link to={`/about`}>About</Link>
                </li>
                <li>
                    <Link to={`/contact`}>Contact</Link>
                </li>
            </ul>
            <hr/>
            <div>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/about' element={<About/>} />
                </Routes>
            </div>
        </div>
        
    )
}
export default Router1