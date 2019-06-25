const function1253 = function (t, e, i) {
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
    var o = i(56),
        r = i(2),
        s = i(1254),
        a = function (t) {
            function e(e, i, n) {
                void 0 === n && (n = 0);
                var o = t.call(this) || this;
                return o._scene = e, o._model = i, o._delay = n, o
            }
            return n(e, t), e.prototype._start = function () {
                var t = this,
                    e = this._model.sortie.getNextCell().no,
                    i = this._scene.resInfo.getEnemyOption(e);
                null == i ? this._endTask() : this._delay <= 0 ? this._showEnemy(i.img, i.x, i.y) : createjs.Tween.get(null).wait(this._delay).call(function () {
                    t._showEnemy(i.img, i.x, i.y)
                })
            }, e.prototype._showEnemy = function (t, e, i) {
                var n, r = this,
                    a = this._model.sortie.area_id,
                    _ = this._model.sortie.map_no,
                    u = this._model.sortie.getNextCell().no,
                    l = this._model.sortie.map.getGaugeNum();
                if (42 == a && 3 == _ && 25 == u && 3 == l) n = new s.MapEnemy(PIXI.Texture.fromFrame("map04203_icon_E3boss_2"), 5), n.x = 130, n.y = 230;
                else {
                    var c = this._model.sortie.map_id,
                        h = o.MapUtil.toResKey(c);
                    n = new s.MapEnemy(PIXI.Texture.fromFrame("map" + h + "_" + t), 5), n.x = e, n.y = i
                }
                this._scene.view.map.enemy_layer.show(n, function () {
                    r._endTask()
                })
            }, e.prototype._endTask = function () {
                this._scene = null, this._model = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase);
    e.AnimShowMapEnemy = a
}