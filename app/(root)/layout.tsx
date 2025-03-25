
import Header from '@/components/Header'
import { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (   
      <div className='flex flex-col w-full mx-auto bg-black'>
        <Header />
        <main className='root-container'>
          <div className='w-full mx-auto'>
            <div className='mt-10 pb-20'>{children}</div>
          </div>
        </main>
      </div>

  )
}

export default layout