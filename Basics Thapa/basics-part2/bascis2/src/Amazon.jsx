import React from 'react'
import Card from "./Card";


const Amazon = (props) => {
    return(
    <React.Fragment>
    {props.nSeries.map((item) => {
        return(
            <Card
            key={item.id}
            imgsrc={item.imgsrc}
            title={item.title}
            description={item.description}
            seriesLink={item.seriesLink}
          />
        )
        
    })}
    </React.Fragment>
    )
};


export default Amazon;

