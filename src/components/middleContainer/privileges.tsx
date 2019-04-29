import "./privileges.scss";
import * as React from 'react';
import PrivilegeContainer from '../privilege/privilege';
import { connect } from 'react-redux';


class Privileges extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return <div className="after">
            <div className="privilege_lists">
                {this.privilegeRender()}
                <span className="justify_fix" />
            </div>
        </div>
    }

    //渲染特权列表
    private privilegeRender() {
        const list: Privi[] = this.props.privileges;
        const dom = list.map(item => {
            const styleName = "privilege_list_item "
            return <span className={styleName} data-arg={item.id} key={item.id} onClick={this.changePriId} >
                <PrivilegeContainer  {...item} />
            </span>
        });
        return dom
    }

    private changePriId = (event: any) => {
        console.log(event.currentTarget.dataset.arg);
        // const id = event.currentTarget.dataset.arg || 0;
        // this.props.changePriId(id);
    }
}

function mapStatetoProps(state: any) {
    return {

    }
}

function mapDispatchtoProps(dispatch: any) {
    return {

    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Privileges);