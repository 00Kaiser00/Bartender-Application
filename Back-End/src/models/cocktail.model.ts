export class Cocktail {
    name: string;
    desc: string;
    price: number;

    constructor(name: string, desc: string, price: number)
    {
        this.name = name;
        this.desc = desc;
        this.price = price;
    }
}

const menu: Cocktail [] = [];
export default menu;