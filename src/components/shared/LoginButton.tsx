'use client'
import {signIn} from 'next-auth/react'

export function LoginButton() {
	return <button onClick={() => signIn('github')}>Войти с GitHub</button>
}
