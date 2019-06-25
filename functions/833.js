const function833 = function (t, e, i) {
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
    var o = i(3),
        r = i(1),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._onClickBack = function () {
                    e.onClickBack()
                };
                var i = new PIXI.Sprite(o.REMODEL_MAIN.getTexture(48));
                return e.buttonBack = new PIXI.Sprite(o.REMODEL_MAIN.getTexture(0)), e.buttonBack.interactive = e.buttonBack.buttonMode = !0, e.buttonBack.on(r.EventType.CLICK, e._onClickBack), e.buttonBack.position.set(221, 206), e.addChild(i, e.buttonBack), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.buttonBack.off(r.EventType.CLICK), this.onClickBack = null, this.buttonBack = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.MarriageAlert = s
}