
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type Game = {
    id: number
    nome: string
    foto: string
    preco: number
    quantidade?: number
}


type CartState = {
    items: Game[]
    isOpen: boolean
}


const initialState: CartState = {
    items: [],
    isOpen: false
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        //Adiciona ao carrinho
        add: (state, action: PayloadAction<Game>) => {
            const itemNoCarrinho = state.items.find((item) => item.id === action.payload.id)
            if (!itemNoCarrinho) {
                state.items.push({ ...action.payload, quantidade: action.payload.quantidade ?? 1 })
            } else {
                itemNoCarrinho.quantidade = (itemNoCarrinho.quantidade ?? 0) + 1
            }
        },
        //Remove do carrinho
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        //Abre e fecha o carrinho
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        }

    }
})


export const { add, remove, open, close} = cartSlice.actions
export default cartSlice.reducer