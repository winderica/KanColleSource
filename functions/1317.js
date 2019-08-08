const function1317 = function (t, e, i) {
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
        r = i(1318),
        s = i(1320),
        a = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._scene = e, n._model = i, n
            }
            return n(e, t), e.prototype._start = function () {
                var t = this;
                if (this._scene.model.sortie.getNextCell().isDeadEnd()) return void this._endTask();
                var e = this._model.escape,
                    i = e.getTargetShipIndexes(),
                    n = e.getTowingShipIndexes(),
                    o = null;
                if (i.length > 0) {
                    var a = i[0];
                    o = this._model.deck_f.ships[a]
                }
                var _ = null;
                if (n.length > 0) {
                    var u = n[0];
                    _ = this._model.deck_f.ships[u]
                }
                if (null != o)
                    if (null != _) {
                        var l = new s.EscapeGoeiTask(this._scene, this._model, o, _);
                        l.start(function () {
                            t._endTask()
                        })
                    } else {
                        var l = new r.EscapeTankanTask(this._scene, this._model, o);
                        l.start(function () {
                            t._endTask()
                        })
                    }
                else this._endTask()
            }, e.prototype._endTask = function () {
                this._scene = null, this._model = null, t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase);
    e.EscapeTask = a
}