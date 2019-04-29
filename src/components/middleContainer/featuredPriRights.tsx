/************   精选权益   *************/
import * as React from 'react';
import "./featuredPriRights.scss";
import FeaturedPriRight from '../featuredPriRight/featuredPriRight';
import { IsMobile } from 'src/config/dashi.config';


class FeaturedPriRights extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedEquities: this.props.selectedEquities || []
        }
    }
    public render() {
        const { selectedEquities } = this.props;
        return selectedEquities.length ?
            <React.Fragment>
                <div className="F_privile_rights" >
                    {IsMobile ? null : <div className="F_top_title">以下权益请在网易邮箱大师手机版上领取</div>}
                    <div className="F_privile_title">/精选权益推荐/</div>
                    {this.renderFeaturedPriRight()}
                </div>
                <div className="grayBar" />
            </ React.Fragment> : null

    }
    private renderFeaturedPriRight() {
        const { selectedEquities } = this.props;
        const dom = selectedEquities.map((item: SelectedEquities) => {
            return <FeaturedPriRight key={`Fpri${item.id}`} {...item} />
        })
        return dom
    }

}
export default FeaturedPriRights