import { Navigate } from "react-router-dom"

export default function ProtectedRoute({children}) {
    const isauthenticated = localStorage.getItem("accessToken")
    return children //: <Navigate to = "/login"></Navigate>
}