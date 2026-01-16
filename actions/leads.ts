'use server'

import { prisma } from '@/lib/db'
import { revalidatePath } from 'next/cache'

interface SubmitLeadParams {
    fullName: string
    contact: string
    linkedin?: string
}

export async function submitLead(data: SubmitLeadParams) {
    try {
        const lead = await prisma.lead.create({
            data: {
                fullName: data.fullName,
                contact: data.contact,
                linkedin: data.linkedin || null,
            },
        })

        // Optional: Revalidate paths if you list leads somewhere in the admin dashboard
        // revalidatePath('/admin/leads')

        return { success: true, leadId: lead.id }
    } catch (error) {
        console.error('Failed to submit lead:', error)
        return { success: false, error: 'Failed to submit information. Please try again.' }
    }
}
