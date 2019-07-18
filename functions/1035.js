const function1035 = function (t, e, i) {
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
    var o = i(1036),
        r = i(30),
        s = i(1038),
        a = i(58),
        _ = i(113),
        u = i(228),
        l = i(1),
        c = function (t) {
            function e(e, i) {
                var n = t.call(this) || this,
                    l = new Array,
                    c = 27;
                [1, 2, 3, 7, 4, 5, 6].forEach(function (t) {
                    var e = new h(t);
                    l.push(e), e.position.x = c, e.position.y = 510, c = e.position.x + e.width + 4
                });
                var p = new o.ExpeditionDetail,
                    d = new o.ExpeditionEmptyDetail,
                    f = new PIXI.Sprite(r.SALLY_COMMON.getTexture(27)),
                    y = new PIXI.Sprite(a.SALLY_EXPEDITION.getTexture(29)),
                    m = new s.ExpeditionList,
                    g = new PIXI.Sprite(a.SALLY_EXPEDITION.getTexture(92)),
                    v = new _.ArrowButton,
                    b = new _.ArrowButton(!0),
                    w = new u.CompSwitchBtns(2, e, i);
                return w.position.set(300, 12), w.initialize(), v.scale.set(.85), b.scale.set(.85), v.position.set(300, 75), b.position.set(300, 480), m.position.set(10, 55), f.position.set(-5, 2), g.position.set(37, 468), p.position.set(694, 0), d.position.set(694, 0), n.addChild(f), n.addChild(y), n.addChild(m), n.addChild(g), l.forEach(function (t) {
                    n.addChild(t)
                }), n.addChild(v, b), n.addChild(w), n.addChild(p, d), n._detail = p, n._emptyDetail = d, n._prevButton = v, n._nextButton = b, n._areaIcons = l, n._list = m, n._hukidashi = g, n._compSwitchBtns = w, n
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
                }), this._areaIcons.length = 0, this._nextButton.dispose(), this._prevButton.dispose(), this._hukidashi.texture = PIXI.Texture.EMPTY, this._compSwitchBtns.dispose(), this._detail = null, this._emptyDetail = null, this._list = null, this._areaIcons = null, this._nextButton = null, this._prevButton = null, this._hukidashi = null, this._compSwitchBtns = null, this._areaIcons = null
            }, e
        }(PIXI.Container);
    e.ExpeditionStage = c;
    var h = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i.RESOURCE_MAP = {
                1: {
                    off: 1,
                    on: 2
                },
                2: {
                    off: 3,
                    on: 4
                },
                3: {
                    off: 5,
                    on: 6
                },
                4: {
                    off: 9,
                    on: 10
                },
                5: {
                    off: 11,
                    on: 12
                },
                6: {
                    off: 13,
                    on: 14
                },
                7: {
                    off: 7,
                    on: 8
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
            this.removeChildren(), this._hitArea.removeAllListeners(l.EventType.CLICK), this._hitArea.removeAllListeners(l.EventType.MOUSEOUT), this._hitArea.removeAllListeners(l.EventType.MOUSEOVER), this._icon.texture = PIXI.Texture.EMPTY, this._icon.texture = null, this._hitArea = null, this._resourceMap = null, this.onClick = null
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