import "./phoneNum.scss";
import * as React from 'react';
import { errmsg, updateCodeToErr } from '../../config/ErrorMsg';
import Modal from 'antd-mobile/lib/modal';
import Toast from 'antd-mobile/lib/toast';
import { ajax, getLocationParams } from 'src/http/fetch';
import { urlConfig } from 'src/http/config';
import { goToDashi } from 'src/config/dashi.config';



const Alert = Modal.alert;

class PhoneNumComponent extends React.Component<any, any> {
    private form: any
    constructor(props: any) {
        super(props);
        this.submit = this.submit.bind(this);
        const signature = getLocationParams().signature || "";
        this.state = {
            phoneNum: "",
            signature,
        }
    }
    public componentDidMount() {
        this.form = document.getElementById("number_form");
    }
    public render() {
        return <div className="phone_number">
            <form id="number_form" name="number_form" action="" autoComplete="false">
                <div className="phone_number_top">
                    <input type="text" id="phone_number_input" value={this.state.phoneNum} className="input" onChange={this.onChangeHanle} placeholder="请输入你的手机号" autoComplete="false" />
                </div>
                <div className="phone_number_bottom">
                    <span className="phone_number_btn btn-gradient" onClick={this.submit} >立即领取</span>
                </div>
            </form>
        </div>
    }

    private onChangeHanle = (e: any) => {
        e.stopPropagation();
        const reg = /^[\d]*$/;
        const value = e.target.value || ""
        const test = reg.test(value);
        if (test || e.target.value === "") {
            this.setState({ phoneNum: value });
        }
    }
    private testPhoneNumber() {
        let result = true;
        let msg = "";
        const phonenumber = this.form.phone_number_input.value || "";
        const preOne = phonenumber.slice(0, 1);
        if (phonenumber.length === 0) {
            msg = errmsg.numberEmpty;
            result = false;
        } else if (+preOne !== 1) {
            //非大陆号码
            msg = errmsg.numberChinaLandErr;
            result = false;
        } else if (phonenumber.length !== 11) {
            msg = errmsg.numberErr;
            result = false;
        } else {
            const preTwo = phonenumber.slice(0, 2);
            const isNumber = (+preTwo === 13 || +preTwo === 14 || +preTwo === 15 || +preTwo === 17 || +preTwo === 18);
            if (!isNumber) {
                msg = errmsg.numberErr;
                result = false;
            }
        }
        // flag.canVerifyVcode = result;
        return { result, msg };
    }
    private submit = () => {
        const testinfo = this.testPhoneNumber();
        const styleBox = {
        }
        if (testinfo.result) {
            this.acquireCard();
        } else {
            const alertInstance = Alert(
                '',
                testinfo.msg || '号码输入不正确',
                [
                    { text: '确定', onPress: () => console.log('cancel'), style: styleBox },
                    // { text: '确定', onPress: () => console.log('ok') },
                ]);
            const timer = setTimeout(() => {
                // 可以调用close方法以在外部close
                alertInstance.close();
                clearTimeout(timer);
            }, 500000);
        }

    };

    //提交手机号码接口
    private async acquireCard() {
        const phoneNumber = this.form.phone_number_input.value || ""
        const param = {
            mobile: phoneNumber,//手机号
            signature: this.state.signature || ""//签名,用于认证
        }
        ajax.post(urlConfig.contentPath + '/xhr/acquireCard.do', param).then((res) => {
            if (+res.code === 200) {
                Alert(
                    '恭喜你，领取成功',
                    '请下载最新版邮箱大师使用权益',
                    [
                        { text: '查看我的权益', onPress: () => goToDashi() },
                    ]);
            } else {
                switch (+res.code) {
                    case 207:
                        const title = '你已是大师会员';
                        this.submitErrorAlert(+res.code, title).then(() => goToDashi());
                        break;
                    default:
                        this.submitErrorAlert(+res.code);
                        break;
                }

            }
            Toast.hide();
        })
    }
    private submitErrorAlert(code: number, title?: string) {
        return new Promise((resolve) => Alert(
            title || '',
            updateCodeToErr[code] || '提交失败',
            [
                { text: '确定', onPress: () => resolve() },
            ])
        )
    }
}
export default PhoneNumComponent