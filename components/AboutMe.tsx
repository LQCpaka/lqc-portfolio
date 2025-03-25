import React from 'react'
import { Separator } from './ui/separator'

const AboutMe = () => {
    return (
        <div className='text-white mt-28 md:mt-0'>
            <h2 className='text-blue-400 inline-block font-bold text-3xl mb-8'>
                About me <Separator className='h-[2px]' />
            </h2>
            <div className=''>
                <p className='flex text-2xl font-light text-gray-300 text-justify'>
                    Mình tên là Lê Quốc Cần, mình sinh năm 2003. Mình có một niềm đam mê với lập trình và game.
                    Đối với mình, việc đi ra ngoài dạo chơi hoặc việc ngủ cũng là thứ mà mình hứng thú hơn nếu mình không chọn chơi game hay lập trình.
                    Mình có niềm đam mê với lập trình mày mò, vọc vạch, cũng coi là có một số sản phẩm riêng từ đó, cũng đã có vài nghìn người sử dụng sản phẩm của mình, không nhiều nhưng nó là rất lớn đối với mình.
                    Game, mình không chơi nhiều game, mình enjoy nhiều hơn với việc chơi các thể loại game cày cuốc như Diablo, Otherworld Legends, Path Of Exile, và tự game mình yêu thích nhất đó là Warframe, nói
                    hơi nghiện nhưng thật sự mình đã từng bỏ rất nhiều thời gian vào tựa game này. Hehe, đây là sơ lượt về bản thân mình.
                </p>
            </div>
        </div>
    )
}

export default AboutMe