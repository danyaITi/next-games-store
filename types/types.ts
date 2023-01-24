export type Anchor = 'right';

export interface Pages {
    text: string
    href: string
}

export interface SelectItem {
    title:string,
    items: {
        name:string
        id:number
    }[]
}

export interface Game {
    image: string;
    icon: string;
    title: string;
    genres: string[];
    price: number | string;
    video: string;
    id: string;
    description: string;
}

export interface GameId {
    game: Game
}

export interface Games {
    games: Game[]
}