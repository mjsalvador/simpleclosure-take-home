'use client';

import axios from 'axios';
import { SWRConfig } from 'swr';

interface AppProviderProps {
  children: React.ReactNode;
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export function AppProvider({ children }: AppProviderProps) {
  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
}
