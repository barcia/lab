```tsx
import { useSyncExternalStore } from "react";

type WindowSize = {
  width: number;
  height: number;
};

const onWindowResize = (callback: () => void) => {
  window.addEventListener("resize", callback);
  return () => {
    window.removeEventListener("resize", callback);
  };
};

const getWindowSize = (): WindowSize => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

export default function useWindowResize() {
  return useSyncExternalStore(onWindowResize, getWindowSize);
}
```
