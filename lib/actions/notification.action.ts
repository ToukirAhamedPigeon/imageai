// Import web-push module
import webpush from 'web-push'

type WebPushSubscription = {
  endpoint: string
  expirationTime: number | null
  keys: {
    p256dh: string
    auth: string
  }
}

// Set VAPID details
webpush.setVapidDetails(
  '<mailto:your-email@example.com>',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
)

let subscription: WebPushSubscription | null = null

// Convert PushSubscription to WebPushSubscription
function convertToWebPushSubscription(pushSubscription: PushSubscription): WebPushSubscription {
  return {
    endpoint: pushSubscription.endpoint,
    expirationTime: pushSubscription.expirationTime,
    keys: {
      p256dh: pushSubscription.getKey('p256dh')?.toString() ?? '',
      auth: pushSubscription.getKey('auth')?.toString() ?? ''
    }
  }
}

// Subscribe the user (reshaping the subscription)
export async function subscribeUser(pushSubscription: PushSubscription) {
  subscription = convertToWebPushSubscription(pushSubscription)
  // In a production environment, you would store this in a database
  return { success: true }
}

// Unsubscribe the user (clear the subscription)
export async function unsubscribeUser() {
  subscription = null
  // Remove from the database in production
  return { success: true }
}

// Send notification to the user
export async function sendNotification(message: string) {
  if (!subscription) {
    throw new Error('No subscription available')
  }

  try {
    await webpush.sendNotification(
      subscription,
      JSON.stringify({
        title: 'Test Notification',
        body: message,
        icon: '/icon.png',
      })
    )
    return { success: true }
  } catch (error) {
    console.error('Error sending push notification:', error)
    return { success: false, error: 'Failed to send notification' }
  }
}
