const function955 = function (t, e, i) {
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
    var o = i(5), r = i(0), s = i(17), a = i(1), _ = i(2), u = i(23), l = i(8), c = i(4), h = i(22), p = i(67),
        d = i(6), f = i(9), y = i(26), m = i(956), v = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                return o._onSelect = function (t) {
                    if (o._dialog.deactivate(), 0 == t) o._removeDialog(), o._endTask(); else {
                        new m.AirUnitExtendAPI(o._area_id).start(function () {
                            o._removeDialog(), o._loadItemCard()
                        })
                    }
                }, o._layer = e, o._area_id = i, o._cb_onUpdateInAnimation = n, o
            }

            return n(e, t), e.prototype._start = function () {
                this._bg = new l.AreaBox(.6), this._layer.addChild(this._bg), this._dialog = new g(this._onSelect), this._dialog.initialize();
                var t = this._area_id, e = r.default.model.useItem.getCount(73);
                this._dialog.update(t, e), this._dialog.activate(), this._layer.addChild(this._dialog)
            }, e.prototype._removeDialog = function () {
                this._layer.removeChild(this._dialog), this._dialog.dispose(), this._dialog = null
            }, e.prototype._loadItemCard = function () {
                var t = this, e = new p.UseitemLoader;
                e.add(73, 1), e.load(function () {
                    t._loadTextImage()
                })
            }, e.prototype._loadTextImage = function () {
                var t = this, e = h.MathUtil.zeroPadding(this._area_id, 3),
                    i = r.default.settings.path_root + "resources/area/airunit_extend_confirm/" + e + "_.png";
                i = i + "?" + s.START_TIME;
                var n = new PIXI.loaders.Loader;
                n.add(i), n.load(function () {
                    t._message = new PIXI.Container;
                    var e = n.resources[i].texture, r = new PIXI.Sprite(e);
                    t._message.addChild(r);
                    var s = new PIXI.Sprite(y.SALLY_AIRUNIT.getTexture(134));
                    t._message.addChild(s), r.x = o.default.width / 2 - Math.round(r.width / 2), s.x = o.default.width / 2 - Math.round(s.width / 2);
                    var a = r.height / 2 + s.height;
                    r.y = o.default.height / 2 - Math.round(a / 2), s.y = r.y + Math.round(r.height / 2), t._showCard()
                })
            }, e.prototype._showCard = function () {
                var t = this;
                this._card = new u.Container, this._card.position.set(o.default.width / 2, o.default.height / 2), this._card.scale.set(0), this._layer.addChild(this._card);
                var e = r.default.resources.getUseitem(73, 1), i = new PIXI.Sprite(e);
                i.position.set(-i.width / 2, -i.height / 2), this._card.addChild(i), d.SE.play("230"), createjs.Tween.get(this._card).to({
                    scaleX: 1,
                    scaleY: 1
                }, 250).wait(1300).call(function () {
                    t._shakeCard()
                })
            }, e.prototype._shakeCard = function () {
                for (var t = this, e = createjs.Tween.get(null), i = 0; i < 20; i++) e.call(function () {
                    t._card.x = o.default.width / 2 + 16 * Math.random() - 8, t._card.y = o.default.height / 2 + 16 * Math.random() - 8
                }), e.wait(50);
                e.call(function () {
                    t._card.x = o.default.width / 2, t._card.y = o.default.height / 2, t._showFlash()
                })
            }, e.prototype._showFlash = function () {
                var t = this, e = new u.Container;
                e.position.set(o.default.width / 2, o.default.height / 2), e.scale.set(1.25), e.alpha = 0, this._layer.addChild(e);
                var i = new PIXI.Sprite(f.COMMON_MISC.getTexture(68));
                i.position.set(-i.width / 2, -i.height / 2), e.addChild(i), createjs.Tween.get(e).to({
                    scaleX: 2,
                    scaleY: 2,
                    alpha: 1
                }, 350).to({
                    scaleX: 2.8,
                    scaleY: 2.8
                }, 300), this._white = new l.AreaBox(1, 16777215), this._white.alpha = 0, this._layer.addChild(this._white), createjs.Tween.get(this._white).wait(200).to({ alpha: 1 }, 450).call(function () {
                    null != t._cb_onUpdateInAnimation && t._cb_onUpdateInAnimation(), t._layer.removeChild(t._card), t._card = null, t._layer.removeChild(e), t._showText()
                })
            }, e.prototype._showText = function () {
                var t = this;
                this._message.x = o.default.width, this._white.addChild(this._message), d.SE.play("216"), createjs.Tween.get(this._message).to({ x: 0 }, 500).wait(500).call(function () {
                    t._waitClick()
                })
            }, e.prototype._waitClick = function () {
                var t = this;
                this._white.buttonMode = !0, this._white.once(a.EventType.CLICK, function () {
                    t._bg.alpha = 0, createjs.Tween.get(t._white).to({ alpha: 0 }, 1e3).call(function () {
                        t._layer.removeChild(t._white), t._white = null, t._endTask()
                    })
                })
            }, e.prototype._endTask = function () {
                this._layer.removeChild(this._bg), this._bg = null, t.prototype._endTask.call(this)
            }, e
        }(_.TaskBase);
    e.TaskExtendAirUnit = v;
    var g = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._onClickYes = function () {
                null != i._cb_onResult && i._cb_onResult(!0)
            }, i._onClickNo = function () {
                null != i._cb_onResult && i._cb_onResult(!1)
            }, i._cb_onResult = e, i._bg = new PIXI.Sprite, i._bg.position.set(231, 185), i.addChild(i._bg), i._area_name = new PIXI.Sprite, i._area_name.position.set(0, 219), i.addChild(i._area_name), i._title = new PIXI.Sprite, i._title.position.set(437, 260), i.addChild(i._title), i._icon = new PIXI.Sprite, i._icon.position.set(533, 327), i.addChild(i._icon), i._item_num = new c.TextBox(20, 1381651), i._item_num.position.set(621, 351), i.addChild(i._item_num), i._logo = new PIXI.Sprite, i._logo.position.set(761, 96), i.addChild(i._logo), i._btn_yes = new PIXI.Sprite, i._btn_yes.position.set(387, 455), i.addChild(i._btn_yes), i._btn_no = new PIXI.Sprite, i._btn_no.position.set(642, 455), i.addChild(i._btn_no), i._btn_yes.interactive = !0, i._btn_no.interactive = !0, i
        }

        return n(e, t), e.prototype.initialize = function () {
            this._bg.texture = y.SALLY_AIRUNIT.getTexture(90), this._title.texture = y.SALLY_AIRUNIT.getTexture(141), this._icon.texture = r.default.resources.getUseitem(73, 0), this._item_num.text = "1\u21920", this._logo.texture = y.SALLY_AIRUNIT.getTexture(47), this._btn_yes.texture = y.SALLY_AIRUNIT.getTexture(33), this._btn_no.texture = y.SALLY_AIRUNIT.getTexture(16)
        }, e.prototype.update = function (t, e) {
            var i = this, n = h.MathUtil.zeroPadding(t, 3),
                o = r.default.settings.path_root + "resources/area/airunit_extend_confirm/" + n + ".png";
            o = o + "?" + s.START_TIME;
            var a = new PIXI.loaders.Loader;
            a.add(o), a.load(function () {
                var t = a.resources[o].texture;
                i._area_name.texture = t;
                var e = i._title.x + i._title.width / 2 - i._area_name.width / 2;
                i._area_name.x = Math.round(e)
            });
            var _ = e;
            this._item_num.text = _ + "\u2192" + Math.max(0, _ - 1)
        }, e.prototype.activate = function () {
            0 == this._btn_yes.buttonMode && (this._btn_yes.buttonMode = !0, this._btn_yes.on(a.EventType.CLICK, this._onClickYes)), 0 == this._btn_no.buttonMode && (this._btn_no.buttonMode = !0, this._btn_no.on(a.EventType.CLICK, this._onClickNo))
        }, e.prototype.deactivate = function () {
            this._btn_yes.buttonMode = !1, this._btn_yes.off(a.EventType.CLICK, this._onClickYes), this._btn_no.buttonMode = !1, this._btn_no.off(a.EventType.CLICK, this._onClickNo)
        }, e.prototype.dispose = function () {
            this.deactivate(), this.removeChildren(), this._item_num.destroy(), this._cb_onResult = null
        }, e
    }(PIXI.Container)
}