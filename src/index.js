import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => React.createElement('h1', null, 'hola mundo');

const App = () => <h1>Hola mundo</h1>

ReactDOM.render(<App />, document.querySelector('.app'));
