/*
    api.openFrame()

    打开 frame
    若 frame 已存在，则会把该窗口显示到最前面并显示，如果 url 和之前的 url 有变化，或者 reload 为 true 时，页面会刷新
    此方法对 frameGroup 里面的 frame 不起作用
 */
interface IOpenFrameParams {
    name: string, // frame名字
    url: string, // 页面地址，可以为本地文件路径，支持相对路径和绝对路径，以及 widget://、fs://等协议路径，也可以为远程地址。 当data参数不为空时，url将做为baseUrl，data中的html引用的资源文件根路径以该url为基础
    data?: string, // 页面加载的数据内容，可以为html片段或者整张html文件的数据
    headers?: {[key: String]: any}, // 请求头
    avm?: boolean, // 是否使用原生引擎来加载页面，页面必须是使用avm框架语法生成
    rect?: {x?: number, y?: number, w?: number | string, h?: number | string, marginLeft?: number, marginTop?: number, marginBottom?: number, marginRight?: number} // 设置页面的位置和大小
}

interface IOpenFrame {
    (params: IOpenFrameParams): void
}

// API文档：https://docs.apicloud.com/Client-API/api
interface IApiCloud {
    openFrame: IOpenFrame,
    require: NodeRequire
}

export interface Window {
    api: IApiCloud
}
