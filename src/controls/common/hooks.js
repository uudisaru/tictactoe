import { useEffect } from 'react';

export function useOnClickOutside(ref, handler) {

  useEffect(
    () => {
      const listener = event => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },
    // Add ref and handler to effect dependencies
    // Handler is a new function on every render  -that will ...
    // ... callback/cleanup to run every render. In order to ...
    // ... avoid that wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}
