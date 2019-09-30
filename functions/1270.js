const function1270 = function (t, e, i) {
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
    var o = i(2),
        r = i(248),
        s = i(6),
        a = i(19),
        _ = i(1271),
        l = i(1),
        u = i(1272),
        c = i(0),
        h = i(1273),
        p = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._onSelect = function (t) {
                    n._hideConfirmDialog(t)
                }, n._effect = function (t) {
                    n._layer = new h.AnchorageRepairLayer(t), n._scene.view.anchorage_repair_leyer.addChild(n._layer), n._layer.getPreLoadTask().start(function () {
                        new _.TaskAnchorageRepairEffect(n._layer).start(function () {
                            n._scene.view.anchorage_repair_leyer.removeChildren(), n._endTask()
                        })
                    })
                }, n._scene = e, n._model = i, n
            }
            return n(e, t), e.prototype._start = function () {
                1 == this._model.sortie.getNextCell().getAnchorageRepair() ? this._startConfirmRepairDialog("") : this._startNoRepair("\u6ce2\u9759\u304b\u306a\u3001\u6cca\u5730\u306b\u9069\u3057\u305f\u6d77\u57df\u3067\u3059\u3002")
            }, e.prototype._startConfirmRepairDialog = function (t) {
                var e = this;
                this._showWave(), createjs.Tween.get(null).wait(500).call(function () {
                    e._showMessage(t)
                }).wait(3e3).call(function () {
                    e._showMessage("")
                }).wait(600).call(function () {
                    e._showConfirmDialog()
                })
            }, e.prototype._showConfirmDialog = function () {
                var t = this,
                    e = this._model.sortie.now_cell_no,
                    i = this._scene.resInfo.getAnchorageRepairConfirmOffsets(e),
                    n = this._scene.view.map.ship_icon;
                this._confirm = new d(i, this._onSelect), this._confirm.x = n.x, this._confirm.y = n.y + 15, this._confirm.alpha = 0, this._confirm.initialize(), this._scene.view.universal_layer.addChild(this._confirm), s.SE.play("212"), createjs.Tween.get(this._confirm).to({
                    y: n.y,
                    alpha: 1
                }, 300).call(function () {
                    t._confirm.activate()
                })
            }, e.prototype._hideConfirmDialog = function (t) {
                var e = this;
                this._confirm.deactivate(), createjs.Tween.get(this._confirm.btn_yes).to({
                    alpha: 0
                }, 200), createjs.Tween.get(this._confirm.btn_no).to({
                    alpha: 0
                }, 200);
                var i = this._confirm.y;
                createjs.Tween.get(this._confirm).wait(200).to({
                    y: i,
                    alpha: 0
                }, 300).call(function () {
                    e._scene.view.universal_layer.removeChild(e._confirm), e._confirm.dispose(), 1 == t ? e._startAnchorageRepair() : e._endTask()
                })
            }, e.prototype._startAnchorageRepair = function () {
                var t = this,
                    e = new u.APIAnchorageRepair;
                e.start(function () {
                    var i = t._model.deck_f.id,
                        n = c.default.model.deck.get(i);
                    t._model.deck_f.updateShipList(n), t._effect(e.used_ship)
                })
            }, e.prototype._startNoRepair = function (t) {
                var e = this;
                this._showWave(), createjs.Tween.get(null).wait(500).call(function () {
                    e._showMessage(t)
                }).wait(3e3).call(function () {
                    e._showMessage("")
                }).wait(1e3).call(function () {
                    e._endTask()
                })
            }, e.prototype._showWave = function () {
                var t = this._model.sortie.getNextCell().no,
                    e = this._scene.view.map.spotLayer.getSpot(t);
                this._wave = new r.CellWave, this._wave.x = e.x, this._wave.y = e.y, this._scene.view.map.spotLayer.addChild(this._wave), this._wave.activate()
            }, e.prototype._showMessage = function (t) {
                this._scene.view.message_box.text = t
            }, e.prototype._endTask = function () {
                null != this._wave && (null != this._wave.parent && this._wave.parent.removeChild(this._wave), this._wave.dispose(), this._wave = null), t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase);
    e.CellTaskAnchorageRepair = p;
    var d = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                if (n._onClickYes = function () {
                        null != n._cb_onSelect && n._cb_onSelect(!0)
                    }, n._onClickNo = function () {
                        null != n._cb_onSelect && n._cb_onSelect(!1)
                    }, n._cb_onSelect = i, n._box = new PIXI.Sprite, n._box.position.set(-120, -135), n.addChild(n._box), n._beak = new PIXI.Sprite, n._beak.position.set(30, -59), n.addChild(n._beak), n._btn_yes = new f(n._onClickYes), n._btn_yes.position.set(-65, 42), n.addChild(n._btn_yes), n._btn_no = new f(n._onClickNo), n._btn_no.position.set(68, 42), n.addChild(n._btn_no), null != e) {
                    if (null != e.box) {
                        var o = e.box;
                        n._box.x += o.x, n._box.y += o.y, n._beak.x += o.x, n._beak.y += o.y
                    }
                    if (null != e.btn) {
                        var o = e.btn;
                        n._btn_yes.x += o.x, n._btn_yes.y += o.y, n._btn_no.x += o.x, n._btn_no.y += o.y
                    }
                }
                return n
            }
            return n(e, t), Object.defineProperty(e.prototype, "btn_yes", {
                get: function () {
                    return this._btn_yes
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "btn_no", {
                get: function () {
                    return this._btn_no
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                this._box.texture = a.MAP_COMMON.getTexture(51), this._beak.texture = a.MAP_COMMON.getTexture(77);
                var t = a.MAP_COMMON.getTexture(105),
                    e = a.MAP_COMMON.getTexture(107);
                this._btn_yes.initialize(t, e), t = a.MAP_COMMON.getTexture(85), e = a.MAP_COMMON.getTexture(86), this._btn_no.initialize(t, e)
            }, e.prototype.activate = function () {
                this._btn_yes.activate(), this._btn_no.activate()
            }, e.prototype.deactivate = function () {
                this._btn_yes.deactivate(), this._btn_no.deactivate()
            }, e.prototype.dispose = function () {
                this._btn_yes.dispose(), this._btn_no.dispose()
            }, e
        }(PIXI.Container),
        f = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._onMouseOver = function () {
                    s.SE.play("225"), i._over.alpha = 1
                }, i._onMouseOut = function () {
                    i._over.alpha = 0
                }, i._onClick = function () {
                    null != i._cb_onClick && i._cb_onClick()
                }, i._cb_onClick = e, i._img = new PIXI.Sprite, i.addChild(i._img), i._over = new PIXI.Sprite, i._over.alpha = 0, i.addChild(i._over), i.interactive = !0, i
            }
            return n(e, t), e.prototype.initialize = function (t, e) {
                this._img.texture = t, this._img.x = -Math.round(this._img.width / 2), this._img.y = -Math.round(this._img.height / 2), this._over.texture = e, this._over.x = -Math.round(this._over.width / 2), this._over.y = -Math.round(this._over.height / 2)
            }, e.prototype.activate = function () {
                1 != this.buttonMode && (this.buttonMode = !0, this.on(l.EventType.MOUSEOVER, this._onMouseOver), this.on(l.EventType.MOUSEOUT, this._onMouseOut), this.on(l.EventType.CLICK, this._onClick))
            }, e.prototype.deactivate = function () {
                this.buttonMode = !1, this.off(l.EventType.MOUSEOVER, this._onMouseOver), this.off(l.EventType.MOUSEOUT, this._onMouseOut), this.off(l.EventType.CLICK, this._onClick)
            }, e.prototype.dispose = function () {
                this.deactivate()
            }, e
        }(PIXI.Container)
}