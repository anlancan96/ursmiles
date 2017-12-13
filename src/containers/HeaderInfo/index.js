import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class HeaderInfo extends Component {
    render() {
        const { userData } = this.props;
        return(
            <div>
                <div id="TopBarApp" className="topbar">
                    <nav className="navbar navbar-default" role="navigation">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <Link className="navbar-brand" to="/ursmiles">Quản lý bệnh án</Link>
                            </div>
                            {userData.role && (userData.role === "admin" || userData.role === "doctor") && <Link to="/ursmiles/create" className="btn btn-default navbar-btn"><i className="fa fa-plus"></i>Thêm hồ sơ</Link>}
                            <div className="navbar-form navbar-right" role="search">
                                <div className="form-group has-feedback searchbox">
                                    <input type="text" id="tbxMainKeyword" className="form-control"/>
                                    <span className="glyphicon glyphicon-search form-control-feedback icon"></span>
                                </div>
                            </div>
                            <ul className="nav navbar-nav navbar-right">
                                    <li className="dropdown">
                                        <a href="#" className="toolicon" data-toggle="dropdown"><i className="fa fa-comments" style={{color: '#fff'}}></i><span className="badge"></span></a>
                                        <ul className="dropdown-menu notify-box">
                                            <li>
                                                <a href="#">
                                                    <span className="avatar" ></span>
                                                    <span className="notify-info">
                                                        <span className="username"></span>
                                                        <span className="content"></span>
                                                        <span className="date"></span>
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                <li><span><a href="#" className="btn btn-default navbar-btn">EN</a></span></li>
                                <li><a className="toolicon"><i className="fa fa-envelope"></i></a></li>
                                <li><a href="#" className="toolicon" target="_blank"><i className="fa fa-question-circle"></i></a></li>
                            </ul>
                        </div>     
                    </nav>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userData: state.appReducer.userData,
});

const mapsDispatchToProps = ({
});

export default connect(mapStateToProps, mapsDispatchToProps)(HeaderInfo);