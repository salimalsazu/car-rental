import Navbar from "@/components/Navbar/Navbar";
import { ReactNode } from "react";
import "../styles/globals.css"

export const metadata = {
  title: 'Car Rental',
  description: 'We thnik your values',
}

interface LayoutProps {
  children: ReactNode;
}


export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="mx-10 lg:mx-40 mt-10">
        <Navbar />

        <main>
          {children}
        </main>

      </body>
    </html>
  )
}
