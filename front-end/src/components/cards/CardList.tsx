import React from 'react';
import './CardList.scss';
import CardItem from './CardItem';
import dummy from 'components/dummy';

type CardListProp = {
    listTitle: string;
}

function CardList({listTitle}: CardListProp) {

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