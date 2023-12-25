import styles from '../style';
import { discount, robot } from '../assets';

const Hero = () => {
  return (
  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
       <img src={discount} alt='discount' className='w-[32px] h-[32px]' />
      <p className={`${styles.paragraph} ml-2`}>Save 30% on Your One-Month Subscription</p>
      </div>
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-gradient ss:leading-[100px] ss:leading-[75px]'>Future 
        <br className='sm:block hidden' /> Payments<br className='sm:block hidden' /></h1>
      </div>
      <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-gradient ss:leading-[100px] ss:leading-[75px] w-full'>Innovation.</h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our experts employ a specialized methodology to pinpoint credit cards aligning with your needs, analyzing factors such as annual percentage rates and fees for comprehensive suitability assessment.</p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} alt='network' className='w-[100%] h-[100%] relative z-[5] rounded-full'/>
      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink-gradient' />
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white-gradient' />
      <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 gold-gradient' />
    </div>
  </section>
  )
}

export default Hero