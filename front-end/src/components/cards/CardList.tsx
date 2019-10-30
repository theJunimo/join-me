import React from 'react';
import './CardList.scss';
import CardItem from './CardItem';

type CardListProp = {
    listTitle: string;
}

function CardList({listTitle}: CardListProp) {
    const dummy = [
        {
            img: 'https://t1.daumcdn.net/cfile/tistory/2650993A56E182A80F',
            category: '언어/외국어',
            title: '왕초보 영어회화 스터디',
            people: 5,
            place: '강남역 토즈',
            day: '매주 금요일',
            time: '오후 7시 ~ 오후 8시',
            price: '무료',
            views: 40,
            comments: 2 
        },
        {
            img: 'https://t1.daumcdn.net/cfile/tistory/2631EA3C56D4DB600B',
            category: '언어/외국어',
            title: '중급 영어회화 스터디',
            people: 3,
            place: '홍대입구역 장소 미정',
            day: '매주 토요일',
            time: '오후 9시 ~ 오후 10시',
            price: '2,000원',
            views: 100,
            comments: 0 
        },
        {
            img: 'https://cdn.dribbble.com/users/929787/screenshots/4093717/busy.jpg',
            category: 'IT/프로그래밍',
            title: '모여서 각자 코딩하기',
            people: 5,
            place: '신촌 장소 추후 결정',
            day: '매주 일요일',
            time: '오전 9시 ~ 오후 12시',
            price: '5,000원',
            views: 300,
            comments: 5 
        },
        {
            img: 'https://ko.reactjs.org/logo-og.png',
            category: 'IT/프로그래밍',
            title: '리액트 공부하실 분',
            people: 4,
            place: '강남역 할리스커피',
            day: '매주 일요일',
            time: '오전 9시 ~ 오후 1시',
            price: '5,000원',
            views: 123,
            comments: 2 
        },
        {
            img: 'https://www.lifewire.com/thmb/P_0Es0IRw8Ii4CeGe9r6pciutVc=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/romance-books-a86afec4c8fa46249fbb1c19568b179e.png',
            category: '독서',
            title: '자유 독서 토론 스터디',
            people: 2,
            place: '건대입구 스타벅스',
            day: '매주 일요일',
            time: '오후 12시 ~ 오후 2시',
            price: '무료',
            views: 500,
            comments: 2 
        },
        {
            img: 'https://images.velog.io/post-images/dvmflstm/36296210-fa20-11e9-9ef1-e719e1b7035c/algorithm-2.png',
            category: 'IT/프로그래밍',
            title: '퇴근 후 알고리즘 스터디 하실 분',
            people: 0,
            place: '신촌 장소 추후 결정',
            day: '매주 화요일, 수요일, 목요일',
            time: '오후 7시 ~ 오후 9시',
            price: '5,000원',
            views: 245,
            comments: 2 
        },
    ]
    return(
        <div className = 'CardList'>
            <h1>{listTitle}</h1>
            <ul>
                {dummy.map((el, idx) => (
                    <CardItem
                        key = {idx}
                        img = {el.img}
                        category = {el.category}
                        title = {el.title}
                        people = {el.people}
                        place = {el.place}
                        day = {el.day}
                        time = {el.time}
                        price = {el.price}
                        views = {el.views}
                        comments = {el.comments}
                    />
                ))}
            </ul>
        </div>
    )
}

export default CardList;