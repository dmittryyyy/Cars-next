import { MouseEventHandler } from 'react';

export interface ButtonProps {
    title: string;
    containerStyles?: string;
    buttonType?: 'button' | 'submit';
    handleClick?:
        MouseEventHandler<HTMLButtonElement>;
}

export interface FilterProps {
    title: string;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}
