const function985 = function (t, e, i) {
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
        r = i(17),
        s = i(986),
        a = i(987),
        _ = i(988),
        l = i(993),
        u = i(994),
        c = i(1e3),
        h = i(1),
        p = function (t) {
            function e(e, i, n, o) {
                var r = t.call(this) || this;
                return r._onSelect = function (t, e) {
                    r._cb_select(t, e)
                }, r._onSelectAirUnit = function () {
                    null != r._cb_onSelectAirUnit && r._cb_onSelectAirUnit()
                }, r._cb_select = e, r._cb_onSelectAirUnit = i, r._cb_back = n, r._cb_next = o, r._back_btn = new s.BtnBack, r._next_btn = new a.BtnNext, r
            }
            return n(e, t), Object.defineProperty(e.prototype, "content", {
                get: function () {
                    return this._content
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function () {
                this._back_btn.on(h.EventType.CLICK, this._cb_back), this._next_btn.on(h.EventType.CLICK, this._cb_next), this.addChild(this._back_btn), this.addChild(this._next_btn)
            }, e.prototype.update = function (t, e, i) {
                var n = o.default.model.map.getMapMems(t);
                t == r.EVENT_AREA_ID ? this._updateEventArea(t, e, n) : this._updateNormalArea(t, e, n), this._content.updateAirUnitEnabled(i)
            }, e.prototype.deactivate = function () {
                this._content.deactivate()
            }, e.prototype.dispose = function () {
                this._back_btn.off(h.EventType.CLICK, this._cb_back), this._next_btn.off(h.EventType.CLICK, this._cb_next), this._back_btn.dispose(), this._next_btn.dispose(), this._cb_select = null, this._cb_back = null, this._cb_next = null, this._removePreContent(), this.removeChildren(), this._back_btn = null, this._next_btn = null
            }, e.prototype._updateNormalArea = function (t, e, i) {
                this._removePreContent(), this._content = 0 == e ? new l.LayoutMap4(e, this._onSelect, this._onSelectAirUnit) : new _.LayoutMap3(e, this._onSelect, this._onSelectAirUnit), this._content.initialize(i), this.addChildAt(this._content, 0), this._content.activate(), this._updateBackBtn(), this._updateNextBtn(t, e, i)
            }, e.prototype._updateEventArea = function (t, e, i) {
                this._removePreContent(), this._content = e >= 3 ? new u.LayoutEventMap1(e, this._onSelect, this._onSelectAirUnit) : new c.LayoutEventMap3(e, this._onSelect, this._onSelectAirUnit), this._content.initialize(i), this.addChildAt(this._content, 0), this._content.activate(), this._updateBackBtn(!0), this._updateNextBtn(t, e, i)
            }, e.prototype._removePreContent = function () {
                null != this._content && (this._content.deactivate(), this.removeChild(this._content), this._content.dispose(), this._content = null)
            }, e.prototype._updateBackBtn = function (t) {
                void 0 === t && (t = !1), this._content.offset > 0 ? (this._back_btn.update(t), this._back_btn.show()) : this._back_btn.hide()
            }, e.prototype._updateNextBtn = function (t, e, i) {
                var n = !1,
                    o = this._content.offset + this._content.num;
                if (o < i.length) {
                    var r = i[o];
                    if (1 == r.isOpened()) n = !0;
                    else if (65 == r.mst_id) {
                        var s = i[o - 1];
                        1 == s.isCleared() && (n = !0)
                    }
                }
                1 == n ? (this._next_btn.update(t, e), this._next_btn.show()) : this._next_btn.hide()
            }, e
        }(PIXI.Container);
    e.ContainerLayout = p
}