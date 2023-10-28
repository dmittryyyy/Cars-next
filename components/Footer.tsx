import Link from 'next/link';

import Image from 'next/image';

import { footerLinks } from '@/constants';

const Footer = () => {
    return (
        <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
            <div className="flex max-md:flex-col flex-wrap
                            justify-between  gap-5 sm:px-16
                            px-6 py-10">
                <div className="flex flex-col justify-start gap-6">
                    <Image
                        src='/logo.svg'
                        alt='Логотип'
                        width={118}
                        height={18}
                        className='object-contain flex self-start'
                    />
                    <p className="text-base text-gray-700">
                        CarHub 2023 <br />
                        Все права защищены &copy;
                    </p>
                </div>

                <div className="footer__links">
                    { footerLinks.map((object) => (
                        <div key={object.title} className='footer__link'>
                            <h3 className='font-bold'>{ object.title }</h3>
                            {object.links.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.url}
                                    className='text-gray-500'
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-between items-center
                            flex-wrap mt-10 border-t border-gray-100
                            sm:px-16 px-6 py-10">
                <p className="text-gray-500">
                    @2023 CurHub. All rights reserved
                </p>
                <div className="footer__copyrights-link">
                    <Link href='/' className='text-gray-500'>
                        Политика конфиденциальности
                    </Link>
                    <Link href='/' className='text-gray-500'>
                        Условия эксплуатации
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
