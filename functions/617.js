const function617 = function (t, e, i) {
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
    var o = i(1),
        r = i(23),
        s = i(12),
        a = i(298),
        _ = i(4),
        u = i(9),
        l = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._bg = new s.Sprite, e._bg.anchor.set(.5), e.addChild(e._bg), e._light = new c, e.addChild(e._light), e._container = new r.Container, e.addChild(e._container), e._message = new h, e._message.position.set(-360, -291), e.addChild(e._message), e._get_icon = new a.GetIcon, e._get_icon.position.set(223, -181), e.addChild(e._get_icon), e._close_btn = new p, e._close_btn.position.set(-90, 222), e.addChild(e._close_btn), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "bg", {
                get: function () {
                    return this._bg
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "light", {
                get: function () {
                    return this._light
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "container", {
                get: function () {
                    return this._container
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "message", {
                get: function () {
                    return this._message
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "get_icon", {
                get: function () {
                    return this._get_icon
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "close_btn", {
                get: function () {
                    return this._close_btn
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                this._bg.texture = u.COMMON_MISC.getTexture(184), this._light.initialize(), this._get_icon.initialize(), this._close_btn.initialize()
            }, e.prototype.dispose = function () {
                this._light.dispose(), this._message.dispose(), this._get_icon.dispose(), this._close_btn.dispose()
            }, e
        }(r.Container);
    e.RewardDialog = l;
    var c = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.anchor.set(.5), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this.texture = u.COMMON_MISC.getTexture(69)
            }, e.prototype.activate = function () {
                null == this._t && (this.rotation = 0, this._t = createjs.Tween.get(this, {
                    loop: !0
                }).to({
                    rotation: 2 * Math.PI
                }, 6e3))
            }, e.prototype.deactivate = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null)
            }, e.prototype.dispose = function () {
                this.deactivate()
            }, e
        }(s.Sprite),
        h = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.beginFill(0, .7), e.drawRect(0, 0, 721, 76), e.endFill(), e._texts = [], e.visible = !1, e
            }
            return n(e, t), e.prototype.update = function (t) {
                for (var e = 0, i = this._texts; e < i.length; e++) {
                    var n = i[e];
                    null != n.parent && n.parent.removeChild(n)
                }
                if (this._texts = [], null == t) return void(this.visible = !1);
                for (var o = t.split("\n"), r = 9, s = 0; s < o.length; s++) {
                    var n = new _.TextBox(21, 16777215);
                    n.text = o[s], n.x = 360 - n.width / 2, n.y = r, this.addChild(n), this._texts.push(n), r += n.height
                }
                this.visible = !0
            }, e.prototype.dispose = function () {
                this.removeChildren();
                for (var t = 0, e = this._texts; t < e.length; t++) {
                    e[t].destroy()
                }
            }, e
        }(PIXI.Graphics),
        p = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._onClick = function () {
                    null != e._cb_onClick && e._cb_onClick()
                }, e.interactive = !0, e.visible = !1, e
            }
            return n(e, t), e.prototype.initialize = function () {
                this.texture = u.COMMON_MISC.getTexture(22)
            }, e.prototype.activate = function (t) {
                this._cb_onClick = t, 1 != this.buttonMode && (this.buttonMode = !0, this.on(o.EventType.CLICK, this._onClick), this.visible = !0)
            }, e.prototype.deactivate = function () {
                this.buttonMode = !1, this.off(o.EventType.CLICK, this._onClick), this.visible = !1
            }, e.prototype.dispose = function () {
                this.deactivate(), this._cb_onClick = null
            }, e
        }(s.Sprite)
}