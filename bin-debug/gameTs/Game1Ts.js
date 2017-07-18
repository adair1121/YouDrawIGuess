var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Game1Ts = (function (_super) {
    __extends(Game1Ts, _super);
    //private explainBtn:eui.Button;//说明弹出按钮
    //private explainGroup:eui.Group;//说明的group
    //private close:eui.Label;//说明文本关闭
    //private explain:eui.Label;//说明文本
    function Game1Ts() {
        var _this = _super.call(this) || this;
        _this.shp = new egret.Shape();
        _this.lineDatas = new Array();
        _this.wilddog = new WilddogioNet();
        _this.moveIndex = 5;
        _this.skinName = "game1";
        _this.init();
        _this.addEvent();
        _this.addChild(_this.shp);
        return _this;
    }
    Game1Ts.prototype.init = function () {
        var bg = new egret.Shape();
        bg.graphics.beginFill(0x1F6936);
        bg.graphics.drawRect(0, 0, this.width, this.height);
        bg.graphics.endFill();
        this.addChild(bg);
        this.setChildIndex(bg, 0);
        this.wilddog.getData('lineData', this.updataLine, this);
        this.wilddog.getData2('lineData', this.removeLine, this);
    };
    Game1Ts.prototype.removeLine = function (data, _that) {
        _that.shp.graphics.clear();
        _that.lineDatas = new Array();
    };
    Game1Ts.prototype.updataLine = function (data, _that) {
        if (data.t == 0) {
            _that.shp.graphics.lineStyle(4, 0xffffff);
            _that.shp.graphics.moveTo(data.x, data.y);
        }
        else if (data.t == 1) {
            _that.shp.graphics.lineTo(data.x, data.y);
        }
        else if (data.t == 2) {
            _that.shp.graphics.lineTo(data.x, data.y);
            _that.shp.graphics.endFill();
        }
    };
    Game1Ts.prototype.addEvent = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
        this.clear.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clearLine, this);
    };
    Game1Ts.prototype.clearLine = function () {
        this.wilddog.removeData("lineData");
        this.shp.graphics.clear();
        this.lineDatas = new Array();
    };
    Game1Ts.prototype.touchBegin = function (e) {
        this.shp.graphics.lineStyle(4, 0xffffff);
        this.shp.graphics.moveTo(e.stageX, e.stageY);
        this.lineDatas.push(new lineData(e.stageX, e.stageY, 0));
    };
    Game1Ts.prototype.touchMove = function (e) {
        this.moveIndex++;
        if (this.moveIndex >= 5) {
            this.shp.graphics.lineTo(e.stageX, e.stageY);
            this.lineDatas.push(new lineData(e.stageX, e.stageY, 1));
            this.moveIndex = 0;
        }
    };
    Game1Ts.prototype.touchEnd = function (e) {
        this.shp.graphics.lineTo(e.stageX, e.stageY);
        this.lineDatas.push(new lineData(e.stageX, e.stageY, 2));
        this.wilddog.upData("lineData", this.lineDatas);
        this.shp.graphics.endFill();
    };
    return Game1Ts;
}(eui.Component));
__reflect(Game1Ts.prototype, "Game1Ts");
//# sourceMappingURL=Game1Ts.js.map