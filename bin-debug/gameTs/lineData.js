var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var lineData = (function () {
    function lineData(x, y, t) {
        this.x = x;
        this.y = y;
        this.t = t;
    }
    return lineData;
}());
__reflect(lineData.prototype, "lineData");
//# sourceMappingURL=lineData.js.map