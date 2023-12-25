import React from 'react';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';
import styles from '../style';

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
      <div className='flex-1 flex flex-col justify-start mr-10'>
        <img src={logo} alt='holyentgold' className='object-contain w-[266px] h-[72px]'/>
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>Transforming payments: seamless, trustworthy, and fortified with advanced security measures.</p>
      </div>
      <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
        {footerLinks.map((footerLink)=>(
          <div key={footerLink.key} 
          className='flex flex-col ss:my-0 my-4 min-w-[158px]'>
            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
              {footerLink.title}
            </h4>
            <ul className='list-none mt-4'>
              {footerLink.links.map((link, index)=>(
                <a href={link.link}
                target="_blank"
                rel="noopener noreferrer">
                <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links - 1 ? 'mb-4' : 'mb-0' }`}>
                  {link.name}
                </li>
                </a>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div>
      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#FFD700]'>
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
          2023 Holyentgold Concept. All Right Reserved.
        </p>
        <div className='flex flex-row md:mt-0 mt-6'>
    {socialMedia.map((social, index) => (
       <a
          key={social.id}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
        >
        <img
         src={social.icon}
         alt={social.id}
         className="w-[21px] h-[21px] object-contain"
       />
       </a>
     ))}

        </div>
      </div>
    </section>
  )
}

export default Footer