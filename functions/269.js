const function269 = function (t, e, i) {
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
    var o = i(268), r = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._particle = new Array;
            for (var i = [51, 257, 44, 8, 168, 53, 158, 113, 275, 194, 251, 0, 197], n = [51, 30, 87, 222, 213, 129, 122, 222, 216, 0, 194, 149, 84], o = 0; o < i.length; o++) {
                var r = new s;
                r.position.set(i[o], n[o]), e.addChild(r), e._particle.push(r)
            }
            return e
        }

        return n(e, t), e.prototype.initialize = function () {
            for (var t = 0, e = this._particle; t < e.length; t++) {
                var i = e[t];
                i.initialize(), i.startAnim()
            }
        }, e.prototype.dispose = function () {
            for (var t = 0, e = this._particle; t < e.length; t++) {
                e[t].stopAnim()
            }
        }, e
    }(PIXI.Container);
    e.KiraLayer = r;
    var s = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.alpha = 0, e
        }

        return n(e, t), e.prototype.initialize = function () {
            this.texture = o.TITLE_MAIN.getTexture(2)
        }, e.prototype.startAnim = function () {
            this._anim()
        }, e.prototype.stopAnim = function () {
            null != this._tween && (this._tween.setPaused(!0), this._tween = null)
        }, e.prototype._anim = function () {
            var t = this;
            this._tween = createjs.Tween.get(this).wait(1e3 * Math.random() + 1e3).to({ alpha: 1 }, 150).to({ alpha: 0 }, 150).call(function () {
                t._tween = null, t._anim()
            })
        }, e
    }(PIXI.Sprite)
}