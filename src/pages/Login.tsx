import * as Icon from 'react-icons/fc'
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import firebase from '../libs/firebase'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

export default function Login() {
    const [signIn, user, loading] = useSignInWithGoogle(firebase.auth)
    const navigate = useNavigate()

    useEffect(() => {
        if (!loading && user) {
            navigate('/home')
        }
    }, [user, loading])

    async function handleLogin() {
        await signIn()
    }

    if(loading) return <p>Loading...</p>

    return (
        <div className="h-screen w-full overflow-hidden flex items-center justify-center">
            <div className="w-96">
                <p>Selamat Datang di</p>
                <h1 className="text-4xl mb-8">Sign Of Joy</h1>

                <button onClick={handleLogin} type="button" className="btn bg-neutral-100 text-neutral-900 flex items-center gap-2">
                    <Icon.FcGoogle className='text-2xl' />
                    Masuk dengan Google
                </button>
            </div>
        </div>
    )
}