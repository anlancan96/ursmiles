import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './home.css';
import { modifyEmit } from './action';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { apiurl } from '../../assets/consts';

class KhamTrongMieng extends Component {
    state = {
        Hang:'',
        Chi:'',
        RangCoi_Trai: 0.0,
        RangCoi_Phai: 0.0,
        RangNanh_Trai: 0 ,
        RangNanh_Phai: 0,
        KhoangHamTren: 0,
        KhoangHamDuoi: 0,
        LechChucNang: 0,
        HamTren_Trai: 0,
        HamTren_Phai: 0,
        HamDuoi_Trai: 0,
        HamDuoi_Phai: 0,
        CanPhu: 0,
        CanPhu_mm: 0,
        CanChia_mm: 0,
        NuouRangNanhHD:0,
        DuongCongSpee: 0,
        CungRang: 0,
        GiaiDoanRang: 0,
        NuouVungRCDuoi: 0,

        isLoading: true,
        disabled: true
    }

    change = e => this.setState({ [e.target.name]: e.target.value });

    componentDidMount() {
        axios({
            method: 'get',
            url: `${apiurl}/v1/khamtrongmieng/${this.props.match.params.MaSo}`
        }).then(response => {
            console.log(response.data);
            this.setState({ ...response.data, isLoading: false });
        })
    }

    modify = () => {
        let userData = this.props.userData;
        let token = jwt.sign(userData, 'ursmiles');
        this.props.modifyEmit(this.state, token, this.props.match.params.MaSo);
    }

    componentWillReceiveProps(nextProps) {
        if(!nextProps.isLoading){
            alert(nextProps.message);
        }
    }

    changeState = e => this.setState({disabled : false});

