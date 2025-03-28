import React from 'react'
import { Separator } from './ui/separator'
import { BentoGrid, BentoGridItem } from './BentoGrid'
import Link from 'next/link'

const items = [
    {
        title: 'Darkwood Việt Hóa',
        description: '',
        imgUrl: '/project/darkwoodvh.jpg',
        linkProj: 'https://www.facebook.com/photo.php?fbid=257370306824160&id=100076535763564&set=a.174677478426777'
    },
    {
        title: 'Terraria Việt Hóa',
        description: 'This is item 1',
        imgUrl: '/project/terrariaVH.png',
        linkProj: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3014659541&tscn=1743130414'
    },
    {
        title: 'Laptop Shop',
        description: 'This is item 1',
        imgUrl: '/project/laptopshop.png',
        linkProj: 'https://github.com/LQCpaka/LaptopShop?tab=readme-ov-file'
    },
    {
        title: 'Thư viện trường đại học',
        description: 'This is item 1',
        imgUrl: '/project/project-preview.png',
        linkProj: 'https://vercel.com/le-quc-cns-projects/university-library'
    },
    {
        title: 'Prime WorkShop',
        description: 'This is item 1',
        imgUrl: '/project/primeworkshop.png',
        linkProj: 'https://prime-workshop.vercel.app/'
    }
]

const MyProj = () => {
    return (
        <div className='text-white mt-7'>
            <h2 className='text-blue-400 inline-block font-regular text-3xl mb-8'>
                My Project <Separator className='h-[5px] mt-4' />
            </h2>
            <div className='mt-6'>
                <BentoGrid>
                    {items.map((item, index) => (
                        <BentoGridItem
                            key={index}
                            title={item.title}
                            // description={item.description}
                            header={
                                <Link href={item.linkProj} target="_blank" rel="noopener noreferrer" className='aspect-video w-full overflow-hidden rounded-xl'>
                                    <img src={item.imgUrl} className='w-full h-full object-cover' />
                                </Link>
                            }
                            link={item.title}
                            className={index === 3 || index === 6 ? 'md:col-span-2' : ''}
                        />
                    ))}
                </BentoGrid>
            </div>

        </div>
    )
}

export default MyProj