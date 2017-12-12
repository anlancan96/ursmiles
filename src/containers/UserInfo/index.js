import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './private.css';

class Userinfo extends Component{
    render(){          
        return (
            <div>
                <div id="ManageRecordApp" className="maincontent">
                    <ul className="nav nav-tabs" role="tablist">
                        <li><Link to="#"><i className="fa fa-file-text"></i>Hồ sơ</Link></li>
                        <li><Link to="#"><i className="fa fa-question-circle"></i>Hồ sơ tư vấn</Link></li>
                        <li><Link to="#"><i className="fa fa-share-alt-square"></i>Hồ sơ chia sẻ</Link></li>
                    </ul>
                </div>
            </div>                    
        )
    }
}

export default Userinfo;