import { User } from "@/lib/enums"

export interface userStore {
  user: typeof User | null
  assignUser: () => void
}

export interface authStore {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}
