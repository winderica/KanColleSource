const function1030 = function (t, e, i) {
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
    var o = i(0), r = i(18), s = i(376), a = i(1031), _ = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i._icons = new Array;
            for (var n = [0, 62, 124, 248, 310, 372, 186], o = 0; o < n.length; o++) {
                var _ = new s.ExpeditionAreaIconBtn(o + 1, e);
                _.position.x = n[o], _.position.y = 0, i._icons.push(_)
            }
            return i._icon_event = new a.ExpeditionEventAreaIconBtn(r.EVENT_AREA_ID, e), i._icon_event.position.set(559, -9), i
        }

        return n(e, t), Object.defineProperty(e.prototype, "selected", {
            get: function () {
                for (var t = 0, e = this._icons; t < e.length; t++) {
                    var i = e[t];
                    if (1 == i.selected) return i.area_id
                }
                return 1 == this._icon_event.selected ? this._icon_event.area_id : 0
            }, set: function (t) {
                for (var e = 0, i = this._icons; e < i.length; e++) {
                    var n = i[e];
                    n.selected = t == n.area_id
                }
                this._icon_event.selected = t == this._icon_event.area_id
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function () {
            for (var t = 0, e = this._icons; t < e.length; t++) {
                var i = e[t];
                i.initialize()
            }
            this.selected = 1;
            for (var n = 0, s = this._icons; n < s.length; n++) {
                var i = s[n];
                this.addChild(i)
            }
            if (r.EVENT_AREA_ID > 0) {
                null != o.default.model.map.getArea(r.EVENT_AREA_ID) && (this._icon_event.initialize(), this.addChild(this._icon_event))
            }
        }, e.prototype.activate = function () {
            for (var t = 0, e = this._icons; t < e.length; t++) {
                var i = e[t];
                1 == i.selected ? i.deactivate() : i.activate()
            }
            1 == this._icon_event.selected ? this._icon_event.deactivate() : this._icon_event.activate()
        }, e.prototype.deactivate = function () {
            for (var t = 0, e = this._icons; t < e.length; t++) {
                e[t].deactivate()
            }
            this._icon_event.deactivate()
        }, e.prototype.dispose = function () {
            for (var t = 0, e = this._icons; t < e.length; t++) {
                e[t].dispose()
            }
            this._icon_event.dispose()
        }, e.prototype.getSelectedIcon = function () {
            for (var t = 0, e = this._icons; t < e.length; t++) {
                var i = e[t];
                if (1 == i.selected) return i
            }
            return 1 == this._icon_event.selected ? this._icon_event : null
        }, e
    }(PIXI.Container);
    e.ExpeditionAreaIconSet = _
}