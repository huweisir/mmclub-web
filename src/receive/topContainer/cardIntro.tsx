import * as React from 'react';
import "./cardIntro.scss";

class CardIntro extends React.Component {
    public render() {
        return <div className="card_Intro">
            <div>
                <div className="title">
                    <div className="top">{"立即领取好友分享的"}</div>
                    <div className="bottom">大师黑曜VIP特权</div>
                </div>
                <div className="intro_number">/&nbsp;仅限一个名额，先到先得&nbsp;/</div>
                <div className="card_image" />
            </div>
        </div>
    }
}
export default CardIntro