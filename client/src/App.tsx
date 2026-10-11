import { Route, Routes } from "react-router-dom"
import ProtectedRoute from "@/context/ProtectedRoute"
import Login from "@/pages/Login"
import Signup from "@/pages/Signup"
import Dashboard from "@/pages/Dashboard"
import Home from "@/pages/Home"

export default function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
      <Route element={<ProtectedRoute />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
