import React from 'react';
import ReactDOM from 'react-dom';
import youtuber,{channelName,nameandchannel} from './App';
import * as wifeDetails from "./More"

ReactDOM.render(
  <React.Fragment>
    <ol>
      <li>{youtuber}</li>
      <li>{channelName}</li>
      <li>{nameandchannel()}</li>
      <li>{wifeDetails.wifeyFullname()}</li>
    </ol>
  </React.Fragment>,
  document.getElementById('root')
)