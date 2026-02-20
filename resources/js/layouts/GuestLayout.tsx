import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

interface GuestLayoutProps {
    children: React.ReactNode;
}

const GuestLayout: React.FC<GuestLayoutProps> = ({ children }) => {
    return (
        <div className="guest-layout">
            <Header />
            <main className="guest-layout__main">{children}</main>
            <Footer />
        </div>
    );
};

export default GuestLayout;
