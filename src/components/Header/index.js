import React,{Component} from 'react';

class Header extends Component {
    render(){
        return(
            <div>
                <div className="head-topbar clearfix">
                    <div className="container">
                        <div className="pull-left">
                            <ul className="top-contact-info">
                                <li><a href="tel:0908190314"><i className="fa fa-phone"></i>0908190314</a></li>
                                <li><a href="mailto:trandangcong@gmail.com"><i className="fa fa-envelope"></i> trandangcong@gmail.com</a></li>
                            </ul>
                        </div>
                        <div className="pull-right">
                            <ul className="top-social-link">
                                <li><a href="https://www.facebook.com" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="https://www.twitter.com" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="https://plus.google.com" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="https://www.linkedin.com" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="https://www.dribbble.com" target="_blank"><i className="fa fa-dribbble"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <a href="/" className="logo">
                        {/* logo */}
                    </a>
                    <div id="MainMenu" className="mainmenu">
                        <a href="/" data-menu="Home" className="active"><span className="glyphicon glyphicon-home"></span>Trang chủ</a>
                        <a href="/News" data-menu="News"><span className="glyphicon glyphicon-list-alt"></span>Tin tức</a>
                        
                        <a href="" data-menu="Dentist"><span className="glyphicon glyphicon-user"></span> Chuyên gia</a>
                        <div className="language">
                            <a href="">Tiếng Việt</a>
                            <a href="">English</a>
                        </div>
                    </div>
                </div>
            </div>        
        )
    }
}

export default Header;