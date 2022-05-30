import * as React from 'react';

type TProps = NoChildren & {
  type: string
  placeholder: string
  value: string
  onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export const Input = React.forwardRef<HTMLInputElement, TProps>(
  ({ onKeyDown, placeholder, type, onChange, onClick, value }, ref) => {
    return (
      <div onClick={(e) => onClick(e)}>
        <input
          onChange={(e) => onChange(e)}
          ref={ref}
          placeholder={placeholder}
          type={type}
          onKeyDown={onKeyDown}
          value={value}
        />
      </div>
    )
  }
)
