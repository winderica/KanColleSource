const function1167 = function (t, e, i) {
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
        s = i(18),
        a = i(4),
        _ = i(3),
        u = i(3),
        l = i(404),
        c = i(1168),
        h = i(1),
        p = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._result = !1, n._layer = e, n._model = i, n
            }
            return n(e, t), Object.defineProperty(e.prototype, "result", {
                get: function () {
                    return this._result
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._start = function () {
                var t = this;
                if (1 == this._model.isHighGrade()) {
                    var e = new c.TaskExchangeHighGrade(this._layer, this._model);
                    e.start(function () {
                        t._result = e.result, t._endTask()
                    })
                } else {
                    var i = new d(this._layer, this._model);
                    i.start(function () {
                        t._result = i.result, t._endTask()
                    })
                }
            }, e.prototype._endTask = function () {
                this._layer = null, this._model = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase);
    e.TaskExchange = p;
    var d = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._result = !1, n._showDialog = function () {
                    var t = o.default.model.useItem.getCount(44),
                        e = t - n._model.price,
                        i = o.default.model.useItem.getCount(52),
                        r = i - 1;
                    n._dialog = new f(n._onResult), n._dialog.initialize(), n._dialog.update(t, e, i, r), n._dialog.alpha = 0, n._fade.addChild(n._dialog), createjs.Tween.get(n._dialog).to({
                        alpha: 1
                    }, 300).call(function () {
                        n._dialog.activate()
                    })
                }, n._onResult = function (t) {
                    n._dialog.deactivate(), 1 == t ? n._connectAPI() : n._hideDialog()
                }, n._layer = e, n._model = i, n
            }
            return n(e, t), Object.defineProperty(e.prototype, "result", {
                get: function () {
                    return this._result
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._start = function () {
                1 == this._model.isNeedCraftsman() ? this._showFade() : this._connectAPI()
            }, e.prototype._showFade = function () {
                this._fade = new s.FadeBox(.8), this._fade.hide(0), this._layer.addChild(this._fade), this._fade.show(200, this._showDialog)
            }, e.prototype._connectAPI = function () {
                var t = this;
                _.SE.play("215"), this._result = !0, new l.FurnitureExchangeAPI(this._model).start(function () {
                    null == t._dialog ? t._endTask() : t._hideDialog()
                })
            }, e.prototype._hideDialog = function () {
                var t = this;
                createjs.Tween.get(this._dialog).to({
                    alpha: 0
                }, 200).call(function () {
                    t._dialog.dispose(), t._layer.removeChild(t._dialog), t._dialog = null, t._hideFade()
                })
            }, e.prototype._hideFade = function () {
                var t = this;
                this._fade.hide(200, function () {
                    t._layer.removeChild(t._fade), t._fade = null, t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._layer = null, this._model = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase),
        f = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._onYes = function () {
                    null != i._cb_onResult && i._cb_onResult(!0)
                }, i._onNo = function () {
                    null != i._cb_onResult && i._cb_onResult(!1)
                }, i._cb_onResult = e, i._label1 = new a.TextBox(21, 1949120), i._label1.text = "-\u5bb6\u5177\u5c4b\u3000\u7279\u5225\u6ce8\u6587-", i._label1.position.set(600 - i._label1.width / 2, 21), i.addChild(i._label1), i._label2 = new a.TextBox(21, 1949120), i._label2.text = "\u5bb6\u5177\u30b3\u30a4\u30f3", i._label2.position.set(395, 236), i.addChild(i._label2), i._label3 = new a.TextBox(21, 1949120), i._label3.text = "\u7279\u6ce8\u5bb6\u5177\u8077\u4eba", i._label3.position.set(395, 308), i.addChild(i._label3), i._coin_from = new a.TextBox(21, 16774898), i._coin_from.anchor.x = 1, i._coin_from.position.set(681, 236), i.addChild(i._coin_from), i._coin_to = new a.TextBox(21, 16774898), i._coin_to.position.set(710, 236), i.addChild(i._coin_to), i._craftman_from = new a.TextBox(21, 16774898), i._craftman_from.anchor.x = 1, i._craftman_from.position.set(681, 309), i.addChild(i._craftman_from), i._craftman_to = new a.TextBox(21, 16774898), i._craftman_to.position.set(710, 309), i.addChild(i._craftman_to), i._btn_no = new PIXI.Sprite, i._btn_no.interactive = !0, i._btn_no.position.set(381, 578), i.addChild(i._btn_no), i._btn_yes = new PIXI.Sprite, i._btn_yes.interactive = !0, i._btn_yes.position.set(665, 578), i.addChild(i._btn_yes), i
            }
            return n(e, t), e.prototype.initialize = function () {
                this.texture = u.ITEM_FSHOP.getTexture(54), this._btn_no.texture = u.ITEM_FSHOP.getTexture(6), this._btn_yes.texture = u.ITEM_FSHOP.getTexture(7);
                var t = new PIXI.Sprite(u.ITEM_FSHOP.getTexture(9));
                t.position.set(573, 234), this.addChild(t), t = new PIXI.Sprite(u.ITEM_FSHOP.getTexture(8)), t.position.set(576, 308), this.addChild(t);
                var e = u.ITEM_FSHOP.getTexture(0),
                    i = new PIXI.Sprite(e);
                i.position.set(684, 243), this.addChild(i), i = new PIXI.Sprite(e), i.position.set(684, 318), this.addChild(i)
            }, e.prototype.update = function (t, e, i, n) {
                this._coin_from.text = t.toString(), this._coin_to.text = e.toString(), this._craftman_from.text = i.toString(), this._craftman_to.text = n.toString()
            }, e.prototype.activate = function () {
                this._btn_no.buttonMode = !0, this._btn_no.once(h.EventType.CLICK, this._onNo), this._btn_yes.buttonMode = !0, this._btn_yes.once(h.EventType.CLICK, this._onYes)
            }, e.prototype.deactivate = function () {
                this._btn_no.buttonMode = !1, this._btn_no.off(h.EventType.CLICK, this._onNo), this._btn_yes.buttonMode = !1, this._btn_yes.off(h.EventType.CLICK, this._onYes)
            }, e.prototype.dispose = function () {
                this.deactivate(), this.removeChildren(), this._label1.destroy(), this._label2.destroy(), this._label3.destroy(), this._coin_from.destroy(), this._coin_to.destroy(), this._craftman_from.destroy(), this._craftman_to.destroy(), this._cb_onResult = null
            }, e
        }(PIXI.Sprite)
}