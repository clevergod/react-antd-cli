/**
 * Created by qingclass on 17/5/27.
 */
import React, { Component } from 'react';
import { Menu, Icon, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

class MenuNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            mode: 'inline',
            current: this.props.current
        };
    };
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    render() {
        return (
            <Row type="flex" justify="end">
                <Col xs={{ span: 0 }} md={{span: 24}}>
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                        theme="dark"
                        style={{lineHeight:'64px',float:'right'}}
                    >
                        <Menu.Item key="home">
                            <Link to="/home">home</Link>
                        </Menu.Item>
                        <Menu.Item key="component">
                            <Link to="/component">组件</Link>
                        </Menu.Item>
                        <Menu.Item key="alipay">
                            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                        </Menu.Item>

                    </Menu>
                </Col>
            </Row>
        )
    }
}export default MenuNav