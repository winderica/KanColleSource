const function82 = function (t, e, i) {
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
    var o = i(0), r = i(262), s = i(143), a = i(24), _ = function (t) {
        function e(e, i, n) {
            var s = t.call(this, i) || this;
            if (s.LOG = !1, s._mst_id = 0, s._onLoadComplete = function () {
                if (1 != s._aborted) if (null == s._sprite) s._endTask(); else {
                    var t = o.default.resources.getSlotitem(s._mst_id, s._type);
                    s._sprite.texture = t, s._endTask()
                }
            }, s._type = e, n instanceof r.SlotitemModel) {
                var a = n;
                s._mst_id = a.mstID
            } else s._mst_id = n;
            return s
        }

        return n(e, t), e.prototype.start = function () {
            t.prototype.start.call(this)
        }, e.prototype._start = function () {
            this._mst_id > 0 ? this._load() : this._endTask()
        }, e.prototype._load = function () {
            var t = new a.SlotLoader;
            t.add(this._mst_id, this._type), t.load(this._onLoadComplete)
        }, e.prototype._log = function (t) {
            if (this.LOG) {
                o.default.model.slot.getMst(this._mst_id)
            }
        }, e
    }(s.TaskLoadBase);
    e.TaskLoadSlotResource = _
}