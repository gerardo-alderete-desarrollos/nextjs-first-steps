import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'About Page',
  description: 'About por vercel',
  keywords: ['About Page', 'Gerardo', 'informacion...']
}

export default function AboutPage() {
    
    return (
        <>
        <span className="text-7xl">About page</span>
        </>
    )
}