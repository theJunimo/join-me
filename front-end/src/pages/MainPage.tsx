import React from 'react';
import MainTemplate from 'components/main/MainTemplate';
import MainBanner from 'components/main/MainBanner';
import CardList from 'components/cards/CardList';
import WideBanner from 'components/main/WideBanner';

function MainPage() {
    return (
        <MainTemplate>
            <MainBanner/>
            <CardList listTitle = '새로운 스터디'/>
            <WideBanner text = '더 많은 스터디가 궁금하다면?' buttonText= '스터디 찾기'/>
        </MainTemplate>
    )
}

export default MainPage;