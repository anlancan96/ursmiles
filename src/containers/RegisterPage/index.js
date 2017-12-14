import React,{Component} from 'react';
import axios from 'axios';
import md5 from 'md5';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import authen from './authen';
import { apiurl } from '../../assets/consts';

import './register.css';

class Register extends Component {
    
    componentDidMount() {
        if (localStorage.user !== undefined) {
            alert('Bạn phải đăng xuất trước khi muốn tạo tài khoản mới!');
            this.props.history.push('/ursmiles');
        }
    }
    
    state = {
        Username: '',
        Email1: '',
        Password: '',
        ConfirmPassword: '',
        HoTen: '',
        DienThoai: '',
        Email2: '',
        DiaChi: '',
        isMatch: 1,

        message: '',
        isLoading: false,
    }

    change = e => this.setState({[e.target.name] : e.target.value });

    submit = e => {
        e.preventDefault();
        const check = authen(this.state);
        if (check.status === 1) this.register();
        else this.setState({ message: check.message }, () => console.log('-AnhNT-', this.state));
    }

    register = () => {
        const { Username, Password, Email1, Email2, HoTen, DienThoai, DiaChi } = this.state;
        this.setState({ isLoading: true });
        axios({
            method: 'post',
            url: `${apiurl}/v1/account/register`,
            data: {
                Username,
                Password: md5(Password),
                Email1,
                HoTen,
                DienThoai,
                Email2,
                DiaChi,
            },
        }).then((respone) => {
            let status = respone.data.status;
            if (status === 1) {
                alert('Tạo tài khoản thành công!');
                localStorage.setItem('lastuserloginname', this.state.Username);
                this.props.history.push('/');
            } else {
                this.setState({ message: respone.data.message, isLoading: false })
            }
        })
        .catch(error => {
            console.log('Lỗi không xác định!');
            this.setState({ isLoading: false });
        });
    }

    render(){
        return(
            <div>
                <Header/>
                <div className="register-block clearfix">
                    <div  id="RegisterApp" className="register col-md-8 col-sm-10">
                        <form role="form">
                            <div className="title">Chào mừng bạn đến với Ursmiles</div>
                            <div className="sub-title"><span>Thông tin cá nhân</span></div>
                            <div className="register-info">
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label>Tên truy cập</label>
                                        <input type="text" onChange={this.change} name="Username" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Họ Tên</label>
                                        <input type="text" onChange={this.change} name="HoTen" className="form-control" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label>Mật khẩu</label>
                                        <input type="Password" onChange={this.change } name="Password" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Nhập lại mật khẩu</label>
                                        <input type="password" onChange={this.change} name="ConfirmPassword" className="form-control" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label>Số di động</label>
                                        <input type="text" name="DienThoai" onChange={this.change} className="form-control" />     
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Địa chỉ</label>
                                        <input type="text" name="DiaChi"onChange={this.change} className="form-control" />    
                                    </div>
                                </div>
                            </div>
                    
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label>Email1</label>
                                    <input type="text" onChange={this.change} name="Email1" className="form-control" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Email2</label>
                                    <input type="text" onChange={this.change} name="Email2" className="form-control" />
                                </div>
                            </div>
                        
                            <div className="message">{this.state.message}</div>

                            <div className="register_button">
                                <button onClick={this.submit} className="btn btn-primary">Tạo</button>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer/>
        
            </div>
        )
    }
}

export default Register;