    render() {
        return (
            <div id="RecordKhamTrongMiengApp" className="maincontent">
                <div className="pull-right" style={{margin: '14px 20px 0 0'}}>
                    <button className="btn-primary-clear btn" onClick={this.modify} disabled={this.props.isLoading}><i className="fa fa-edit"></i>Chỉnh sửa</button>
                
                </div>
                <h1 className="maintitle">Khám trong miệng</h1>
                { !this.state.isLoading && <form className="form-horizontal">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="panel panel-default">
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <label className="col-sm-4 control-label">Hạng</label>
                                            <div className="col-sm-8">
                                                <select name="Hang" onChange={this.change} value={this.state.Hang} className="form-control">
                                                    <option></option>
                                                    <option value="Hang I">Hạng I</option>
                                                    <option value="Hang II">Hạng II</option>
                                                    <option value="Hang III">Hạng III</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-4 control-label">Chi</label>
                                            <div className="col-sm-8">
                                                <select name="Chi" onChange={this.change} value={this.state.Chi} className="form-control">
                                                    <option></option>
                                                    <option value="Chi I">Chi I</option>
                                                    <option value="Chi II">Chi II</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-4 control-label"></label>
                                            <div className="col-sm-8">
                                                <div className="row text-center">
                                                    <div className="col-xs-6">
                                                        <div className="form-control-static">Trái <em className="text-muted">(mm)</em></div>
                                                    </div>
                                                    <div className="col-xs-6">
                                                        <div className="form-control-static">Phải <em className="text-muted">(mm)</em></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <label className="col-sm-4 control-label">Răng cối</label>
                                            <div className="col-sm-8">
                                                <div className="row">
                                                    <div className="col-xs-6">
                                                        <input type="text" name="RangCoi_Trai" onChange={this.change} value={this.state.RangCoi_Trai}  className="form-control text-center"/>
                                                    </div>
                                                    <div className="col-xs-6">
                                                        <input type="text" name="RangCoi_Phai" onChange={this.change} value={this.state.RangCoi_Phai} className="form-control text-center"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <label className="col-sm-4 control-label">Răng nanh</label>
                                            <div className="col-sm-8">
                                                <div className="row">
                                                    <div className="col-xs-6">
                                                        <input type="text" name="RangNanh_Trai" onChange={this.change} value={this.state.RangNanh_Trai} className="form-control text-center"/>
                                                    </div>
                                                    <div className="col-xs-6">
                                                        <input type="text" name="RangNanh_Phai" onChange={this.change} value={this.state.RangNanh_Phai} className="form-control text-center"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="panel panel-default">
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <label className="col-sm-4 control-label">Lệch chức năng</label>
                                            <div className="col-sm-8">
                                                <select name="LechChucNang" onChange={this.change} value={this.state.LechChucNang} className="form-control">
                                                    <option></option>
                                                    <option value="Không">Không</option>
                                                    <option value="Trước">Trước</option>
                                                    <option value="Phải">Phải</option>
                                                    <option value="Trái">Trái</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-xs-12 form-control-static"></div>
                                        </div>
                                        <div className="form-group">
                                            <label className="col-sm-4 control-label">Đường giữa</label>
                                            <div className="col-sm-8">
                                                <div className="row text-center">
                                                    <div className="col-xs-6">
                                                        <div className="form-control-static">Phải <em className="text-muted">(mm)</em></div>
                                                    </div>
                                                    <div className="col-xs-6">
                                                        <div className="form-control-static">Trái <em className="text-muted">(mm)</em></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <label className="col-sm-4 control-label">Hàm trên</label>
                                            <div className="col-sm-8">
                                                <div className="row">
                                                    <div className="col-xs-6">
                                                        <input type="text" name="HamTren_Phai" value={this.state.HamTren_Phai} onChange={this.change} className="form-control text-center"/>
                                                    </div>
                                                    <div className="col-xs-6">
                                                        <input type="text" name="HamTren_Trai" value={this.state.HamTren_Trai} onChange={this.change} className="form-control text-center"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <label className="col-sm-4 control-label">Hàm dưới</label>
                                            <div className="col-sm-8">
                                                <div className="row">
                                                    <div className="col-xs-6">
                                                        <input type="text" name="HamDuoi_Phai" value={this.state.HamDuoi_Phai} onChange={this.change} className="form-control text-center"/>
                                                    </div>
                                                    <div className="col-xs-6">
                                                        <input type="text" name="HamDuoi_Trai" value={this.state.HamDuoi_Trai} onChange={this.change} className="form-control text-center"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="panel panel-default">
                                    <div className="panel-body">
                                        <div className="form-group">
                                            <label className="col-sm-3 control-label">Khoảng hàm trên</label>
                                            <div className="col-sm-2">
                                                <input type="text" name="KhoangHamTren" value={this.state.KhoangHamTren} onChange={this.change} className="form-control" />
                                            </div>
                                            <div className="col-sm-1">
                                                <div className="form-control-static">(mm)</div>
                                            </div>
                                            <label className="col-sm-3 control-label">Khoảng hàm dưới</label>
                                            <div className="col-sm-2">
                                                <input type="text" name="KhoangHamDuoi" value={this.state.KhoangHamDuoi} onChange={this.change} className="form-control" />
                                            </div>
                                            <div className="col-sm-1">
                                                <div className="form-control-static">(mm)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div className="form-group">
                                    <label className="col-sm-5 control-label">Cắn phủ</label>
                                    <div className="col-sm-7">
                                        <select name="CanPhu" onChange={this.change} value={this.state.CanPhu} className="form-control">
                                            <option></option>
                                            <option value="Hở">Hở</option>
                                            <option value="Trung bình">Trung bình</option>
                                            <option value="Sâu">Sâu</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-4 col-sm-offset-5">
                                        <input type="text" name="CanPhu_mm" value={this.state.CanChu_mm} onChange={this.change} className="form-control" />
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-control-static">(mm)</div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-5 control-label">Cắn chìa</label>
                                    <div className="col-sm-4">
                                        <input type="text" name="CanChia" value={this.state.CanChia_mm} onChange={this.change} className="form-control" />
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-control-static">(mm)</div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-5 control-label">Nướu răng nanh HD</label>
                                    <div className="col-sm-7">
                                        <select  name="NuouRangNanhHD" value={this.state.NuouRangNanhHD} onChange={this.change} className="form-control">
                                            <option></option>
                                            <option value="Mỏng">Mỏng</option>
                                            <option value="Trung bình">Trung bình</option>
                                            <option value="Dày">Dày</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-5 control-label">Đường cong Spee</label>
                                    <div className="col-sm-7">
                                        <select name="DuongCongSpee" value={this.state.DuongCongSpee} onChange={this.change} className="form-control">
                                            <option></option>
                                            <option value="Sâu">Sâu</option>
                                            <option value="Trung bình">Trung bình</option>
                                            <option value="Phẳng">Phẳng</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-5 control-label">Cung răng</label>
                                    <div className="col-sm-7">
                                        <select name="CungRang" onChange={this.change} value={this.state.CungRang} className="form-control">
                                            <option></option>
                                            <option value="Hình tam giác">Hình tam giác</option>
                                            <option value="Hình trứng">Hình trứng</option>
                                            <option value="Hình vuông">Hình vuông</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-5 control-label">Giai đoạn răng</label>
                                    <div className="col-sm-7">
                                        <select name="GiaiDoanRang" value={this.state.GiaiDoanRang} onChange={this.change} className="form-control">
                                            <option></option>
                                            <option value="Sữa">Sữa</option>
                                            <option value="Hỗn hợp">Hỗn hợp</option>
                                            <option value="Vĩnh viễn">Vĩnh viễn</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-5 control-label">Nướu vùng RC dưới</label>
                                    <div className="col-sm-7">
                                        <select name="NuouVungRCDuoi" value={this.state.NuouVungRCDuoi} onChange={this.change} className="form-control">
                                            <option></option>
                                            <option value="Mỏng">Mỏng</option>
                                            <option value="Trung bình">Trung bình</option>
                                            <option value="Dày">Dày</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>}
            </div>
        
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userData : state.appReducer.userData,
        message  : state.patientReducer.message,
        isLoading: state.patientReducer.isLoading,
    }
}

const mapsDispatchToProps = ({
    modifyEmit,
});

export default connect(mapStateToProps, mapsDispatchToProps)(KhamTrongMieng);