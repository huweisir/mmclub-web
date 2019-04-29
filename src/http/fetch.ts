async function Ajax(url: string, data?: any, param?: any) {
    // Default options are marked with *
    const params: any = {
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: param.headers || {
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'user-agent': 'Mozilla/4.0 MDN Example'
        },
        method: param.method || 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
    }
    if (data) {
        params.body = JSON.stringify(data || {}); // must match 'Content-Type' header
    }
    try {
        return await fetch(url, params).then(res => {
            if (res) {
                return res.json()
            } else {
                return {}
            }
        })
    } catch (err) {
        return err
    }
    // parses response to JSON
}

export const ajax = {
    get: async (url: string, data?: any) => await Ajax(url, data, { method: "GET" }),
    post: async (url: string, data?: any) => await Ajax(url, data, { method: "POST" }),
    postbyjson: async (url: string, data?: any) => await Ajax(url, data, {
        headers: {
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'user-agent': 'Mozilla/4.0 MDN Example'
        },
        method: "POST"
    }),
    // post: (url: string, data: any) => Ajax(url, data, "POST")
}

//获取路由中参数
export const getLocationParams = () => {
    const paramsStr = location.href.split('?')[1] || "";
    const param: any = {}
    if (paramsStr) {
        const paramStrs = paramsStr.split("&");
        for (const item of paramStrs) {
            if (item) {
                const keyValue = item.split('=');
                const key = keyValue[0];
                const value = keyValue[1];
                param[key] = value;
            }
        }
    }
    return param
}
