import * as dictionary from '../data/words.json';
import {uniq} from 'lodash';

export function parseViableWords(sequence: string, dimensions: number): string[] {
    // Immediately crop dictionary to only entries of exact dimension length.
    const validEntries = dictionary.words.filter(word => word.length === dimensions);

    // Get unique letters from sequence.
    const splitSequence = uniq(sequence.split('')).join('');

    // Return our final sequence of viable words.
    return validEntries.filter(entry => findEntryInSequence(splitSequence, entry));
}

// Granular word comparison solution to use as little memory as possible.
function findEntryInSequence(sequence: string, dictionaryEntry: string): boolean {
    const asciiCount = 128;
    const characters = new Array(asciiCount);  // Create an array of 128 characters to represent an ASCII character.

    // Fill the character array with zeros
    for (let i = 0; i < asciiCount; i++) {
        characters[i] = 0;
    }

    // Increment value where index matches the sequence's unicode value.
    // This recreates the sequence's ASCII character code in an array.
    for (let i = 0; i < sequence.length; i++) {
        characters[sequence.charCodeAt(i)] += 1;
    }

    // Iterate over the dictionary entry
    for (let i = 0; i < dictionaryEntry.length; i++) {
        // Reduce count where we find matching letters from the dictionary entry.
        characters[dictionaryEntry.charCodeAt(i)] -= 1;

        // If we hit a negative number then the dictionary entry isn't comparible so bail.
        if (characters[dictionaryEntry.charCodeAt(i)] < 0) {
            return false;
        }
    }

    // If we iterate over the entire dictionary entry then it exists in our sequence and is valid!
    return true;
}