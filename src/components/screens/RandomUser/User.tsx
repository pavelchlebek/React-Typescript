import * as React from 'react';

import { IUser } from './RandomUser';
import classes from './User.module.css';

type TProps = NoChildren & {
  user: IUser
}

export const User: React.FC<TProps> = ({ user }) => {
  return (
    <div className={classes.userWrapper}>
      <h5 className={classes.name}>{`${user.title} ${user.firstName} ${user.lastName}`}</h5>
      <img className={classes.image} src={user.pictureUrl} alt="user" />
    </div>
  )
}
