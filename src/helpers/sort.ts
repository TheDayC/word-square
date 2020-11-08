import { IViableWords } from '../types/square';

export function sortByViableWords(a: IViableWords, b: IViableWords): number {
    const aLength = a.viableWords.length;
    const bLength = b.viableWords.length;

    // Compare both values and give lower array indexes to those with higher viable words.
    if (aLength > bLength) {
        return -1;
    } else if (aLength < bLength) {
        return 1;
    }

    return 0;
}

export function sortByLength(a: string[], b: string[]): number {
    const aLength = a.length;
    const bLength = b.length;

    // Compare both values and give lower array indexes to those with higher viable words.
    if (aLength > bLength) {
        return -1;
    } else if (aLength < bLength) {
        return 1;
    }

    return 0;
}
