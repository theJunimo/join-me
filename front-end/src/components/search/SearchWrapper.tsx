import React, {useState, useCallback} from 'react';
import Filter from './filter/Filter';
import FilteredList from './list/FilteredLIst';

function SearchWrapper() {
    const [filter, setFilter] = useState({
        category: 'all',
    })

    const handleChange = useCallback((category) => {
        setFilter({
            ...filter,
            category
        })
    }, [filter]);

    return(
        <>
        <Filter onChange = {handleChange}/>
        <FilteredList />
        </>
    );
}

export default SearchWrapper;