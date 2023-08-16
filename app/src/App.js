import React from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';
import ServiceList from "./ServiceList";

function StatusScreen() {
    const springProps = useSpring({
        to: { opacity: 1, translateY: 0 },
        from: { opacity: 0, translateY: -100 },
        config: { tension: 300, friction: 20 }, // Ajuste os valores para a animação desejada
    });

    return (
        <animated.div className="status-container" style={{ ...springProps }}>
            <h1>Tudo Funcionando Bem! 😄</h1>
            <ServiceList/>
        </animated.div>
    );
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <StatusScreen />
            </header>
        </div>
    );
}

export default App;
