export interface CurrentDateTime{
    hour: number,
    minute: number,
    date: number,
    month: number,
    longDate: string,
}

export interface CurrentBanner{
    banner: string,
    greeting: string,
}


// types.ts
export interface ApiResponse<T> {
    data: T;
    status: number;
    statusText: string;
  }
  
  export interface SearchResult {
    id: string;
    name: string;
    // otras propiedades relevantes
  }
  
  export type DebounceFunction<T extends unknown[]> = (
    func: (...args: T) => Promise<void>,
    wait: number
  ) => (...args: T) => void;