const function587 = function (t, e, i) {
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
    var o = i(0), r = i(4), s = i(148), a = i(1), _ = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._BASE_Y = 480, e._MOVE_Y = 225, e._items = null, e._opened = !1, e._tween = null, e._onClick = function () {
                1 == e._opened ? e.close() : e.open()
            }, e._onAnimationComplete = function () {
                e._tween = null, e._opened = !e._opened, e._btn.update(e._opened), e._btn.activate(e._onClick)
            }, e._bg = new PIXI.Sprite, e._bg.y = -32, e.addChild(e._bg), e._btn = new u, e._btn.position.set(3, -27), e.addChild(e._btn), e._items = [];
            for (var i = 0; i < 5; i++) {
                var n = new l;
                n.position.set(54, 51 + 36 * i), e.addChild(n), e._items.push(n)
            }
            return e
        }

        return n(e, t), e.prototype.initialize = function () {
            this.position.set(534, this._BASE_Y + this._MOVE_Y), this._bg.texture = s.PORT_MAIN.getTexture(4), this._btn.update(!1), this._btn.activate(this._onClick)
        }, e.prototype.dispose = function () {
            this._btn.dispose(), null != this._tween && (this._tween.pause(null), this._tween = null)
        }, e.prototype.open = function (t) {
            if (void 0 === t && (t = 200), null != this._tween) {
                if (0 == this._opened) return;
                this._tween.setPaused(!0), this._tween = null
            } else if (1 == this._opened) return;
            this._btn.deactivate(), this._initData(), this._animation(this._BASE_Y, t)
        }, e.prototype.close = function (t) {
            if (void 0 === t && (t = 200), null != this._tween) {
                if (1 == this._opened) return;
                this._tween.setPaused(!0), this._tween = null
            } else if (0 == this._opened) return;
            this._btn.deactivate(), this._initData(), this._animation(this._BASE_Y + this._MOVE_Y, t)
        }, e.prototype._initData = function () {
            for (var t = o.default.model.log.list, e = 0; e < 5; e++) {
                var i = this._items[e];
                if (t.length <= e) i.visible = !1; else {
                    var n = t[e];
                    i.update(n.type, n.message)
                }
            }
        }, e.prototype._animation = function (t, e) {
            e <= 0 ? (this.y = t, this._onAnimationComplete()) : this._tween = createjs.Tween.get(this).to({ y: t }, e).call(this._onAnimationComplete)
        }, e
    }(PIXI.Container);
    e.LogBox = _;
    var u = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._onClick = function () {
                null != e._cb_onClick && e._cb_onClick()
            }, e.beginFill(16711680, 0), e.drawRect(0, 0, 131, 27), e.endFill(), e._tag = new PIXI.Sprite, e._tag.position.set(20, 2), e.addChild(e._tag), e
        }

        return n(e, t), e.prototype.update = function (t) {
            this._tag.texture = 1 == t ? s.PORT_MAIN.getTexture(2) : s.PORT_MAIN.getTexture(3)
        }, e.prototype.activate = function (t) {
            this._cb_onClick = t, 1 != this.buttonMode && (this.interactive = !0, this.buttonMode = !0, this.on(a.EventType.CLICK, this._onClick))
        }, e.prototype.deactivate = function () {
            this.interactive = !1, this.buttonMode = !1, this.off(a.EventType.CLICK, this._onClick)
        }, e.prototype.dispose = function () {
            this._cb_onClick = null, this.deactivate()
        }, e
    }(PIXI.Graphics), l = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._type = new PIXI.Sprite, e._type.position.set(-23, -12), e.addChild(e._type), e._text = new r.TextBox(17, 1949120), e._text.position.set(33, -12), e.addChild(e._text), e
        }

        return n(e, t), e.prototype.update = function (t, e) {
            var i = [-1, 16, 8, 11, 12, 9, 14, 17, 10, 7, 13, 6, 5, -1, 17, 15], n = i[t];
            this._type.texture = n < 0 ? PIXI.Texture.EMPTY : s.PORT_MAIN.getTexture(n), this._text.text = e
        }, e
    }(PIXI.Container)
}