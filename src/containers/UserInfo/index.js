import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './private.css';

class Userinfo extends Component{
    render(){          
        return (
            <div>
                <div id="ManageRecordApp" className="maincontent">
                    <ul className="nav nav-tabs dropdown" role="tablist">
                        <li data-toggle="dropdown"><a><i className="fa fa-file-text"></i>Hồ sơ</a></li>
                        <ul class="dropdown-menu">
                            <li><Link to="/ursmiles/khamtrongmieng">Khám trong miệng</Link></li>
                            <li><Link to="/ursmiles/khamngoaimat">Khám ngoài mặt</Link></li>
                        </ul>
                        <li><Link to="#"><i className="fa fa-question-circle"></i>Hồ sơ tư vấn</Link></li>
                        <li><Link to="#"><i className="fa fa-share-alt-square"></i>Hồ sơ chia sẻ</Link></li>
                    </ul>
                </div>
            </div>                    
        )
    }
}

export default Userinfo;