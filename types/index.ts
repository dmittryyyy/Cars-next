import { MouseEventHandler } from 'react';

export interface ButtonProps {
    title: string;
    containerStyles?: string;
    buttonType?: 'button' | 'submit';
    rightIcon?: string;
    isDisabled?: boolean;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface FilterProps {
    title: string;
    options: OptionsProps[],
}

export interface OptionsProps {
    title: string;
    value: string;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface FilterCarProps {
    manufacturer: string;
    model: string;
    fuel: string;
    limit: number;
    year: number;
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
}
