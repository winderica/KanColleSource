const function1269 = function (t, e, i) {
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
    var o = i(127),
        r = i(179),
        s = i(442),
        a = i(1),
        _ = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._enabled = !1, i._bg = new PIXI.Sprite, i._points = new s.FormationPoints(e), i._btn = new u, i._btn.position.set(15, 161), i._points.position.set(90, 84), i._points.scale.set(.6), i._points.rotation = Math.PI / 2, i.addChild(i._bg), i.addChild(i._points), i.addChild(i._btn), i
            }
            return n(e, t), Object.defineProperty(e.prototype, "enabled", {
                get: function () {
                    return this._enabled
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t, e, i, n) {
                3 == t && e < 5 ? (this._enabled = !1, this.visible = !1) : e < 4 ? (this._enabled = !1, this.visible = !1) : (this._enabled = !0, this._bg.texture = r.SALLY_JIN.getTexture(33), this._points.initialize(t, e, n), this._points.show(0), this._btn.initialize(t, i))
            }, e.prototype.activate = function () {
                1 == this._enabled && this._btn.activate()
            }, e.prototype.deactivate = function () {
                this._btn.deactivate()
            }, e.prototype.dispose = function () {
                this._btn.dispose()
            }, e
        }(PIXI.Container);
    e.FormationBox = _;
    var u = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._onMouseOver = function () {
                e._update(!0)
            }, e._onMouseOut = function () {
                e._update(!1)
            }, e._onClick = function () {
                null != e._cb && e._cb(e._type)
            }, e.interactive = !0, e
        }
        return n(e, t), e.prototype.initialize = function (t, e) {
            this._type = t, this._cb = e, 1 == t ? (this._texture_no = 6, this._texture_no_on = 7) : 2 == t ? (this._texture_no = 0, this._texture_no_on = 1) : 3 == t ? (this._texture_no = 4, this._texture_no_on = 5) : 4 == t ? (this._texture_no = 10, this._texture_no_on = 11) : 5 == t ? (this._texture_no = 8, this._texture_no_on = 9) : 6 == t && (this._texture_no = 2, this._texture_no_on = 3), this._update(!1)
        }, e.prototype.activate = function () {
            if (1 != this.buttonMode) {
                this.buttonMode = !0, this.on(a.EventType.MOUSEOVER, this._onMouseOver), this.on(a.EventType.MOUSEOUT, this._onMouseOut), this.on(a.EventType.CLICK, this._onClick);
                var t = o.InteractiveUtil.isOnMouse(this);
                this._update(t)
            }
        }, e.prototype.deactivate = function () {
            this.buttonMode = !1, this.off(a.EventType.MOUSEOVER, this._onMouseOver), this.off(a.EventType.MOUSEOUT, this._onMouseOut), this.off(a.EventType.CLICK, this._onClick)
        }, e.prototype.dispose = function () {
            1 == this.buttonMode && this.deactivate(), this._cb = null
        }, e.prototype._update = function (t) {
            this.texture = 0 == t ? r.SALLY_JIN.getTexture(this._texture_no) : r.SALLY_JIN.getTexture(this._texture_no_on)
        }, e
    }(PIXI.Sprite)
}