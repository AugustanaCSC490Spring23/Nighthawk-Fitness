import { Navigate, Outlet} from 'react-router-dom'
import { auth } from './components/Firebase/firebase'

const useAuth = () => {
    const user = auth.currentUser
    return user
}

const ProtectedRoutes = () => {
    const isAuth = useAuth()

    return isAuth ? <Outlet /> : <Navigate to={'/login'} />
}

export default ProtectedRoutes
