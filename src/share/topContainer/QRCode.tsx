import * as React from 'react';
import * as QRcodeStyle from './QRcode.module.scss';
import CSSModules from 'react-css-modules';

@CSSModules(QRcodeStyle)
export class QRcode extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return <div styleName="QRcodeContainer" >
            <a styleName="QRcode" href="javascript:void(0);">
                <span styleName="QRcodeImg" />
            </a>
            <div styleName="dowmloadText">立即扫码领取</div>
        </div>
    }
}