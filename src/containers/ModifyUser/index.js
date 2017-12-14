import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import md5 from 'md5';

import { modifyUserRequest } from './actions';
// import './register.css';

class ModifyUser extends Component {

    state = {
        Username: this.props.userData.Username,
        NewPassword: '',
        Repassword: '',
        HoTen: this.props.userData.HoTen || '',
        Email1: this.props.userData.Email1 || '',
        Email2: this.props.userData.Email2 || '',
        DienThoai: this.props.userData.DienThoai || '',
        DiaChi: this.props.userData.DiaChi || '',

        isChangePassword: false,
        message: '',
        Password: '',
    }

    change = e => this.setState({ [e.target.name]: e.target.value, message: '' });

    submit = () => {
        const { HoTen, Email1, Email2, DienThoai, DiaChi, isChangePassword, NewPassword, Repassword, Password } = this.state;
        const userID = this.props.userData.ID;
        if (!isChangePassword) this.props.modifyUserRequest({
            HoTen,
            Email1,
            Email2,
            DienThoai,
            DiaChi,
            confirmPassword: md5(Password),
        }, userID);
        else {
            if (NewPassword === '') this.setState({ message: 'Bạn chưa nhập mật khẩu mới!' });
            else if (NewPassword !== Repassword) this.setState({ message: 'Mật khẩu nhập lại không khớp!' });
            else this.props.modifyUserRequest({
                HoTen,
                Email1,
                Email2,
                DienThoai,
                DiaChi,
                confirmPassword: md5(Password),
                Password: md5(Repassword),
            }, userID);
        }
        this.setState({ Password: '', NewPassword: '', Repassword: '' });
    }

    render() {
        const { Username, HoTen, Email1, Email2, DienThoai, DiaChi, isChangePassword, NewPassword, Repassword, Password } = this.state;
        const { isLoading } = this.props;
        return (
            <div className="maincontent">
                <div id="RegisterApp" className="register col-md-8 col-sm-10" style={{ padding: 0, marginBottom: 0 }}>
                    <div role="form">
                        <div className="title">Chỉnh sửa thông tin cá nhân</div>
                        <div className="sub-title"><span>Thông tin cá nhân</span></div>
                        <div className="register-info">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label>Tên truy cập</label>
                                    <input type="text" value={Username} disabled name="Username" className="form-control" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Họ Tên</label>
                                    <input type="text" onChange={this.change} value={HoTen} name="HoTen" className="form-control" disabled={isLoading} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label>Số di động</label>
                                    <input type="text" onChange={this.change} value={DienThoai} name="DienThoai" className="form-control" disabled={isLoading} />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Địa chỉ</label>
                                    <input type="text" onChange={this.change} value={DiaChi} name="DiaChi" className="form-control" disabled={isLoading} />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group col-md-6">
                                <label>Email1</label>
                                <input type="text" onChange={this.change} value={Email1} name="Email1" className="form-control" disabled={isLoading} />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Email2</label>
                                <input type="text" onChange={this.change} value={Email2} name="Email2" className="form-control" disabled={isLoading} />
                            </div>
                        </div>
                        <label>
                            <input
                                type="checkbox"
                                name="isChangePassword"
                                value="isChangePassword"
                                checked={isChangePassword}
                                onChange={() => this.setState({ isChangePassword: !this.state.isChangePassword })}
                                disabled={isLoading}
                            /> Đổi mật khẩu </label>
                        <br />
                        <br />
                        {isChangePassword && <div className="row">
                            <div className="form-group col-md-6">
                                <label>Mật khẩu mới</label>
                                <input type="Password" onChange={this.change} value={NewPassword} name="NewPassword" className="form-control" disabled={isLoading} />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Nhập lại mật khẩu</label>
                                <input type="Password" onChange={this.change} value={Repassword} name="Repassword" className="form-control" disabled={isLoading} />
                            </div>
                        </div>}
                        <div />
                        <div className="register_button">
                            Bạn phải nhập Mật khẩu cũ để tiếp tục: <input type="Password" onChange={this.change} value={Password} name="Password" disabled={isLoading} /><br />
                            <span className="message">{this.state.message}</span>
                            <span className="message">{this.props.reqMessage}</span>
                            <button onClick={this.submit} className="btn btn-primary" disabled={isLoading}>Chỉnh sửa</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userData: state.appReducer.userData,
    isLoading: state.modifyUserReducer.isLoading,
    reqMessage: state.modifyUserReducer.reqMessage,
});

const mapsDispatchToProps = ({
    modifyUserRequest,
});

export default connect(mapStateToProps, mapsDispatchToProps)(ModifyUser);