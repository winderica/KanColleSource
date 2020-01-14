const function1075 = function (t, e, i) {
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
    var o = i(1076),
        r = i(32),
        s = i(1077),
        a = i(59),
        _ = i(114),
        u = i(234),
        l = i(1),
        c = i(1080),
        h = i(17),
        p = i(0),
        d = function (t) {
            function e(e, i) {
                var n = t.call(this) || this,
                    l = new Array,
                    d = 27;
                [1, 2, 3, 7, 4, 5, 6].forEach(function (t) {
                    var e = new f(t);
                    l.push(e), e.position.x = d, e.position.y = 510, d = e.position.x + e.width + 4
                }), n._eventAreaIcon = new c.ExpeditionEventAreaIconBtn(h.EVENT_AREA_ID), n._eventAreaIcon.position.set(590, 497);
                var y = new o.ExpeditionDetail;
                y.position.set(694, 0);
                var m = new o.ExpeditionEmptyDetail;
                m.position.set(694, 0);
                var g = new PIXI.Sprite(r.SALLY_COMMON.getTexture(27));
                g.position.set(-5, 2);
                var v = new PIXI.Sprite(a.SALLY_EXPEDITION.getTexture(28)),
                    b = new s.ExpeditionList;
                b.position.set(10, 55);
                var w = new PIXI.Sprite(a.SALLY_EXPEDITION.getTexture(91));
                w.position.set(37, 468);
                var x = new _.ArrowButton;
                x.scale.set(.85), x.position.set(300, 75);
                var I = new _.ArrowButton(!0);
                I.scale.set(.85), I.position.set(300, 480);
                var T = new u.CompSwitchBtns(2, e, i);
                if (T.position.set(300, 12), T.initialize(), n.addChild(g), n.addChild(v), n.addChild(b), n.addChild(w), l.forEach(function (t) {
                        n.addChild(t)
                    }), h.EVENT_AREA_ID > 0) {
                    null != p.default.model.map.getArea(h.EVENT_AREA_ID) && (n._eventAreaIcon.initialize(), n._eventAreaIcon.activate(), n.addChild(n._eventAreaIcon))
                }
                return n.addChild(x, I), n.addChild(T), n.addChild(y, m), n._detail = y, n._emptyDetail = m, n._prevButton = x, n._nextButton = I, n._areaIcons = l, n._list = b, n._hukidashi = w, n._compSwitchBtns = T, n
            }
            return n(e, t), Object.defineProperty(e.prototype, "list", {
                get: function () {
                    return this._list
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "detail", {
                get: function () {
                    return this._detail
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "emptyDetail", {
                get: function () {
                    return this._emptyDetail
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "areaIcons", {
                get: function () {
                    return this._areaIcons
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "eventAreaIcon", {
                get: function () {
                    return this._eventAreaIcon
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "nextButton", {
                get: function () {
                    return this._nextButton
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "prevButton", {
                get: function () {
                    return this._prevButton
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "compSwitch", {
                get: function () {
                    return this._compSwitchBtns
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.seekHukidashi = function (t) {
                this._hukidashi.position.x = t
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._detail.dispose(), this._emptyDetail.dispose(), this._list.dispose(), this._areaIcons.forEach(function (t) {
                    return t.dispose()
                }), this._areaIcons.length = 0, this._eventAreaIcon.dispose(), this._nextButton.dispose(), this._prevButton.dispose(), this._hukidashi.texture = PIXI.Texture.EMPTY, this._compSwitchBtns.dispose(), this._detail = null, this._emptyDetail = null, this._list = null, this._areaIcons = null, this._nextButton = null, this._prevButton = null, this._hukidashi = null, this._compSwitchBtns = null, this._areaIcons = null, this._eventAreaIcon = null
            }, e
        }(PIXI.Container);
    e.ExpeditionStage = d;
    var f = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i.RESOURCE_MAP = {
                1: {
                    off: 0,
                    on: 1
                },
                2: {
                    off: 2,
                    on: 3
                },
                3: {
                    off: 4,
                    on: 5
                },
                4: {
                    off: 8,
                    on: 9
                },
                5: {
                    off: 10,
                    on: 11
                },
                6: {
                    off: 12,
                    on: 13
                },
                7: {
                    off: 6,
                    on: 7
                }
            }, i._focus = !1, i._onClick = function () {
                i.onClick(i._area_mst_id)
            }, i._onOver = function () {
                i._focus || i._setActive(!0)
            }, i._onOut = function () {
                i._focus || i._setActive(!1)
            };
            var n = new PIXI.Sprite,
                o = (new PIXI.Graphics).beginFill(0, 0).drawRect(0, 0, 56, 56).endFill();
            return o.addListener(l.EventType.CLICK, i._onClick), o.addListener(l.EventType.MOUSEOVER, i._onOver), o.addListener(l.EventType.MOUSEOUT, i._onOut), o.buttonMode = !0, o.interactive = !0, i.addChild(n), i.addChild(o), i._icon = n, i._area_mst_id = e, i._resourceMap = i.RESOURCE_MAP[e], i._hitArea = o, i._setActive(!1), i._area_mst_id = e, i
        }
        return n(e, t), e.prototype.dispose = function () {
            this.removeChildren(), this._hitArea.removeAllListeners(l.EventType.CLICK), this._hitArea.removeAllListeners(l.EventType.MOUSEOUT), this._hitArea.removeAllListeners(l.EventType.MOUSEOVER), this._icon.texture = PIXI.Texture.EMPTY, this._icon.texture = null, this._hitArea = null, this._resourceMap = null, this.onClick = this._onClick = null, this._onOver = null, this._onOut = null
        }, Object.defineProperty(e.prototype, "area_mst_id", {
            get: function () {
                return this._area_mst_id
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype._setActive = function (t) {
            t ? this._icon.texture = a.SALLY_EXPEDITION.getTexture(this._resourceMap.on) : (this._icon.texture = a.SALLY_EXPEDITION.getTexture(this._resourceMap.off), this._hitArea.interactive = !0)
        }, e.prototype.focus = function (t) {
            this._setActive(t);
            var e = 0 == t;
            this._hitArea.interactive = e, this._focus = t
        }, e
    }(PIXI.Container)
}