/************   普通权益   *************/
import * as React from 'react';
import "./priRights.scss";
import PriRight from '../priRight/priRight';
import { connect } from 'react-redux';
import { ajax } from 'src/http/fetch';
import { bindActionCreators } from 'redux';
import { privilegeRightInit } from 'src/redux/actions/privilegeRight';
import { urlConfig } from 'src/http/config';
// import { bindActionCreators } from 'redux';


class PriRights extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            priIds: [],
            priRightsList: [],
        }

    }

    public async componentWillReceiveProps(nextProps: any) {
        const { priIds } = nextProps;
        if (this.state.priIds !== priIds) {
            this.setState({ priIds });
            if (priIds) {
                await this.getEquities(priIds);
            }
        }

    }
    //点击特权获取对应权益
    // public async componentWillReceiveProps(nextProps: any) {
    //     const { priId } = nextProps;
    //     if (this.state.priId !== priId) {
    //         this.setState({ priId });
    //         if (priId) {
    //             await this.getEquities([priId]);
    //         }
    //     }

    // }
    public render() {
        return this.state.priRightsList.filter((item: any) => item.equities).map((item: any) => {
            const { equities, listTitle } = item;
            return this.renderPriRights(equities || [], listTitle || "")
        })
    }
    public renderPriRights(equities: any[], listTitle: string) {
        const styleName = { paddingTop: listTitle ? "0rem" : "0.25rem" };
        return ((equities && equities.length && +(equities[0].type) !== 3) || listTitle) ? <React.Fragment>
            <ul className="privile_rights" style={styleName} key={listTitle}>
                {this.renderPriTitle(listTitle)}
                {this.renderPriRight(equities)}
            </ul>
            <div className="grayBar" key={listTitle + 'bar'} />
        </React.Fragment > : null
    }
    //标题
    private renderPriTitle(listTitle: string) {
        const styleName = {
            backgroundImage: `url(${listTitle})` || ""
        }
        return <React.Fragment>
            {listTitle ? <div className="privile_rights_title" style={styleName} /> : null}
        </React.Fragment >
    }
    // 权益列表
    private renderPriRight(equities: Equity[]) {
        return equities.map((item: Equity) =>
            (+item.type !== 3) ? <li className="privile_rights_item" key={`PriRight${item.id}`}>
                <PriRight equity={item} />
            </li> : null);
    }
    private async getEquities(priIds: any) {
        const res = await ajax.post(urlConfig.contentPath + '/xhr/getEquities.do', { priIds });
        const priRightsList = res.data || [];
        this.setState({ priRightsList })
        //因为产品要求展示所有的权益，所以暂时注释
        //const data=res.data||[]
        // if (data.length) {
        // const listTitle = data.length ? data[0].listTitle : "";
        // const equities = data[0].equities || [];
        // this.props.privilegeRightInit({ listTitle, equities });
        // }
    }
}

function mapStatetoProps(state: any) {
    return {
        listTitle: state.listTitle,
        privilegeRight: state.PrivilegeRight
    }
}

function mapDispatchtoProps(dispatch: any) {
    return {
        privilegeRightInit: bindActionCreators(privilegeRightInit, dispatch)
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(PriRights);