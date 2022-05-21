import * as React from 'react';

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import { Characters } from './Characters';

const queryClient = new QueryClient()

type TProps = NoChildren

export const RCApp: React.FC<TProps> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Characters />
    </QueryClientProvider>
  )
}
