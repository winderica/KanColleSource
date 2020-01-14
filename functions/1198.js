const function1198 = function (t, e, i) {
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
    var o = i(0),
        r = i(2),
        s = i(8),
        a = i(18),
        _ = i(4),
        u = i(206),
        l = i(3),
        c = i(404),
        h = i(176),
        p = i(1199),
        d = i(131),
        f = i(1),
        y = function (t) {
            function e(e, i, n) {
                var r = t.call(this) || this;
                return r._count = 1, r._onUp = function () {
                    r._count++, r._count = Math.min(10, r._count), r._dialog.update(r._count, r._mst.price * r._count, r._limit)
                }, r._onDown = function () {
                    r._count--, r._count = Math.max(1, r._count), r._dialog.update(r._count, r._mst.price * r._count, r._limit)
                }, r._onBack = function () {
                    r._count = 0, r._dialog.deactivate(), r._close()
                }, r._onBuy = function () {
                    r._dialog.deactivate(), r._clickGuard = new s.AreaBox(0), o.default.view.overLayer.addChild(r._clickGuard);
                    var t = "" + location.hostname,
                        e = r._mst.id,
                        i = r._mst.price,
                        n = r._count,
                        a = r._mst.description.replace(/<br>/g, ""),
                        _ = r._mst.name,
                        u = "http://" + t + "/kcs/images/purchase_items/" + e + ".jpg",
                        l = e + "\t" + i + "\t" + n + "\t" + a + "\t" + _ + "\t" + u;
                    r._GadgetIP = "http://" + o.default.settings.osapi_root;
                    var c = r._GadgetIP;
                    window.parent.postMessage(d.PostMessageType.BUY + "\t" + l, c), window.addEventListener("message", r._onCallback)
                }, r._onCallback = function (t) {
                    window.removeEventListener("message", r._onCallback);
                    var e = t.data;
                    if (t.origin != r._GadgetIP && (r._count = 0, r._close()), e >= 0) {
                        var i = new p.TaskPayCheck;
                        i.start(function () {
                            1 == i.result ? r._close() : (r._count = 0, r._close())
                        })
                    } else r._count = 0, r._close()
                }, r._type = e, r._mst = i, r._limit = n, r._layer = new a.FadeBox(.8, 0, 1200, 720), r
            }
            return n(e, t), Object.defineProperty(e.prototype, "layer", {
                get: function () {
                    return this._layer
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "count", {
                get: function () {
                    return this._count
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._start = function () {
                var t = this;
                o.default.sound.voice.playAtRandom("9999", [313, 314], [60, 40]), this._layer.show(200, function () {
                    t._showDialog()
                })
            }, e.prototype._showDialog = function () {
                var t = this;
                this._dialog = new m, this._dialog.initialize(this._type, this._mst, this._onUp, this._onDown, this._onBack, this._onBuy), this._dialog.update(this._count, this._mst.price * this._count, this._limit), this._dialog.alpha = 0, this._layer.addChild(this._dialog), createjs.Tween.get(this._dialog).to({
                    alpha: 1
                }, 300).call(function () {
                    t._dialog.activate()
                })
            }, e.prototype._close = function () {
                var t = this;
                createjs.Tween.get(this._dialog).to({
                    alpha: 0
                }, 200).call(function () {
                    t._layer.hide(300, function () {
                        o.default.view.overLayer.removeChild(t._clickGuard), t._layer.removeChild(t._dialog), t._dialog.dispose(), t._endTask()
                    })
                })
            }, e.prototype._endTask = function () {
                null != this._layer.parent && this._layer.parent.removeChild(this._layer), this._layer = null, this._mst = null, this._dialog = null, this._clickGuard = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase);
    e.TaskPurchaseConfirm = y;
    var m = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._bg = new PIXI.Sprite, e._bg.position.set(48, 102), e.addChild(e._bg), e._header = new PIXI.Sprite, e._header.position.set(439, 123), e.addChild(e._header), e._icon = new PIXI.Sprite, e._icon.position.set(562, 195), e.addChild(e._icon), e._description = new _.TextBox(21, 16774898), e._description.position.set(534, 282), e._description.style.breakWords = !0, e._description.style.wordWrap = !0, e._description.style.wordWrapWidth = 306, e.addChild(e._description), e._count = new _.TextBox(21, 16774898), e._count.anchor.x = 1, e._count.position.set(568, 418), e.addChild(e._count), e._price = new _.TextBox(21, 16724736), e._price.position.set(574, 456), e.addChild(e._price), e._btn_up = new g, e._btn_up.position.set(604, 418), e.addChild(e._btn_up), e._btn_down = new v, e._btn_down.position.set(604, 438), e.addChild(e._btn_down), e._btn_back = new c.BackBtn, e._btn_back.position.set(108, 571), e.addChild(e._btn_back), e._btn_purchase = new b, e._btn_purchase.position.set(424, 568), e.addChild(e._btn_purchase), e
            }
            return n(e, t), e.prototype.initialize = function (t, e, i, n, o, r) {
                this._bg.texture = l.ITEM_ISHOP.getTexture(8);
                var s = new PIXI.Sprite(l.ITEM_ISHOP.getTexture(36));
                s.position.set(267, 18), this._bg.addChild(s), s = new PIXI.Sprite(l.ITEM_ISHOP.getTexture(9)), s.position.set(366, 183), this._bg.addChild(s), s = new PIXI.Sprite(l.ITEM_ISHOP.getTexture(10)), s.position.set(366, 316), this._bg.addChild(s), s = new PIXI.Sprite(l.ITEM_ISHOP.getTexture(11)), s.position.set(366, 354), this._bg.addChild(s), s = new PIXI.Sprite(l.ITEM_ISHOP.getTexture(12)), s.position.set(499, 358), this._bg.addChild(s), this._label = new _.TextBox(21, 16777215), this._label.text = "\u500b", this._label.position.set(520, 316), this._bg.addChild(this._label), this._header.texture = 0 == t ? l.ITEM_ISHOP.getTexture(29) : 1 == t ? l.ITEM_ISHOP.getTexture(28) : 2 == t ? l.ITEM_ISHOP.getTexture(27) : l.ITEM_ISHOP.getTexture(31), this._icon.texture = h.getPayitemIcon(e.id), this._description.text = e.description.replace(/<br>/g, "\n"), this._btn_up.initialize(i), this._btn_down.initialize(n), this._btn_back.initialize(o), this._btn_purchase.initialize(r)
            }, e.prototype.update = function (t, e, i) {
                this._count.text = t.toString(), this._price.text = e.toString(), this._btn_purchase.enabled = t <= i
            }, e.prototype.activate = function () {
                this._btn_up.activate(), this._btn_down.activate(), this._btn_back.activate(), this._btn_purchase.activate()
            }, e.prototype.deactivate = function () {
                this._btn_up.deactivate(), this._btn_down.deactivate(), this._btn_back.deactivate(), this._btn_purchase.deactivate()
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._label.destroy(), this._description.destroy(), this._count.destroy(), this._price.destroy(), this._btn_up.dispose(), this._btn_down.dispose(), this._btn_back.dispose(), this._btn_purchase.dispose()
            }, e
        }(PIXI.Container),
        g = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._onMouseOver = function () {
                    e._update(!0)
                }, e._onMouseOut = function () {
                    e._update(!1)
                }, e._onClick = function () {
                    null != e._cb_onClick && e._cb_onClick()
                }, e.interactive = !0, e
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this._cb_onClick = t, this._update(!1)
            }, e.prototype.activate = function () {
                1 != this.buttonMode && (this.buttonMode = !0, this.on(f.EventType.MOUSEOVER, this._onMouseOver), this.on(f.EventType.MOUSEOUT, this._onMouseOut), this.on(f.EventType.CLICK, this._onClick))
            }, e.prototype.deactivate = function () {
                1 != this.buttonMode && (this.buttonMode = !1, this.off(f.EventType.MOUSEOVER, this._onMouseOver), this.off(f.EventType.MOUSEOUT, this._onMouseOut), this.off(f.EventType.CLICK, this._onClick))
            }, e.prototype.dispose = function () {
                this.deactivate(), this._cb_onClick = null
            }, e.prototype._update = function (t) {
                this.texture = 0 == t ? l.ITEM_ISHOP.getTexture(2) : l.ITEM_ISHOP.getTexture(0)
            }, e
        }(PIXI.Sprite),
        v = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype._update = function (t) {
                this.texture = 0 == t ? l.ITEM_ISHOP.getTexture(3) : l.ITEM_ISHOP.getTexture(1)
            }, e
        }(g),
        b = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype._update = function (t) {
                0 == this._enabled ? this.texture = l.ITEM_ISHOP.getTexture(33) : this.texture = 0 == t ? l.ITEM_ISHOP.getTexture(32) : l.ITEM_ISHOP.getTexture(34)
            }, e
        }(u.BtnBase);
    e.PurchaseBtn = b
}