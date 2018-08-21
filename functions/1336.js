const function1336 = function (t, e, i) {
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
    var o = i(2), r = i(27), s = function (t) {
        function e(e, i, n, o, r, s) {
            var a = t.call(this) || this;
            return a._scene = e, a._data = i, a._ships_f = o, a._ships_e = r, a._hunshin_danmaku = s, a._damage_cutin = n, a
        }

        return n(e, t), e.prototype._start = function () {
            var t = this, e = this._ships_f, i = this._data.stage3_f,
                n = this._createParallel(e, i, this._hunshin_danmaku);
            e = this._ships_e, i = this._data.stage3_e;
            var o = this._createParallel(e, i, this._hunshin_danmaku);
            new r.ParallelTask(n, o).start(function () {
                t._endTask()
            })
        }, e.prototype._createParallel = function (t, e, i) {
            for (var n = new r.ParallelTask, o = 0, s = t; o < s.length; o++) {
                var _ = s[o];
                if (null != _) {
                    if (i.indexOf(_) >= 0) {
                        if (Math.floor(e.getDamage(_.index)) <= 0) continue
                    }
                    var u = new a(this._scene, _, e, this._damage_cutin);
                    n.add(u)
                }
            }
            return n
        }, e.prototype._endTask = function () {
            this._scene = null, this._data = null, this._ships_f = null, this._ships_e = null, this._damage_cutin = null, t.prototype._endTask.call(this)
        }, e
    }(o.TaskBase);
    e.TaskAirWarDamageNumber = s;
    var a = function (t) {
        function e(e, i, n, o) {
            var r = t.call(this) || this;
            return r._scene = e, r._ship = i, r._data = n, r._damage_cutin = o, r
        }

        return n(e, t), e.prototype._start = function () {
            var t = this, e = this._ship, i = this._data, n = e.index, o = e.friend, r = i.getRai(n),
                s = i.getBak(n), a = i.getDamage(n);
            if (r || s || a > 0) {
                1 == this._scene.data.model.isPractice() && (a = Math.min(a, e.hp_now - 1));
                var _ = i.getHitType(n), u = this._scene.view.bannerGroupLayer.getBanner(o, n);
                this._scene.view.layer_damage.showAtBanner(u, a, _, function () {
                    t._endTask()
                }), this._damage_cutin.causeDamage(e, a), u.updateHp(e.hp_now)
            } else this._endTask()
        }, e.prototype._endTask = function () {
            this._scene = null, this._ship = null, this._data = null, this._damage_cutin = null, t.prototype._endTask.call(this)
        }, e
    }(o.TaskBase);
    e.TaskAirWarDamageNumberOnce = a
}