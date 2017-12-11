import React,{Component} from 'react';
import  './css/register.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

class Register extends Component {
    
    state = {
        Username  : '',
        Email1    : '',
        Password  : '',
        Repassword: '',
        HoTen     :'',
        DienThoai :'',
        Email2    :'',
        DiaChi    :'',
        isMatch   :1,
        message   :''
    }

    change = e => this.setState({[e.target.name] : e.target.value });

    save = e => {
        e.preventDefault();
        const {Username,Password,Email1,Email2,HoTen,DienThoai,DiaChi} = this.state;
        axios({
            method: 'post',
            url: 'http://localhost:3001/v1/account/register',
            data: {
              Username,
              Password,
              Email1,
              HoTen,
              DienThoai,
              Email2,
              DiaChi,
            },
            })
            .then((respone) => {
                let status  = respone.data.status;
                if(status){
                    window.location.href = '/private/userInfo';
                }else {
                    this.setState({ message: respone.data.message })
                }
            })
            .catch(error => {
                console.log('co loi');
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
                                        <label>Email1</label>
                                        <input type="text" onChange={this.change} name="Email1" className="form-control" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label>Mật khẩu</label>
                                        <input type="Password" onChange={this.change }name="Password" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Nhập lại mật khẩu</label>
                                        <input type="Repassword" onChange={this.change}  name="ConfirmPassword" className="form-control" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label>Họ Tên</label>
                                        <input type="text" onChange={this.change} name="HoTen" className="form-control" />
                                    
                                    </div>
                        
                                    <div className="form-group col-md-6">
                                        <label>Số di động</label>
                                        <input type="text" name="DienThoai" onChange={this.change} className="form-control" />     
                                    </div>
                                </div>
                            </div>
                    
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label>Địa chỉ</label>
                                    <input type="text" name="DiaChi"onChange={this.change} className="form-control" />    
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Email2</label>
                                    <input type="text" onChange={this.change} name="Email2" className="form-control" />
                                </div>
                            </div>
                        
                            <div className="register_button">
                                <button onClick={this.save} className="btn btn-primary">Create Account</button>
                            </div>
                            <span>{this.state.message}</span>
                        </form>
                    </div>
                </div>
                <Footer/>
        
            </div>
        )
    }
}

export default Register;