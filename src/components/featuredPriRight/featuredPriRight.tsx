import * as React from 'react';
import "./featuredPriRight.scss";
import LazyLoad from 'react-lazyload';
import AccordionBody from '../accordion/accortionCom';
import { goToDashi, IsMobile } from 'src/config/dashi.config';

class FeaturedPriRight extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            showIntro: false
        }
    }

    public render() {
        const styleName = {
            backgroundImage: `url(${this.props.selectedImgUrl})`
        }
        return (<div className="featured_privilege_Right_ele">
            <LazyLoad height={200}>
                <div className="preview_image_choice" style={styleName} />
            </LazyLoad>
            <div className="preview_center_choice">
                <div className="preview_left_container">
                    <div className="preview_info_top">
                        <div className="preview_info_name">{this.props.name}</div>
                        {this.props.price ? <div className="preview_info_intro">{this.props.tag}<span className="preview_info_price line-through">{this.props.price + '元'}</span></div> : null}
                    </div>
                    <div className="accordion_header">
                        <span onClick={this.handleClick}>
                            <span className="accordion_header_title">使用说明</span><span className={this.state.showIntro ? "accordion_header_icon accordion_header_icon_up" : "accordion_header_icon"} />
                        </span>
                    </div>
                </div>
                <div className="preview_right_container">
                    {IsMobile ? <div className="preview_button btn-small btn-gradient" onClick={this.clickToDashi}>立即领取</div> : null}
                </div>
                <AccordionBody content={this.props.useIntro} showIntro={this.state.showIntro} styleP={{ paddingTop: '0rem' }} />
            </div>
        </div>)
    }
    private handleClick = () => {
        const showIntro = !this.state.showIntro;
        this.setState({
            showIntro
        });
    }
    private clickToDashi = () => {
        goToDashi();
    }
}

export default FeaturedPriRight;