export interface Product {
    id: number
    nome: string
    foto: string
    descricao: string
    preco: number
    porcao: string
}

export interface CartItem {
    id: number
    nome: string
    foto: string
    preco: number
    quantidade?: number
}

export interface DeliveryAddress {
    description: string
    city: string
    zipCode: string
    number: number
    complement?: string
}

export interface DeliveryPayload {
    receiver: string
    address: DeliveryAddress
}

export type CartStep = 'cart' | 'delivery' | 'payment' | 'confirm'

export interface CartState {
    items: CartItem[]
    isOpen: boolean
    step: CartStep
    delivery: DeliveryPayload
    orderId: string
}

export interface RestauranteAPI {
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
}

export interface RestauranteProps {
    id: number
    name: string
    category: string
    information: string
    nota: string
    capa: string
    destacado?: boolean
}
