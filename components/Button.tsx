'use client';

import { ButtonProps } from '@/types';
import Image from "next/image";

const Button = ({ title, containerStyles, handleClick, buttonType, rightIcon }: ButtonProps) => {
    return (
        <button
            className={`custom-btn ${ containerStyles }`}
            disabled={false}
            type={buttonType || 'button'}
            onClick={() => { handleClick }}
        >
            <span className="flex-1">
                { title }
            </span>
            {rightIcon && (
                <div className='relative w-6 h-6'>
                    <Image src={rightIcon}
                           alt='Иконка'
                           fill
                           className='object-contain'
                    />
                </div>
            )}
        </button>
    );
};

export default Button;
