import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ListBenhNhan from '../../components/ListBenhNhan'

import { getListBenhNhan } from './actions';
import './private.css';

class MainPage extends Component {

    componentDidMount() {
        this.props.getListBenhNhan(this.props.userData.ID);
    }

    render() {
        const { listBenhNhan } = this.props;
        console.log('-AnhNT-list', listBenhNhan);
        return (
            <div id="ManageRecordApp" className="maincontent">
                <ul className="nav nav-tabs dropdown" role="tablist">
                    <li data-toggle="dropdown"><a><i className="fa fa-file-text"></i>Hồ sơ</a></li>
                    <ul className="dropdown-menu">
                        <li><Link to="/ursmiles/khamtrongmieng">Khám trong miệng</Link></li>
                        <li><Link to="/ursmiles/khamngoaimat">Khám ngoài mặt</Link></li>
                    </ul>
                    <li><Link to="#"><i className="fa fa-question-circle"></i>Hồ sơ tư vấn</Link></li>
                    <li><Link to="#"><i className="fa fa-share-alt-square"></i>Hồ sơ chia sẻ</Link></li>
                </ul>
                <ListBenhNhan listBenhNhan={listBenhNhan} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userData: state.appReducer.userData,
    listBenhNhan: state.mainPageReducer.listBenhNhan,
});

const mapsDispatchToProps = ({
    getListBenhNhan,
});

export default connect(mapStateToProps, mapsDispatchToProps)(MainPage);