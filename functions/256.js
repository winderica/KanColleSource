const function256 = function (t, e, i) {
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
    var o = i(2), r = i(14), s = i(23), a = i(445), _ = i(446), u = function (t) {
        function e(e, i, n, o) {
            var r = t.call(this) || this;
            r._attacker = e, r._slot1 = i, r._slot2 = n, r._friend = r._attacker.friend, 1 == r._friend ? r._base_pos = new PIXI.Point(-162, -131) : r._base_pos = new PIXI.Point(435, -131), r._view = new a.CutinCanvas;
            var s = Math.floor(3 * Math.random());
            r._telop1 = new _.CutinTelop(s, o);
            var u = Math.floor(3 * Math.random());
            return r._telop2 = new _.CutinTelop(u, o), r._preload_task = new l(e, i, n), r
        }

        return n(e, t), Object.defineProperty(e.prototype, "view", {
            get: function () {
                return this._view
            }, enumerable: !0, configurable: !0
        }), e.prototype.getPreloadTask = function () {
            return this._preload_task
        }, e.prototype._endTask = function () {
            this._attacker = null, this._slot1 = null, this._slot2 = null, this._base_pos = null, null != this._view.parent && this._view.parent.removeChild(this._view), this._view = null, this._telop1 = null, this._telop2 = null, this._preload_task = null, t.prototype._endTask.call(this)
        }, e
    }(o.TaskBase);
    e.CutinDouble = u;
    var l = function (t) {
        function e(e, i, n) {
            var o = t.call(this) || this;
            return o._attacker = e, o._slot1 = i, o._slot2 = n, o
        }

        return n(e, t), e.prototype._start = function () {
            this._loadShipImage()
        }, e.prototype._loadShipImage = function () {
            var t = this, e = new r.ShipLoader;
            e.add(this._attacker.mst_id, this._attacker.isDamaged(), "full"), e.load(function () {
                t._loadSlotTextImage()
            })
        }, e.prototype._loadSlotTextImage = function () {
            var t = this;
            if (null == this._slot1 && null == this._slot2) this._endTask(); else {
                var e = new s.SlotLoader;
                null != this._slot1 && e.add(this._slot1.mstID, "btxt_flat"), null != this._slot2 && e.add(this._slot2.mstID, "btxt_flat"), e.load(function () {
                    t._endTask()
                })
            }
        }, e
    }(o.TaskBase)
}