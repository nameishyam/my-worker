import type { authStore } from "@/lib/interfaces"
import { create } from "zustand"

export const useAuthStore = create<authStore>((set) => ({
  isAuthenticated: false,
  login: () =>
    set({
      isAuthenticated: true,
    }),
  logout: () =>
    set({
      isAuthenticated: false,
    }),
}))
