
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='flex flex-col h-full w-full mx-auto bg-black'>
      <Header />
      {children}
      <Footer />
    </main>

  )
}

export default layout