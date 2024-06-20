"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ForgotPasswordCard from '@repo/ui/components/ForgotPasswordCard';
import { ForgotPassword } from '../ actions/forgot-password';


export default function ForgotPasswordClient() {
    const router = useRouter();
    const [error, setError] = useState<string | undefined>('')
    const [success, setSuccess] = useState<string | undefined>('')
    return (
        <ForgotPasswordCard
            errorMessage={error}
            successMessage={success}
            resetFunction={ForgotPassword}
            backFunction={()=>{router.push('/auth/login')}}
        />
    )
}