import { useState } from 'react';
import styles from '../page.module.css'

const [position, setPosition] = useState({
    x: 0,
    y: 0,
    z: 999
})

const dragStart = event => {
    console.log('dragStart');
    e.preventDefault();
}

const dragEnd = event => {
    console.log('dragEnd');
    e.preventDefault();
}

const dragOver = event => {
    console.log('dragOver');
    e.preventDefault();
}

export default function BoardItem({content}) {
    return (
        <div 
            className={styles.boardItem} 
            draggable
            onDragStart={e => dragStart(e)}
            onDragEnd={e => dragEnd(e)}
            onDragOver={e => dragOver(e)}
        >
            { content } 
        </div>
    )
}