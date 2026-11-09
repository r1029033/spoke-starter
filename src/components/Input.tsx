import { useId, type InputHTMLAttributes } from 'react'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  state?: 'default' | 'focus'
}
export function Input({ className = '', id, label = 'Your name', placeholder = 'First and last name', state = 'default', ...props }: InputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId

  return (
    <label className={['input', state === 'focus' && 'input--focus', className].filter(Boolean).join(' ')} htmlFor={inputId}>
      <span className="input__label">{label}</span>
      <input className="input__field" id={inputId} placeholder={placeholder} {...props} />
    </label>
  )
}
