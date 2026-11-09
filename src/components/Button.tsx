import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode
  variant?: 'primary' | 'secondary'
}
export function Button({ children = 'Book this repair', className = '', variant = 'primary', type = 'button', ...props }: ButtonProps) {
  const classes = ['button', `button--${variant}`, className].filter(Boolean).join(' ')

  return <button className={classes} type={type} {...props}>{children}</button>
}
