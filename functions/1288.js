const function1288 = function (t, e, i) {
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
    var o = i(6),
        r = i(1289),
        s = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._onClick = function (t) {
                    n._selected_spot_no.length >= 2 || (o.SE.play("224"), n._selected_spot_no.push(t), n._cb_onChange())
                }, n._onDoubleClick = function (t) {
                    var e = n._selected_spot_no.lastIndexOf(t); - 1 != e && (n._selected_spot_no.splice(e, 1), n._cb_onChange())
                }, n._selected_spot_no = e, n._cb_onChange = i, n._points = {}, n
            }
            return n(e, t), e.prototype.initialize = function (t, e, i) {
                this._clear(), e = this._dedupeCells(e);
                for (var n = 0, o = e; n < o.length; n++) {
                    var s = o[n],
                        a = s.no,
                        _ = i.getCellInfo(a);
                    if (!(_.distance <= 0)) {
                        var l = new r.AirUnitAppointmentPoint(this._onClick, this._onDoubleClick);
                        l.initialize(a, _, t), l.x = s.x + s.point.x, l.y = s.y + s.point.y, this.addChild(l), this._points[a] = l
                    }
                }
            }, e.prototype.update = function () {
                var t = this._selected_spot_no.length > 0 ? this._selected_spot_no[0] : -1,
                    e = this._selected_spot_no.length > 1 ? this._selected_spot_no[1] : -1;
                for (var i in this._points) {
                    var n = this._points[i];
                    n.no == e ? t == e ? n.update(3) : n.update(2) : n.no == t ? n.update(1) : n.update(0)
                }
            }, e.prototype.dispose = function () {
                this._clear(), this._selected_spot_no = null, this._points = null, this._cb_onChange = null
            }, e.prototype._clear = function () {
                for (var t in this._points) this._points[t].dispose();
                this.removeChildren(), this._points = []
            }, e.prototype._dedupeCells = function (t) {
                for (var e = [], i = t.concat(); i.length > 0;) {
                    for (var n = i.shift(), o = !1, r = 0, s = e; r < s.length; r++) {
                        var a = s[r],
                            _ = n.x - a.x,
                            l = n.y - a.y;
                        if (Math.sqrt(_ * _ + l * l) <= 10) {
                            o = !0;
                            break
                        }
                    }
                    0 == o && e.push(n)
                }
                return e
            }, e
        }(PIXI.Container);
    e.AirUnitAppointmentLayer = s
}