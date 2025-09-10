import { create } from "zustand";

interface Order {
    shoe: Shoe;
    size: number;
    quantity: number;
}

interface OrderStore {
    orders: Order[],
    addOrder: (order: Order) => void;
    removeOrder: (id: number) => void;
    clearOrders: () => void;
}

export const useOrderStore = create<OrderStore>((set) => ({
    orders: [],
    addOrder: (order) => set((state) => {
        const existingIndex = state.orders.findIndex(
            (o) => o.shoe.id === order.shoe.id && o.size === order.size
        );
        if (existingIndex !== -1) {
            // Order already exists → update quantity
            const updatedOrders = [...state.orders];
            updatedOrders[existingIndex] = {
                ...updatedOrders[existingIndex],
                quantity: updatedOrders[existingIndex].quantity + order.quantity,
            };
            return { orders: updatedOrders };
        }

        // Order is new → add it
        return { orders: [...state.orders, order] };
    }),
    removeOrder: (id) => set((state) => ({
        orders: state.orders.filter((order) => order.shoe.id !== id)
    })),
    clearOrders: () => set({ orders: [] })
}))