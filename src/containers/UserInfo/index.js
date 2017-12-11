import React,{Component} from 'react';
import './private.css';

class Userinfo extends Component{
    render(){          
        return (
            <div>
                <div id="ManageRecordApp" className="maincontent">
                    <ul className="nav nav-tabs" role="tablist">
                        <li><a href=""><i className="fa fa-file-text"></i>Hồ sơ</a></li>
                        <li><a href=""><i className="fa fa-question-circle"></i>Hồ sơ tư vấn</a></li>
                        <li><a href=""><i className="fa fa-share-alt-square"></i>Hồ sơ chia sẻ</a></li>
                    </ul>
                </div>
            </div>                    
        )
    }
}

export default Userinfo;