import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";
import { customSessionStorage } from "../storages/session.storage";


interface PersonState {
    firtName: string;
    lastName: string;

    setFirtName: (name: string) => void;
    setLastName: (name: string) => void;
}
interface Action {
    setFirtName: (name: string) => void;
    setLastName: (name: string) => void;
}

const storeApi: StateCreator<PersonState & Action> = (set) => ({

    firtName: '',
    lastName: '',

    setFirtName: (name: string) => set(() => ({ firtName: name })),
    setLastName: (name: string) => set(() => ({ lastName: name })),

})


// Persistencia en localStorage midiante middleware
export const usePersonStore = create<PersonState & Action>()(
    persist(
        storeApi,
        {
            name: 'person-store',
            storage: customSessionStorage,
        })
)