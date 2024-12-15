import React, { ReactNode, ButtonHTMLAttributes } from 'react'

type Props = {
  children: ReactNode
  onClick?: (args: unknown) => void
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  disabled?: boolean
  className?: string
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
}) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
