import { useEffect, useRef } from "react";

type KeyCombinationCallback = (e: KeyboardEvent) => void;

export function useKeyCombination(
  /** Key combinations such as ['Control' + 'z'] */
  combination: string[],
  callback: KeyCombinationCallback
): void {
  const pressedKeysRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      pressedKeysRef.current.add(event.key.toLocaleLowerCase());

      if (
        combination.every((key) =>
          pressedKeysRef.current.has(key.toLocaleLowerCase())
        )
      ) {
        callback(event);
      }
    };

    const onKeyUp = (event: KeyboardEvent) => {
      pressedKeysRef.current.delete(event.key.toLocaleLowerCase());
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [combination, callback]);
}
