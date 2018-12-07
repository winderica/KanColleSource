const function575 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function (e, i) {
            function n() {
                this.constructor = e
            }

            t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
        }
    }();
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(189), r = i(576), s = i(1), a = function (t) {
        function e() {
            return t.call(this) || this
        }

        return n(e, t), Object.defineProperty(e.prototype, "jukebox_table", {
            get: function () {
                return this._table3
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "jukebox_btn_up2", {
            get: function () {
                return this._btn_up2
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "jukebox_btn_down2", {
            get: function () {
                return this._btn_down2
            }, enumerable: !0, configurable: !0
        }), e.prototype.init = function () {
            this._table3 = new PIXI.Sprite(o.JUKEBOX_COMMON.getTexture(11)), this._table3.position.set(10, 194), this._table3.alpha = 0, this._table3.interactive = !0, this.addChild(this._table3), this._param_mask = new Array(3), this._param_mask[0] = new PIXI.Graphics, this._param_mask[0].beginFill(16777215), this._param_mask[0].drawRect(43, 286, 358, 150), this._param_mask[0].endFill(), this.addChild(this._param_mask[0]), this._param_mask[1] = new PIXI.Graphics, this._param_mask[1].beginFill(16777215), this._param_mask[1].drawRect(405, 286, 166, 150), this._param_mask[1].endFill(), this.addChild(this._param_mask[1]), this._param_mask[2] = new PIXI.Graphics, this._param_mask[2].beginFill(16777215), this._param_mask[2].drawRect(575, 286, 100, 150), this._param_mask[2].endFill(), this.addChild(this._param_mask[2]), this._bgmList = [];
            for (var t = 0; t < 5; t++) {
                var e = new r.BGMList(t, 10, 194, this._param_mask);
                this.addChild(e), this._bgmList.push(e)
            }
            this._btn_up2 = new PIXI.Sprite(o.JUKEBOX_COMMON.getTexture(8)), this._btn_up2.position.set(346, 248), this._btn_up2.alpha = 1, this._btn_up2.interactive = this._btn_up2.buttonMode = !0, this.addChild(this._btn_up2), this._btn_down2 = new PIXI.Sprite(o.JUKEBOX_COMMON.getTexture(7)), this._btn_down2.position.set(346, 450), this._btn_down2.alpha = 1, this._btn_down2.interactive = this._btn_down2.buttonMode = !0, this.addChild(this._btn_down2)
        }, e.prototype.discard = function () {
            this.removeChildren();
            for (var t = 0, e = this._bgmList; t < e.length; t++) {
                e[t].dispose()
            }
        }, e.prototype.setBGMBtnEvent = function (t, e, i) {
            for (var n = this, o = 0; o < this._bgmList.length; o++) !function (o) {
                n._bgmList[o].Btn.on(s.EventType.MOUSEOVER, t), n._bgmList[o].Btn.on(s.EventType.MOUSEOUT, e), n._bgmList[o].Btn.on(s.EventType.CLICK, function () {
                    i(o)
                })
            }(o)
        }, e.prototype.removeBGMBtnEvent = function (t, e, i) {
            for (var n = this, o = 0; o < this._bgmList.length; o++) !function (o) {
                n._bgmList[o].Btn.off(s.EventType.MOUSEOVER, t), n._bgmList[o].Btn.off(s.EventType.MOUSEOUT, e), n._bgmList[o].Btn.off(s.EventType.CLICK, function () {
                    i(o)
                })
            }(o)
        }, e.prototype.playBGMListFadeInOut = function (t, e) {
            for (var i = 0; i < this._bgmList.length; i++) this._bgmList[i].playFadeInOut(t, e)
        }, e.prototype.redrawBGMList = function (t, e) {
            for (var i = 0; i < this._bgmList.length; i++) this._bgmList[i].setText(t[i + e])
        }, e
    }(PIXI.Container);
    e.JukeBoxList = a
}