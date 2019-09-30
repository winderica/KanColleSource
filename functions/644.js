const function644 = function (t, e, i) {
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
    var o = i(10),
        r = i(48),
        s = function (t) {
            function e(e, i) {
                return t.call(this, e, i) || this
            }
            return n(e, t), Object.defineProperty(e.prototype, "model", {
                get: function () {
                    return this._model
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._createContent = function () {
                this._panel = new PIXI.Container;
                var t = new PIXI.Sprite(o.COMMON_MISC.getTexture(165));
                t.position.set(-267, -138), this._panel.addChild(t);
                var e = new PIXI.Sprite(o.COMMON_MISC.getTexture(164));
                e.position.set(-45, -12), this._panel.addChild(e);
                var i = new PIXI.Sprite(o.COMMON_MISC.getTexture(166));
                i.position.set(-67, 102), this._panel.addChild(i);
                var n = new PIXI.Sprite;
                350 == this.model.value ? (n.texture = o.COMMON_MISC.getTexture(167), n.position.set(-10, 99)) : 200 == this.model.value ? (n.texture = o.COMMON_MISC.getTexture(168), n.position.set(-12, 99)) : 300 == this.model.value ? (n.texture = o.COMMON_MISC.getTexture(169), n.position.set(-11, 99)) : 180 == this.model.value ? (n.texture = o.COMMON_MISC.getTexture(170), n.position.set(-12, 99)) : 400 == this.model.value ? (n.texture = o.COMMON_MISC.getTexture(171), n.position.set(-11, 99)) : 80 == this.model.value ? (n.texture = o.COMMON_MISC.getTexture(172), n.position.set(-4, 99)) : 330 == this.model.value && (n.texture = o.COMMON_MISC.getTexture(173), n.position.set(-11, 99)), this._panel.addChild(n), this._dialog.container.addChild(this._panel), this._showDialog()
            }, e.prototype._removeContent = function () {
                this._dialog.container.removeChild(this._panel), this._panel = null
            }, e
        }(r.TaskRewardDialogBase);
    e.TaskRewardDialogWarResult = s
}