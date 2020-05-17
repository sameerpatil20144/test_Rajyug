/* eslint-disable no-undef */
/* eslint-disable */
/* eslint-disable no-console */
import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { withRouter } from 'react-router'
import { removeCookie } from '../../cookies'
import CanAccess from '../../components/CanAccess'

const Header = (props) => {
    let inventory = (props.pageLink != undefined && props.pageLink == 'inventory') ? 'active' : '';
    let setting = (props.pageLink != undefined && props.pageLink == 'setting') ? 'active' : '';
    let hr = (props.pageLink != undefined && props.pageLink == 'hr') ? 'active' : '';
    let finance = (props.pageLink != undefined && props.pageLink == 'finance') ? 'active' : '';

    const logout = (props) => {
        localStorage.removeItem("rights");
        props.history.push('/');
        removeCookie('access_token');
        removeCookie('name');
    }

    return (
        <Navbar expand="md" className="navbar-wrapper">
            <Navbar.Brand>RajYug ITs</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'flex-end' }}>
                <Nav className="d-flex align-items-center">

                    <CanAccess rights={"showMasterIcon"}>
                        <Nav.Link href={"/hr-management"} className={hr}>
                            HR
                        </Nav.Link>
                    </CanAccess >
                    <CanAccess rights={"showMasterIcon"}>
                        <Nav.Link href={"/finance"} className={finance}>
                            Finance
                        </Nav.Link>
                    </CanAccess>
                    <CanAccess rights={"showIcon"}>
                        <Nav.Link href="/inventories" className={inventory}>
                            Inventories
                        </Nav.Link>
                    </ CanAccess>
                    <CanAccess rights={"showIcon"}>
                        <Nav.Link href="/settings" className={setting} id='100'>
                            Settings
                            </Nav.Link>
                    </ CanAccess>
                    <Nav.Item>
                        <span>
                            <div>
                                <img src="../images/default_user.png" style={{ width: '50px' }} />
                            </div>
                        </span>
                    </Nav.Item>
                    <Nav.Item className="ml-2">
                        <NavDropdown.Item onClick={() => logout(props)}>Logout</NavDropdown.Item>
                    </Nav.Item>
                </Nav>

            </Navbar.Collapse>
        </Navbar >
    );
}

export default withRouter(Header);


