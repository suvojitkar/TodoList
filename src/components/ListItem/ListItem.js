import React from 'react';
import './ListItem.css';
import FlipMove from 'react-flip-move';


function ListItem(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" key={item.key}>
            <p>
                <input type="text" id={item.key} value={item.text} onChange={(e) => props.editItem(e, item.key)}></input>
                <button className="del" onClick={() => { props.deleteItem(item.key) }} >Del</button>
                </p>
               </div>;
    });
    return (
        <div>
            <FlipMove duration={300} easing="ease-in-out">
                {listItems}
            </FlipMove>
        </div >
    );
}
export default ListItem;