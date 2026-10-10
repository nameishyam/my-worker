import { User } from "@/lib/enums"

export interface userStore {
  user: typeof User | null
  assignUser: () => void
}
