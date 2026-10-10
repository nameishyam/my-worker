import type { userStore } from "@/lib/interfaces"
import { create } from "zustand"

const userStore = create<userStore>((set) => ({
  user: null,
  assignUser: () =>
    set((state) => ({
      user: state.user,
    })),
}))
