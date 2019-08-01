import React, { Component } from 'react';
import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,} from 'reactstrap';

class Header extends Component {

    constructor(props) {
            // Check the Navbar toggle state
            super(props);
            this.toggle = this.toggle.bind(this);
            this.state = {
             isOpen:false
            }
        }
        
        toggle() {
            // Must use this to get state updated in DOM...can't set directly
            this.setState({
            isOpen: !this.state.isOpen
            })
        }
        render() {
            return (
                <div className="App">
                <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">{this.props.appName}</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                            1,000 Traffic Incidents
                            </NavItem>
                        </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            );
        }
}

export default Header;