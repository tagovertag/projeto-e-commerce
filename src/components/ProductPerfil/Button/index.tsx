import React from 'react'
import { Button_Card } from './styles'

type Props = {
    children: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ children, onClick }: Props) => (
    <Button_Card onClick={onClick} type="button">
        {children}
    </Button_Card>
)

export default Button