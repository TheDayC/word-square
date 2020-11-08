export function findWordSquare(words: string[], dimensions: number, sequence: string): string[] | null {

    let square: string[] = [];
    const wordsTmp = ['moan', 'once', 'acme', 'need'];
    let wordsTmp2 = wordsTmp; // Would replace with full dictionary ideally.
    
    for(const word of wordsTmp) {
        square = [];
        square.push(word);

        for (let i = 1; i < square[0].length; i++) {
            const prefix = buildPrefix(square, i);
            const candidates = findCanidates(word, wordsTmp2, i, prefix); 
            
            if (candidates) {
                /*
                * Something that I can't quite figure out with the recursion here.
                * I know I need to recurse on multiple layers of candidates but can't quite execute it.
                */
                square.push(candidates[0]);
                
                if (square.length === dimensions) { 
                    break;
                } else {
                    i = 1;
                }
            }

            
            if (square.length === dimensions) {
                break;
            }
        }

        if (square.length === dimensions) {
            return square;
        }

    };

    return [];
}

function findCanidates(word: string, words: string[], currentRow: number, prefix: string): string[] | null {
    // Create words list without current word
    const wordsNoCurrent = words.filter(w => w !== word);

    // Create a list of viable words with prefix
    const candidates = wordsNoCurrent.filter(w => w.slice(0, currentRow) === prefix);

    if (candidates.length > 0) {
        return candidates;
    } else {
        return null;
    }
}

function buildPrefix(square: string[], currentRow: number): string {
    let prefix = '';

    square.forEach(row => prefix += row.charAt(currentRow));

    return prefix;
}