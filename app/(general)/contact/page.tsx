import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'Contact por vercel',
  keywords: ['Contact Page', 'Gerardo', 'informacion...']
}

export default function ContactPage() {
    return(
        <>
        <span className="text-7xl">Contact Page</span>
        </>
    )
}