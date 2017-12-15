import React, { Component } from 'react';
import axios from 'axios';
import { apiurl } from '../../assets/consts';
import jwt from 'jsonwebtoken';
import './patientInfo.css';
import { connect } from 'react-redux';

class PatientInfo extends Component {
    state = {
        NgayBatDau: null,
        NgaySinh: null,
        TrangThai: '',
        BacSi: '',
        Ho: '',
        Ten: '',
        MaHoSo: '',
        GioiTinh: '',
        DanToc: '',
        DiaChi: '',
        DienThoai: '',
        Email: '',
        Facebook: '',
        Twitter: '',
        DaPhauThuat: 0,
        UongThuocNguaThai: 0,
        HenSuyen: 0,
        MauKhoDong: 0,
        HoaTriLieu: 0,
        XaTri: 0,
        BenhLyHoHap: 0,
        BenhLyTieuHoa: 0,
        Lao: 0,
        ChoConBu: 0,
        CoThai: 0,
        TieuDuong: 0,
        DongKinh: 0,
        HuyetHuu: 0,
        CaoHuyetAp: 0,
        BenhLyTuanHoan: 0,
        HIV: 0,
        DiUng: 0,
        HoiMieng: 0,
        ChayMauNuou: 0,
        BenhLyNhaChu: 0,
        NghienRang: 0,
        LyDoDenKham: '',
        ThuocDaSuDung: '',

        isLoading: true,
        onEdit: false,
    }

    componentDidMount() {
        const token = localStorage.user;
        axios({
            method: 'post',
            url: `${apiurl}/v1/thongtinbenhnhan/${this.props.match.params.MaSo}`,
            data: {
                token,
            },
        }).then(res => {
            if (res.data.status === 1) this.setState({ ...res.data.data, isLoading: false });
            else if (res.data.status === 0) alert(res.data.message);
        });
    }

    change = e => { this.state.onEdit && this.setState({ [e.target.name]: e.target.value }); }

    check = e => { this.state.onEdit && this.setState({ [e.target.name]: !this.state[e.target.name] }); }

    callUpdate = () => {
        const that = this;
        const userData = this.props.userData;
        const token = localStorage.user;
        axios({
            method: 'post',
            url: `${apiurl}/v1/thongtinbenhnhan/edit/${this.state.MaSo}`,
            data: {
              ...that.state,
              token,
            },
        })
        .then((response) => {
            if (response.data.status) {
                alert(response.data.message);
            } else {
                alert(response.data.message);
            }
        })
        .catch(error => {
            alert('Lỗi do không xác định');
        });
    }

    save = e => {
        e.preventDefault();  
        this.callUpdate();
        this.changeMode();
    }

    changeMode = () => {
        this.setState({ onEdit: !this.state.onEdit });
    }

