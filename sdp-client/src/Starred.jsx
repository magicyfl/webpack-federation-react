import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'antd';

const columns = [{
    title: 'name',
    dataIndex: 'name',
    key: 'name',
}, {
    title: 'password',
    dataIndex: 'password',
    key: 'password',
}];

export default function Starred() {
    const data = useSelector(data => data.listData);

    return (
        <div>
            <h2>sdp-client Starred</h2>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}