import * as React from 'react';
import './App.scss';

class App extends React.Component {
  public render() {
    return (
      <div className="App" >
        <h2>黑曜VIP服务协议</h2>
        <p>
          黑曜VIP是网易邮箱大师为了给用户更好的服务，新开设的一项增值会员服务，包含丰富的会员专属权益，旨在提高核心用户的职场生活品质。加入会员后，你将享受以下权益：
        </p>
        <ul>
          <li>
            专属产品功能特权
        </li>
          <li>
            专属职场app特权
        </li>
          <li>
            专属生活app特权
        </li>
          <li>
            专属活动
        </li>
        </ul>
        <div className="padding-b-D1rem" />
        <p>
          常见问题：
        </p>
        <div className="padding-b-D1rem" />
        <p className="title">
          如何开通黑曜VIP：
        </p>
        <p>
          目前黑曜VIP仅针对三年以上老用户开放开通。全体用户皆可看到会员入口，享有开通资格用户，在自主点击开通后，即成为黑曜会员。如无法开通，则是你还未达到开通资格，在达标后即可开通，也可留意大师的各类活动信息（app内、微信微博会有第一手消息）。
        </p>
        <div className="padding-b-D1rem" />
        <p className="title">
          如何关闭黑曜VIP：
        </p>
        <p>
          黑曜VIP属于免费权益，暂不支持关闭。
        </p>
        <div className="padding-b-D1rem" />
        <p className="title">
          如何续期黑曜VIP：
        </p>
        <p>
          只需持续使用邮箱大师，即可自动续期。
        </p>
        <div className="padding-b-D1rem" />
        <p>
          若发现用户在活动过程中使用不正当手段参与，网易公司有权取消其参与活动资格及相关权益。网易公司有权在必要时通过在邮箱大师App内或其自媒体帐号发出公告等合理方式说明或修改本次活动规则，为了保证您收到最新通知，建议您下载官方App或关注网易邮箱大师官方微博、微信。本次活动与苹果公司无关。
        </p>
      </div>
    );
  }
}

export default App;
