```tsx
import { useSyncExternalStore } from "react";

const getOnlineStatus = () => navigator.onLine;

const onOnlineStatusChange = (callback: () => void) => {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
};

export default function useOnlineStatus() {
  const isOnline = useSyncExternalStore(onOnlineStatusChange, getOnlineStatus);
  return isOnline;
}
```
