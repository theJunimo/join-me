import React from 'react';
import './Filter.scss';
import SelectBox from 'components/common/selectBox/SelectBox';

type FilterProps = {
    onChange: (category: string) => void;
}

function Filter({onChange}: FilterProps) {
    return(
        <div>
            <SelectBox name = '모든 카테고리' optionList = {['모든 카테고리', '']} onChange = {onChange}/>
        </div>
    )
}

export default Filter;