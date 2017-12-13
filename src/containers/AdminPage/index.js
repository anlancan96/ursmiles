import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import md5 from 'md5';

import AccountItem from './AcountItem';

import { apiurl } from '../../assets/consts';
import { getCurrentDate } from '../../assets/globalFunc';
import './styles.css';

class AdminPage extends Component {

    state = {
        listAccounts: [],

        IDOnChange: '',
        UsernameOnChange: '',
        changeRole: '',
        Password: '',
    }

    componentWillMount() { this.props.userData.role !== "admin" && this.props.history.push('/ursmiles'); }

    componentDidMount() { this.getListAccount(); }

    getListAccount = () => {
        const that = this;
        axios({
            method: 'get',
            url: `${apiurl}/v1/account/`,
        }).then((respone) => {
            const resdata = respone.data;
            if (resdata.status === 1) {
                that.setState({ listAccounts: resdata.data });
            } else if (resdata.status === 0) {
                console.log('Errors:', respone.err);
            }
        }).catch(error => {
            console.log('Lỗi không xác định!');
        });
    }

    chooseNewRole = (ID, Username, role) => {
        this.setState({ IDOnChange: ID, UsernameOnChange: Username, changeRole: role });
    }

    changeRole = () => {
        this.setState({ Password: '' });
        const { IDOnChange, changeRole, Password } = this.state;
        const Username = this.props.userData.Username;
        const that = this;
        axios({
            method: 'post',
            url: `${apiurl}/v1/account/changerole`,
            data: {
              ID: IDOnChange,
              role: changeRole,
              Username,
              Password: md5(Password),
            },
        })
        .then((respone) => {
            if (respone.data.status === 0) alert('Không thành công!');
            else that.getListAccount();
        })
        .catch(error => {
            alert('Có lỗi xảy ra!')
        });
    }

    render() {
        return (
            <div className="maincontent">
                <h2>Trang quản trị</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Họ Tên</th>
                            <th>Số điện thoại</th>
                            <th>Email</th>
                            <th>Facebook</th>
                            <th>Chức vụ</th>
                        </tr>
                    </thead>
                    {this.state.listAccounts.map((item, index) => <AccountItem
                        key={`_${index}`}
                        data={item}
                        chooseNewRole={this.chooseNewRole}
                    />)}
                </table>
                <div id="openModal" className="modalDialog">
                    <div>
                        <a href="#close" title="Close" className="close">X</a>
                        <h2>Đổi quyền người sử dụng</h2>
                        <p>Bạn muốn đổi quyền người này?</p>
                        <p>{`${this.state.UsernameOnChange} thành ${this.state.changeRole}!`}</p>
                        Nhập mật khẩu:
                        <input
                            type="password"
                            value={this.state.Password}
                            onChange={e => this.setState({ Password: e.target.value })}
                        />
                        <a href="#close" onClick={this.changeRole}><button>OK</button></a>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userData: state.appReducer.userData,
});

export default connect(mapStateToProps, {})(AdminPage);