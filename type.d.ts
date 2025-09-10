interface Shoe {
    id: number;
    image: string;
    name: string;
    type: "Men" | "Women" | "Unisex" | "Boys" | "Girls" | "Lifestyle" | "Skateboarding" | "Dance",
    price: number,
    colors: number,
    description: string;
}

interface Order {
    shoe: Shoe;
    size: number;
    quantity: number;
}


