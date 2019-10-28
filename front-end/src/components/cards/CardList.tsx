import React from 'react';
import './CardList.scss';
import CardItem from './CardItem';

type CardListProp = {
    listTitle: string;
}

function CardList({listTitle}: CardListProp) {
    return(
        <div className = 'CardList'>
            <h1>{listTitle}</h1>
            <ul>
                <CardItem 
                    img = ''
                    category = '언어/외국어' 
                    title = '왕초보 영어회화 스터디'
                    place = '강남'
                    time = '오후 7시 ~ 오후 8시'
                    price = '무료'
                    views = {0}
                    comments = {0}
                     />
                <CardItem 
                    img = ''
                    category = '언어/외국어' 
                    title = '왕초보 영어회화 스터디'
                    place = '강남'
                    time = '오후 7시 ~ 오후 8시'
                    price = '무료'
                    views = {0}
                    comments = {0}
                     />
                    <CardItem 
                    img = ''
                    category = '언어/외국어' 
                    title = '왕초보 영어회화 스터디'
                    place = '강남'
                    time = '오후 7시 ~ 오후 8시'
                    price = '무료'
                    views = {0}
                    comments = {0}
                     />
                                         <CardItem 
                    img = ''
                    category = '언어/외국어' 
                    title = '왕초보 영어회화 스터디'
                    place = '강남'
                    time = '오후 7시 ~ 오후 8시'
                    price = '무료'
                    views = {0}
                    comments = {0}
                     />
                                         <CardItem 
                    img = ''
                    category = '언어/외국어' 
                    title = '왕초보 영어회화 스터디'
                    place = '강남'
                    time = '오후 7시 ~ 오후 8시'
                    price = '무료'
                    views = {0}
                    comments = {0}
                     />
                                         <CardItem 
                    img = ''
                    category = '언어/외국어' 
                    title = '왕초보 영어회화 스터디'
                    place = '강남'
                    time = '오후 7시 ~ 오후 8시'
                    price = '무료'
                    views = {0}
                    comments = {0}
                     />
            </ul>
        </div>
    )
}

export default CardList;