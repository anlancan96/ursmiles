import React from 'react';
import ItemBenhNhan from './ItemBenhNhan';

export default (props) => (
    <div>
        <table className="table">
            <thead>
                <tr>
                    <th>Mã</th>
                    <th>Tên bệnh nhân</th>
                    <th>Giới tính</th>
                    <th>Số điện thoại</th>
                    <th>Ngày khám</th>
                    <th>Bác Sĩ</th>
                    <th></th>
                </tr>
            </thead>
            {props.listBenhNhan.map((item, index) => <ItemBenhNhan
                focusBenhAn={props.focusBenhAn}
                key={`_${index}`}
                data={item}
            /> )}
        </table>
    </div >
);