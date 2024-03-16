import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Mainpage from './components/mainpage.jsx';
import Section2main from './components/section2main.jsx';
import Section3main from './components/section3main.jsx';
import Footer from './components/footer.jsx';
import Tools from './components/tools.jsx';
import Cast from './components/cast.jsx';
import Store from './components/store.jsx';
import Episode from './components/episode.jsx';

import Cart from './components/cart.jsx';
import './stylepre.css'

function App() {
    const [show, setShow] = useState(true);
    const [size, setSize] = useState([]);
    const handleClick = (item) => {
        let isPresent = false;
        size.forEach((product) => {
            if (item.id === product.id) {
                isPresent = true;
            }
        });
        if (isPresent) return;
        setSize([...size, item]);
    };

    // preloader screen
    const [loadingText, setLoadingText] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const textToType ="hHello, friend. hello, friend? That's lame. Maybe I should give you a name. But that's a slippery slope. You're only in my head. We have to remember that. Shit. It's actually happened. I'm talking to an imaginary person...";
        let index = 0;
        const intervalId = setInterval(() => {
            if (index < textToType.length - 1) {
                setLoadingText(prevText => prevText + textToType[index]);
                index++;
            } else {
                clearInterval(intervalId); // Clear the interval when the text has finished typing
                setTimeout(() => {
                    setLoading(false);
                }, 1000); // Adjust this delay to control how long the loading animation lasts
            }
        }, 60); // Adjust this interval to control the typing speed
    
        return () => clearInterval(intervalId); // Ensure the interval is cleared on component unmount
    }, []);
    // end

    if (loading) {
        return (
            <div className="preloader-main  ">
                <div className="loading-text"> {loadingText} </div>
                <button className="skip-button" onClick={() => setLoading(false)}>Skip</button>
            </div>
        );
    }

    return (
        <Router>
            <Navbar size={size.length} />
            <Routes>
                <Route path="/store" element={<Store handleClick={handleClick} />} />
                <Route path="/cast" element={<Cast />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/Episode" element={<Episode/>} />
                <Route path="/cart" element={<Cart cart={size} setCart={setSize} />} />
                <Route path="/main" element={<Mainpage />} />
                <Route path="/section2" element={<Section2main />} />
                <Route path="/section3" element={<Section3main />} />
                <Route path="/" element={<Mainpage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
