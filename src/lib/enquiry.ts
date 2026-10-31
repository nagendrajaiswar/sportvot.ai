// Enquiry routing, as specified by SportVot:
//   Live Sports Production & Broadcasting and General Enquiry / Partnership -> contact@sportvot.com
//   Corporate Events & Sports Tournaments                                   -> sportvotplay@sportvot.com
export type EnquiryTopic = 'production' | 'events' | 'general'

export const ENQUIRY_RECIPIENT: Record<EnquiryTopic, string> = {
  production: 'contact@sportvot.com',
  events: 'sportvotplay@sportvot.com',
  general: 'contact@sportvot.com',
}

export type EnquiryPayload = {
  topic: EnquiryTopic
  to: string
  fields: Record<string, string | string[]>
}

/**
 * Sends the enquiry to the endpoint in VITE_ENQUIRY_ENDPOINT (any service/backend that accepts a JSON POST and
 * emails `to`). Without one configured the form still works end-to-end in the UI but nothing is delivered.
 */
export async function submitEnquiry(payload: EnquiryPayload): Promise<void> {
  const endpoint = import.meta.env.VITE_ENQUIRY_ENDPOINT as string | undefined
  if (!endpoint) {
    console.info('[enquiry] no VITE_ENQUIRY_ENDPOINT set — not delivered', payload)
    return
  }
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error(`Enquiry failed (${res.status})`)
}
