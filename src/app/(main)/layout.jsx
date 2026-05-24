import Banner from '@/component/Banner';
import PopularSection from '@/component/Shared/PopularSection';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div>
            <Banner></Banner>
            <PopularSection></PopularSection>
            {children}
        </div>
    );
};

export default MainLayout;