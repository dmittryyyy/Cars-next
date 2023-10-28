import Link from 'next/link';

import Image from 'next/image';

import Button from './Button';

const Header = () => {
    return (
        <header className='w-full absolute z-10'>
            <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
                <Link href='/' className='flex justify-center items-center'>
                    <Image
                        src='/logo.svg'
                        alt='Логотип'
                        width={118}
                        height={18}
                        className='object-contain'
                    />
                </Link>

                <Button
                    title='Войти'
                    buttonType='button'
                    containerStyles='text-primary-blue rounded-full bg-white min-2-[130px]'
                />
            </nav>
        </header>
    );
};

export default Header;
