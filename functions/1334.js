const function1334 = function (t, e, i) {
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
        r = i(13),
        s = i(443),
        a = i(1335),
        _ = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                return o._onTaihi = function () {
                    o._view.deactivate();
                    var t = o._model.map_info.area_id,
                        e = o._model.map_info.map_no,
                        i = o._model.map_info.cell_no;
                    new s.GobackPortAPI(t, e, i, o._target.mem_id, -1).start(function () {
                        o._target.initializeTaihi(!0), o._hideView()
                    })
                }, o._onTaihiSezu = function () {
                    o._view.deactivate(), o._hideView()
                }, o._scene = e, o._model = i, o._target = n, o
            }
            return n(e, t), e.prototype._start = function () {
                this._loadShipResources()
            }, e.prototype._loadShipResources = function () {
                var t = this,
                    e = new r.ShipLoader;
                e.add(this._target.mst_id, this._target.isDamaged(), "banner"), e.load(function () {
                    t._show()
                })
            }, e.prototype._show = function () {
                this._view = new a.EscapeTankanView(this._onTaihi, this._onTaihiSezu), this._view.initialize();
                var t = this._target;
                this._view.updateTargetShipBanner(t.mst_id, t.level, t.isMarriage(), t.hp_now, t.hp_max), this._view.activate(), this._view.alpha = 0, this._scene.addChild(this._view), createjs.Tween.get(this._view).to({
                    alpha: 1
                }, 300)
            }, e.prototype._hideView = function () {
                var t = this;
                createjs.Tween.get(this._view).to({
                    alpha: 0
                }, 300).call(function () {
                    t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._scene.removeChild(this._view), this._scene = null, this._model = null, this._target = null, this._view.dispose(), this._view = null, t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase);
    e.EscapeTankanTask = _
}