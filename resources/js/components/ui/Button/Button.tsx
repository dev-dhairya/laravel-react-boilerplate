import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    loading?: boolean;
    as?: 'button' | 'a';
    href?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    loading = false,
    className = '',
    disabled,
    as = 'button',
    href,
    ...props
}) => {
    const classNames = [
        'btn',
        `btn--${variant}`,
        size !== 'md' ? `btn--${size}` : '',
        fullWidth ? 'btn--full' : '',
        loading ? 'btn--loading' : '',
        disabled ? 'btn--disabled' : '',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    if (as === 'a' && href) {
        return (
            <a href={href} className={classNames}>
                {children}
            </a>
        );
    }

    return (
        <button
            className={classNames}
            disabled={disabled || loading}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
