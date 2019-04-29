import * as React from 'react';
import "./privilege.scss";
import LazyLoad from 'react-lazyload';

class PrivilegeContainer extends React.Component<any, Privi> {
    constructor(props: Privi) {
        super(props);
    }
    public render() {
        // const { icon } = this.props;
        const styleName = {
            backgroundImage: `url(${this.props.icon})`
        }
        return (
            <div className="privilege_container">
                <LazyLoad height={200}>
                    <div className="privilege_icon" style={styleName} />
                </LazyLoad >
                <div className="privilege_title">{this.props.title}</div>
                <div className="privilege_subtitle">{this.props.subTitle}</div>
            </div>)

    }
}
export default PrivilegeContainer