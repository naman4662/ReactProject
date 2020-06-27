import React from 'react'
import Images from './Images'

function Card(props){
    return (
      <React.Fragment>
        <div className="cards">
          <div className="card">
            <Images imgsrc={props.imgsrc}/>
              <div className="card-body">
                <p className="card-text">
                  {props.description}
                </p>
                <h5 className="card-title">{props.title}</h5>
                
                <a href={props.seriesLink} className="btn btn-primary">Watch Now</a>
              </div>
          </div>
        </div>
      </React.Fragment>
    )
  }

  export default Card