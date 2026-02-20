import React from 'react';
import Logo from '@/components/ui/Logo/Logo';

interface AuthLayoutProps {
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div className="auth-layout">
            <aside className="auth-layout__sidebar">
                <div className="auth-layout__sidebar-decoration" />
                <div className="auth-layout__sidebar-content">
                    <h2 className="auth-layout__sidebar-title">
                        Welcome to
                        <br />
                        Laravel + React
                    </h2>
                    <p className="auth-layout__sidebar-text">
                        A scalable boilerplate powered by the latest web
                        technologies. Build beautiful, performant applications
                        with confidence.
                    </p>
                </div>
            </aside>

            <div className="auth-layout__content">
                <div className="auth-layout__form-wrapper">
                    <div className="auth-layout__logo">
                        <Logo />
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