    render() {
        const { isLoading, onEdit } = this.state;
        return (
            <div>
                <div id="RecordHanhChinhApp" className="maincontent">
                    <div className="pull-right form-inline" style={{ margin: '14px 20px 0 0' }}>
                        <span>
                            {/* <select onChange={this.change} className="form-control">
                                <option value="TrangThai">Trạng thái</option>
                                <option value="Kham">Khám</option>
                                <option value="ChinhNha">Chỉnh nha</option>
                            </select> */}
                            {onEdit
                                ? <button onClick={this.save} className="btn btn-primary"><i className="fa fa-floppy-o"></i>Lưu</button>
                                : <button onClick={this.changeMode} type="button" className="btn btn-primary-clear"><i className="fa fa-edit" />Chỉnh sửa</button>
                            }
                        </span>
                    </div>
                    <h1 className="maintitle">Thông tin hành chính</h1>
                    {!isLoading && <form id="RecordHanhChinhForm" className="form-horizontal">
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
                                        <input type="text" name="BacSi" value={this.state.BacSi} onChange={this.change} className="form-control" />
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
                                        <input type="text" name="Ho" value={this.state.Ho} onChange={this.change} className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Tên</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" name="Ten" value={this.state.Ten} onChange={this.change} className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4" style={{ clear: 'left' }}>
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Ngày sinh</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="date" name="NgaySinh" value={this.state.NgaySinh} onChange={this.change} className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Giới tính</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <select name="GioiTinh" value={this.state.GioiTinh} onChange={this.change} className="form-control">
                                            <option value="Male">Nam</option>
                                            <option value="Female">Nữ</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4" style={{ clear: 'left' }}>
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Dân tộc</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" name="DanToc" value={this.state.DanToc} onChange={this.change} className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4" style={{ clear: 'left' }}>
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Địa chỉ</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" name="DiaChi" value={this.state.DiaChi} onChange={this.change} className="form-control" />
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Mã hồ sơ</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" name="MaHoSo" value={this.state.MaHoSo} onChange={() => {}} className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4" style={{ clear: 'left' }}>
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Số di động</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" name="DienThoai" value={this.state.DienThoai} onChange={this.change} className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Facebook</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" value={this.state.Facebook} name="Facebook" onChange={this.change} className="form-control" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-sm-4" style={{ clear: 'left' }}>
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Email</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" value={this.state.Email} onChange={this.change} name="Email" className="form-control" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Twitter</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text"name="Twitter" value={this.state.Twitter} onChange={this.change} className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="col-md-6">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Tiểu sử y khoa</h3>
                                </div>
                                <div id="TieuSuYKhoa" className="panel-body checkbox-list row-xs">
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" name="DaPhauThuat" onChange={this.check} value="1" checked={this.state.DaPhauThuat}/>Đã phẫu thuật
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" name="ChoConBu" value="1" onChange={this.check} checked={this.state.ChoConBu} />Cho con bú
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" name="UongThuocNguaThai" onChange={this.check} value="1" checked={this.state.UongThuocNguaThai}/>Uống thuốc ngừa thai
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" name="CoThai" value="1" onChange={this.check} checked={this.state.CoThai}/>Có thai
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" name="HenSuyen" value="1" onChange={this.check} checked={this.state.HenSuyen}/>Hen suyễn
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" name="TieuDuong"value="1" onChange={this.check} checked={this.state.TieuDuong} />Tiểu đường
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" name="MauKhoDong" value="1" onChange={this.check} checked={this.state.MauKhoDong}/>Máu khó đông
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" name="DongKinh" value="1" onChange={this.check} checked={this.state.DongKinh}/>Động kinh
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" name="HoaTriLieu" value="1" onChange={this.check} checked={this.state.HoaTriLieu}/>Hóa Trị Liệu
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" name="HuyetHuu" value="1" onChange={this.check} checked={this.state.HuyetHuu}/>Huyết hữu
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" name="XaTri" value="1" onChange={this.check} checked={this.state.XaTri}/>Xạ trị
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" name="CaoHuyetAp" value="1" onChange={this.check} checked={this.state.CaoHuyetAp}/>Cao huyết áp
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" name="BenhLyHoHap" value="1" onChange={this.check} checked={this.state.BenhLyHoHap}/>Bệnh lý hô hấp
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" name="BenhLyTuanHoan" value="1" onChange={this.check} checked={this.state.BenhLyTuanHoan} />Bệnh lý tuần hoàn
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" name="BenhLyTieuHoa" value="1" onChange={this.check} checked={this.state.BenhLyTieuHoa}/>Bệnh lý tiêu hóa
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" name="HIV" value="1"  onChange={this.check} checked={this.state.HIV}/>HIV/AIDS
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" name="Lao" value="1" onChange={this.check} checked={this.state.Lao} />Lao
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" name="DiUng" value="1" onChange={this.check} checked={this.state.DiUng}/>Dị ứng
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Tiểu sử nha khoa</h3>
                                </div>
                                <div id="TieuSuNhaKhoa" className="panel-body">
                                    <div className="col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" name="HoiMieng" value="1" onChange={this.check} checked={this.state.HoiMieng}/>Hôi miệng
                                        </label>
                                    </div>
                                    <div className="col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" name="BenhLyNhaChu" onChange={this.check} value="1" checked={this.state.BenhLyNhaChu}/>Bệnh lý nha chu
                                        </label>
                                    </div>

                                    <div className="col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" name="ChayMauNuou"value="1" onChange={this.check} checked={this.state.ChayMauNuou}/>Chảy máu nướu
                                        </label>
                                    </div>
                                    <div className="col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" name="NghienRang" value="1" onChange={this.check} checked={this.state.NghienRang}/>Nghiến răng
                                        </label>
                                    </div>
                                    {/* <div className="col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" name="RangNhayCam" value="1" checked={this.state.RangNhayCam}/>Răng nhạy cảm
                                        </label>
                                    </div> */}

                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label className="col-xs-4 col-sm-4 control-label">Lý do đến khám</label>
                                            <div className="col-xs-8 col-sm-8">
                                                <input type="text" name="LyDoDenKham" value={this.state.LyDoDenKham} onChange={this.change} className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Các thuốc đã sử dụng</h3>
                                </div>
                                <div className="panel-body">
                                    <textarea className="form-control"name="ThuocDaSuDung" value={this.state.ThuocDaSuDung} onChange={this.change} style={{ height: '53px' }}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="overlay"></div>
                    </form> }
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userData : state.appReducer.userData
    }
}

export default connect(mapStateToProps)(PatientInfo);