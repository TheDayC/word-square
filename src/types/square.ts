export interface ILetterMatrix {
    [key: number]: string[];
}

export interface IViableWords {
    currentWord: string;
    viableWords: string[];
}

export interface IBlacklist {
    key: string;
    blacklist: string[];
}