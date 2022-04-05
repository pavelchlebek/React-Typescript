import * as React from 'react';

import axios from 'axios';

import useFetch2, {
  fetchDataSet,
  useTriggerFetch2,
} from '../../../hooks/useFetch';
import classes from './RandomUser.module.css';
import { User } from './User';

type TProps = NoChildren

export interface IUser {
  title: string
  firstName: string
  lastName: string
  pictureUrl: string
}

const flattenUser = (user: any) => {
  return {
    title: user.name.title,
    firstName: user.name.first,
    lastName: user.name.last,
    pictureUrl: user.picture.thumbnail,
  }
}

export const RandomUser: React.FC<TProps> = () => {
  const [users, setUsers] = React.useState<IUser[]>([])
  const [userCount, setUserCount] = React.useState(0)
  const [someData, setSomeData] = React.useState()

  // changing object keys name
  const { data: fetchedUser, loading, refetch } = useFetch2(`https://randomuser.me/api/?results=1`)

  const {
    data: triggeredUser,
    loading: triggeredLoading,
    error: triggeredError,
    triggerFetch,
  } = useTriggerFetch2("https://randomuser.me/api/?results=1")

  const fetchUsers = async (count: number) => {
    try {
      const users = await axios.get(`https://randomuser.me/api/?results=${count}`)
      console.log("users: ", users)
      const flattenUsers: IUser[] = []
      users.data.results.forEach((item: any) => flattenUsers.push(flattenUser(item)))
      setUsers(flattenUsers)
    } catch (err) {
      console.error("Request error: ", err)
    }
  }

  // console.log("hookUsers: ", hookUsers)

  const handleFetch = () => {
    fetchDataSet("https://randomuser.me/api/?results=1", (data) => setSomeData(data))
  }

  return (
    <div className={classes.screen}>
      <div className={classes.user}>
        {users.length > 0
          ? users.map((user, userIdx) => {
              return <User key={userIdx} user={user} />
            })
          : "No users fetched"}
      </div>
      <div className={classes.hookUser}>
        {loading ? "loading...." : JSON.stringify(fetchedUser)}
      </div>
      <div className={classes.hookUser}>
        {triggeredLoading ? "loading...." : JSON.stringify(triggeredUser)}
        <p>{triggeredLoading ? "loading" : "loaded"}</p>
      </div>
      <div className={classes.form}>
        Users count:
        <input
          type="number"
          className={classes.input}
          onChange={(e) => setUserCount(parseInt(e.target.value))}
        />
      </div>

      <button onClick={() => fetchUsers(userCount)}>Fetch User</button>
      <button onClick={triggerFetch}>useTriggerFetch</button>
      <button onClick={refetch}>Refetch</button>
      <div className={classes.display}>Weronika na mne mysli!!!</div>
    </div>
  )
}
