const function228 = function (t, e, i) {
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
    var o = i(9), r = i(1), s = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i._activated = !1, i._onClick = function (t) {
                null != i._cb && i._cb(t)
            }, i._cb = e, i._btns = new Array;
            var n = new a(1, i._onClick);
            return i._btns.push(n), n = new a(2, i._onClick), n.x = 45, i._btns.push(n), n = new a(3, i._onClick), n.x = 90, i._btns.push(n), n = new a(4, i._onClick), n.x = 135, i._btns.push(n), i
        }

        return n(e, t), e.prototype.initialize = function (t) {
            for (var e = 0, i = this._btns; e < i.length; e++) {
                var n = i[e];
                n.initialize(), n.setEnabled(-1 != t.indexOf(n.id)), this.addChild(n)
            }
        }, e.prototype.activate = function () {
            if (1 != this._activated) {
                for (var t = 0, e = this._btns; t < e.length; t++) {
                    e[t].activate()
                }
                this._activated = !0
            }
        }, e.prototype.deactivate = function () {
            for (var t = 0, e = this._btns; t < e.length; t++) {
                e[t].deactivate()
            }
            this._activated = !1
        }, e.prototype.dispose = function () {
            for (var t = 0, e = this._btns; t < e.length; t++) {
                e[t].dispose()
            }
            this._cb = null
        }, e.prototype.setSelected = function (t) {
            for (var e = 0, i = this._btns; e < i.length; e++) {
                var n = i[e];
                n.setSelected(t == n.id)
            }
        }, e
    }(PIXI.Container);
    e.CompDeckBtns = s;
    var a = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._enabled = !0, n._selected = !1, n._activated = !1, n._texture_no = -1, n._texture_no_on = -1, n._texture_no_off = -1, n._onClick = function () {
                null != n._cb && n._cb(n._id)
            }, n._id = e, n._cb = i, n
        }

        return n(e, t), Object.defineProperty(e.prototype, "id", {
            get: function () {
                return this._id
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "enabled", {
            get: function () {
                return this._enabled
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "selected", {
            get: function () {
                return this._selected
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function () {
            1 == this._id ? (this._texture_no = 73, this._texture_no_on = 74, this._texture_no_off = 72) : 2 == this._id ? (this._texture_no = 76, this._texture_no_on = 77, this._texture_no_off = 75) : 3 == this._id ? (this._texture_no = 79, this._texture_no_on = 80, this._texture_no_off = 78) : 4 == this._id && (this._texture_no = 82, this._texture_no_on = 83, this._texture_no_off = 81), this._updateTexture()
        }, e.prototype.setEnabled = function (t) {
            this._enabled = t, this._updateTexture(), this.deactivate()
        }, e.prototype.setSelected = function (t) {
            this._selected = t, this._updateTexture(), 1 == this._selected ? this.deactivate() : this.activate()
        }, e.prototype.activate = function () {
            1 != this._activated && 0 != this._enabled && 1 != this._selected && (this.interactive = this.buttonMode = !0, this.on(r.EventType.CLICK, this._onClick), this._activated = !0)
        }, e.prototype.deactivate = function () {
            this.interactive = this.buttonMode = !1, this.off(r.EventType.CLICK, this._onClick), this._activated = !1
        }, e.prototype.dispose = function () {
            this.deactivate(), this._cb = null
        }, e.prototype._updateTexture = function () {
            -1 != this._texture_no && (0 == this._enabled ? this._setTexture(this._texture_no_off) : 1 == this._selected ? this._setTexture(this._texture_no_on) : this._setTexture(this._texture_no))
        }, e.prototype._setTexture = function (t) {
            this.texture = o.COMMON_MISC.getTexture(t)
        }, e
    }(PIXI.Sprite)
}