const function1423 = function (t, e, i) {
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
        r = i(18),
        s = i(12),
        a = i(6),
        _ = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._bg = new r.FadeBox(.9, 0), e._chara = new PIXI.Container, e._bg_box = new l, e._item_layer = new u, e._name_layer = new c, e._bg.hide(0), e._item_layer.position.x = 600, e.addChild(e._bg), e.addChild(e._chara), e.addChild(e._bg_box), e.addChild(e._item_layer), e.addChild(e._name_layer), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "bg", {
                get: function () {
                    return this._bg
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "chara", {
                get: function () {
                    return this._chara
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "bg_box", {
                get: function () {
                    return this._bg_box
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "item_layer", {
                get: function () {
                    return this._item_layer
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "name_layer", {
                get: function () {
                    return this._name_layer
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t, e, i, n) {
                this._bg_box.initialize(t), this._item_layer.initialize(t, e, i, n), this._name_layer.initialize(t, e, i, n)
            }, e.prototype.dispose = function () {
                this.removeChildren()
            }, e
        }(PIXI.Container);
    e.CutinCanvasSpSSF = _;
    var l = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.anchor.set(.5), e
            }
            return n(e, t), e.prototype.initialize = function (t) {
                var e = t ? 1 : -1;
                this.rotation = Math.PI / 40 * e, this.position.set(600 - 1155 * e, 785), this._to_pos = new PIXI.Point(600 + 33 * e, 507), this.scale.x = e;
                var i = t ? "battle_telop_mes_ybg3_f" : "battle_telop_mes_ybg3_e";
                this.texture = PIXI.Texture.fromFrame(i)
            }, e.prototype.show = function (t) {
                var e = this;
                createjs.Tween.get(this).wait(t).call(function () {
                    a.SE.play("105"), createjs.Tween.get(e).to({
                        x: e._to_pos.x,
                        y: e._to_pos.y
                    }, 200)
                })
            }, e
        }(PIXI.Sprite),
        u = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._item1 = new s.Sprite, e._item2 = new s.Sprite, e._item3 = new s.Sprite, e._item1.anchor.set(.5), e._item2.anchor.set(.5), e._item3.anchor.set(.5), e._item1.scale.set(1.5), e._item2.scale.set(1.5), e._item3.scale.set(1.5), e._item1.position.set(-1202, 798.5), e._item2.position.set(-816, 745.5), e._item3.position.set(-370, 619.5), e._item1.alpha = 0, e._item2.alpha = 0, e._item3.alpha = 0, e.addChild(e._item3), e.addChild(e._item2), e.addChild(e._item1);
                var i = new PIXI.Graphics;
                return i.beginFill(16711680, .5), i.drawPolygon([new PIXI.Point(-600, 495), new PIXI.Point(600, 222), new PIXI.Point(600, 533), new PIXI.Point(-600, 810)]), i.endFill(), e.addChild(i), e.mask = i, e
            }
            return n(e, t), e.prototype.initialize = function (t, e, i, n) {
                0 == t && (this.scale.x = -1), this._item1.texture = o.default.resources.getSlotitem(e, "item_up"), this._item2.texture = o.default.resources.getSlotitem(i, "item_up"), this._item3.texture = o.default.resources.getSlotitem(n, "item_up")
            }, e.prototype.show = function (t) {
                var e = this;
                createjs.Tween.get(this).wait(t).call(function () {
                    e._showItem1()
                }).wait(433).call(function () {
                    e._showItem2()
                }).wait(433).call(function () {
                    e._showItem3()
                })
            }, e.prototype._showItem1 = function () {
                createjs.Tween.get(this._item1).to({
                    x: -437,
                    y: 567,
                    alpha: 1
                }, 200).call(function () {
                    a.SE.play("109")
                })
            }, e.prototype._showItem2 = function () {
                createjs.Tween.get(this._item2).to({
                    x: -54,
                    y: 479,
                    alpha: 1
                }, 200).call(function () {
                    a.SE.play("109")
                })
            }, e.prototype._showItem3 = function () {
                createjs.Tween.get(this._item3).to({
                    x: 330,
                    y: 391,
                    alpha: 1
                }, 200).call(function () {
                    a.SE.play("109")
                })
            }, e
        }(PIXI.Container),
        c = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._item1 = new PIXI.Sprite, e._item2 = new PIXI.Sprite, e._item3 = new PIXI.Sprite, e._item1.anchor.set(.5), e._item2.anchor.set(.5), e._item3.anchor.set(.5), e._item1.scale.set(.65), e._item2.scale.set(.65), e._item3.scale.set(.65), e._item1.alpha = 0, e._item2.alpha = 0, e._item3.alpha = 0, e.addChild(e._item3), e.addChild(e._item2), e.addChild(e._item1), e
            }
            return n(e, t), e.prototype.initialize = function (t, e, i, n) {
                var r = t ? 1 : -1;
                this._item1.position.set(600 - 660 * r, 443), this._item2.position.set(600 - 330 * r, 368), this._item3.position.set(600, 293), this._w = r, this._item1.texture = o.default.resources.getSlotitem(e, "btxt_flat"), this._item2.texture = o.default.resources.getSlotitem(i, "btxt_flat"), this._item3.texture = o.default.resources.getSlotitem(n, "btxt_flat")
            }, e.prototype.show = function (t) {
                var e = this;
                createjs.Tween.get(this).wait(t).call(function () {
                    e._showItem1()
                }).wait(433).call(function () {
                    e._showItem2()
                }).wait(433).call(function () {
                    e._showItem3()
                }).wait(200).call(function () {
                    e.emit("complete")
                })
            }, e.prototype._showItem1 = function () {
                createjs.Tween.get(this._item1).to({
                    x: 600 - 330 * this._w,
                    y: 368,
                    alpha: 1
                }, 200).call(function () {
                    a.SE.play("109")
                })
            }, e.prototype._showItem2 = function () {
                createjs.Tween.get(this._item2).to({
                    x: 600,
                    y: 293,
                    alpha: 1
                }, 200).call(function () {
                    a.SE.play("109")
                })
            }, e.prototype._showItem3 = function () {
                createjs.Tween.get(this._item3).to({
                    x: 600 + 330 * this._w,
                    y: 218,
                    alpha: 1
                }, 200).call(function () {
                    a.SE.play("109")
                })
            }, e
        }(PIXI.Container)
}