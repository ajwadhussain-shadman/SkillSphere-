import Banner from '@/component/Banner';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div>
            <Banner></Banner>
            {children}
        </div>
    );
};

export default MainLayout;