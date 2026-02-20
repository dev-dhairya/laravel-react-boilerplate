import React from 'react';
import Logo from '@/components/ui/Logo/Logo';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const columns = [
        {
            title: 'Product',
            links: [
                { label: 'Features', href: '/#features' },
                { label: 'Pricing', href: '#' },
                { label: 'Documentation', href: '#' },
            ],
        },
        {
            title: 'Company',
            links: [
                { label: 'About', href: '#' },
                { label: 'Blog', href: '#' },
                { label: 'Careers', href: '#' },
            ],
        },
        {
            title: 'Support',
            links: [
                { label: 'Help Center', href: '#' },
                { label: 'Contact', href: '#' },
                { label: 'Status', href: '#' },
            ],
        },
    ];

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

                    {columns.map((column) => (
                        <div key={column.title}>
                            <h4 className="footer__column-title">{column.title}</h4>
                            <ul className="footer__links">
                                {column.links.map((link) => (
                                    <li key={link.label}>
                                        <a href={link.href} className="footer__link">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        &copy; {currentYear} Laravel. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
