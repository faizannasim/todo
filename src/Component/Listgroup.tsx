import React, { useState } from 'react';

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; 
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectIndex, setSelectIndex] = useState(0); 

  if (!items || !heading || !onSelectItem) {
    throw new Error('ListGroup component requires items, heading, and onSelectItem props');
  }

  return (
    <div>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No items</p> : (
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={selectIndex === index ? 'list-group-item active' : 'list-group-item'}
              key={index}
              onClick={() => {
                setSelectIndex(index);
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListGroup;