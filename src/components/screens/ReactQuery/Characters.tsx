import * as React from 'react';

import { useQuery } from 'react-query';

import {
  Character,
  ICharacter,
} from './Character';

type TProps = NoChildren

export const Characters: React.FC<TProps> = () => {
  const [page, setPage] = React.useState(39)

  const fetchCharacters = async ({ queryKey }: any) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${queryKey[1]}`)
    return response.json()
  }

  const nextPageHandler = () => {
    if (page === data.info.pages) {
      setPage(1)
    } else {
      setPage((page) => page + 1)
    }
  }

  const previousPageHandler = () => {
    if (page === 1) {
      setPage(data.info.pages)
    } else {
      setPage((page) => page - 1)
    }
  }

  const { data, status, isPreviousData } = useQuery(["characters", page], fetchCharacters, {
    keepPreviousData: true,
  })

  if (status === "loading") return <h1>loading...</h1>

  if (status === "error") return <h1>error</h1>

  return (
    <div style={{ margin: "110px" }}>
      {data.results.map((character: ICharacter, index: React.Key) => {
        return <Character character={character} key={index} />
      })}
      <div style={{ display: "flex", justifyContent: "center" }}>{page}</div>
      <div style={{ display: "flex", justifyContent: "space-between", width: "200px" }}>
        <button disabled={page === 1} onClick={previousPageHandler}>
          Previous Page
        </button>
        <button disabled={isPreviousData && !data.info.next} onClick={nextPageHandler}>
          Next Page
        </button>
      </div>
    </div>
  )
}
