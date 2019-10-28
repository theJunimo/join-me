import React from 'react';

type WritingForm = {
    title: string;
}

function WritingForm({title}: WritingForm) {
    return(
        <>
        <h2>{title}</h2>
        <form>
        
        </form>
        </>
    )
}

export default WritingForm;