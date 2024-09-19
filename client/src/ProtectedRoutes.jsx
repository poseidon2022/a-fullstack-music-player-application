import { Navigate } from "react-router-dom"

export default function ProtectedRoute({children}) {
    const isauthenticated = localStorage.getItem("userToken")
    return isauthenticated ? children : <Navigate to = "/login"></Navigate>
}