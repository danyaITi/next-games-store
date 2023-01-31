export type Anchor = 'right';

export type Pages = {
    text: string
    href: string
}

export type SelectItem = {
    title:string,
    items: {
        name:string
        id:number
        check:boolean
    }[]
}

export type Game = {
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