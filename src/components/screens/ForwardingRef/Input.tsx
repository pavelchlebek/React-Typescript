import * as React from 'react';

type TProps = NoChildren & {
  type: string
  placeholder: string
  onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void
}

export const Input = React.forwardRef<HTMLInputElement, TProps>(
  ({ onKeyDown, placeholder, type }, ref) => {
    return <input ref={ref} placeholder={placeholder} type={type} onKeyDown={onKeyDown} />
  }
)
