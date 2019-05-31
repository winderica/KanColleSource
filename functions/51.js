const function51 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(6),
        r = i(570),
        s = function (t) {
            function e(e) {
                void 0 === e && (e = 0);
                var i = t.call(this) || this;
                return i.TOP_OPENED_Y = -405, i.TOP_CLOSED_Y = 0, i.BTM_OPENED_Y = 720, i.BTM_CLOSED_Y = 315, i._opened = !0, i._dark = !1, i.TOP_OPENED_Y += e, i.BTM_OPENED_Y -= e, i._top = new PIXI.Sprite, i._btm = new PIXI.Sprite, i._top.y = i.TOP_OPENED_Y, i._btm.y = i.BTM_OPENED_Y, i.addChild(i._top), i.addChild(i._btm), i
            }
            return n(e, t), e.prototype.initializeLight = function () {
                this._top.texture = r.COMMON_SHUTTER.getTexture(2), this._btm.texture = r.COMMON_SHUTTER.getTexture(0)
            }, e.prototype.initializeDark = function () {
                this._top.texture = r.COMMON_SHUTTER.getTexture(3), this._btm.texture = r.COMMON_SHUTTER.getTexture(1)
            }, e.prototype.isOpened = function () {
                return this._opened
            }, e.prototype.open = function (t) {
                var e = this;
                if (void 0 === t && (t = 400), null != this._t1) {
                    if (0 != this._opened) return;
                    this._stopTween()
                } else if (1 == this._opened) return;
                if (this._opened = !0, 0 == t) return this._top.y = this.TOP_OPENED_Y, void(this._btm.y = this.BTM_OPENED_Y);
                o.SE.play("218"), this._t1 = createjs.Tween.get(this._top).to({
                    y: this.TOP_OPENED_Y
                }, t), this._t2 = createjs.Tween.get(this._btm).to({
                    y: this.BTM_OPENED_Y
                }, t).call(function () {
                    e._t1 = null, e._t2 = null, e.emit("opened")
                })
            }, e.prototype.close = function (t) {
                var e = this;
                if (void 0 === t && (t = 400), null != this._t1) {
                    if (1 != this._opened) return;
                    this._stopTween()
                } else if (0 == this._opened) return;
                if (this._opened = !1, 0 == t) return this._top.y = this.TOP_CLOSED_Y, void(this._btm.y = this.BTM_CLOSED_Y);
                this._t1 = createjs.Tween.get(this._top).to({
                    y: this.TOP_CLOSED_Y
                }, t), this._t2 = createjs.Tween.get(this._btm).to({
                    y: this.BTM_CLOSED_Y
                }, t).call(function () {
                    o.SE.play("217"), e._t1 = null, e._t2 = null, e.emit("closed")
                })
            }, e.prototype._stopTween = function () {
                null != this._t1 && (this._t1.setPaused(!0), this._t2.setPaused(!0), this._t1 = null, this._t2 = null)
            }, e
        }(PIXI.Container);
    e.Shutter = s
}