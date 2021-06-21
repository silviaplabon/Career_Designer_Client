import React from 'react';
import CategoryImageShow from '../CategoryImageShow/CategoryImageShow';
const BrowseJobShow = ({category}) => {
    return (
        <div className="card">
            <p>{category}</p>
            <CategoryImageShow category={category}></CategoryImageShow>
        </div>
    );
};

export default BrowseJobShow;