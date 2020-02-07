const function857 = function (t, e, i) {
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
    var o = i(30),
        r = i(1),
        s = i(0),
        a = function (t) {
            function e(e) {
                var i = t.call(this) || this,
                    n = s.default.resources.getUIImage("vignette_frame"),
                    o = s.default.resources.getShip(e, !1, "sp_remodel/full_x2"),
                    r = s.default.resources.getShip(e, !1, "sp_remodel/text_class"),
                    a = s.default.resources.getShip(e, !1, "sp_remodel/text_name"),
                    l = (new PIXI.Graphics).beginFill(16777215).drawRect(0, 0, 1200, 720).endFill(),
                    c = (new PIXI.Graphics).beginFill(0).drawRect(0, 0, 1200, 720).endFill(),
                    h = new PIXI.Sprite(r),
                    p = new PIXI.Sprite(a),
                    d = new _(o),
                    f = new PIXI.Sprite(n),
                    y = new PIXI.Container,
                    m = new u;
                return d.position.set(.5 * -o.width, .5 * -o.height), h.position.set(12, 12), p.position.set(12, 720 - p.height - 12), y.addChild(d), i.addChild(l), i.addChild(y), i.addChild(f, h, p), i.addChild(c), i.addChild(m), i._textClass = h, i._textName = p, i._camera = y, i._backGround = l, i._blackOver = c, i._ship = d, i._goBackArea = m, i
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
            }), e.prototype.dispose = function () {
                this.removeChildren(), this._ship.dispose(), this._goBackArea.dispose(), this._camera.removeChildren(), this._backGround.filters = [], this._textClass.texture = PIXI.Texture.EMPTY, this._textName.texture = PIXI.Texture.EMPTY, this._goBackArea = null, this._ship = null, this._camera = null, this._textClass = null, this._textName = null, this._backGround = null, this._blackOver = null
            }, e
        }(PIXI.Container);
    e.SpecialRemodelStartStage = a;
    var _ = function (t) {
        function e(e) {
            var i = t.call(this) || this,
                n = new PIXI.Sprite(e);
            n.tint = 0, n.alpha = .21;
            var o = new PIXI.Sprite(e);
            return i.addChild(n, o), i._main = o, i._shadow = n, i
        }
        return n(e, t), Object.defineProperty(e.prototype, "shadow", {
            get: function () {
                return this._shadow
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.dispose = function () {
            this.removeChildren(), this._shadow.filters = [], this._shadow.texture = PIXI.Texture.EMPTY, this._main.texture = PIXI.Texture.EMPTY, this._shadow = null, this._main = null
        }, e
    }(PIXI.Container);
    e.Ship = _;
    var u = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onClick = function () {
                e.onClick()
            };
            var i = new o.GearBtnHome,
                n = (new PIXI.Graphics).beginFill(0, 0).drawRect(0, 0, 1200, 720).endFill();
            return i.initialize(), i.activate(), i.position.set(1200 - .5 * i.width, 720 - .5 * i.height), n.interactive = !0, n.buttonMode = !0, n.addChild(i), n.addListener(r.EventType.CLICK, e._onClick), e._gearBtnHome = i, e._goBackArea = n, e.addChild(n), e
        }
        return n(e, t), e.prototype.dispose = function () {
            this.removeChildren(), this._goBackArea.removeListener(r.EventType.CLICK, this._onClick), this._gearBtnHome.deactivate(), this._gearBtnHome.dispose(), this._goBackArea = null, this._onClick = null, this._gearBtnHome = null
        }, e
    }(PIXI.Container)
}