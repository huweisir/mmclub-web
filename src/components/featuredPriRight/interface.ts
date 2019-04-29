interface SelectedEquities {
    id: number,//权益id
    selectedImgUrl: string,//精选权益大图
    name: string,//权益名称
    tag: string,//权益标签
    price?: number,//权益价格,可选
    useIntro: string,//权益使用说明
    type: number,//权益类型 1表示兑换码,2表示h5,3表示赠卡
    status: number,//权益状态,2,表示没有领取,3表示已经领取
}