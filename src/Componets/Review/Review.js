import React from 'react';

const Review = (props) => {
    const {body, title, id} = props;
    return (
        <div>
            <small> Name : {body}</small>
        </div>
    );
};

export default Review;