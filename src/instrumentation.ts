/**
 * Node can expose a broken `globalThis.localStorage` when e.g.
 * `NODE_OPTIONS` includes `--localstorage-file` without a valid path.
 * Some SSR paths still call `localStorage.getItem`, which then throws.
 * Replace with a no-op Storage so SSR never crashes; the real browser
 * `localStorage` is unchanged on the client.
 */
export async function register() {
  if (typeof window !== "undefined") return;

  const current = globalThis.localStorage;
  if (!current || typeof current.getItem === "function") return;

  const memory = new Map<string, string>();
  const stub: Pick<
    Storage,
    "length" | "clear" | "getItem" | "key" | "removeItem" | "setItem"
  > = {
    get length() {
      return memory.size;
    },
    clear() {
      memory.clear();
    },
    getItem(key: string) {
      return memory.get(String(key)) ?? null;
    },
    key(index: number) {
      return [...memory.keys()][index] ?? null;
    },
    removeItem(key: string) {
      memory.delete(String(key));
    },
    setItem(key: string, value: string) {
      memory.set(String(key), String(value));
    },
  };

  Object.defineProperty(globalThis, "localStorage", {
    value: stub,
    configurable: true,
    enumerable: true,
    writable: true,
  });
}
