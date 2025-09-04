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
    addOrder: (order) => set((state) => ({
        orders: [...state.orders, order]
    })),
    removeOrder: (id) => set((state) => ({
        orders: state.orders.filter((order) => order.shoe.id !== id)
    })),
    clearOrders: () => set({ orders: [] })
}))