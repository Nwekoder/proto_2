import { ReactNode, useEffect } from "react";
import {useAuthState} from 'react-firebase-hooks/auth'
import firebase from "../libs/firebase";
import {useNavigate} from 'react-router-dom'

interface AuthenticatedWrapperProps {
    children: ReactNode
}

export default function AuthenticatedWrapper(props: AuthenticatedWrapperProps) {
    const [user, loading] = useAuthState(firebase.auth)
    const navigate = useNavigate()

    useEffect(() => {
        if (!loading && !user) {
            navigate('/')
        }
    }, [user, loading])
    
    if(loading) return <p>Loading...</p>

    return props.children
}