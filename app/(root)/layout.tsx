
import Header from '@/components/Header'
import { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (   
      <div className='flex flex-col h-full w-full mx-auto bg-black'>
        <Header />
        {children}
      </div>

  )
}

export default layout