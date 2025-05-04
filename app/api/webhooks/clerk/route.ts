import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { NextRequest } from 'next/server'
import {createUser, deleteUser, updateUser} from '@/lib/actions/user.action'

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req)

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data
    const eventType = evt.type
    console.log(`Received webhook with ID ${id} and event type of ${eventType}`)
    console.log('Webhook payload:', evt.data)
    if (evt.type === 'user.created') {
        console.log('userId:', evt.data.id)
        await createUser({
            clerkId: evt.data.id,
            email: evt.data.email_addresses[0].email_address,
            firstName: evt.data.first_name || '',
            lastName: evt.data.last_name || '',
            username: evt.data.username || '',
            photo: evt.data.image_url,
        })
    }

    if (evt.type === 'user.updated') {
        console.log('userId:', evt.data.id)
        await updateUser(evt.data.id, {
            firstName: evt.data.first_name || '',
            lastName: evt.data.last_name || '',
            username: evt.data.username || '',
            photo: evt.data.image_url,
        })
    }

    if (evt.type === 'user.deleted') {
        console.log('userId:', evt.data.id)
        await deleteUser(evt.data.id!)
    }

    return new Response('Webhook received', { status: 200 })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error verifying webhook', { status: 400 })
  }
}