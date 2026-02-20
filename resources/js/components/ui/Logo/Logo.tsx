import React from 'react';
import { Link } from '@inertiajs/react';

interface LogoProps {
    variant?: 'default' | 'light';
    href?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'default', href = '/' }) => {
    const className = ['logo', variant === 'light' ? 'logo--light' : '']
        .filter(Boolean)
        .join(' ');

    return (
        <Link href={href} className={className}>
            <span className="logo__icon">L</span>
            <span className="logo__text">Laravel</span>
        </Link>
    );
};

export default Logo;
