import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type TimeSlotProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> & {
  children?: ReactNode
  state?: 'default' | 'selected' | 'disabled'
}
export function TimeSlot({ children = '16:30', className = '', state = 'default', type = 'button', ...props }: TimeSlotProps) {
  const disabled = state === 'disabled'
  const selected = state === 'selected'

  return (
    <button
      aria-pressed={selected}
      className={['time-slot', `time-slot--${state}`, className].filter(Boolean).join(' ')}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}
