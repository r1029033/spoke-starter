import type { HTMLAttributes, ReactNode } from 'react'
import { Button } from './Button'

export type ActionBarProps = HTMLAttributes<HTMLDivElement> & {
  action?: ReactNode
  label?: string
  onAction?: () => void
}
export function ActionBar({ action, className = '', label = 'Book this repair', onAction, ...props }: ActionBarProps) {
  return (
    <div className={['action-bar', className].filter(Boolean).join(' ')} {...props}>
      {action ?? <Button className="action-bar__button" onClick={onAction}>{label}</Button>}
    </div>
  )
}
