const function1156 = function (t, e, i) {
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
    var o = i(0),
        r = i(74),
        s = i(141),
        a = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype._initialize = function () {
                this._icon.texture = r.COMMON_SELECTABLE_REWARD.getTexture(7);
                var t = new PIXI.Graphics;
                t.beginFill(6710886, .1), t.drawRect(-97.5, -97.5, 195, 195), t.endFill(), this._canvas.addChild(t);
                var e = this._candidate.mst_id,
                    i = o.default.resources.getUseitem(e, 1),
                    n = new PIXI.Sprite(i),
                    s = Math.min(195 / n.width, 195 / n.height);
                n.scale.set(s), n.position.set(-Math.round(n.width / 2), -Math.round(n.height / 2)), this._canvas.addChild(n)
            }, e
        }(s.RewardSelectDialogBtnBase);
    e.RewardSelectDialogUseitemBtn = a
}