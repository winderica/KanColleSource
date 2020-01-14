const function858 = function (t, e, i) {
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
    var o = i(859),
        r = i(31),
        s = i(1),
        a = i(0),
        _ = function (t) {
            function e(e) {
                var i = t.call(this) || this,
                    n = a.default.resources.getUIImage("vignette_frame"),
                    r = a.default.resources.getShip(e, !1, "sp_remodel/full_x2"),
                    s = a.default.resources.getShip(e, !1, "sp_remodel/text_class"),
                    _ = a.default.resources.getShip(e, !1, "sp_remodel/text_name"),
                    c = (new PIXI.Graphics).beginFill(16777215).drawRect(0, 0, 1200, 720).endFill(),
                    h = new o.FlashFilter;
                c.filters = [h];
                var p = (new PIXI.Graphics).beginFill(0).drawRect(0, 0, 1200, 720).endFill(),
                    d = new PIXI.Sprite(s),
                    f = new PIXI.Sprite(_),
                    y = new u(r),
                    m = new PIXI.Sprite(n),
                    g = new PIXI.Container,
                    v = new l;
                return y.position.set(.5 * -r.width, .5 * -r.height), d.position.set(12, 12), f.position.set(12, 720 - f.height - 12), g.addChild(y), i.addChild(c), i.addChild(g), i.addChild(m, d, f), i.addChild(p), i.addChild(v), i._textClass = d, i._textName = f, i._camera = g, i._backGround = c, i._blackOver = p, i._ship = y, i._backgroundColorFilter = h, i._goBackArea = v, i
            }
            return n(e, t), Object.defineProperty(e.prototype, "camera", {
                get: function () {
                    return this._camera
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "textClass", {
                get: function () {
                    return this._textClass
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "textName", {
                get: function () {
                    return this._textName
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "backGround", {
                get: function () {
                    return this._backGround
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "blackOver", {
                get: function () {
                    return this._blackOver
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "ship", {
                get: function () {
                    return this._ship
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "goBackArea", {
                get: function () {
                    return this._goBackArea
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "backgroundColorFilter", {
                get: function () {
                    return this._backgroundColorFilter
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dispose = function () {
                this.removeChildren(), this._ship.dispose(), this._goBackArea.dispose(), this._camera.removeChildren(), this._backGround.filters = [], this._textClass.texture = PIXI.Texture.EMPTY, this._textName.texture = PIXI.Texture.EMPTY, this._goBackArea = null, this._ship = null, this._camera = null, this._textClass = null, this._textName = null, this._backGround = null, this._blackOver = null
            }, e
        }(PIXI.Container);
    e.SpecialRemodelStartStage = _;
    var u = function (t) {
        function e(e) {
            var i = t.call(this) || this,
                n = new o.FlashFilter,
                r = new PIXI.Sprite(e);
            r.filters = [n], n.mr = 0, n.mg = 0, n.mb = 0, n.factor = 1, n.aa = .25, n.ar = 0, n.ag = 0, n.ab = 0, r.alpha = .85;
            var s = new PIXI.Sprite(e);
            return i.addChild(r, s), i._main = s, i._shadow = r, i._flashFilter = n, i
        }
        return n(e, t), Object.defineProperty(e.prototype, "shadow", {
            get: function () {
                return this._shadow
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "shadowColor", {
            get: function () {
                return this._flashFilter
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.dispose = function () {
            this.removeChildren(), this._shadow.filters = [], this._shadow.texture = PIXI.Texture.EMPTY, this._main.texture = PIXI.Texture.EMPTY, this._shadow = null, this._main = null
        }, e
    }(PIXI.Container);
    e.Ship = u;
    var l = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onClick = function () {
                e.onClick()
            };
            var i = new r.GearBtnHome,
                n = (new PIXI.Graphics).beginFill(0, 0).drawRect(0, 0, 1200, 720).endFill();
            return i.initialize(), i.activate(), i.position.set(1200 - .5 * i.width, 720 - .5 * i.height), n.interactive = !0, n.buttonMode = !0, n.addChild(i), n.addListener(s.EventType.CLICK, e._onClick), e._gearBtnHome = i, e._goBackArea = n, e.addChild(n), e
        }
        return n(e, t), e.prototype.dispose = function () {
            this.removeChildren(), this._goBackArea.removeListener(s.EventType.CLICK, this._onClick), this._gearBtnHome.deactivate(), this._gearBtnHome.dispose(), this._goBackArea = null, this._onClick = null, this._gearBtnHome = null
        }, e
    }(PIXI.Container)
}