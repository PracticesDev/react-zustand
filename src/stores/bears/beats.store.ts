import { create } from 'zustand'

interface Bears {
    id: number,
    name: string,
}

interface BearState {
    backBears: number
    polarBears: number
    pandaBears: number

    bears: Bears[]

    computed: {
        totalBears: number
    },

    incrementBackBears: (by: number) => void
    incrementPolarBears: (by: number) => void
    incrementPandaBears: (by: number) => void


    doNothing: () => void
    addBears: () => void
    clearBears: () => void
}

export const useBearStore = create<BearState>()((set, get) => ({

    backBears: 10,
    polarBears: 5,
    pandaBears: 1,

    bears: [{ id: 1, name: 'Oso#1' }],

    computed: {
        get totalBears() {
            return get().backBears + get().polarBears + get().pandaBears + get().bears.length;
        }
    },

    incrementBackBears: (by: number) => set((state) => ({ backBears: state.backBears + by })),
    incrementPolarBears: (by: number) => set((state) => ({ polarBears: state.polarBears + by })),
    incrementPandaBears: (by: number) => set((state) => ({ pandaBears: state.pandaBears + by })),

    doNothing: () => set((state) => ({ bears: [...state.bears] })),// se crea un nuevo array (copia),
    addBears: () => set((state) => ({ bears: [...state.bears, { id: state.bears.length + 1, name: `Oso#${state.bears.length + 1}` }] })),
    clearBears: () => set(() => ({ bears: [] })),
}))

