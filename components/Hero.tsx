'use client';

import Image from 'next/image';

import { Button } from '@/components/index';

const Hero = () => {
    const handleScroll = () =>{

    }

    return (
        <div className='hero'>
            <div className="flex-1 pt-36 padding-x">
                <h1 className='hero__title'>
                    Найдите, забронируйте или арендуйте автомобиль — быстро и легко!
                </h1>

                <p className='hero__subtitle'>
                    Оптимизируйте свой опыт аренды автомобиля
                    с помощью нашего простого процесса бронирования.
                </p>

                <Button
                    title='Смотреть автомобили'
                    containerStyles='bg-primary-blue text-white rounded-full mt-10'
                    handleClick={ handleScroll }
                />
            </div>

            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src='/hero.png' alt='Автомобиль'
                        fill className='object-contain'
                    />
                </div>
                <div className="hero__image-overlay" />
            </div>
        </div>
    );
};

export default Hero;
