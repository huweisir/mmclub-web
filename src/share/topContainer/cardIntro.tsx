import * as React from 'react';
import "./cardIntro.scss";
import { goToDashi, IsMobile } from 'src/config/dashi.config';
import { QRcode } from './QRCode';

class CardIntro extends React.Component {
    public render() {
        return <div className="card_Intro">
            {IsMobile ? null : <div className="top_title">请前往网易邮箱大师手机版开通会员</div>}
            <div>
                <div className="card_image_full" >
                    <div className="intro_container">
                        <span className=" inter_money">价值128元/月</span>
                        {IsMobile ? <div className="inter_title">/&nbsp;三年以上用户专享&nbsp;/</div> : null}
                        {IsMobile ? <div className="inter_btn btn-gradient" onClick={this.clickToDashi}>免费开通</div> : null}
                    </div>
                    {IsMobile ? null : <QRcode />}
                </div>
            </div>
            {IsMobile ? <div className="intro_tips_bottom">请下载最新版邮箱大师</div> : null}
        </div >
    }
    private clickToDashi = () => {
        goToDashi();
    }
}
export default CardIntro