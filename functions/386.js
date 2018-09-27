const function386 = function (t, e, i) {
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
    var o = i(3), r = i(1), s = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._offset = 0, i._activated = !1, i._selected = !1, i._onClick = function () {
                null != i._cb_onChange && i._cb_onChange(i._offset)
            }, i._cb_onChange = e, i._dash = new PIXI.Sprite, i._dash.position.set(75, 28), i.addChild(i._dash), i._from = new a, i._from.position.set(24, 22), i.addChild(i._from), i._to = new a, i._to.position.set(95, 22), i.addChild(i._to), i.interactive = !0, i
        }

        return n(e, t), Object.defineProperty(e.prototype, "selected", {
            get: function () {
                return this._selected
            }, set: function (t) {
                this._selected != t && (this._selected = t, 1 == this._selected ? this._deactivate() : 1 == this._activated && this._activate(), this.update(this._offset))
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function () {
            this._setBGTexture(), this._from.update(0, this._selected), this._to.update(0, this._selected)
        }, e.prototype.update = function (t) {
            this._offset = t, this._setBGTexture(), this._from.update(t + 1, this._selected), this._to.update(t + 10, this._selected)
        }, e.prototype.activate = function () {
            1 != this._activated && (this._activated = !0, this._activate())
        }, e.prototype.deactivate = function () {
            this._activated = !1, this._deactivate()
        }, e.prototype.dispose = function () {
            this.deactivate(), this._cb_onChange = null
        }, e.prototype._setBGTexture = function () {
            0 == this._selected ? (this.texture = o.ALBUM_MAIN.getTexture(95), this._dash.texture = o.ALBUM_MAIN.getTexture(22)) : (this.texture = o.ALBUM_MAIN.getTexture(96), this._dash.texture = o.ALBUM_MAIN.getTexture(23))
        }, e.prototype._activate = function () {
            1 != this._selected && (this.buttonMode = !0, this.on(r.EventType.CLICK, this._onClick))
        }, e.prototype._deactivate = function () {
            this.buttonMode = !1, this.off(r.EventType.CLICK, this._onClick)
        }, e
    }(PIXI.Sprite);
    e.Pager = s;
    var a = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._n100 = new _, e.addChild(e._n100), e._n010 = new _, e._n010.x = 15, e.addChild(e._n010), e._n001 = new _, e._n001.x = 30, e.addChild(e._n001), e
        }

        return n(e, t), e.prototype.update = function (t, e) {
            if (t < 0 || t > 999) this._n100.texture = PIXI.Texture.EMPTY, this._n010.texture = PIXI.Texture.EMPTY, this._n001.texture = PIXI.Texture.EMPTY; else {
                this._n100.update(Math.floor(t / 100), e);
                var i = t % 100;
                this._n010.update(Math.floor(i / 10), e), i = t % 10, this._n001.update(i, e)
            }
        }, e
    }(PIXI.Sprite), _ = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), e.prototype.update = function (t, e) {
            if (t < 0 || t > 9) this.texture = PIXI.Texture.EMPTY; else {
                var i = void 0;
                i = 0 == e ? [44, 46, 48, 50, 52, 54, 56, 58, 60, 62][t] : [45, 47, 49, 51, 53, 55, 57, 59, 61, 63][t], this.texture = o.ALBUM_MAIN.getTexture(i)
            }
        }, e
    }(PIXI.Sprite)
}