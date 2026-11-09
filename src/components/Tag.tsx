import type { HTMLAttributes, ReactNode } from 'react'

export type TagProps = HTMLAttributes<HTMLSpanElement> & { children?: ReactNode }

export function Tag({ children = '30 min', className = '', ...props }: TagProps) {
  return <span className={['tag', className].filter(Boolean).join(' ')} {...props}>{children}</span>
}
