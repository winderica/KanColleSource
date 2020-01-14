const function1308 = function (t, e, i) {
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
        r = i(253),
        s = i(4),
        a = i(17),
        _ = i(14),
        u = i(31),
        l = i(200),
        c = function (t) {
            function e(e, i, n, o, r) {
                var a = t.call(this) || this;
                return a._index = e, a._mst_id = i, a.alpha = 0, a._container = new PIXI.Container, a.addChild(a._container), a._content = new h, a._container.addChild(a._content), a.y = a._baseY, a._text = new s.TextBox(19, 16777215), a._container.addChild(a._text), a._hp_now = n, a._hp_max = r, a._hp_repaired = o, a
            }
            return n(e, t), Object.defineProperty(e.prototype, "index", {
                get: function () {
                    return this._index
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "hp_repaired", {
                get: function () {
                    return this._hp_repaired
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "content", {
                get: function () {
                    return this._content
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "_baseY", {
                get: function () {
                    return this._index * (a.BannerSize.H + 7)
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                this._content.initialize(this._mst_id, this._hp_now, this._hp_max, this._index), this._text.text = this._hp_now + "/" + this._hp_max, this._text.position.set(200, 60), this._content.updateHp(this._hp_now, this._hp_max)
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._text.destroy()
            }, e.prototype.getGlobalPos = function (t) {
                void 0 === t && (t = !0);
                var e = new PIXI.Point;
                return 1 == t && (e.x = a.BannerSize.W / 2, e.y = a.BannerSize.H / 2), this.toGlobal(e)
            }, e.prototype.updateHp = function (t, e) {
                void 0 === e && (e = null), this._content.updateHp(t, this._hp_max, e), this._updateHpText()
            }, e.prototype._updateHpText = function () {
                var t = Math.abs(this._hp_repaired - this._hp_now);
                if (t > 0) {
                    var e = Math.floor(1e3 / t);
                    this._updateTextTween(e, this._hp_now + 1)
                }
            }, e.prototype._updateTextTween = function (t, e) {
                var i = this;
                e > this._hp_repaired || createjs.Tween.get(null).call(function () {
                    i._text.text = e + "/" + i._hp_max
                }).wait(t).call(function () {
                    i._updateTextTween(t, e + 1)
                })
            }, e
        }(PIXI.Container);
    e.AnchorageRepairShipBanner = c;
    var h = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._img = new p, e._flagship_mark = new PIXI.Sprite, e._flagship_mark.position.set(210, 6), e._frame = new d, e._kira = new l.BannerKirakira, e.addChild(e._img), e.addChild(e._flagship_mark), e.addChild(e._frame), e.addChild(e._kira), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "img", {
                get: function () {
                    return this._img
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "flagship_mark", {
                get: function () {
                    return this._flagship_mark
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "frame", {
                get: function () {
                    return this._frame
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "kira", {
                get: function () {
                    return this._kira
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t, e, i, n) {
                this._img.initialize(t, e, i), 0 == n && (this._flagship_mark.texture = r.MAP_ANCHORAGE_REPAIR.getTexture(9)), this._frame.initialize(e, i)
            }, e.prototype.updateHp = function (t, e, i) {
                void 0 === i && (i = null), this._img.update(t, e), this._frame.updateHp(t, e, i)
            }, e
        }(PIXI.Container),
        p = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._img = new PIXI.Sprite, e._icon = new u.BannerIcon, e.addChild(e._img), e.addChild(e._icon), e
            }
            return n(e, t), e.prototype.initialize = function (t, e, i) {
                this._mst_id = t, this._updateState(e, i), this._icon.initialize(!1), this._updateImage(), this._updateIcon(e, i)
            }, e.prototype.update = function (t, e) {
                this._updateState(t, e), this._updateImage(), this._updateIcon(t, e)
            }, e.prototype._updateState = function (t, e) {
                t <= 0 ? this._damaged = 2 : _.ShipUtil.isDamaged(t, e) ? this._damaged = 1 : this._damaged = 0
            }, e.prototype._updateImage = function () {
                this._img.texture = this._getTexture()
            }, e.prototype._getTexture = function () {
                var t = 0 != this._damaged;
                return o.default.resources.getShip(this._mst_id, t, "banner")
            }, e.prototype._updateIcon = function (t, e) {
                var i = _.ShipUtil.getDamageType(t, e);
                this._icon.setDamagedIcon(i)
            }, e
        }(PIXI.Container),
        d = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._gauge_bg = new PIXI.Sprite, e._gauge = new f, e._frame = new PIXI.Sprite, e._frame.y = -10, e.addChild(e._gauge_bg), e.addChild(e._gauge), e.addChild(e._frame), e
            }
            return n(e, t), e.prototype.initialize = function (t, e) {
                this._gauge_bg.texture = r.MAP_ANCHORAGE_REPAIR.getTexture(7), this._gauge_bg.x = 240, this._gauge.position.set(240, 60), this._gauge.pivot.y = 60, this._frame.texture = r.MAP_ANCHORAGE_REPAIR.getTexture(8), this.updateHp(t, e)
            }, e.prototype.updateHp = function (t, e, i) {
                void 0 === i && (i = null), this._gauge.update(t / e, i)
            }, e
        }(PIXI.Container),
        f = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._BAR_HEIGHT = 60, e
            }
            return n(e, t), e.prototype.update = function (t, e) {
                var i = this;
                void 0 === e && (e = null), this._stopAnimation(), t = Math.max(t, 0), t = Math.min(t, 1);
                var n = _.MathUtil.getColor(t),
                    o = this._BAR_HEIGHT * t;
                if (null == e) this.beginFill(n), this.drawRect(0, this._BAR_HEIGHT, 10, -o), this.endFill();
                else {
                    var r = this.height,
                        s = Math.max(o / r, 0);
                    this._t = createjs.Tween.get(this.scale).to({
                        y: s
                    }, 1200).call(function () {
                        i.clear(), i.beginFill(n), i.drawRect(0, i._BAR_HEIGHT, 10, -r), i.endFill()
                    }).wait(300).call(e)
                }
            }, e.prototype.dispose = function () {
                this._stopAnimation()
            }, e.prototype._stopAnimation = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null)
            }, e
        }(PIXI.Graphics)
}