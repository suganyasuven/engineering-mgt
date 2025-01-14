
/*
 *  Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 *  WSO2 Inc. licenses this file to you under the Apache License,
 *  Version 2.0 (the 'License'); you may not use this file except
 *  in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied.  See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 *
 */

import React from 'react';
import './../style.css';
import './../App.css';

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup\_inner'>
          <button style={{ fontSize: "18px" }} onClick={this.props.closePopup}>
            Close
          </button>

          <h1>{this.props.text}</h1>
        </div>
      </div>
    );
  }
}

export default Popup;
