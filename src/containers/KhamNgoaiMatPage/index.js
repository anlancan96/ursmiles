import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { apiurl } from '../../assets/consts';
import './home.css';
import { modifyEmit1 } from './action.js';
import jwt from 'jsonwebtoken';

class KhamNgoaiMatPage extends Component {
    state = {
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

    componentDidMount() {
        axios({
            method: 'get',
            url: `${apiurl}/v1/khamngoaimat/${this.props.match.params.MaSo}`
        }).then(response => {
            console.log(response.data);
            this.setState({ ...response.data, isLoading: false });
        })
    }

    change = e => this.setState({ [e.target.name]: e.target.value });

    modify = () => {
        let userData = this.props.userData;
        let token = jwt.sign(userData, 'ursmiles');
        this.props.modifyEmit1(this.state, token, this.props.match.params.MaSo );
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
                                <select name="DangMat" value={this.state.DangMat} onChange={this.change} className="form-control">
                                    <option value="0"></option>
                                    <option value="1">Ngắn</option>
                                    <option value="2">Trung bình</option>
                                    <option value="3">Dài</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label className="control-label">Mặt nghiêng</label>
                                <select name="MatNghieng" value={this.state.MatNghieng} onChange={this.change} className="form-control">
                                    <option value="0"></option>
                                    <option value="1">Mặt thẳng</option>
                                    <option value="2">Mặt lồi</option>
                                    <option value="3">Mặt lõm</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label className="control-label">Đường giữa hàm trên / mặt</label>
                                <select name="DuongGiuaHamTren" value={this.state.DuongGiuaHamTren} onChange={this.change} className="form-control">
                                    <option value="0"></option>
                                    <option value="1">Không</option>
                                    <option value="2">Phải</option>
                                    <option value="3">Trái</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label className="control-label">Môi</label>
                                <select name="Moi" value={this.state.Moi} onChange={this.change} className="form-control">
                                    <option value="0"></option>
                                    <option value="1">Mỏng</option>
                                    <option value="2">Trung bình</option>
                                    <option value="3">Dày</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label className="control-label">Góc mũi môi</label>
                                <select name="GocMuiMoi" value={this.state.GocMuiMoi} onChange={this.change} className="form-control">
                                    <option value="0"></option>
                                    <option value="1">&lsaquo; 90 </option>
                                    <option value="2">90-110</option>
                                    <option value="3">&rsaquo; 90</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-2">
                                <label className="control-label">Cung cười</label>
                                <select name="CungCuoi" value={this.state.CungCuoi} onChange={this.change} className="form-control">
                                    <option value="0"></option>
                                    <option value="1">Thấp</option>
                                    <option value="2">Trung bình</option>
                                    <option value="3">Cao</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label className="control-label">Đường cười</label>
                                <select name="DuongCuoi" value={this.state.DuongCuoi} onChange={this.change} className="form-control">
                                    <option value="0"></option>
                                    <option value="1">Thấp</option>
                                    <option value="2">Trung bình</option>
                                    <option value="3">Cao</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label className="control-label">Hành lang đen</label>
                                <select name="HanhlangDen" value={this.state.HanhlangDen} onChange={this.change} className="form-control">
                                    <option value="0"></option>
                                    <option value="1">Hẹp</option>
                                    <option value="2">Trung bình</option>
                                    <option value="3">Rộng</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label className="control-label">Rãnh cằm</label>
                                <select name="RanhCam" value={this.state.RanhCam} onChange={this.change} className="form-control">
                                    <option value="0"></option>
                                    <option value="1">Nông</option>
                                    <option value="2">Trung bình</option>
                                    <option value="3">Sâu</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <label className="control-label">Độ lộ nướu khi cười</label>
                                <div className="row">
                                    <div className="col-xs-7"><input type="text" value={this.state.DoNuouKhiCuoi} onChange={this.change} name="DoLoNuouKhiCuoi" className="form-control" /></div>
                                    <div className="col-xs-5">
                                        <div className="form-control-static">(mm)</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <label className="control-label">Độ lộ răng cửa lúc nghỉ</label>
                                <div className="row">
                                    <div className="col-xs-7"><input type="text" value={this.state.DoLoRangCuaLucNghi} name="DoLoRangCuaLucNghi" onChange={this.change} className="form-control" /></div>
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