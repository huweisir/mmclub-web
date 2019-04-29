//判断是否是桌面页面
export const IsDesk = (window as any).isDesk;
export const IsMobile = !IsDesk;

//移动端跳转到下载app链接
export const dashiHref = "http://u.163.com/mailshare2";
export function goToDashi() {
    if (IsMobile) { location.href = dashiHref; }
}