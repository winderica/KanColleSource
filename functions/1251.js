const function1251 = function (t, e, i) {
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
        s = i(1252),
        a = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._scene = e, n._model = i, n
            }
            return n(e, t), e.prototype._start = function () {
                this._loadResources()
            }, e.prototype._loadResources = function () {
                var t = this;
                (new s.TaskLoadResourcesMap).start(function () {
                    t._showViewMain()
                })
            }, e.prototype._showViewMain = function () {
                var t = this;
                this._scene.view.bg.setDay(function () {
                    t._initialize()
                })
            }, e.prototype._initialize = function () {
                this._scene.view.initialize();
                var t = this._model.sortie.area_id,
                    e = this._model.sortie.map_id,
                    i = o.default.model.map.getMapMst(e.toString()).name;
                this._scene.view.upper.update(t, i), this._endTask()
            }, e
        }(r.TaskBase);
    e.TaskInitPre = a
}