import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../App/actions';

class LeftSidebar extends Component {
    render() {
        const { userData } = this.props;
        return(
            <div id="SideBar" className="sidebar">
                <div className="login-panel clearfix" >
                    <img className="image avatar" src="./images/avatar-default.png" style={{width:64,height:64,borderRadius:32}}/>
                    <div className="fullname">{userData.HoTen}</div>
                    <div className="username dropdown">
                        <div className="dropdown-toggle" data-toggle="dropdown">
                            {userData.Username}
                            <span className="caret"></span>
                        </div>
                        <ul className="dropdown-menu" role="menu">
                            <li role="presentation"><Link to="/ursmiles/modify" role="menuitem" tabIndex="-1">Chỉnh sửa thông tin</Link></li>
                            <li role="presentation" className="divider"></li>
                            <li role="presentation"><a role="menuitem" tabIndex="-1" onClick={this.props.logout} className="text-danger">Thoát</a></li>
                        </ul>
                    </div>
                </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">Quản lý hồ sơ</div>
                        <div className="list-group">
                                <Link to="/ursmiles" data-menu="hosobenhnhan" className="list-group-item"><i className="fa fa-file-text"></i>Hồ sơ bệnh nhân</Link>
                                
                                    <div className="list-group-1">
                                        <Link to="/ursmiles" data-menu="hosobenhnhan" className="list-group-item1"><i className="fa fa-file-text-o"><span className="ng-item">Hành Chính</span></i></Link>
                                        <Link to="/ursmiles/khamtrongmieng" data-menu="hosobenhnhan" className="list-group-item1"><i className="fa fa-file-text-o"><span className="ng-item">Khám trong miệng</span></i></Link>
                                        <Link to="/ursmiles/khamngoaimat" data-menu="hosobenhnhan" className="list-group-item1"><i className="fa fa-file-text-o"><span className="ng-item">Khám ngoài mặt</span></i></Link>    
                                    </div>
                                <a href="#" data-menu="FinancialReport" className="list-group-item"><i className="fa fa-bar-chart"></i>Thống kê tài chính</a>
                                <a href="#" data-menu="PriceList" className="list-group-item"><i className="fa fa-dollar"></i>Bảng giá</a>
                                <a href="#" data-menu="UserTaskLogs" className="list-group-item"><i className="fa fa-history"></i>Lịch sử thao tác</a>
                        </div>
                    </div>
                    <div className="panel panel-default">
                    <div className="panel-heading">Chuyên mục</div>
                    <div className="list-group">
                        <a href="#" className="list-group-item"><i className="fa fa-star-half-o"></i>Giới thiệu chuyên gia</a>
                        
                        <a href="#" className="list-group-item"><i className="fa fa-newspaper-o"></i>Tin tức</a>
                    </div>
                </div>
                {userData.role === "admin" && <div className="list-group">
                    <Link to="/ursmiles/adminpage" className="list-group-item">Trang quản trị</Link>
                </div>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userData: state.appReducer.userData,
    isVisible : state.mainPageReducer.isVisible,
});

const mapsDispatchToProps = ({
    logout,
});

export default connect(mapStateToProps, mapsDispatchToProps)(LeftSidebar);