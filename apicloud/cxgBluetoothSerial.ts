declare module "cxgBluetoothSerial" {
    interface ICallback {
        (ret: {state: boolean}, err?: {code: number, msg: string}): void
    }

    /*
        打开蓝牙
     */
    function openBluetooth(params: {}, callback?: ICallback): void;

    /*
        连接到设备
     */
    function connect(params: {address: string}, callback?: ICallback): void;

    /*
        发送数据
     */
    function sendData(params: {data: string}, callback?: ICallback): void;
}
