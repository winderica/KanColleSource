const function230 = function (t, e, i) {
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
        r = i(55),
        s = i(68),
        a = i(231),
        _ = i(204),
        l = i(53),
        u = i(989),
        c = i(990),
        h = i(991),
        p = i(369),
        d = i(1),
        f = function (t) {
            function e(e, i, n, o, r) {
                var s = t.call(this) || this;
                return s._mst_id = 0, s._enabled = !1, s._onMouseOver = function () {
                    s._update(!0), null != s._cb_onMouseOver && s._cb_onMouseOver(s._mst_id)
                }, s._onMouseOut = function () {
                    s._update(!1), null != s._cb_onMouseOut && s._cb_onMouseOut(s._mst_id)
                }, s._onClick = function (t) {
                    if (null != s._cb_onClick) {
                        var e = t.data.global,
                            i = new PIXI.Point(e.x, e.y);
                        s._cb_onClick(s._mst_id, i)
                    }
                }, s._onClickAirUnitBadge = function () {
                    null != s._cb_onClickAirUnitBadge && s._cb_onClickAirUnitBadge()
                }, s._type = e, s._cb_onClick = i, s._cb_onClickAirUnitBadge = n, s._cb_onMouseOver = o, s._cb_onMouseOut = r, s._image = new _.MapThumbnailImage, s._clear = new c.ClearBadge, s._focus = new PIXI.Sprite, s._focus.visible = !1, s._lock = s._createLock(), s._gauge = new a.GaugeHorizontal, s._airUnitBanner = new h.AirUnitBadge(s._onClickAirUnitBadge), s._setPositions(), s.interactive = !0, s
            }
            return n(e, t), Object.defineProperty(e.prototype, "mst_id", {
                get: function () {
                    return this._mst_id
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t) {
                if (this._focus.visible = !1, this._airUnitBanner.visible = !1, null == t) this._enabled = !1, this._mst_id = 0, this._image.setTexture(this._getNoneTexture()), this._lock.initialize(1), this._lock.visible = !0;
                else {
                    this._mst_id = t.mst_id;
                    var e = r.MapUtil.toAreaID(this._mst_id),
                        i = r.MapUtil.toMapNo(this._mst_id);
                    if (this._image.setImage(e, i), 1 == t.isOpened()) {
                        if (this._enabled = !0, this._focus.texture = this._getFocusTexture(), this._lock.visible = !1, t.availableAirUnitCount > 0) {
                            var n = u.getType(this._mst_id);
                            this._airUnitBanner.initialize(n), this._airUnitBanner.update(t.availableAirUnitCount);
                            var o = u.getPosition(this._mst_id);
                            null != o ? this._airUnitBanner.position.set(o.x, o.y) : this._airUnitBanner.position.set(0, 0), this._airUnitBanner.visible = !0
                        }
                    } else this._enabled = !1, 65 == t.mst_id ? this._lock.initialize(3) : this._lock.initialize(0), this._lock.visible = !0
                }
                this._initClearBadge(t), this.updateGauge(t), this.addChild(this._image), this.addChild(this._focus), this.addChild(this._clear), this.addChild(this._lock), this.addChild(this._gauge), this.addChild(this._airUnitBanner)
            }, e.prototype.updateAirUnitEnabled = function (t) {
                this._airUnitBanner.enabled = t
            }, e.prototype.updateGauge = function (t) {
                if (null != t) {
                    if (t.gauge_max > 0) {
                        if (t.gauge_now <= 0) return
                    } else if (t.defeat_required <= 0) return;
                    if (0 != t.isOpened()) {
                        var e = t.area_id,
                            i = t.map_no,
                            n = t.getGaugeNum(),
                            r = s.GaugeSetModel.createKey(e, i, n),
                            a = o.default.resources.gauge.getGaugeInfo(r);
                        if (null != a)
                            if (this._gauge.initialize(a), this._gauge.x = a.x, this._gauge.y = a.y, this._gauge.tp_visible = 0 != t.getSelectedOperationType(), t.defeat_required > 0) {
                                var _ = t.defeat_required,
                                    l = _ - t.defeat_count;
                                this._gauge.update(l, _)
                            } else {
                                var l = t.gauge_now,
                                    _ = t.gauge_max;
                                this._gauge.update(l, _)
                            }
                    }
                }
            }, e.prototype._initClearBadge = function (t) {
                if (null == t || 0 == t.isOpened() || 0 == t.isCleared()) return void this._clear.hide();
                var e = t.getSelectedOperationType();
                this._clear.show(e)
            }, e.prototype._setPositions = function () {
                3 == this._type ? this._clear.position.set(930, 8) : 4 == this._type && this._clear.position.set(434, 8)
            }, e.prototype._getNoneTexture = function () {
                return 3 == this._type ? l.SALLY_SORTIE.getTexture(40) : 4 == this._type ? l.SALLY_SORTIE.getTexture(39) : PIXI.Texture.EMPTY
            }, e.prototype._getFocusTexture = function () {
                return 3 == this._type ? l.SALLY_SORTIE.getTexture(38) : 4 == this._type ? l.SALLY_SORTIE.getTexture(37) : PIXI.Texture.EMPTY
            }, e.prototype.activate = function () {
                0 == this.buttonMode && 1 == this._enabled && (this.buttonMode = !0, this.on(d.EventType.MOUSEOVER, this._onMouseOver), this.on(d.EventType.MOUSEOUT, this._onMouseOut), this.on(d.EventType.CLICK, this._onClick)), 1 == this._lock.visible && this._lock.activate()
            }, e.prototype.deactivate = function () {
                this.buttonMode = !1, this.off(d.EventType.MOUSEOVER, this._onMouseOver), this.off(d.EventType.MOUSEOUT, this._onMouseOut), this.off(d.EventType.CLICK, this._onClick), this._lock.deactivate()
            }, e.prototype.dispose = function () {
                this.interactive = !1, this.deactivate(), this._gauge.dispose(), this._airUnitBanner.dispose(), this._cb_onClick = null, this._cb_onClickAirUnitBadge = null
            }, e.prototype._createLock = function () {
                return new p.MapThumbnailLocked(this._type)
            }, e.prototype._update = function (t) {
                this._focus.visible = 1 == t
            }, e
        }(PIXI.Container);
    e.MapThumbnail = f
}