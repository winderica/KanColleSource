const function1438 = function (t, e, i) {
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
    var o = i(245), r = i(15), s = function (t) {
        function e() {
            return t.call(this) || this
        }

        return n(e, t), e.prototype.show = function (t, e) {
            void 0 === e && (e = null), this.hide(), this._current = new o.PhaseTitle, this._current.y = 16, this._current.alpha = 0, this._current.initialize(8 == t);
            var i = this._getTexture(t);
            this._current.update(i), this._current.activate(), null != e ? e.addChild(this._current) : this.addChild(this._current), createjs.Tween.get(this._current).to({ alpha: 1 }, 800)
        }, e.prototype.hide = function (t) {
            if (void 0 === t && (t = null), null == this._current) null != t && t(); else {
                var e = this._current;
                this._current = null, createjs.Tween.get(e).to({ alpha: 0 }, 300).call(function () {
                    e.deactivate();
                    var i = e.parent;
                    null != i && i.removeChild(e), e.dispose(), null != t && t()
                })
            }
        }, e.prototype._getTexture = function (t) {
            switch (t) {
                case 0:
                    return r.BATTLE_MAIN.getTexture(130);
                case 1:
                    return r.BATTLE_MAIN.getTexture(126);
                case 2:
                    return r.BATTLE_MAIN.getTexture(131);
                case 3:
                    return r.BATTLE_MAIN.getTexture(129);
                case 4:
                    return r.BATTLE_MAIN.getTexture(125);
                case 5:
                    return r.BATTLE_MAIN.getTexture(124);
                case 6:
                    return r.BATTLE_MAIN.getTexture(128);
                case 7:
                    return r.BATTLE_MAIN.getTexture(127);
                case 8:
                    return r.BATTLE_MAIN.getTexture(132);
                default:
                    return PIXI.Texture.EMPTY
            }
        }, e
    }(PIXI.Container);
    e.LayerTitle = s
}