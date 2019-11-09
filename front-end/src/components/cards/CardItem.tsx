import React from 'react';
import './CardItem.scss';

type CardItemProps = {
    img: string;
    category: string;
    title: string;
    people: string;
    place: string;
    day: string;
    time: string;
    price: string;
    views: number;
    comments: number;
};

function CardItem({img, title, category, place, people, day, time, price, views, comments}: CardItemProps) {
    return(
        <div className = 'CardItem'>
            <img className = 'card-photo' src = {img} alt = 'thumbnail'></img>
            <div className = 'card-content'>
                <p className = 'category'>{category}</p>
                <h2>{title}</h2>
                <span className = 'detail'><span role = 'img' aria-label = 'mapPin'>📍</span>{place}</span>
                <span className = 'detail'><span role = 'img' aria-label = 'calendar'>🗓️</span>{day}</span>
                <span className = 'detail'><span role = 'img' aria-label = 'elevenO’Clock'>🕚</span>{time}</span>
                <span className = 'detail'><span role = 'img' aria-label = 'moneyBag'>💰</span>{price}</span>
                <span className = 'detail'><span role = 'img' aria-label = 'people'>👨‍👩‍👧‍👦</span>{people? `${people} 명` : '제한없음'}</span>
                <div className = 'etc-wrapper'>
                    <div className = 'margin-left'>
                        <span className = 'subinfo'>조회수 {views}</span>
                        <span className = 'subinfo-dot'>댓글 {comments}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardItem;