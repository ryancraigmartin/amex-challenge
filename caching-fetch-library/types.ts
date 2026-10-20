export type CacheStatus = 'idle' | 'loading' | 'success' | 'error';
export type CacheEntry = {
  data: unknown | null;
  error: Error | null;
  status: CacheStatus;
  promise?: Promise<void>;
};


export type UseCachingFetch = (url: string) => {
  isLoading: boolean;
  data: unknown;
  error: Error | null;
};
