import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ListBenhNhan from '../../components/ListBenhNhan';

import { getListBenhNhan, focusBenhAn } from './actions';

import './private.css';

class MainPage extends Component {

    state = {
        page: 1,
    }

    componentDidMount() {
        this.props.getListBenhNhan(this.props.userData.ID);
    }

    changePage = page => this.setState({ page });

    render() {
        const { listBenhNhan } = this.props;
        const { page } = this.state;
        return (
            <div id="ManageRecordApp" className="maincontent">
                <ul className="nav nav-tabs dropdown" role="tablist">
                    <li style={{ backgroundColor: page === 1 ? '#fff' : '#f3f3f3' }} onClick={() => this.changePage(1)}><a><i className="fa fa-file-text"></i>Hồ sơ</a></li>
                    <li style={{ backgroundColor: page === 2 ? '#fff' : '#f3f3f3' }} onClick={() => this.changePage(2)}><a><i className="fa fa-question-circle"></i>Hồ sơ tư vấn</a></li>
                    <li style={{ backgroundColor: page === 3 ? '#fff' : '#f3f3f3' }} onClick={() => this.changePage(3)}><a><i className="fa fa-share-alt-square"></i>Hồ sơ chia sẻ</a></li>
                </ul>
                {page === 1 && <ListBenhNhan
                    listBenhNhan={listBenhNhan}
                    focusBenhAn={this.props.focusBenhAn}
                />}
                {page === 2 && <h1> Hello anh Công</h1>}
                {page === 3 && <h1> Chào anh Công</h1>}
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
    focusBenhAn,
});

export default connect(mapStateToProps, mapsDispatchToProps)(MainPage);