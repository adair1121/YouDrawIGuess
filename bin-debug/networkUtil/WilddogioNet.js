var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var WilddogioNet = (function () {
    function WilddogioNet() {
        this.URL_ONE = "https://adair-1121.wilddogio.com"; //野狗地址1
        wilddog.initializeApp({
            syncURL: this.URL_ONE
        });
    }
    /**
     * 获得同步数据
     * @pram func 回调方法
     * @pram path 节点相对路径（相对根路径）
     */
    WilddogioNet.prototype.getData = function (path, func, _that) {
        wilddog.sync().ref(path).on('child_added', function (snapshot) {
            //console.log(snapshot.val())
            func(snapshot.val(), _that);
        });
    };
    WilddogioNet.prototype.getData2 = function (path, func, _that) {
        wilddog.sync().ref(path).on('child_removed', function (snapshot) {
            //console.log(snapshot.val())
            func(snapshot.val(), _that);
        });
    };
    /**
     * 更新数据的方法
     * @pram paht 路径
     * @pram data JSON数据
     * @pram successFunc 成功的回调，默认为空
     * @pram errFunc 失败的回调，默认为空
     */
    WilddogioNet.prototype.upData = function (path, data, successFunc, errFunc) {
        if (successFunc === void 0) { successFunc = null; }
        if (errFunc === void 0) { errFunc = null; }
        wilddog.sync().ref(path).update(data)
            .then(function () {
            console.info('update data success.');
            successFunc;
        })
            .catch(function (err) {
            console.info('update data failed', err);
            successFunc;
        });
    };
    WilddogioNet.prototype.removeData = function (path) {
        wilddog.sync().ref(path).remove()
            .then(function () {
            console.info('remove node success.');
        })
            .catch(function (err) {
            console.info('remove node failed', err, err);
        });
    };
    return WilddogioNet;
}());
__reflect(WilddogioNet.prototype, "WilddogioNet");
//# sourceMappingURL=WilddogioNet.js.map