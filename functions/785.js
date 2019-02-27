const function785 = function (t, e, i) {
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
                return e.TYPE_UNEQUIPS = "uniquips", e.TYPE_EQUIPS_OTHER = "equipsother", e._onClick = function () {
                    e.onClick()
                }, e.btnSoubi1 = o.REMODEL_MAIN.getTexture(14), e.btnSoubi2 = o.REMODEL_MAIN.getTexture(15), e.on(r.EventType.CLICK, e._onClick), e.interactive = e.buttonMode = !0, e
            }
            return n(e, t), e.prototype.update = function (t) {
                switch (this.texture = PIXI.Texture.EMPTY, t) {
                    case this.TYPE_UNEQUIPS:
                        this.texture = this.btnSoubi1;
                        break;
                    case this.TYPE_EQUIPS_OTHER:
                        this.texture = this.btnSoubi2
                }
            }, e.prototype.dispose = function () {
                this.onClick = null, this.btnSoubi1 = null, this.btnSoubi2 = null, this.off(r.EventType.CLICK), this.removeChildren()
            }, e
        }(PIXI.Sprite);
    e.ChangeListSwitch = s
}