import * as React from 'react';

import classes from './PhotoEditor.module.css';

type TProps = NoChildren & {
  name: string
  active: boolean
  handleClick: () => void
}

export const SidebarItem: React.FC<TProps> = ({ name, active, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={`${classes.sidebarItem} ${active ? classes.active : ""}`}
    >
      {name}
    </button>
  )
}
