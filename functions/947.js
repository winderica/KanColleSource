const function947 = function (t, e, i) {
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
    var o = i(4),
        r = i(8),
        s = i(26),
        a = i(1),
        _ = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i._onPrev5 = function () {
                    var t = Math.max(i._page_now - 5, 1);
                    i._onChange(t)
                }, i._onNext5 = function () {
                    var t = Math.min(i._page_now + 5, i._page_max);
                    i._onChange(t)
                }, i._onChange = function (t) {
                    null != i._cb_onChangePage && i._cb_onChangePage(t)
                }, i._cb_onChangePage = e, i._pages = [];
                for (var n = 0; n < 5; n++) {
                    var o = new l(i._onChange);
                    o.x = 33 + 51 * n, i.addChild(o), i._pages.push(o)
                }
                return i._prev = new u(i._onPrev5), i._prev.position.set(0, 8), i.addChild(i._prev), i._next = new u(i._onNext5), i._next.position.set(290, 8), i.addChild(i._next), i
            }
            return n(e, t), e.prototype.initialize = function () {
                for (var t = 0, e = this._pages; t < e.length; t++) {
                    e[t].initialize()
                }
                this._prev.initialize(s.SALLY_AIRUNIT.getTexture(29)), this._next.initialize(s.SALLY_AIRUNIT.getTexture(28))
            }, e.prototype.update = function (t, e) {
                this._page_now = t, this._page_max = e;
                var i = Math.min(t - 2, e - 4);
                i = Math.max(i, 1);
                for (var n = 0; n < 5; n++) {
                    var o = this._pages[n],
                        r = i + n;
                    o.enabled = r <= e, o.selected = r == t, o.update(r)
                }
                this._prev.buttonMode = t > 1, this._next.buttonMode = t < e
            }, e.prototype.dispose = function () {
                for (var t = 0, e = this._pages; t < e.length; t++) {
                    e[t].dispose()
                }
                this._prev.dispose(), this._next.dispose(), this._cb_onChangePage = null
            }, e
        }(PIXI.Container);
    e.AirUnitListPager = _;
    var l = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._onClick = function () {
                    null != i._cb_onClick && i._cb_onClick(i._page_no)
                }, i._page_no = 0, i.enabled = !0, i.selected = !1, i._cb_onClick = e, i.interactive = !0, i._hitArea = new r.AreaBox(0, 0, 51, 36), i
            }
            return n(e, t), e.prototype.initialize = function () {
                this._text = new o.TextBox(24, 1949120), this.addChild(this._text), this.addChild(this._hitArea)
            }, e.prototype.update = function (t) {
                this._page_no = t, this._text.text = this._page_no.toString(), 0 == this.enabled ? (this._text.style.fontSize = 30, this._text.style.fill = 16774898, this._text.y = 3, this.deactivate()) : 1 == this.selected ? (this._text.style.fontSize = 36, this._text.style.fill = 1949120, this._text.y = 0, this.deactivate()) : (this._text.style.fontSize = 30, this._text.style.fill = 4999235, this._text.y = 3, this.activate()), this._text.x = 26 - Math.round(this._text.width / 2)
            }, e.prototype.activate = function () {
                1 != this._hitArea.buttonMode && (this._hitArea.buttonMode = !0, this._hitArea.on(a.EventType.CLICK, this._onClick))
            }, e.prototype.deactivate = function () {
                this._hitArea.buttonMode = !1, this._hitArea.off(a.EventType.CLICK, this._onClick)
            }, e.prototype.dispose = function () {
                this.deactivate(), this.removeChildren(), this._text.destroy(), this._cb_onClick = null, this._hitArea = null
            }, e
        }(PIXI.Container),
        u = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._onClick = function () {
                    null != i._cb_onClick && 0 != i.buttonMode && i._cb_onClick()
                }, i._cb_onClick = e, i.interactive = !0, i
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this.texture = t, this.buttonMode = !0, this.on(a.EventType.CLICK, this._onClick)
            }, e.prototype.dispose = function () {
                this.off(a.EventType.CLICK, this._onClick), this._cb_onClick = null
            }, e
        }(PIXI.Sprite)
}