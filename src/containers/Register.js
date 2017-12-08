import React,{Component} from 'react';
import  './css/register.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';


class Register extends Component {
    
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
                                        <input type="text"  name="UserName" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Email</label>
                                        <input type="text"  name="Email" className="form-control" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label>Mật khẩu</label>
                                        <input type="password" name="Password" className="form-control" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Nhập lại mật khẩu</label>
                                        <input type="password"  name="ConfirmPassword" className="form-control" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label>Họ</label>
                                        <input type="text"  name="LastName" className="form-control" />
                                    
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Tên</label>
                                        <input type="text" name="FirstName" className="form-control" />
                                
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label>Số di động</label>
                                        <input type="text" ng-model="itemModel.MobilePhone" name="MobilePhone" className="form-control" />
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="sub-title"><span>Thông tin Công ty / Phòng khám</span></div>
                            <div className="register-info">
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label>Công ty / Phòng khám</label>
                                        <input type="text" ng-model="itemModel.CompanyName" name="CompanyName" className="form-control" />
                                    
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Số điện thoại</label>
                                        <input type="text" ng-model="itemModel.Telephone" name="Telephone" className="form-control" />
                                        
                                    </div>
                                </div>
                        
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label>Địa chỉ</label>
                                        <input type="text"  name="Address" className="form-control" />
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="register_button">
                                <button type="button" className="btn btn-primary">Create Account</button>
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