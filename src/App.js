import React from 'react';
import './App.css';
import TagSelector from './components/TagSelector';
import HeatMap from './components/HeatMap';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <TagSelector />
                <HeatMap />
            </div>
        );
    }
}

export default App;
