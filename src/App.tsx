import React, {useState, useCallback} from 'react';

import './App.css';
import { parseViableWords} from './helpers/words';

const App: React.FC = () => {
    const [sequence, setSequence] = useState('');
    const [dimensions, setDimensions] = useState(0);

    const onSequence = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        setSequence(e.currentTarget.value.replace(/[^\w]/g, '').toLowerCase());
    }, []);
    
    const onDimensions = useCallback((e: React.FormEvent<HTMLSelectElement>) => {
        setDimensions(parseInt(e.currentTarget.value));
    }, []);

    // Fetch the viable words for the grid.
    const viableWords = parseViableWords(sequence, dimensions);
    console.log("viableWords", viableWords)
    
    // Create the word square

    return (
        <div className="App">
            <p>Entered Sequence: {sequence}</p>
            <p>Selected Dimensions: {dimensions}</p>
            <input name="sequence" type="text" placeholder="Enter a sequence..." onKeyUp={onSequence} />
            <select name="dimensions" onChange={onDimensions}>
                <option value="0">Select dimensions...</option>
                <option value="4">4</option>
            </select>
        </div>
    );
}

export default App;
