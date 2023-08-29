import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Topbar from '../../components/shared/Topbar'
// import LeftSidebar from '../../components/shared/LeftSidebar'
import Bottombar from '../../components/shared/Bottombar'
import RightSidebar from '../../components/shared/RightSidebar'


export const metadata = {
  title: 'The Running Quail',
  description: 'A Morongo Basin Community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        <Topbar />

        {/* FLEX LAYOUT */}
        <div className="flex sm:flex-row flex-col-reverse">
        <main className="md:w-4/5 w-[100%]">
        {children}
        </main>
        <div className="md:w-1/5 w-[100%]">
        <RightSidebar />  
        </div>
        </div>
        <Bottombar />
        </body>
    </html>
    </ClerkProvider>
  )
}
