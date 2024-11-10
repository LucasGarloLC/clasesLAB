import { Book, books, Room } from "./model";

class Client {
    books: Book[];
    price: number

    constructor (books: Book []) {
        this.books = books;
        this.price = 40;
    }

    getRoomPrice = (room: Room): number => {
        switch(room){
            case Room.STANTARD:
                return 100;
            case Room.SUITE:
                return 150;
            default:
                return 0;
        }
    }
    get subtotal() {
        return Math.round(this.books.reduce((acc, book) => {
            return acc + book.nights * this.getRoomPrice(book.room) + (book.pax - 1) * this.price;
        }, 0) * 100) / 100;
    }
    get total() {
        return Math.round(this.subtotal * 1.21 * 100) / 100;
    }
}

const clients = new Client(books);

console.log("Clients");
console.log("-------");
console.log(`Subtotal: ${clients.subtotal}`);
console.log(`Total: ${clients.total}`);
console.log("-----------------");

class Tour extends Client {
    discount: number;

    constructor (books: Book[]) {
        super(books);
        this.discount = 15;
    }

    getRoomPrice = (room: Room): number => {
        switch(room){
            case Room.STANTARD:
                return 100;
            case Room.SUITE:
                return 100;
            default:
                return 0;
        }
    }
    get subtotal() {
        return Math.round((super.subtotal * (100 - this.discount)) / 100 * 100) / 100;
    }   
}

const tours = new Tour(books);

console.log("Tours");
console.log("-------");
console.log(`Subtotal: ${tours.subtotal}`);
console.log(`Total: ${tours.total}`);
console.log("-----------------");
