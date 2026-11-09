import type { HTMLAttributes } from 'react'

export type SummaryRowProps = HTMLAttributes<HTMLDivElement> & {
  label?: string
  value?: string
}
export function SummaryRow({ className = '', label = 'Service', value = 'Flat tyre repair', ...props }: SummaryRowProps) {
  return (
    <div className={['summary-row', className].filter(Boolean).join(' ')} {...props}>
      <span className="summary-row__label">{label}</span>
      <span className="summary-row__value">{value}</span>
    </div>
  )
}
