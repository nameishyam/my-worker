import type { userStore } from "@/lib/interfaces"
import { create } from "zustand"

export const useUserStore = create<userStore>((set) => ({
  user: null,
  assignUser: () =>
    set((state) => ({
      user: state.user,
    })),
}))
