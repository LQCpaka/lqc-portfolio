import React from 'react'
import ModelScene from '@/components/ModelScene'



const DesireMyself = () => {
    return (
        <div className=' max-w-5xl mx-auto text-white mt-10'>
            <div className='flex flex-col-reverse  md:flex-row justify-between gap-10 mx-5'>
                <div className='flex-grow flex-shrink basis-[70%]'>
                    <span className='text-4xl text-center text-wrap whitespace-nowrap flex-wrap'>
                        <span className='flex items-center font-light text-blue-500 text-7xl'>Welcome.</span><br />
                        {/* <Typewriter
                            words={[
                                'Xin chào mấy ní, mình là LQC, mình là một lập trình viên.',
                                'Hire mình đi, nghèo quá rùi huhu. T.T',
                                'Nhân tiện, bạn có thể kéo thả máy tính ở phía kia nha :3.'
                            ]}
                            loop={true}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        /> */}
                        <span className='text-justify text-3xl font-light'>Chào mừng bạn đã đến với chiếc Portfolio của mình! Cứ thoải mái tham quan nha.</span>
                    </span>

                </div>
                <div className='flex-grow flex-shrink basis-[30%]'>
                    <ModelScene />
                </div>
            </div>
        </div>
    )
}

export default DesireMyself