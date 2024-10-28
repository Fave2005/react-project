import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header';
import Hero from './components/hero/hero';

function App() {
   return <div>
    {/* header section */}
    
    <Header />
    <Hero />
   </div>;
}

export default App;
