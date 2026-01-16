'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function loginWithEmail(email: string) {
    const supabase = await createClient()

    const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
            // shouldRedirect: false, // for magic link without clicking? No, typically magic link sends email.
            // emailRedirectTo: '...' // need to know base url, usually process.env.NEXT_PUBLIC_SITE_URL or request origin
            shouldCreateUser: true,
        }
    })

    if (error) {
        console.error('Error logging in:', error)
        return { error: error.message }
    }

    // Assuming magic link sent, we might redirect to a verify page or just return success
    // return redirect('/verify')
    return { success: true }
}

export async function signOut() {
    const supabase = await createClient()
    await supabase.auth.signOut()
    revalidatePath('/', 'layout')
    redirect('/login')
}
