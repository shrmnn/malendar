import React from 'react';
import Header from "./Components/header";
import Container from "./Components/container";
import Footer from "./Components/footer";

import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className='Content'>
                <Header/>
                <Container/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
