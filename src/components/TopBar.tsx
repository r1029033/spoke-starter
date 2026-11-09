import type { HTMLAttributes } from 'react'
import chevronLeft from '../assets/icons/chevron-left.svg'

export type TopBarProps = HTMLAttributes<HTMLElement> & {
  onBack?: () => void
  step?: string
  title?: string
}
export function TopBar({ className = '', onBack, step = 'Step 1 of 3', title = 'Book a repair', ...props }: TopBarProps) {
  return (
    <header className={['top-bar', className].filter(Boolean).join(' ')} {...props}>
      <button aria-label="Go back" className="top-bar__back" onClick={onBack} type="button">
        <img alt="" height="24" src={chevronLeft} width="24" />
      </button>
      <h2 className="top-bar__title">{title}</h2>
      <span className="top-bar__step">{step}</span>
    </header>
  )
}
