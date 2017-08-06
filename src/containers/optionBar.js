import React from 'react';

const optionBar = () => (
     <div className="options-bar">
        <select className="span2 pull-left">
           <option>Sort By</option>
           <option>Date</option>
           <option>Popular</option>
           <option>Highest Rating</option>
           <option>Lowest Rating</option>
        </select>
        <span><strong>12,487</strong> Titles Found</span>
    </div>
);

export default optionBar;
