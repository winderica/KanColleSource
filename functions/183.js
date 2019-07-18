const function183 = function (t, e, i) {
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
        r = i(2),
        s = i(24),
        a = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                return o._scene = e, o._plane_f = i, o._plane_e = n, o
            }
            return n(e, t), e.prototype._start = function () {
                this._plane_f <= 0 && this._plane_e <= 0 ? this._endTask() : this._loadImage()
            }, e.prototype._loadImage = function () {
                var t = this,
                    e = this._scene.view.raderLayer,
                    i = new s.SlotLoader;
                if (this._plane_f > 0) {
                    o.default.model.slot.getMst(this._plane_f);
                    i.add(this._plane_f, "item_up"), e.rader_e.touch_plane.initialize(this._plane_f)
                }
                if (this._plane_e > 0) {
                    o.default.model.slot.getMst(this._plane_e);
                    i.add(this._plane_e, "item_up"), e.rader_f.touch_plane.initialize(this._plane_e)
                }
                i.load(function () {
                    t._show()
                })
            }, e.prototype._show = function () {
                var t = this._scene.view.raderLayer;
                t.rader_f.touch_plane.show(), t.rader_e.touch_plane.show(), this._endTask()
            }, e
        }(r.TaskBase);
    e.TaskShowTouchPlane = a
}