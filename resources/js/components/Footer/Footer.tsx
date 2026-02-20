import React from 'react';
import { Link } from '@inertiajs/react';
import Logo from '@/components/ui/Logo/Logo';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <Logo variant="light" />
                        <p className="footer__description">
                            A scalable, production-ready boilerplate built with
                            Laravel, React, and TypeScript. Ship your next project
                            faster.
                        </p>
                    </div>

                    <div>
                        <h4 className="footer__column-title">Product</h4>
                        <ul className="footer__links">
                            <li>
                                <Link href="/#features" className="footer__link">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/#about" className="footer__link">
                                    About
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/dev-dhairya/laravel-react-boilerplate"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer__link"
                                >
                                    Documentation
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="footer__column-title">Account</h4>
                        <ul className="footer__links">
                            <li>
                                <Link href="/login" className="footer__link">
                                    Sign In
                                </Link>
                            </li>
                            <li>
                                <Link href="/register" className="footer__link">
                                    Create Account
                                </Link>
                            </li>
                            <li>
                                <Link href="/profile" className="footer__link">
                                    Profile
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="footer__column-title">Legal</h4>
                        <ul className="footer__links">
                            <li>
                                <Link href="/terms" className="footer__link">
                                    Terms &amp; Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="footer__link">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="footer__link">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        &copy; {currentYear} Dhairya Bhavsar. All rights reserved.
                    </p>
                    <div className="footer__social">
                        <a
                            href="https://github.com/dev-dhairya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__social-link"
                            aria-label="GitHub"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
