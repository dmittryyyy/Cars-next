'use client';

import { ButtonProps } from '@/types';

const Button = ({ title, containerStyles, handleClick, buttonType }: ButtonProps) => {
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
        </button>
    );
};

export default Button;
