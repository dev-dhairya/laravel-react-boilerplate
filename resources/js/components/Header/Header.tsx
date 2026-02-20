import React, { useState, useRef, useEffect } from 'react';
import { Link, usePage, router } from '@inertiajs/react';
import Logo from '@/components/ui/Logo/Logo';
import type { PageProps } from '@/types';

const Header: React.FC = () => {
    const { auth } = usePage<PageProps>().props;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const userMenuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
                setUserMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'Features', href: '/#features' },
        { label: 'About', href: '/#about' },
        { label: 'Contact Us', href: '/contact' },
    ];

    const handleLogout = () => {
        router.post('/logout');
    };

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <Logo />
                </div>

                <nav className="header__nav">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="header__nav-link"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="header__actions">
                    {auth.user ? (
                        <div className="header__user-menu" ref={userMenuRef}>
                            <button
                                className="header__user-trigger"
                                onClick={() => setUserMenuOpen(!userMenuOpen)}
                                aria-expanded={userMenuOpen}
                                aria-haspopup="true"
                            >
                                <span className="header__user-avatar">
                                    {auth.user.name.charAt(0).toUpperCase()}
                                </span>
                                <span className="header__user-name">
                                    {auth.user.name}
                                </span>
                                <svg
                                    className={`header__user-chevron ${userMenuOpen ? 'header__user-chevron--open' : ''}`}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </button>

                            {userMenuOpen && (
                                <div className="header__dropdown">
                                    <div className="header__dropdown-header">
                                        <span className="header__dropdown-name">
                                            {auth.user.name}
                                        </span>
                                        <span className="header__dropdown-email">
                                            {auth.user.email}
                                        </span>
                                    </div>
                                    <div className="header__dropdown-divider" />
                                    <Link
                                        href="/profile"
                                        className="header__dropdown-item"
                                        onClick={() => setUserMenuOpen(false)}
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                        Profile
                                    </Link>
                                    <div className="header__dropdown-divider" />
                                    <button
                                        className="header__dropdown-item header__dropdown-item--danger"
                                        onClick={handleLogout}
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                            <polyline points="16 17 21 12 16 7" />
                                            <line x1="21" y1="12" x2="9" y2="12" />
                                        </svg>
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link href="/login" className="header__nav-link">
                            Sign In
                        </Link>
                    )}

                    <button
                        className="header__mobile-toggle"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            {mobileMenuOpen ? (
                                <>
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </>
                            ) : (
                                <>
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="18" x2="21" y2="18" />
                                </>
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            <div
                className={`header__mobile-menu ${
                    mobileMenuOpen ? 'header__mobile-menu--open' : ''
                }`}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="header__mobile-link"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {link.label}
                    </Link>
                ))}
                {auth.user ? (
                    <>
                        <div className="header__mobile-divider" />
                        <Link
                            href="/profile"
                            className="header__mobile-link"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Profile
                        </Link>
                        <button
                            className="header__mobile-link header__mobile-link--danger"
                            onClick={() => {
                                setMobileMenuOpen(false);
                                handleLogout();
                            }}
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <Link
                        href="/login"
                        className="header__mobile-link"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Sign In
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;
