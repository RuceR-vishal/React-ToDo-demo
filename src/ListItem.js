import React from 'react'
import './ListItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ListItem(props) {
    console.log(props)
    const items = props.items
    const listItem = items.map(x => {
        return <div className='list' key={x.key}>
            <p>
                <input type='text' id={x.key} value={x.text}
                onChange={(e)=>{
                    props.setUpdate(e.target.value, x.key)
                }}></input>
                <span>
                    <FontAwesomeIcon className="faicons"
                        onClick={() => { props.deleteItem(x.key) }}
                        icon="trash" ></FontAwesomeIcon>
                </span>
            </p>
        </div>
    })
    return (
        <div>{listItem}</div>
    )
}

export default ListItem
