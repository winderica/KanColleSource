const function1243 = function (t, e, i) {
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
        r = i(66),
        s = i(27),
        a = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n.TIME = 2e3, n._scene = e, n._model = i, n
            }
            return n(e, t), e.prototype._start = function () {
                this._initialize()
            }, e.prototype._initialize = function () {
                var t = this,
                    e = new s.ParallelTask,
                    i = new _(this._scene, this._model, this.TIME);
                e.add(i);
                var n = new l(this._scene, this._model, this.TIME);
                e.add(n), e.start(function () {
                    t._setCellColor()
                })
            }, e.prototype._setCellColor = function () {
                var t = this._model.sortie.getNextCell().no,
                    e = this._scene.view.map.spotLayer.getSpot(t);
                if (null != e) {
                    e.showLine();
                    for (var i = this._scene.resInfo.getSameSpotData(t), n = 0; n < i.length; n++) {
                        var o = i[n].no;
                        if (0 == n) {
                            var r = this._model.sortie.getCellInfo(o);
                            this._scene.view.map.spotLayer.getSpot(o).setColor(r.color)
                        } else {
                            this._scene.view.map.spotLayer.getSpot(o).setColor(0)
                        }
                    }
                }
                this._endTask()
            }, e
        }(o.TaskBase);
    e.AnimShipMove = a;
    var _ = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                return o._scene = e, o._model = i, o._time = n, o
            }
            return n(e, t), e.prototype._start = function () {
                var t, e = this,
                    i = this._scene.view.map,
                    n = i.ship_icon,
                    o = this._model.sortie.now_cell_no,
                    s = (i.spotLayer.getSpot(o), this._model.sortie.getNextCell().no),
                    a = i.spotLayer.getSpot(s),
                    _ = this._scene.resInfo.getControlPoint(s);
                if (null == _) t = createjs.Tween.get(n), t.to({
                    x: a.x,
                    y: a.y
                }, this._time);
                else {
                    var l = new PIXI.Point(n.x, n.y),
                        u = new PIXI.Point(a.x, a.y),
                        c = r.TweenUtil.create2BezierPoints(l, _, u, this._time);
                    t = createjs.Tween.get(n);
                    for (var h = 0, p = c; h < p.length; h++) {
                        var d = p[h];
                        t.to({
                            x: d.x,
                            y: d.y
                        }, d.t)
                    }
                }
                t.call(function () {
                    e._endTask()
                })
            }, e
        }(o.TaskBase),
        l = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                return o._scene = e, o._model = i, o._time = n, o
            }
            return n(e, t), e.prototype._start = function () {
                var t = this,
                    e = this._model.sortie.getNextCell().no,
                    i = this._scene.resInfo.getAirRaidOption(e);
                if (null == i) this._endTask();
                else {
                    this._scene.view.map.plane_layer.show(e, i, 2e3, function () {
                        t._endTask()
                    })
                }
            }, e
        }(o.TaskBase)
}