const function1004 = function (t, e, i) {
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
        r = i(4),
        s = i(46),
        a = i(86),
        _ = i(26),
        u = i(363),
        l = i(1),
        c = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._bg = new PIXI.Sprite, i._bg.position.set(0, 38), i.addChild(i._bg), i._title_bg = new PIXI.Sprite, i._title_bg.position.set(2, 0), i.addChild(i._title_bg), i._title_label = new PIXI.Sprite, i._title_label.position.set(35, 11), i.addChild(i._title_label), i._label_from = new PIXI.Sprite, i._label_from.position.set(266, 56), i.addChild(i._label_from), i._label_tobe = new PIXI.Sprite, i._label_tobe.position.set(266, 305), i.addChild(i._label_tobe), i._arrow = new h, i._arrow.position.set(170, 279), i.addChild(i._arrow), i._item_from = new p, i._item_from.position.set(27, 78), i.addChild(i._item_from), i._item_tobe = new p, i._item_tobe.position.set(27, 326), i.addChild(i._item_tobe), i._btn = new d(e), i._btn.position.set(92, 524), i.addChild(i._btn), i.interactive = !0, i
            }
            return n(e, t), Object.defineProperty(e.prototype, "width", {
                get: function () {
                    return this._bg.width
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                this._bg.texture = _.SALLY_AIRUNIT.getTexture(9), this._title_bg.texture = _.SALLY_AIRUNIT.getTexture(117), this._title_label.texture = _.SALLY_AIRUNIT.getTexture(10), this._label_from.texture = _.SALLY_AIRUNIT.getTexture(127), this._label_tobe.texture = _.SALLY_AIRUNIT.getTexture(126), this._arrow.initialize(), this._item_from.initialize(), this._item_tobe.initialize(), this._btn.initialize()
            }, e.prototype.update = function (t, e) {
                this._item_from.update(t), this._item_tobe.update(e);
                var i = e.equipTypeSp,
                    n = e.cost * u.getKadouCount(i),
                    r = n <= o.default.model.useItem.getCount(34);
                this._btn.update(r)
            }, e.prototype.activate = function () {
                this._arrow.activate(), this._btn.activate()
            }, e.prototype.deactivate = function () {
                a.TaskLoadSlotResource.abortBy(this), this._arrow.deactivate(), this._btn.deactivate()
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._arrow.dispose(), this._item_from.dispose(), this._item_tobe.dispose(), this._btn.dispose()
            }, e
        }(PIXI.Container);
    e.AirUnitChangeConfirmPanel = c;
    var h = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._over = new PIXI.Sprite, e.addChild(e._over), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this.texture = _.SALLY_AIRUNIT.getTexture(40), this._over.texture = _.SALLY_AIRUNIT.getTexture(41)
            }, e.prototype.activate = function () {
                var t = this;
                null == this._t && (this._over.visible = !1, this._over.y = 0, this._t = createjs.Tween.get(null, {
                    loop: !0
                }).wait(100).call(function () {
                    t._over.visible = !0
                }).wait(250).call(function () {
                    t._over.y = 15
                }).wait(250).call(function () {
                    t._over.visible = !1, t._over.y = 0
                }))
            }, e.prototype.deactivate = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null)
            }, e.prototype.dispose = function () {
                this.deactivate()
            }, e
        }(PIXI.Sprite),
        p = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._img = new PIXI.Sprite, e.addChild(e._img), e._text = new r.TextBox(20, 4999235), e._text.position.set(17, 42), e.addChild(e._text), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this.texture = _.SALLY_AIRUNIT.getTexture(34)
            }, e.prototype.update = function (t) {
                if (a.TaskLoadSlotResource.abortBy(this._img), this._target = t, null == t) this._img.texture = PIXI.Texture.EMPTY, this._text.text = "";
                else {
                    var e = t.mstID;
                    this._img.texture = o.default.resources.getSlotitem(e, "remodel"), this._img.texture == PIXI.Texture.EMPTY && new a.TaskLoadSlotResource("remodel", this._img, e).start(), this._text.text = s.SlotUtil.genSummaryText(t, "+", "\n", !1, 5)
                }
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._target = null, this._img = null, this._text.destroy(), this._text = null
            }, e
        }(PIXI.Sprite),
        d = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._enabled = !0, i._onMouseOver = function () {
                    i._update(!0)
                }, i._onMouseOut = function () {
                    i._update(!1)
                }, i._onClick = function () {
                    0 != i._enabled && null != i._cb_onClick && i._cb_onClick()
                }, i._cb_onClick = e, i._img = new PIXI.Sprite, i.addChild(i._img), i._img.interactive = !0, i._alert = new PIXI.Sprite, i._alert.position.set(-35, -92), i.addChild(i._alert), i
            }
            return n(e, t), Object.defineProperty(e.prototype, "enabled", {
                get: function () {
                    return this._enabled
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                this._alert.texture = _.SALLY_AIRUNIT.getTexture(39), this._update(!1)
            }, e.prototype.update = function (t) {
                this._enabled = t, this._update(!1)
            }, e.prototype.activate = function () {
                1 != this.buttonMode && (this._img.buttonMode = !0, this._img.on(l.EventType.MOUSEOVER, this._onMouseOver), this._img.on(l.EventType.MOUSEOUT, this._onMouseOut), this._img.on(l.EventType.CLICK, this._onClick))
            }, e.prototype.deactivate = function () {
                this._img.buttonMode = !1, this._img.off(l.EventType.MOUSEOVER, this._onMouseOver), this._img.off(l.EventType.MOUSEOUT, this._onMouseOut), this._img.off(l.EventType.CLICK, this._onClick)
            }, e.prototype.dispose = function () {
                this.deactivate()
            }, e.prototype._update = function (t) {
                0 == this._enabled ? (this._img.texture = _.SALLY_AIRUNIT.getTexture(31), this._alert.visible = t) : (this._img.texture = 0 == t ? _.SALLY_AIRUNIT.getTexture(30) : _.SALLY_AIRUNIT.getTexture(32), this._alert.visible = !1)
            }, e
        }(PIXI.Container)
}