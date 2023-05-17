export interface CharacterApiResponse {
    info: PagingInfo;
    results: Character[];
}

export interface PagingInfo {
    count: number;
    pages: number;
    next: string;
    prev: string;
}

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    origin: {
        name: string;
        url: string;
    };
    gender: string;
    image: string;
    url: string;
    location: {
        name: string;
        url: string;
    };
    created: string;
}