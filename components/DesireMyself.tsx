import React from 'react'
import ModelScene from '@/components/ModelScene'



const DesireMyself = () => {
    return (
        <div className=' max-w-5xl mx-auto text-white mt-12 md:mt-24'>
            <div className='flex flex-col-reverse  md:flex-row items-center justify-between gap-10 mx-5'>
                <div className='flex-grow flex-shrink basis-[60%]'>
                    <span className='text-4xl text-center'>
                        <span className='flex items-center font-regular text-blue-500 text-4xl md:text-7xl'>Welcome.</span>
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
                        <p className='text-justify text-xl md:text-3xl font-light mt-2 md:mt-4 text-gray-400'>Chào mừng bạn đã đến với chiếc Portfolio của mình! Mình là một Web Developer. Cứ thoải mái tham quan nha. Nhân tiện thì bạn có thể drag cái máy vi tính của mình đó. Coi chừng bể nha.</p>
                    </span>

                </div>
                <div className='flex-grow flex-shrink basis-[40%] mx-auto justify-center'>
                    <ModelScene />
                </div>
            </div>
        </div>
    )
}

export default DesireMyself