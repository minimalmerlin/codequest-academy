"use client";

type StorageLike = Pick<Storage, "getItem" | "setItem" | "removeItem">;

const memory = new Map<string, string>();

function canUseLocalStorage(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const k = "__codequest_test__";
    window.localStorage.setItem(k, "1");
    window.localStorage.removeItem(k);
    return true;
  } catch {
    return false;
  }
}

function getBackend(): StorageLike {
  if (canUseLocalStorage()) return window.localStorage;
  return {
    getItem: (key) => (memory.has(key) ? memory.get(key)! : null),
    setItem: (key, value) => {
      memory.set(key, value);
    },
    removeItem: (key) => {
      memory.delete(key);
    },
  };
}

export const safeStorage: StorageLike = {
  getItem(key) {
    try {
      return getBackend().getItem(key);
    } catch {
      return null;
    }
  },
  setItem(key, value) {
    try {
      getBackend().setItem(key, value);
    } catch {
      // ignore
    }
  },
  removeItem(key) {
    try {
      getBackend().removeItem(key);
    } catch {
      // ignore
    }
  },
};

