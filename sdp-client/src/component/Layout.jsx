import React from 'react';
import { Layout, Select, Menu, Avatar } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';

const { Header, Sider, Content, Footer } = Layout;

const menus = [
    { key: 'applications', name: 'Applications', route: 'applications' },
    {  key: 'starred', name: 'Starred', route: 'starred' },
    {  key: 'items', name: 'Items', route: 'items' },
];

export default function BaseLayout(props) {
	const history = useNavigate();

	function onMenuSelect(value) {
		const menu = menus.find((item) => {
			return item.key === value.key;
		});

		history(menu.route);
	}

	React.useEffect(() => {
		history('applications');
	}, []);

	return (
		<Layout style={{ height: "100vh" }}>
			<Sider theme="light">
				<Menu
					style={{ height: "100%" }}
					mode="inline"
					onSelect={onMenuSelect}
					defaultSelectedKeys={['applications']}
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
							SPD
						</Avatar>
					</div>
				</Header>
				<Content>
					<Outlet />
				</Content>
				<Footer style={{ background: '#fff' }}>(SDP)Footer</Footer>
			</Layout>
		</Layout>
	)
}