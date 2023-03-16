import { publicRoutes } from './components/router';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Footer />
        </div>
    );
}

export default App;
