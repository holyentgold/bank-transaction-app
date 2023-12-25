import React from 'react';
import styles from '../style';
import Button from './Button';

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.marginX}
    ${styles.padding} sm:flex-row flex-col bg-gold-gradient rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Explore our service excellence today!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Unlock global business growth with seamless card payment acceptance worldwide.</p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  )
}

export default CTA