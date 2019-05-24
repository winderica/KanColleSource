const function1007 = function (t, e, i) {
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
    var o = i(30),
        r = i(54),
        s = i(227),
        a = i(228),
        _ = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._switch = new a.CompSwitchBtns(1, e, i), n._switch.position.set(807, 171), n
            }
            return n(e, t), e.prototype.initialize = function () {
                var t = new PIXI.Sprite(o.SALLY_COMMON.getTexture(26));
                t.position.set(144, 168);
                var e = new PIXI.Sprite(o.SALLY_COMMON.getTexture(50));
                e.position.set(0, 102);
                var i = new PIXI.Sprite(r.SALLY_PRACTICE.getTexture(0));
                i.position.set(198, 112);
                var n = new PIXI.Sprite(r.SALLY_PRACTICE.getTexture(31));
                n.position.set(207, 177);
                var s = new PIXI.Sprite(r.SALLY_PRACTICE.getTexture(15));
                s.position.set(196, 228);
                var a = new PIXI.Sprite(r.SALLY_PRACTICE.getTexture(27));
                a.position.set(196, 228), this._switch.initialize(), this.addChild(t), this.addChild(e), this.addChild(i), this.addChild(n), this.addChild(s), this.addChild(a), this.addChild(this._switch)
            }, e.prototype.activate = function () {
                this._switch.activate()
            }, e.prototype.deactivate = function () {
                this._switch.deactivate()
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._switch.dispose()
            }, e
        }(s.ViewMainBase);
    e.ViewMainBase = _
}