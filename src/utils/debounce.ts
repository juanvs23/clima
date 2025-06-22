// Alternativa más explícita sin never[]
export function debounce<T extends unknown[]>(
    func: (...args: T) => void,
    wait: number
  ): (...args: T) => void {
    let timeoutId: number | undefined;
  
    return function (...args: T): void {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => func(...args), wait) as unknown as number;
    };
  }