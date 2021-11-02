import * as React from 'react';

type TProps = NoChildren & {
  label: string
}

export const First: React.FC<TProps> = ({ label }) => {
  return <div>{label}</div>
}
