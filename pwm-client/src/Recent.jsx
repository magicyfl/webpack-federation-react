import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Form, Input } from 'antd';

export default function Recent() {
    const data = useSelector(data => data);
    const dispatch = useDispatch();
    
    return (
        <div>
            <h2>pwm-client Recent</h2>
            <div>
                username: {data.user.name}
            </div>
            <div>
                theme: {data.config.theme}
            </div>
            <Form name="control-hooks">
                <Form.Item name="username" label="Note" rules={[{ required: true }]}>
                    <Input defaultValue={data.user.name} />
                </Form.Item>
                <Form.Item name="theme" label="Note" rules={[{ required: true }]}>
                    <Input defaultValue={data.config.theme} />
                </Form.Item>
            </Form>
        </div>
    )
}