const function1139 = function (t, e, i) {
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
        r = i(174),
        s = function (t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._onMouseOver = function () {
                    e._canvas.scale.set(1.05)
                }, e._onMouseOut = function () {
                    e._canvas.scale.set(1)
                }, e
            }
            return n(e, t), e.prototype.load = function (t) {
                t()
            }, e.prototype._initialize = function () {
                this._icon.visible = !1;
                this._canvas.x = 103, this._canvas.y = 121, this._canvas.scale.set(1);
                var t = new PIXI.Graphics;
                t.beginFill(6710886, .1), t.drawRect(-88, -121, 176, 242), t.endFill(), this._canvas.addChild(t);
                var e = this._candidate.mst_id,
                    i = o.default.resources.getShip(e, !1, "card_round"),
                    n = new PIXI.Sprite(i);
                n.position.set(-Math.round(n.width / 2), -Math.round(n.height / 2)), this._canvas.addChild(n)
            }, e
        }(r.RewardSelectDialogBtnBase);
    e.RewardSelectDialogShipBtn = s
}