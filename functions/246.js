const function246 = function (t, e, i) {
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
        r = i(80),
        s = i(13),
        a = i(23),
        _ = i(69),
        u = i(15),
        l = i(2),
        c = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._task = new o.SerialTask, e
            }
            return n(e, t), e.prototype.addShip = function (t) {
                this._task.add(new h(t))
            }, e.prototype.addShipUI5 = function (t) {
                this._task.add(new p(t))
            }, e.prototype.addSlotitem = function (t) {
                this._task.add(new d(t))
            }, e.prototype.addUseitem = function (t) {
                this._task.add(new f(t))
            }, e.prototype.addFurniture = function (t) {
                this._task.add(new y(t))
            }, e.prototype._start = function () {
                var t = this,
                    e = new u.UIImageLoader("common");
                e.add("common_selectable_reward.json"), e.load(function () {
                    t._task.start(function () {
                        t._endTask()
                    })
                })
            }, e
        }(l.TaskBase);
    e.TaskLoadResources = c;
    var h = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._mst_id = e, i
            }
            return n(e, t), e.prototype._start = function () {
                var t = this,
                    e = new s.ShipLoader;
                e.add(this._mst_id, !1, "card_round"), e.add(this._mst_id, !1, "icon_box"), e.load(function () {
                    t._endTask()
                })
            }, e
        }(l.TaskBase),
        p = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._mst_id = e, i
            }
            return n(e, t), e.prototype._start = function () {
                var t = this,
                    e = new s.ShipLoader;
                e.add(this._mst_id, !1, "reward_card"), e.add(this._mst_id, !1, "reward_icon"), e.load(function () {
                    t._endTask()
                })
            }, e
        }(l.TaskBase),
        d = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._mst_id = e, i
            }
            return n(e, t), e.prototype._start = function () {
                var t = this,
                    e = new a.SlotLoader;
                e.add(this._mst_id, "card"), e.load(function () {
                    t._endTask()
                })
            }, e
        }(l.TaskBase),
        f = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._mst_id = e, i
            }
            return n(e, t), e.prototype._start = function () {
                var t = this,
                    e = new _.UseitemLoader;
                e.add(this._mst_id, 1), e.add(this._mst_id, 2), e.load(function () {
                    t._endTask()
                })
            }, e
        }(l.TaskBase),
        y = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._mst_id = e, i
            }
            return n(e, t), e.prototype._start = function () {
                var t = this,
                    e = new r.FurnitureLoader;
                e.add(this._mst_id, "reward"), e.load(function () {
                    t._endTask()
                })
            }, e
        }(l.TaskBase)
}