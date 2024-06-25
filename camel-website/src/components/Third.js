import React from 'react'
import Section from './Section';
import painting1 from"../assets/03/img1.jpg"
import painting2 from"../assets/03/img2.jpg"
import painting3 from"../assets/03/img4.jpeg"
import { PiArrowSquareOutBold } from "react-icons/pi";
import featureBadge from "../assets/03/feature-artist-badge (1).png"
import artistImg from "../assets/03/IMG_20240504_083715_505.jpeg"


const Third = () => {
  return (
    <Section 
    className="pt-[6rem]  -mt-[5.25]"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="fifth"
    >

        <section id="main-box" className='relative bg-white border-radius-2 xl:p-[1.5rem] lg:p-[1rem] lg:mt-[5rem] md:mt-[2rem] z-1 xl:ml-[2rem] xl:mr-[2rem] md:ml-[1rem] md:mr-[1rem]'>

                <div id="heading2" className='flex flex-col justify-center lg:gap-[0.85rem] md:gap-[0.5rem] lg:pb-[.5rem] md:pb-[.25rem]'>
                    <h1 className='title lg:text-[5rem] md:text-[3.5rem] font-black tracking-wider text-primary-text dark:text-dark-primary-text '>Featured Artist</h1>
                    <h3 id="date"
                    className=' text-secondary-text font-bold'>
                        May 2024
                    </h3>
                </div>

                <div id="main-container2" className='flex md:flex-row items-center xl:gap-[2.75rem] lg:gap-[1.5rem] md:gap-[1rem] mx-auto'>

                    <div id="profile" className='flex flex-col items-center p-0 m-0 lg:gap-[.2rem] md:gap-[.05rem]'>

                        <div >
                            < div id="artist" className='relative'>
                                <img id="inside" src={ artistImg} className="xl:w-[12.5rem] xl:h-[12.5rem] xl:p-[1.75rem] 
                                lg:w-[8rem] lg:h-[8rem] lg:p-[.9rem] 
                                md:w-[7.5rem] md:h-[7.5rem] md:p-[.8rem] 
                                rounded-full"
                                 alt=''/>
                                <img id="outside"src={featureBadge} className='absolute inset-0 rounded-full object-cover xl:w-[12.5rem] xl:h-[12.5rem] 
                                lg:w-[8rem] lg:h-[8rem] 
                                md:w-[7rem] md:h-[7rem]'
                                 alt=''></img>
                            </div>

                    </div>

                    <div id="details">
                            <div className='mt-0'>
                                <h3 id="name" className='text-primary-text dark:text-dark-primary-text font-bold xl:text-[2rem] 
                                lg:text-[1.25rem]
                                md:text-[1rem]
                                '>Barsha Barik</h3>
                            </div>

                            <div >
                                <h5 id="feature" className='text-secondary-text text-semibold xl:text-[1.25rem] 
                                lg:text-[.9rem]
                                md:text-[.75rem]'>
                                    Mixed Media Artist
                                </h5>
                            </div>
                    </div>

                    <div id="button-div">
                        <button id="button" className='group rounded-full xl:h-10 lg:h-8 md:h-7 md:pl-2 md:pr-2 flex items-center space-x-0.5 bg-secondary-text hover:bg-red-800 hover:text-white'>
                            <span className='xl:text-xl lg:text-[.85rem] md:text-[.7rem] font-bold text-white'>View profile</span>
                            <div className='flex items-center translate-x-1 transition-all duration-300'>
                                <PiArrowSquareOutBold className='xl:w-5 xl:h-5 text-white' />
                            </div>
                        </button>
                    </div>


                    </div>

                    <div id="imgbox" className='flex flex-row items-center justify-between
                     xl:gap-[2rem] lg:gap-[1rem] md:gap-[1rem] px-0 lg:mx-auto md:mx-auto '>
                            <div>
                                <img id="img" src={painting3} className='xl:w-[19.5rem] xl:h-[19.5rem] ml-1 mr-1
                                lg:w-[16rem] lg:h-[16rem]
                                md:w-[12rem] md:h-[12rem]
                                ' alt=""></img>
                            </div>
                            <div>
                                <img id="img" src={painting1} className="mt-5 xl:w-[19.5rem] xl:h-[19.5rem] ml-1 mr-1
                                lg:w-[16rem] lg:h-[16rem]
                                md:w-[12rem] md:h-[12rem]
                                " alt=""></img>
                            </div>
                            <div>
                                <img id="img"src={painting2} className="xl:w-[19.5rem] xl:h-[19.5rem] ml-1 mr-1
                                lg:w-[16rem] lg:h-[16rem]
                                md:w-[12rem] md:h-[12rem]
                                " alt=''></img>
                            </div>
                    </div>

                </div>

        </section>
        
    </Section>
  );
};

export default Third