import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { apiurl } from '../../assets/consts';
import './home.css';
import { modifyEmit1 } from './action.js';
import jwt from 'jsonwebtoken';

class KhamNgoaiMatPage extends Component {
    state = {
       MaSo:'',
       DangMat: 0,
       CungCuoi: 0,
       MatNghieng: 0,
       DuongCuoi: 0,
       DuongGiuaHamTren: 0,
       HanhlangDen: 0,
       Moi: 0,
       RanhCam: 0,
       GocMuiMoi: 0,
       DoNuouKhiCuoi: 0,
       DoLoRangCuaLucNghi: 0,

    }

    change = e => this.setState({ [e.target.name]: e.target.value });

    modify = () => {
        let userData = this.props.userData;
        let token = jwt.sign(userData, 'ursmiles');
        this.props.modifyEmit1(this.state, token);
    }

    componentWillReceiveProps(nextProps) {
        if(!nextProps.isLoading){
            alert(nextProps.message);
        }
    }

    render() {
        return (
            <div id="RecordKhamNgoaiMatApp" className="maincontent">
                <div className="pull-right" style={{margin: '14px 20px 0 0'}}>
                    <button onClick={this.modify} className="btn btn-primary-clear" disabled={this.props.isLoading}><i className="fa fa-edit"></i>Chỉnh sửa</button>
                </div>
                <h1 className="maintitle">Khám ngoài mặt</h1>
                <form className="form-horizontal">
                    <div className="content">
                        <div className="form-group">
                            <div className="col-md-2">
                                <label className="control-label">Dạng mặt</label>
                                <select name="DangMat" onChange={this.change} className="form-control">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label className="control-label">Mặt nghiêng</label>
                                <select name="MatNghieng" onChange={this.change} className="form-control">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label className="control-label">Đường giữa hàm trên / mặt</label>
                                <select name="DuongGiuaHamTren" onChange={this.change} className="form-control">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label className="control-label">Môi</label>
                                <select name="Moi" onChange={this.change} className="form-control">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label className="control-label">Góc mũi môi</label>
                                <select name="GocMuiMoi" onChange={this.change} className="form-control">
                                    <option value=""></option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-2">
                                <label className="control-label">Cung cười</label>
                                <select name="CungCuoi" onChange={this.change} className="form-control">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label className="control-label">Đường cười</label>
                                <select name="DuongCuoi" onChange={this.change} className="form-control">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label className="control-label">Hành lang đen</label>
                                <select name="HanhlangDen" onChange={this.change} className="form-control">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label className="control-label">Rãnh cằm</label>
                                <select name="RanhCam" onChange={this.change} className="form-control">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label className="control-label">Độ lộ nướu khi cười</label>
                                <div className="row">
                                    <div className="col-xs-7"><input type="text" onChange={this.change} name="DoLoNuouKhiCuoi" className="form-control" /></div>
                                    <div className="col-xs-5">
                                        <div className="form-control-static">(mm)</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <label className="control-label">Độ lộ răng cửa lúc nghỉ</label>
                                <div className="row">
                                    <div className="col-xs-7"><input type="text" name="DoLoRangCuaLucNghi" onChange={this.change} className="form-control" /></div>
                                    <div className="col-xs-5">
                                        <div className="form-control-static">(mm)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>        
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userData : state.appReducer.userData,
        message  : state.patient1Reducer.message,
        isLoading: state.patient1Reducer.isLoading,
    }
}

const mapsDispatchToProps = ({
    modifyEmit1,
});

export default connect(mapStateToProps, mapsDispatchToProps)(KhamNgoaiMatPage);