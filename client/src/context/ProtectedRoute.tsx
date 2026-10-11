import { useAuthStore } from "@/stores/authStore"
import { Navigate, Outlet } from "react-router-dom"

export default function ProtectedRoute() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
}
