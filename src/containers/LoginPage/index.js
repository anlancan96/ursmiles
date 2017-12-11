import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './home.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { loginRequest } from './actions';

class LoginPage extends React.Component {
    state= {
        Username : '',
        Password : '',
        message  : '',
    }

    componentWillUpdate(nextProps) {
        nextProps.isLogin && this.props.history.push('/private');
    }

    change = (e) => { this.setState({ [e.target.name] : e.target.value })}

    login = () => {
        const { Username, Password } = this.state;
        if (Username === '') {
            this.setState({ message: 'Tên tài khoản không hợp lệ!' });
        } else if (Password === '') {
            this.setState({ message: 'Mật khẩu không hợp lệ!' });
        } else {
            this.setState({ message: '' });
            this.props.loginRequest(Username, Password);
        }
    }

    render(){
        const { isLogin, isLoading, errorMessage } = this.props;
        return (
            <div>
            <Header/>
            <div className="banner">
                <div className="page_width">
                    <div className="feature">
                        <h1 className="title">Phần mềm chỉnh nha online tiện ích nhất hiện nay</h1>
                        <ul className="list">
                            <li><span className="glyphicon glyphicon-ok-sign"></span>Quản lý hồ sơ bệnh nhân chỉnh nha mọi lúc mọi nơi, trên máy tính bảng và điện thoại di động.</li>
                            <li><span className="glyphicon glyphicon-ok-sign"></span>Mẫu bệnh án chỉnh nha thông minh.</li>
                            <li><span className="glyphicon glyphicon-ok-sign"></span>Hình ảnh, video hỗ trợ tư vấn.</li>
                            <li><span className="glyphicon glyphicon-ok-sign"></span>Công cụ lập kế hoạch điều trị.</li>
                            <li><span className="glyphicon glyphicon-ok-sign"></span>Kế hoạch điều trị mẫu.</li>
                            <li><span className="glyphicon glyphicon-ok-sign"></span>Một quy trình chỉnh nha chuyên nghiệp, ứng dụng.</li>
                            <li><span className="glyphicon glyphicon-ok-sign"></span>Tính năng bảo mật cao.</li>
                        </ul>
                    </div>
                    {!isLogin && <div  id="LoginApp" className="login">
                        <div>
                            <h2 className="title"><i className="fa fa-lock"></i></h2>
                            <div>
                                <div className="form-group">
                                    <i className="fa fa-user"></i>
                                    <input type="text" name="Username"  className="form-control" placeholder="Tên đăng nhập" onChange={this.change}/>
                                </div>
                                <div className="form-group">
                                    <i className="fa fa-key"></i>
                                    <input type="password" name="Password"  className="form-control" placeholder="Mật khẩu" onChange={this.change}/>
                                </div>
                                <div className="message">{this.state.message}</div>
                                <div className="message">{this.props.errorMessage}</div>
                                <div className="login_button">
                                    <button onClick={this.login} className="btn btn-default" disabled={isLoading}>Đăng nhập</button>
                                    <Link to="/register" className="btn btn-default btn-register">Đăng ký</Link>
                                </div>
                            </div>
                        </div>
                    </div>}
                    {isLogin &&
                        <button className="btn btn-default" onClick={() => this.props.history.push('/private') } >Tiếp tục</button>
                    }
                </div>
            </div>

            <div className="page_width">
                <ul className="function">
                    <li>
                        <div className="image">
                            <img src="./images/quan-ly-benh-nhan.png" />
                        </div>
                        <div className="name">
                            Quản lý bệnh nhân
                        </div>
                        <div className="detail">
                            Quản lý bệnh nhân một cách đơn giản, chuyên nghiệp với các mẫu về tư vấn, tài chính, bệnh sử, hành chính, quá trình điều trị cùng các công cụ hỗ trợ như bảng giá, in hồ sơ, video và hình ảnh cần thiết.
                        </div>
                    </li>
                    <li>
                        <div className="image">
                            <img src="./images/thuc-hanh-chinh-nha.png" />
                        </div>
                        <div className="name">
                            Thực hành chỉnh nha
                        </div>
                        <div className="detail">
                            Với các công cụ là mẫu bệnh án chỉnh nha, bảng phân tích phim, phân tích mẫu, hồ sơ hình ảnh lưu trữ, kế hoạch điều trị mẫu giúp bác sỹ từng bước học chỉnh nha từ chính cách làm việc của mình, một cách hiệu quả, thú vị.
                        </div>
                    </li>
                    <li>
                        <div className="image">
                            <img src="./images/tu-hoc-chinh-nha.png" />
                        </div>
                        <div className="name">
                            Tự học chỉnh nha
                        </div>
                        <div className="detail">
                            Trong tam giác cơ bản để bước chân vào chỉnh nha, tự học chỉnh nha là quan trọng nhất. Bên cạnh một người thầy, một cách làm việc chuyên nghiệp thì tự học chính là chìa khóa mở cách cửa bí mật chỉnh nha.
                        </div>
                    </li>
                    <li>
                        <div className="image">
                            <img src="./images/phat-trien-dich-vu.png" />
                        </div>
                        <div className="name">
                            Phát triển dịch vụ
                        </div>
                        <div className="detail">
                            Mở rộng tính năng truy cập của bệnh nhân, giúp nâng cao dịch vụ cho bác sỹ, bệnh nhân có thể giới thiệu bệnh nhân khác trên bschinhnha.
                        </div>
                    </li>
                </ul>
            </div>
            <Footer/>
                    
        </div>
        )
    }
}

const mapStateToProps = state => ({
    isLogin: state.appReducer.isLogin,
    isLoading: state.loginReducer.isLoading,
    errorMessage: state.loginReducer.errorMessage,
});

const mapsDispatchToProps = ({
    loginRequest,
});

export default connect(mapStateToProps, mapsDispatchToProps)(LoginPage);