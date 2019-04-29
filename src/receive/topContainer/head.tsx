import CardIntro from './cardIntro';
import "./header.scss";
import * as React from 'react';
import PhoneNumComponent from './phoneNum';

class Header extends React.Component {
    public render() {
        return <div className="headerBody">
            <div>
                <CardIntro />
                <PhoneNumComponent />
            </div>
        </div>
    }
}
export default Header