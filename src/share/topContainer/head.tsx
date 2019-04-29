import CardIntro from './cardIntro';
import "./header.scss";
import * as React from 'react';

class Header extends React.Component {
    public render() {
        return <div className="headerBody">
            <div>
                <CardIntro />
            </div>
        </div>
    }
}
export default Header