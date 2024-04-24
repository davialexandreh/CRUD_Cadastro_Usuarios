import React from 'react';
import ReactDOM from 'react-dom';
import EstilosGlobais from './styles/estilosGlobais';
import Routes from './routes'

ReactDOM.render(
    <>
        <Routes />
        <EstilosGlobais />
    </>,
    document.getElementById('root')
);
