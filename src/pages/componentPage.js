/**
 * Created by qingclass on 17/5/27.
 */
/**
 * Created by qingclass on 17/5/26.
 */
import React, {Component} from 'react';
import {Layout, Menu, Breadcrumb, Icon, Row, Col} from 'antd';
const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import {Link,Route} from 'react-router-dom';

import '../style/style.css';
import MenuNav from '../component/MenuNav'
class ComponentPage extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    }

    render() {
        return (
            <Layout id="components-layout-demo-side">
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo"/>
                    <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['6']}>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="user"/><span className="nav-text">Navigation</span></span>}
                        >
                            <Menu.Item key="1">
                                <Link to="/component/Navigation/Affix">Affix</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/component/Navigation/Menu">Menu</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="team"/><span className="nav-text">Team</span></span>}
                        >
                            <Menu.Item key="4">Team 1</Menu.Item>
                            <Menu.Item key="5">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="6">
                            <span>
                                <Icon type="file"/><span className="nav-text">File</span>
                            </span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#404040', padding: 0}}>
                        <MenuNav current="component"></MenuNav>
                    </Header>
                    <Content style={{margin: '0 16px'}}>
                        <Breadcrumb style={{margin: '12px 0'}}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                            <Route path="/component/Navigation/Affix" component={() => <div>Affix</div>} ></Route>
                            <Route path="/component/Navigation/Menu" component={() => <div>Menu</div>} ></Route>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}
export default ComponentPage