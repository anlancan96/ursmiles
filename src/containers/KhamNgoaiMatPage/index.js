import React, { Component } from 'react';
import axios from 'axios';

import { apiurl } from '../../assets/consts';
import './home.css';

class KhamNgoaiMatPage extends Component {
    state = {
       MaSo:'',
       DangMat:'',
       CungCuoi:'',
       MatNghieng:'',
       DuongCuoi:'',
       DuongGiuaHamTren:'',
       HanhlangDen:'',
       Moi:'',
       RanhCam:'',
       GocMuiMoi:'',
       DoNuouKhiCuoi:'',
       DoLoRangCucLucNghi:'',

    }

    change = e => this.setState({ [e.target.name]: e.target.value });

    callApi(state) {
        console.log(state);
        axios({
            method: 'post',
            url: `${apiurl}/v1/khamngoaimat/create`,
            data: {
              ...state
            },
            })
            .then((respone) => {
               console.log(respone);
            })
            .catch(error => {
                console.log('co loi');
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
                        <span className="form-inline">
                            <button type="button" disabled className="btn btn-default" style={{ fontWeight: 'bold', cursor: 'default' }}></button>
                            <button type="button" className="btn btn-primary-clear"><i className="fa fa-edit" />Chỉnh sửa</button>
                        </span>
                        <span>
                            <button onClick={this.save} className="btn btn-primary"><i className="fa fa-floppy-o"></i>Lưu</button>
                        </span>
                    </div>
                    <h1 className="maintitle">Thông tin hành chính</h1>
                    <form id="RecordHanhChinhForm" className="form-horizontal">
                        <div className="content">
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Mã Số</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" onChange={this.change} className="form-control" name="MaSo" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">DangMat</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" name="DangMat" onChange={this.change} className="form-control" />
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
                                    <label className="col-xs-4 col-sm-5 control-label">CungCuoi</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" name="CungCuoi" onChange={this.change} className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">MatNghieng</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" name="MatNghieng" onChange={this.change} className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4" style={{ clear: 'left' }}>
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">DuongCuoi</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" name="DuongCuoi" onChange={this.change} className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">DuongGiuaHamTren</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" name="DuongGiuaHamTren" onChange={this.change} className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4" style={{ clear: 'left' }}>
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">HanhlangDen</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" name="HanhlangDen" onChange={this.change} className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Moi</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" name="Moi" onChange={this.change} className="form-control" />
                                    </div>
                                </div>
                            </div>
                           
                           
                            <div className="col-sm-4" style={{ clear: 'left' }}>
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">RanhCam</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" name="RanhCam" onChange={this.change} className="form-control" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">GocMuiMoi</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" name="GocMuiMoi" onChange={this.change} className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4" style={{ clear: 'left' }}>
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">DoNuouKhiCuoi</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" name="DoNuouKhiCuoi" className="form-control" />
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">DoLoRangCucLucNghi</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" name="HamTren_Phai" onChange={this.change} className="form-control" />
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}

export default KhamNgoaiMatPage;