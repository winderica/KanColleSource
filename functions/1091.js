const function1091 = function (t, e, i) {
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
    var o = i(5), r = i(0), s = i(11), a = i(8), _ = i(3), u = i(1), l = i(237), c = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._onClose = function () {
                i._dialog.btn.buttonMode = !1, createjs.Tween.get(i._chara).to({ x: o.default.width }, 300), createjs.Tween.get(i._dialog).to({ alpha: 0 }, 300).call(function () {
                    i._layer.removeChild(i._bg), i._layer.removeChild(i._chara), i._layer.removeChild(i._dialog), i._endTask()
                })
            }, i._layer = e, i
        }

        return n(e, t), e.prototype._start = function () {
            this._bg = new a.AreaBox(0), this._layer.addChild(this._bg);
            var t = PIXI.Sprite.fromFrame("item_poster_2"), e = l.getPosterOffsetPurchased();
            null != e && (t.x = e.x, t.y = e.y), this._chara = new PIXI.Sprite, this._chara.addChild(t), this._chara.position.set(681, 3), this._layer.addChild(this._chara), this._dialog = new h, this._dialog.initialize(), this._dialog.position.set(219, 207), this._layer.addChild(this._dialog), r.default.sound.voice.playAtRandom("9999", [316, 317], [60, 40]), this._dialog.btn.buttonMode = !0, this._dialog.btn.once(u.EventType.CLICK, this._onClose)
        }, e
    }(s.TaskBase);
    e.TaskPurchased = c;
    var h = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._btn = new PIXI.Sprite, e._btn.position.set(291, 201), e._btn.interactive = !0, e.addChild(e._btn), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "btn", {
            get: function () {
                return this._btn
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function () {
            this.texture = _.ITEM_COMMON.getTexture(4), this._btn.texture = _.ITEM_COMMON.getTexture(3)
        }, e
    }(PIXI.Sprite)
}