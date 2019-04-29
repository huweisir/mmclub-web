interface Equity {
    id: number,//权益id
    imgUrl: string,//图片
    name: string,//权益名称
    tag: string,//权益标签
    price?: number,//权益价格,可选
    useIntro: string,//权益使用说明
    type: number,//权益类型 1表示兑换码,2表示h5,3表示赠卡
    status: number,//权益状态,2,表示没有领取,3表示已经领取
    showIntro?: boolean//非后端自定义属性，用于点击使用说明展示数据
}