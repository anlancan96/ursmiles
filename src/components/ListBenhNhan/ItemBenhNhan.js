import React from 'react';
import { Link } from 'react-router-dom';
import { changeDateForm } from '../../assets/globalFunc';


export default ({ data, focusBenhAn }) => (
    <tbody>
        <tr>
            <td className="text-nowrap">{data.ID}</td>
            <td className="text-nowrap">
                <Link to={`/ursmiles/hosobenhnhan/${data.MaSo}`} onClick={() => focusBenhAn(data.MaSo)} >{ data.Ho + ' ' + data.Ten }</Link>
            </td>
            <td>
                {data.GioiTinh}
            </td>
            <td>
                <span><i className="fa fa-mobile nowrap">{' ' + data.DienThoai}</i></span>
            </td>
            <td>{changeDateForm(data.NgayBatDau)}</td>
            <td>{data.BacSi}</td>
            <td>
                <div className="dropdown">
                    <a data-toggle="dropdown" aria-expanded="true">
                        <i className="fa fa-bars"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right" role="menu" aria-labelledby="dropdownMenu1">
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Tư vấn</a></li>
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Chia sẻ</a></li>
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#">Đăng nhập</a></li>
                        <li role="presentation" className="divider"></li>
                        <li role="presentation"><a role="menuitem" tabIndex="-1" href="#" className="text-danger"><i className="fa fa-trash"></i> X&#243;a</a></li>
                    </ul>
                </div>
            </td>
        </tr>
    </tbody>
);