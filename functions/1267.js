const function1267 = function (t, e, i) {
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
        r = i(6),
        s = i(19),
        a = i(1),
        _ = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._onSelect = function (t) {
                    n._scene.user_select.ration = 1 == t ? 1 : 0, n._hideConfirmDialog()
                }, n._scene = e, n._model = i, n
            }
            return n(e, t), e.prototype._start = function () {
                1 == this._model.sortie.getNextCell().isUsableRation() ? this._showConfirmDialog() : (this._scene.user_select.ration = -1, this._endTask())
            }, e.prototype._showConfirmDialog = function () {
                var t = this,
                    e = this._model.sortie.now_cell_no,
                    i = this._scene.resInfo.getRationConfirmOffset(e),
                    n = this._scene.view.map.ship_icon;
                this._confirm = new l(i, this._onSelect), this._confirm.x = n.x, this._confirm.y = n.y + 15, this._confirm.alpha = 0, this._confirm.initialize(), this._scene.view.universal_layer.addChild(this._confirm), r.SE.play("212"), createjs.Tween.get(this._confirm).to({
                    y: n.y,
                    alpha: 1
                }, 300).call(function () {
                    t._confirm.activate()
                })
            }, e.prototype._hideConfirmDialog = function () {
                var t = this;
                this._confirm.deactivate(), createjs.Tween.get(this._confirm.btn_yes).to({
                    alpha: 0
                }, 200), createjs.Tween.get(this._confirm.btn_no).to({
                    alpha: 0
                }, 200);
                var e = this._confirm.y;
                createjs.Tween.get(this._confirm).wait(200).to({
                    y: e,
                    alpha: 0
                }, 300).call(function () {
                    t._scene.view.universal_layer.removeChild(t._confirm), t._confirm.dispose(), t._endTask()
                })
            }, e
        }(o.TaskBase);
    e.TaskConfirmRation = _;
    var l = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                if (n._onClickYes = function () {
                        null != n._cb_onSelect && n._cb_onSelect(!0)
                    }, n._onClickNo = function () {
                        null != n._cb_onSelect && n._cb_onSelect(!1)
                    }, n._cb_onSelect = i, n._box = new PIXI.Sprite, n._box.position.set(-120, -135), n.addChild(n._box), n._beak = new PIXI.Sprite, n._beak.position.set(30, -59), n.addChild(n._beak), n._btn_yes = new u(n._onClickYes), n._btn_yes.position.set(-65, 42), n.addChild(n._btn_yes), n._btn_no = new u(n._onClickNo), n._btn_no.position.set(68, 42), n.addChild(n._btn_no), null != e) {
                    if (null != e.box) {
                        var o = e.box;
                        n._box.x += o.x, n._box.y += o.y, n._beak.x += o.x, n._beak.y += o.y
                    }
                    if (null != e.btn) {
                        var o = e.btn;
                        n._btn_yes.x += o.x, n._btn_yes.y += o.y, n._btn_no.x += o.x, n._btn_no.y += o.y
                    }
                    if (null != e.beak) {
                        var o = e.beak;
                        n._beak.x += o.x, n._beak.y += o.y
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
                this._box.texture = s.MAP_COMMON.getTexture(75), this._beak.texture = s.MAP_COMMON.getTexture(76);
                var t = s.MAP_COMMON.getTexture(102),
                    e = s.MAP_COMMON.getTexture(104);
                this._btn_yes.initialize(t, e), t = s.MAP_COMMON.getTexture(84), e = s.MAP_COMMON.getTexture(85), this._btn_no.initialize(t, e)
            }, e.prototype.activate = function () {
                this._btn_yes.activate(), this._btn_no.activate()
            }, e.prototype.deactivate = function () {
                this._btn_yes.deactivate(), this._btn_no.deactivate()
            }, e.prototype.dispose = function () {
                this._btn_yes.dispose(), this._btn_no.dispose()
            }, e
        }(PIXI.Container),
        u = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._onMouseOver = function () {
                    r.SE.play("225"), i._over.alpha = 1
                }, i._onMouseOut = function () {
                    i._over.alpha = 0
                }, i._onClick = function () {
                    null != i._cb_onClick && i._cb_onClick()
                }, i._cb_onClick = e, i._img = new PIXI.Sprite, i.addChild(i._img), i._over = new PIXI.Sprite, i._over.alpha = 0, i.addChild(i._over), i.interactive = !0, i
            }
            return n(e, t), e.prototype.initialize = function (t, e) {
                this._img.texture = t, this._img.x = -Math.round(this._img.width / 2), this._img.y = -Math.round(this._img.height / 2), this._over.texture = e, this._over.x = -Math.round(this._over.width / 2), this._over.y = -Math.round(this._over.height / 2)
            }, e.prototype.activate = function () {
                1 != this.buttonMode && (this.buttonMode = !0, this.on(a.EventType.MOUSEOVER, this._onMouseOver), this.on(a.EventType.MOUSEOUT, this._onMouseOut), this.on(a.EventType.CLICK, this._onClick))
            }, e.prototype.deactivate = function () {
                this.buttonMode = !1, this.off(a.EventType.MOUSEOVER, this._onMouseOver), this.off(a.EventType.MOUSEOUT, this._onMouseOut), this.off(a.EventType.CLICK, this._onClick)
            }, e.prototype.dispose = function () {
                this.deactivate()
            }, e
        }(PIXI.Container)
}