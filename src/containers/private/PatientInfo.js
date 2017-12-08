import React,{Component} from 'react';
import Sidebar from '../../components/Sidebar';
import HeaderInfo from '../../components/HeaderInfo';
import '../css/patientInfo.css';

class PatientInfo extends Component {
    render() {
        return (
            <div>
                <HeaderInfo />
                <Sidebar />
                <div id="RecordHanhChinhApp" className="maincontent">
                    <div className="pull-right form-inline" style={{margin: '14px 20px 0 0'}}>
                        <span className="form-inline">
                            <button type="button" disabled className="btn btn-default" style={{ fontWeight: 'bold', cursor: 'default' }}></button>
                            <button type="button" className="btn btn-primary-clear"><i className="fa fa-edit" />Chỉnh sửa</button>
                        </span>
                        <span>
                            <select className="form-control">
                                <option value="">Trạng thái</option>
                            </select>
                            <button type="button" className="btn btn-primary"><i className="fa fa-floppy-o"></i>Lưu</button>
                        </span>
                    </div>
                    <h1 className="maintitle">Thông tin hành chính</h1>
                    <form id="RecordHanhChinhForm" className="form-horizontal">
                        <div className="content">
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Ngày bắt đầu</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" className="form-control" name="a"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Bác sĩ</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text"  className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="avatar avatar-3-4" style={{position:'absolute', marginLeft:'20%'}}></div>
                                <div  className="imageupload-tool" style={{marginLeft:'20%', position:'absolute' ,top:'145px', left:'40px'}}>
                                    <div className="upload-btn">
                                        <button type="button" className="btn btn-primary btn-sm btn-block"><i className="fa fa-camera"></i></button>
                                        <input type="file" id="ipfImage" />
                                    </div>
                                    <button type="button" className="btn btn-danger btn-sm"><i className="fa fa-trash"></i></button>
                                </div>
                            </div>
                            <div className="col-sm-4" style={{clear:'left'}}>
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Họ</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text"  className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Tên</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text"  className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4" style={{clear:'left'}}>
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Ngày sinh</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Giới tính</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <select className="form-control">
                                            <option value="0"></option>
                                            <option value="1">Nam</option>
                                            <option value="2">Nữ</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4" style={{clear:'left'}}>
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Địa chỉ</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text"  className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Quận</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4" style={{clear:'left'}}>
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Tỉnh thành</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text"className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Quốc gia</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4" style={{clear:'left'}}>
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Số di động</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text"  className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Số điện thoại bàn</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Mã số</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text"  className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4" style={{clear:'left'}}>
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Email</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text"  name="Email" className="form-control" />
                                        <div className="alert alert-danger">Xin vui lòng nhập chính xác email</div>
                                        {/*  */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Số fax</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <label className="col-xs-4 col-sm-5 control-label">Dân tộc</label>
                                    <div className="col-xs-8 col-sm-7">
                                        <input type="text"  className="form-control" />
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
                                            <input type="checkbox" value="DaPhauThuat"/>Đã phẫu thuật
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" value="ChoConBu"/>Cho con bú
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                        <input type="checkbox" value="UongThuocNguaThai"/>Uống thuốc ngừa thai
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" value="CoThai"/>Có thai
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" value="HenSuyen"/>Hen suyễn
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" value="TieuDuong"/>Tiểu đường
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" value="MauKhoDong"/>Máu khó đông
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" value="DongKinh"/>Động kinh
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" value="HoaTriLieu"/>Hóa Trị Liệu
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" value="HuyetHuu"/>Huyết hữu
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" value="XaTri"/>Xạ trị
                                        </label>
                                    </div> 
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" value="CaoHuyetAp"/>Cao huyết áp
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" value="BenhLyHoHap"/>Bệnh lý hô hấp
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" value="BenhLyTuanHoan"/>Bệnh lý tuần hoàn
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" value="BenhLyTieuHoa"/>Bệnh lý tiêu hóa
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" value="HIV/AIDS"/>HIV/AIDS
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" value="Lao"/>Lao
                                        </label>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" value="Dị ứng"/>Dị ứng
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
                                    <div  className="col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" value="HoiMieng"/>Hôi miệng
                                        </label>
                                    </div>
                                    <div  className="col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" value="BenhLyNhaChu"/>Bệnh lý nha chu
                                        </label>
                                    </div>
                                
                                    <div  className="col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" value="ChayMauNuou"/>Chảy máu nướu
                                        </label>
                                    </div>
                                    <div  className="col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" value="NghienRang"/>Nghiến răng
                                        </label>
                                    </div>
                                    <div  className="col-md-6 col-lg-6 checkbox">
                                        <label>
                                            <input type="checkbox" value="RangNhayCam"/>Răng nhạy cảm
                                        </label>
                                    </div>

                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label className="col-xs-4 col-sm-4 control-label">Lý do đến khám</label>
                                            <div className="col-xs-8 col-sm-8">
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Các thuốc đang sử dụng</h3>
                                </div>
                                <div className="panel-body">
                                    <textarea className="form-control" style={{height:'53px'}}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="overlay"></div>
                    </form>
                </div>
                
            </div>
        )
    }
}

export default PatientInfo;