import React from 'react';

import '../preview-collection/preview-collection.styles.scss'


const PreviewCollection = ({title,items}) => (
    <div className="preview-collection">
        <h1 className="title">{title}</h1>
        <div className="preview">
            {items.map((item)=> (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    </div>
)


export default PreviewCollection;