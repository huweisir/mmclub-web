import * as React from 'react';
import "./priRight.scss";
import AccordionBody from '../accordion/accortionCom';
import { goToDashi, IsMobile } from 'src/config/dashi.config';

class PriRight extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            showIntro: false
        }
    }
    public render() {
        const { imgUrl, name, tag, price, useIntro } = this.props.equity;
        const styleName = {
            backgroundImage: `url(${imgUrl})`
        }
        return (<div className="privilege_Right_ele">
            <div className="preview_image" style={styleName} />
            <div className="preview_center">
                {price ? <div className="preview_info_intro">{tag} <span className="preview_info_price line-through">{price + '元'}</span></div> : null}
                <div className="preview_info_name">{name}</div>
                <div className="accordion_header">
                    <span onClick={this.handleClick}>
                        <span className="accordion_header_title">使用说明</span><span className={this.state.showIntro ? "accordion_header_icon accordion_header_icon_up" : "accordion_header_icon"} />
                    </span>
                </div>
            </div>
            <div className="preview_right_container">
                {IsMobile ? <span className="preview_button btn-small btn-gradient" onClick={this.clickToDashi}>立即领取</span> : null}
            </div>
            <AccordionBody content={useIntro} showIntro={this.state.showIntro} />
        </div>)
    }
    private handleClick = () => {
        const showIntro = !this.state.showIntro;
        this.setState({
            showIntro
        })
    }
    private clickToDashi = () => {
        goToDashi();
    }
}

export default PriRight;