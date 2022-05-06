import React from 'react';
import { Layout, Menu, Avatar } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';

const { Header, Sider, Content, Footer } = Layout;


const menus = [
    { key: 'recent', name: 'Recent', route: 'recent' },
    {  key: 'devices', name: 'Devices', route: 'devices' },
    {  key: 'valut', name: 'ACME Valut', route: 'valut' },
];

function BaseLayout(props) {
	const { activeKey } = useSelector(data => data.menus);
	const history = useHistory();

	function onMenuSelect(value) {
		const menu = menus.find((item) => {
			return item.key === value.key;
		});

		history.push(menu.route);
	}

	return (
		<Layout style={{ height: "100vh" }}>
			<Sider theme="light">
				<Menu
					style={{ height: "100%" }}
					mode="inline"
					defaultSelectedKeys={[activeKey]}
					onSelect={onMenuSelect}
				>
					{menus.map((item) => {
						return (
							<Menu.Item key={item.key}>{item.name}</Menu.Item>
						)
					})}
				</Menu>
			</Sider>
			<Layout>
				<Header style={{ background: '#fff' }}>
					<div className="header">
						<Avatar style={{ backgroundColor: 'black', verticalAlign: 'middle' }} size="large" gap={8}>
							PWM
						</Avatar>
					</div>
				</Header>
				<Content>
					{props.children}
				</Content>
				<Footer style={{ background: '#fff' }}>(PWM)Footer</Footer>
			</Layout>
		</Layout>
	)
}

export default BaseLayout;
