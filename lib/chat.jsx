'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import MsgInput from './MsgInput';
//import StatusBar from './statusBar';
class ChatApp extends React.Component {

  render() {
    return (
      <div>
       <MsgInput />
      </div>
    );
  }
};


ReactDOM.render(<ChatApp />,
		document.getElementById('react-container'));
