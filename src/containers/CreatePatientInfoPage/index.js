import React, { Component } from 'react';
import axios from 'axios';

import { getCurrentDate } from '../../assets/globalFunc';
import './patientInfo.css';

class PatientInfo extends Component {
    state = {
        NgayBatDau: getCurrentDate(),
        NgaySinh:null,
        TrangThai: '',
        BacSi: '',
        Ho: '',
        Ten: '',
        MaHoSo:'',
        GioiTinh:'',
        DanToc:'',
        DiaChi:'',
        DienThoai:'',
        Email:'',
        Facebook:'',
        Twitter:'',

        isLoading: false,
    }

    change = e => this.setState({ [e.target.name]: e.target.value });

    callApi(state) {
        const that = this;
        this.setState({ isLoading: true }, () => {
            axios({
                method: 'post',
                url: `http://localhost:3001/v1/benhnhan/create`,
                data: {
                  ...state
                },
            }).then((respone) => {
                const resdata = respone.data;
                if (resdata.status === 1) {
                    alert(resdata.message);
                    that.setState({ isLoading: false });
                    that.props.history.push('/ursmiles');
                } else if (resdata.status === 0) {
                    alert(resdata.message);
                    that.setState({ isLoading: false });
                }
            }) .catch(error => {
                console.log('co loi');
            });
        });
    }

    save = e => {
        e.preventDefault();  
        this.callApi(this.state);       
    }

    render() {
        return (
            <div>
                <div id="RecordHanhChinhApp" className="maincontent">
                    <div className="pull-right form-inline" style={{ margin: '14px 20px 0 0' }}>
                        <span>
                            <select onChange={this.change} className="form-control">
                                <option value="TrangThai">Trạng thái</option>
                                <option value="Kham">Khám</option>
                                <option value="ChinhNha">Chỉnh nha</option>
                            </select>
                            {' '}
                            <button onClick={this.save} className="btn btn-primary" disabled={this.state.isLoading}><i className="fa fa-floppy-o"></i>Tạo</button>
                        </span>
                    </div>
                    <h1 className="maintitle">Thông tin hành chính</h1>
                    <form id="RecordHanhChinhForm" className="form-horizontal">
                        <div className="content">
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Ngày bắt đầu</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="date" value={this.state.NgayBatDau} onChange={this.change} className="form-control" name="NgayBatDau" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Bác sĩ</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" name="BacSi" onChange={this.change} className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <img className="avatar avatar-3-4" src="./images/avatar-default.png" style={{ position: 'absolute', marginLeft: '20%' }} />
                                <div className="imageupload-tool" style={{ marginLeft: '20%', position: 'absolute', top: '145px', left: '40px' }}>
                                    <div className="upload-btn">
                                        <button type="button" className="btn btn-primary btn-sm btn-block"><i className="fa fa-camera"></i></button>
                                        <input type="file" id="ipfImage" />
                                    </div>
                                    <button type="button" className="btn btn-danger btn-sm"><i className="fa fa-trash"></i></button>
                                </div>
                            </div>
                            <div className="col-sm-4" style={{ clear: 'left' }}>
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Họ</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" name="Ho" onChange={this.change} className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Tên</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" name="Ten" onChange={this.change} className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4" style={{ clear: 'left' }}>
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Ngày sinh</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="date" name="NgaySinh" onChange={this.change} className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Giới tính</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <select name="GioiTinh" onChange={this.change} className="form-control">
                                            <option value="Male">Nam</option>
                                            <option value="Female">Nữ</option>
                                            <option value="Female">Khác</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4" style={{ clear: 'left' }}>
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Dân tộc</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" name="DanToc" onChange={this.change} className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4" style={{ clear: 'left' }}>
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Địa chỉ</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" name="DiaChi" onChange={this.change} className="form-control" />
                                    </div>
                                </div>
                            </div>
                           
                           
                            <div className="col-sm-4" style={{ clear: 'left' }}>
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Số di động</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" name="DienThoai" onChange={this.change} className="form-control" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Mã hồ sơ</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" name="MaHoSo" onChange={this.change} className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4" style={{ clear: 'left' }}>
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Email</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" name="Email" className="form-control" />
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Facebook</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" name="Facebook" onChange={this.change} className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Twitter</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text"name="Twitter" onChange={this.change} className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}

export default PatientInfo;