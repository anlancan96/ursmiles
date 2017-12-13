import React from 'react';

import { changeDateForm } from '../../assets/globalFunc';

export default ({ data, chooseNewRole }) => (
    <tbody>
        <tr>
            <td className="text-nowrap">{data.ID}</td>
            <td className="text-nowrap">
                {data.Username}
            </td>
            <td>
                {data.HoTen}
            </td>
            <td>
                <span><i className="fa fa-mobile nowrap">{' ' + data.DienThoai}</i></span>
            </td>
            <td>{data.Email1}</td>
            <td>{data.Facebook}</td>
            <td>
                <div className="dropdown">
                    <a data-toggle="dropdown" aria-expanded="true">
                        <i className="fa fa-bars"></i>{data.role || 'chưa có'}
                    </a>
                    <ul className="dropdown-menu dropdown-menu-right" role="menu" aria-labelledby="dropdownMenu1">
                        <li role="presentation"><a href="#openModal" onClick={() => chooseNewRole(data.ID, data.Username, "admin", data.role)} role="menuitem" tabIndex="-1">admin</a></li>
                        <li role="presentation"><a href="#openModal" onClick={() => chooseNewRole(data.ID, data.Username, "doctor", data.role)} role="menuitem" tabIndex="-1">doctor</a></li>
                        <li role="presentation"><a href="#openModal" onClick={() => chooseNewRole(data.ID, data.Username, "user", data.role)} role="menuitem" tabIndex="-1">user</a></li>
                    </ul>
                </div>
            </td>
        </tr>
    </tbody>
);
