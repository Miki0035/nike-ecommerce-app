import { create } from "zustand";



interface FavoriteStore {
    favorites: Shoe[],
    addFavorite: (shoe: Shoe) => void;
    removeFavorite: (id: number) => void;
}

export const useFavoriteStore = create<FavoriteStore>((set) => ({
    favorites: [],
    addFavorite: (shoe) => set((state) => ({
        favorites: [...state.favorites, shoe]
    })),
    removeFavorite: (id) => set((state) => ({
        favorites: state.favorites.filter((shoe) => shoe.id !== id)
    })),
}))