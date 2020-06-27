import React from "react";
import "./index.css";
// import Card from "./Card";
import sData from "./Sdata";
import Netflix from "./Netflix";
import Amazon from "./Amazon";


const  ChooseApp = () => {
    const choice = "netflix"
    if (choice === 'netflix'){
        const nData = sData.filter((item) => {
            if(item.seriesLink.includes(choice))
            { return item}
        })

        return <Netflix nSeries={nData}/>
    }else{
        const nData = sData.filter((item) => {
            if(item.seriesLink.includes(choice))
            { return item}
        })
        return <Amazon nSeries={nData}/>
    }
}

const App = () => (
  <React.Fragment>
  <div className="main">
    {<ChooseApp/>}
  </div>
    
  </React.Fragment>
);

export default App;
