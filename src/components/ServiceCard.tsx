import type { ButtonHTMLAttributes } from 'react'
import { Tag } from './Tag'

export type ServiceCardProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  description?: string
  duration?: string
  price?: string
  selected?: boolean
  title?: string
}
export function ServiceCard({ className = '', description = 'Tube or tyre swap, any wheel size.', duration = '30 min', price = '\u20ac15', selected = false, title = 'Flat tyre repair', type = 'button', ...props }: ServiceCardProps) {
  return (
    <button
      aria-pressed={selected}
      className={['service-card', selected && 'service-card--selected', className].filter(Boolean).join(' ')}
      type={type}
      {...props}
    >
      <span className="service-card__header"><span>{title}</span><span className="service-card__price">{price}</span></span>
      <span className="service-card__description">{description}</span>
      <span className="service-card__tags"><Tag>{duration}</Tag></span>
    </button>
  )
}
