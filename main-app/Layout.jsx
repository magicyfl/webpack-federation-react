import React from 'react';
import { Layout, Select, Menu } from 'antd';
import 'antd/dist/antd.css';

const { Header, Sider, Content, Footer } = Layout;

const data = [
	[],
	[
		{  key: "1", name: 'Peronal options1' },
		{  key: "2", name: 'Peronal options2' },
		{  key: "3", name: 'Peronal options3' },
	], 
	[
		{  key: "1", name: 'ACME Company options1' },
		{  key: "2", name: 'ACME Company options2' },
		{  key: "3", name: 'ACME Company options3' },
	],
	[
		{  key: "1", name: 'Jump Crypto options1' },
		{  key: "2", name: 'Jump Crypto options2' },
		{  key: "3", name: 'Jump Crypto options3' },
	]
]

export default function BaseLayout(props) {

	const [activeKey, setActiveKey] = React.useState("1");
	const [menuActiveKey, setMenuActiveKey] = React.useState("1");

	function onSelect(value) {
		setActiveKey(value);
	}

	function onMenuSelect(value) {
		setMenuActiveKey(value.key);
	}

	return (
		<Layout>
			<Header>
				<Select
					onSelect={onSelect}
					style={{ width: '240px' }}
					defaultValue="1"
				>
					<Select.Option key="1">Peronal</Select.Option>
					<Select.Option key="2">ACME Company</Select.Option>
					<Select.Option key="3">Jump Crypto</Select.Option>
				</Select>
			</Header>
			<Layout>
				<Sider theme="light">
					<Menu
						onSelect={onMenuSelect}
					>
						{data[activeKey].map((item) => {
							return (
								<Menu.Item key={item.key}>{item.name}</Menu.Item>
							)
						})}
					</Menu>
				</Sider>
				<Content>
					{React.Children.map(props.children, (child) => {
						return React.cloneElement(child, {
							...child.porps,
							activeKey,
							menuActiveKey,
						});
					})}
				</Content>
			</Layout>
			<Footer>Footer</Footer>
		</Layout>
	)
}