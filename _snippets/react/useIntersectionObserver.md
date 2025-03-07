# useIntersectionObserver

```ts
import { useEffect, useRef } from 'react';

export interface UseIntersectionObserverProps {
  callback: IntersectionObserverCallback;
  options?: IntersectionObserverInit;
}

export function useIntersectionObserver<T extends HTMLElement>({ callback, options }: UseIntersectionObserverProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementRef = useRef<T>(null);

  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((...args) => callbackRef.current(...args), options);

    const observer = observerRef.current;
    const element = elementRef.current;

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
      observer.disconnect();
    };
  }, [options]);

  return elementRef;
}

```