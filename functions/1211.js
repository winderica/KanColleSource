const function1211 = function (t, e, i) {
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
        r = i(1),
        s = i(2),
        a = i(18),
        _ = i(4),
        u = i(6),
        l = i(111),
        c = i(415),
        h = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._result = !1, n._showDialog = function () {
                    var t = o.default.model.useItem.getCount(44),
                        e = o.default.model.useItem.getCount(52);
                    n._dialog = new p(n._onResult), n._dialog.initialize(n._model, t, e), n._dialog.alpha = 0, n._fade.addChild(n._dialog), createjs.Tween.get(n._dialog).to({
                        alpha: 1
                    }, 150).call(function () {
                        n._dialog.activate()
                    })
                }, n._onResult = function (t) {
                    n._dialog.deactivate(), 0 == t ? n._hideDialog() : n._connectAPI(t)
                }, n._layer = e, n._model = i, n
            }
            return n(e, t), Object.defineProperty(e.prototype, "result", {
                get: function () {
                    return this._result
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._start = function () {
                this._showFade()
            }, e.prototype._showFade = function () {
                this._fade = new a.FadeBox(.6), this._fade.hide(0), this._layer.addChild(this._fade), this._fade.show(200, this._showDialog)
            }, e.prototype._connectAPI = function (t) {
                var e = this;
                u.SE.play("215"), this._result = !0;
                var i = 2 == t;
                new c.FurnitureExchangeAPI(this._model, i).start(function () {
                    null == e._dialog ? e._endTask() : e._hideDialog()
                })
            }, e.prototype._hideDialog = function () {
                var t = this;
                createjs.Tween.get(this._dialog).to({
                    alpha: 0
                }, 150).call(function () {
                    t._dialog.dispose(), t._layer.removeChild(t._dialog), t._dialog = null, t._hideFade()
                })
            }, e.prototype._hideFade = function () {
                var t = this;
                this._fade.hide(150, function () {
                    t._layer.removeChild(t._fade), t._fade = null, t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._layer = null, this._model = null, t.prototype._endTask.call(this)
            }, e
        }(s.TaskBase);
    e.TaskExchangeHighGrade = h;
    var p = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._onNominal = function () {
                    null != i._cb_onResult && i._cb_onResult(1)
                }, i._onDiscount = function () {
                    null != i._cb_onResult && i._cb_onResult(2)
                }, i._onBack = function () {
                    null != i._cb_onResult && i._cb_onResult(0)
                }, i._cb_onResult = e, i._bg = new PIXI.Sprite, i._bg.position.set(147, 267), i.addChild(i._bg), i._btn_nominal = new d(i._onNominal), i._btn_nominal.interactive = !0, i._btn_nominal.position.set(259, 312), i.addChild(i._btn_nominal), i._btn_discount = new f(i._onDiscount), i._btn_discount.interactive = !0, i._btn_discount.position.set(622, 295), i.addChild(i._btn_discount), i._btn_back = new PIXI.Sprite, i._btn_back.interactive = !0, i._btn_back.position.set(972, 402), i.addChild(i._btn_back), i
            }
            return n(e, t), e.prototype.initialize = function (t, e, i) {
                this._bg.texture = l.ITEM_FSHOP.getTexture(52);
                var n = t.price;
                this._btn_nominal.initialize(n, e >= n), n = t.getDiscountPrice(), this._btn_discount.initialize(n, e >= n && i > 0), this._btn_back.texture = l.ITEM_FSHOP.getTexture(1)
            }, e.prototype.activate = function () {
                this._btn_nominal.activate(), this._btn_discount.activate(), this._btn_back.buttonMode = !0, this._btn_back.once(r.EventType.CLICK, this._onBack)
            }, e.prototype.deactivate = function () {
                this._btn_nominal.deactivate(), this._btn_discount.deactivate(), this._btn_back.buttonMode = !1, this._btn_back.off(r.EventType.CLICK, this._onBack)
            }, e.prototype.dispose = function () {
                this.deactivate(), this._cb_onResult = null
            }, e
        }(PIXI.Container),
        d = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._enabled = !1, i._onClick = function () {
                    null != i._cb_onClick && i._cb_onClick()
                }, i._price = new _.TextBox(28, 16774898), i._price.y = 58, i.addChild(i._price), i._cb_onClick = e, i
            }
            return n(e, t), e.prototype.initialize = function (t, e) {
                this._enabled = e, this.texture = 1 == e ? l.ITEM_FSHOP.getTexture(2) : l.ITEM_FSHOP.getTexture(3), this._price.text = t.toString(), this._price.x = Math.floor(72 - this._price.width / 2)
            }, e.prototype.activate = function () {
                0 != this._enabled && (this.buttonMode = !0, this.once(r.EventType.CLICK, this._onClick))
            }, e.prototype.deactivate = function () {
                this.buttonMode = !1, this.off(r.EventType.CLICK, this._onClick)
            }, e.prototype.dispose = function () {
                this.deactivate(), this.removeChildren(), this._price.destroy(), this._cb_onClick = null
            }, e
        }(PIXI.Sprite),
        f = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._enabled = !1, i._onClick = function () {
                    null != i._cb_onClick && i._cb_onClick()
                }, i._price = new _.TextBox(28, 16774898), i._price.y = 88, i.addChild(i._price), i._cb_onClick = e, i
            }
            return n(e, t), e.prototype.initialize = function (t, e) {
                this._enabled = e, this.texture = 1 == e ? l.ITEM_FSHOP.getTexture(4) : l.ITEM_FSHOP.getTexture(5), this._price.text = t.toString(), this._price.x = Math.floor(70 - this._price.width / 2)
            }, e.prototype.activate = function () {
                0 != this._enabled && (this.buttonMode = !0, this.once(r.EventType.CLICK, this._onClick))
            }, e.prototype.deactivate = function () {
                this.buttonMode = !1, this.off(r.EventType.CLICK, this._onClick)
            }, e.prototype.dispose = function () {
                this.deactivate(), this._cb_onClick = null
            }, e
        }(PIXI.Sprite)
}