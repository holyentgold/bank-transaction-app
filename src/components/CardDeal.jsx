import React from 'react';
import {card} from '../assets';
import stlyes, {layout} from '../style';
import Button from './Button';

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h1 className={stlyes.heading2}>Discover a superior credit card offer
          <br className='sm:block hidden'/> effortlessly with just a few simple steps.</h1>
          <p className={`${stlyes.paragraph} max-w-[470px] mt-5`}>With years of expertise, we've diligently researched and compared 250+ credit cards. 
          Utilize our free tools to effortlessly compare and, upon finding the perfect match, securely navigate to the bank's website.</p>
            <Button styles='mt-10' />
      </div>
      <div className={layout.sectionImg}>
      <img src={card} alt='card' className='w=[100%] h-[100%]' />
      </div>
    </section>
  )
}

export default CardDeal