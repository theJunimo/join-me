import React, { ReactNode } from 'react';
import './PageTemplate.scss';
import Header from './Header';
import Footer from './Footer';

type PageTemplateProps = {
    children: ReactNode;
}

function PageTemplate({children}: PageTemplateProps) {
    return (
        <div className = 'PageTemplate'>
            <Header 
                logo = 'Join Me!' 
                menus = {[
                    {
                        text: '스터디 찾기',
                        to: 'search'
                    }, {
                        text: '스터디 만들기',
                        to: 'write'
                    }, {
                        text: '로그인/회원가입',
                        to: 'login'
                    }
                    ]}
                />
            {children}
            <Footer/>
        </div>
    )
}

export default PageTemplate;