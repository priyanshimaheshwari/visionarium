import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ConvexClientProvider } from '@/components/providers/convex-provider'
import { Toaster } from 'sonner'
import { ModalProvider } from '@/components/providers/modal-provider'
import { EdgeStoreProvider } from '@/lib/edgestore'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Visionarium',
  description: 'Connected workspace',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
        <ThemeProvider 
        attribute='class'
        defaultTheme='dark'
        enableSystem
        disableTransitionOnChange
        storageKey='visionarium-theme-2'>
          <Toaster position='bottom-center' />
          <ModalProvider /> 
          {children}
        </ThemeProvider>
        </EdgeStoreProvider>
        </ConvexClientProvider>
       </body>
    </html>
  )
}
