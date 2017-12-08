import React,{Component} from 'react';
import '../css/private.css';
import HeaderInfo from '../../components/HeaderInfo';
import Siderbar from '../../components/Sidebar';

class Userinfo extends Component{
    render(){          
        return (
            <div>
                <HeaderInfo/>
                <div id="ManageRecordApp" className="maincontent">
                    <ul className="nav nav-tabs" role="tablist">
                        <li><a href=""><i className="fa fa-file-text"></i>Hồ sơ</a></li>
                        <li><a href=""><i className="fa fa-question-circle"></i>Hồ sơ tư vấn</a></li>
                        <li><a href=""><i className="fa fa-share-alt-square"></i>Hồ sơ chia sẻ</a></li>
                    </ul>
                </div>
                <Siderbar/>
            </div>                    
        )
    }
}

export default Userinfo;