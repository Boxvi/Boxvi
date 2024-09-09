import Image from 'next/image';
import BannerLayout from "../Common/BannerLayout";
import Cheems from '../../public/images/chems.jpg'

const Banner = () => {
    return (
        <Image className='h-4000' src={Cheems} alt='profile picture' />
    )

  //      <BannerLayout>
//
  //          <div className="absolute inset-0 z-20 flex flex-col items-center py-6 justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
//
  //          </div>
  //      </BannerLayout>
  //  )

}

export default Banner;