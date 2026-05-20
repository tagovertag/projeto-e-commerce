import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { CartItem, CartState, DeliveryPayload } from '../../types'

const initialState: CartState = {
    items: [],
    isOpen: false,
    step: 'cart',
    orderId: '',
    delivery: {
        receiver: '',
        address: {
            description: '',
            city: '',
            zipCode: '',
            number: 0,
            complement: ''
        }
    }
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Adiciona ao carrinho
        add: (state, action: PayloadAction<CartItem>) => {
            const itemNoCarrinho = state.items.find((item) => item.id === action.payload.id)
            if (!itemNoCarrinho) {
                state.items.push({ ...action.payload, quantidade: action.payload.quantidade ?? 1 })
            } else {
                itemNoCarrinho.quantidade = (itemNoCarrinho.quantidade ?? 0) + 1
            }
        },
        // Remove do carrinho
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        // Abre e fecha o carrinho
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        },
        setStep: (state, action: PayloadAction<'cart' | 'delivery' | 'payment' | 'confirm'>) => {
            state.step = action.payload
        },
        
        
        setDeliveryData: (state, action: PayloadAction<DeliveryPayload>) => {
            state.delivery = action.payload
        },
        
        
        setOrderId: (state, action: PayloadAction<string>) => {
            state.orderId = action.payload
        },
        clearCart: (state) => {
            state.items = []
            state.step = 'cart'
            state.orderId = ''
            state.delivery = {
                receiver: '',
                address: {
                    description: '',
                    city: '',
                    zipCode: '',
                    number: 0,
                    complement: ''
                }
            }
        },
    }
})


export const { add, remove, open, close, setStep, setDeliveryData, setOrderId, clearCart } = cartSlice.actions
export default cartSlice.reducer