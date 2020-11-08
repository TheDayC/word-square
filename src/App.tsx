import React, {useState, useCallback} from 'react';

import './App.css';
import { findWordSquare } from './helpers/square';
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

    // Create the word square
    const square = findWordSquare(viableWords, dimensions, sequence);

    return (
        <div className="App">
            <p>Entered Sequence: {sequence}</p>
            <p>Selected Dimensions: {dimensions}</p>
            <input name="sequence" type="text" placeholder="Enter a sequence..." onKeyUp={onSequence} />
            <select name="dimensions" onChange={onDimensions}>
                <option value="0">Select dimensions...</option>
                <option value="4">4</option>
            </select>

            <h3>Finished Square</h3>
            <div className="square">
                {square && square.map(word => (
                    <div className="row" key={`row-${word}`}>
                        {word.split('').map((letter, i) => <span key={`letter-${i}`}>{letter}</span>)}
                    </div>
                    ))
                }
            </div>
        </div>
    );
}

export default App;
