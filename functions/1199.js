const function1199 = function (t, e, i) {
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
        r = i(21),
        s = i(1),
        a = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                i._onFirst = function () {
                    i._onChange(1)
                }, i._onPrev = function () {
                    i._onChange(i._page_now - 1)
                }, i._onNext = function () {
                    i._onChange(i._page_now + 1)
                }, i._onLast = function () {
                    i._onChange(i._page_max)
                }, i._onChange = function (t) {
                    null != i._cb_onChangePage && i._cb_onChangePage(t)
                }, i._cb_onChangePage = e, i._pages = [];
                for (var n = 0; n < 5; n++) {
                    var o = new _(i._onChange);
                    o.x = 118 + 82 * n, i.addChild(o), i._pages.push(o)
                }
                return i._first = new l(i._onFirst), i._first.position.set(0, 2), i.addChild(i._first), i._prev = new l(i._onPrev), i._prev.position.set(57, 2), i.addChild(i._prev), i._next = new l(i._onNext), i._next.position.set(544, 2), i.addChild(i._next), i._last = new l(i._onLast), i._last.position.set(595, 2), i.addChild(i._last), i
            }
            return n(e, t), e.prototype.initialize = function () {
                for (var t = 0, e = this._pages; t < e.length; t++) {
                    e[t].initialize()
                }
                this._first.initialize(r.COMMON_MAIN.getTexture(6)), this._prev.initialize(r.COMMON_MAIN.getTexture(8)), this._next.initialize(r.COMMON_MAIN.getTexture(7)), this._last.initialize(r.COMMON_MAIN.getTexture(5))
            }, e.prototype.update = function (t, e) {
                if (0 == e) return void(this.visible = !1);
                this.visible = !0, this._page_now = t, this._page_max = e;
                var i = Math.min(t - 2, e - 4);
                i = Math.max(i, 1);
                for (var n = 0; n < 5; n++) {
                    var o = this._pages[n],
                        r = i + n;
                    o.enabled = r <= e, o.selected = r == t, o.update(r)
                }
                this._first.visible = t > 1, this._prev.visible = this._first.visible, this._last.visible = t < e, this._next.visible = this._last.visible
            }, e.prototype.dispose = function () {
                for (var t = 0, e = this._pages; t < e.length; t++) {
                    e[t].dispose()
                }
                this._first.dispose(), this._prev.dispose(), this._last.dispose(), this._next.dispose(), this._cb_onChangePage = null
            }, e
        }(PIXI.Container);
    e.Pager = a;
    var _ = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._page_no = 0, i.enabled = !0, i.selected = !1, i._onClick = function () {
                    null != i._cb_onClick && i._cb_onClick(i._page_no)
                }, i._cb_onClick = e, i.interactive = !0, i.hitArea = new PIXI.Rectangle(12, 3, 57, 27), i
            }
            return n(e, t), e.prototype.initialize = function () {
                this._text = new o.TextBox(24, 1949120), this.addChild(this._text)
            }, e.prototype.update = function (t) {
                this._page_no = t, this._text.text = this._page_no.toString(), this._text.x = 42 - Math.floor(this._text.width / 2), 0 == this.enabled ? (this._text.style.fill = 16777215, this.deactivate()) : 1 == this.selected ? (this._text.style.fill = 3642803, this.deactivate()) : (this._text.style.fill = 4999235, this.activate())
            }, e.prototype.activate = function () {
                1 != this.buttonMode && (this.buttonMode = !0, this.on(s.EventType.CLICK, this._onClick))
            }, e.prototype.deactivate = function () {
                this.buttonMode = !1, this.off(s.EventType.CLICK, this._onClick)
            }, e.prototype.dispose = function () {
                this.deactivate(), this.removeChildren(), this._text.destroy(), this._cb_onClick = null
            }, e
        }(PIXI.Container),
        l = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._onClick = function () {
                    null != i._cb_onClick && i._cb_onClick()
                }, i._cb_onClick = e, i.interactive = !0, i
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this.texture = t, this.buttonMode = !0, this.on(s.EventType.CLICK, this._onClick)
            }, e.prototype.dispose = function () {
                this.off(s.EventType.CLICK, this._onClick), this._cb_onClick = null
            }, e
        }(PIXI.Sprite)
}