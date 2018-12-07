const function1464 = function (t, e, i) {
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
    var o = i(0), r = i(2), s = i(27), a = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._scene = e, i
        }

        return n(e, t), e.prototype._start = function () {
            var t = this, e = new s.ParallelTask;
            e.add(new _(this._scene)), e.add(new l(this._scene)), e.add(new u(this._scene)), e.start(function () {
                t._endTask()
            })
        }, e.prototype._endTask = function () {
            this._scene = null, t.prototype._endTask.call(this)
        }, e
    }(r.TaskBase);
    e.TaskShowExtraResults = a;
    var _ = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._scene = e, i
        }

        return n(e, t), e.prototype._start = function () {
            var t = this, e = this._scene.data.extra_war_results;
            if (e > 0) {
                var i = this._scene.view.panel_exp.extra_result.extra_war_result;
                i.update(e), i.alpha = 0, i.visible = !0, createjs.Tween.get(i).to({ alpha: 1 }, 300).call(function () {
                    t._endTask()
                })
            } else this._endTask()
        }, e.prototype._endTask = function () {
            this._scene = null, t.prototype._endTask.call(this)
        }, e
    }(r.TaskBase), l = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._scene = e, i
        }

        return n(e, t), e.prototype._start = function () {
            var t = this, e = this._scene.data.extra_useitem_mst_id;
            if (e > 0) {
                var i = o.default.resources.getUseitem(e, 0),
                    n = this._scene.view.panel_exp.extra_result.useitem_icon;
                n.texture = i, n.alpha = 0, n.visible = !0, createjs.Tween.get(n).to({ alpha: 1 }, 300).call(function () {
                    t._endTask()
                })
            } else this._endTask()
        }, e.prototype._endTask = function () {
            this._scene = null, t.prototype._endTask.call(this)
        }, e
    }(r.TaskBase), u = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._scene = e, i
        }

        return n(e, t), e.prototype._start = function () {
            var t = this;
            if (1 == this._scene.data.extra_result) {
                var e = this._scene.view.panel_exp.extra_result.map_incentive;
                e.alpha = 0, e.visible = !0, createjs.Tween.get(e).to({ alpha: 1 }, 300).call(function () {
                    t._endTask()
                })
            } else this._endTask()
        }, e.prototype._endTask = function () {
            this._scene = null, t.prototype._endTask.call(this)
        }, e
    }(r.TaskBase)
}