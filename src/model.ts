export interface Book {
    room: Room;
    pax: number;
    nights: number;
    breakfast: boolean;
}

export enum Room {
    STANTARD = "standard",
    SUITE = "suite"
}
  
export const books: Book[] = [
    {
        room: Room.STANTARD,
        pax: 1,
        nights: 3,
        breakfast: false
    },
    {
        room: Room.STANTARD,
        pax: 1,
        nights: 4,
        breakfast: false
    },
    {
        room: Room.SUITE,
        pax: 2,
        nights: 1,
        breakfast: true,
    },
];
