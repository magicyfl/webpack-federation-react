import React from 'react';
import { Layout, Select, Menu, Avatar } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import 'antd/dist/antd.css';
import './index.css';

const { Header, Sider, Content, Footer } = Layout;

const baseMenus = [
	{ key: 'shaingCenter', name: 'Shaing Center', route: 'shaing' },
	{ key: 'securityMontoring', name: 'Security Montoring', route: 'security' },
	{ key: 'settings', name: 'Settings', route: 'settings' },
];

const data = [
	[],
	[
		{ key: 'recent', name: 'Recent', route: 'recent' },
		{ key: 'applications', name: 'Applications', route: 'applications' },
		...baseMenus,
	],
	[
		{  key: 'devices', name: 'Devices', route: 'devices' },
		{  key: 'valut', name: 'ACME Valut', route: 'valut' },
		...baseMenus,
		
	],
	[
		{  key: 'starred', name: 'Starred', route: 'starred' },
		{  key: 'items', name: 'All Items', route: 'items' },
		...baseMenus,
	]
];

export default function BaseLayout(props) {
	const store = useSelector(data => data);
	const dispatch = useDispatch();
	const [activeKey, setActiveKey] = React.useState("1");
	const history = useNavigate();

	function onSelect(value) {
		setActiveKey(value);

		const menu = data[value][0];

		dispatch({
			type: 'CHNAGE_MENU',
			activeKey: menu.key,
		});

		history(menu.route);
	}

	function onMenuSelect(value) {
		const menu = data[activeKey].find((item) => {
			return item.key === value.key;
		});

		dispatch({
			type: 'CHNAGE_MENU',
			activeKey: menu.key,
		});

		history(menu.route);
	}

	React.useEffect(() => {
		history(store.menus.activeKey);
	}, []);

	React.useEffect(() => {
		return () => {
			console.log('我被销毁了');
		}
	}, []);

	return (
		<Layout style={{ height: "100vh" }}>
			<Sider theme="light">
				<Menu
					style={{ height: "100%" }}
					mode="inline"
					onSelect={onMenuSelect}
					selectedKeys={[store.menus.activeKey]}
				>
					{data[activeKey].map((item) => {
						return (
							<Menu.Item key={item.key}>{item.name}</Menu.Item>
						)
					})}
				</Menu>
			</Sider>
			<Layout>
				<Header style={{ background: '#fff' }}>
					<div className="header">
						<Select
							onSelect={onSelect}
							style={{ width: "240px" }}
							defaultValue="1"
						>
							<Select.Option key="1">Peronal</Select.Option>
							<Select.Option key="2">ACME Company</Select.Option>
							<Select.Option key="3">Jump Crypto</Select.Option>
						</Select>
						<Avatar style={{ backgroundColor: '#f56a00', verticalAlign: 'middle' }} size="large" gap={8}>
							Lucy
						</Avatar>
					</div>
				</Header>
				<Content>
					{props.children}
				</Content>
				<Footer style={{ background: '#fff' }}>(main-app)Footer</Footer>
			</Layout>
		</Layout>
	)
}