const function1393 = function (t, e, i) {
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
    var o = i(2),
        r = i(17),
        s = i(27),
        a = i(6),
        _ = i(1394),
        l = i(1396),
        u = function (t) {
            function e(e, i, n, o) {
                var r = t.call(this) || this;
                return r._layer = e, r._banner_f = i, r._banner_e = n, r._search_light_task = o, r
            }
            return n(e, t), e.prototype._start = function () {
                var t = this,
                    e = this._banner_f,
                    i = this._banner_e;
                1 == (null != e || null != i) ? this._effectWithFlare(e, i) : null == this._search_light_task ? this._preEndTask() : this._search_light_task.start(function () {
                    t._search_light_task = null, t._preEndTask()
                })
            }, e.prototype._effectWithFlare = function (t, e) {
                var i = this,
                    n = new s.ParallelTask;
                n.add(new _.TaskBannerFlareFire(t)), n.add(new _.TaskBannerFlareFire(e)), n.start(function () {
                    createjs.Tween.get(null).wait(1170).call(function () {
                        i._flareAnimation(t, e)
                    }), null != i._search_light_task && createjs.Tween.get(null).wait(3200).call(function () {
                        i._search_light_task.start(function () {
                            i._search_light_task = null, i._preEndTask()
                        })
                    })
                })
            }, e.prototype._flareAnimation = function (t, e) {
                var i = this;
                this._flare_light_task = new s.ParallelTask;
                var n = this._layer;
                this._flare_light_task.add(new c(n));
                var o;
                null != t && (o = new PIXI.Point(855, 255), this._flare_light_task.add(new l.TaskFlareAnimation(n, o))), null != e && (o = new PIXI.Point(345, 150), this._flare_light_task.add(new l.TaskFlareAnimation(n, o))), this._flare_light_task.start(function () {
                    i._flare_light_task = null, i._preEndTask()
                })
            }, e.prototype._preEndTask = function () {
                null == this._search_light_task && null == this._flare_light_task && this._endTask()
            }, e.prototype._endTask = function () {
                this._layer = null, this._banner_f = null, this._banner_e = null, this._search_light_task = null, t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase);
    e.TaskFlareEffect = u;
    var c = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._layer = e, i
        }
        return n(e, t), e.prototype._start = function () {
            var t = this,
                e = new r.FadeBox(.5, 16777215);
            e.hide(0), this._layer.addChild(e), a.SE.play("120"), e.show(170, function () {
                e.hide(170, function () {
                    t._layer.removeChild(e), t._endTask()
                })
            })
        }, e
    }(o.TaskBase)
}