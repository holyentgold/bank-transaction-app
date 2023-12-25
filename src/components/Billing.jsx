import React from 'react';
import { apple, bill, google } from '../assets';
import styles, { layout } from '../style'

const billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt='billing' className='w-[100%] h-[100%] relative z-[5]' />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] rounded-full white-gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] rounded-full gold-gradient ' />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Smoothly Manage your <br className='sm:block hidden' /> Billing and Invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Effortlessly navigate financial transactions, 
        ensuring seamless handling of billing and invoicing processes with efficient management and user-friendly tools.
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt='apple store' className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
          <img src={google} alt='play store' className='w-[128px] h-[42px] object-contain cursor-pointer' />
        </div>

      </div>

    </section>
  )
}

export default billing