'use client'
import { signIn } from "next-auth/react"

export default function(){
    return <div>
        <button onClick={() => {
            signIn()
        }}>Sign in</button>
    </div>
}