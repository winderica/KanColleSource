const function1239 = function (t, e, i) {
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
    var o = i(74), r = i(2), s = i(1240), a = function (t) {
        function e(e, i, n) {
            void 0 === n && (n = 0);
            var o = t.call(this) || this;
            return o._scene = e, o._model = i, o._delay = n, o
        }

        return n(e, t), e.prototype._start = function () {
            var t = this, e = this._model.sortie.getNextCell().no, i = this._scene.resInfo.getEnemyOption(e);
            null == i ? this._endTask() : this._delay <= 0 ? this._showEnemy(i.img, i.x, i.y) : createjs.Tween.get(null).wait(this._delay).call(function () {
                t._showEnemy(i.img, i.x, i.y)
            })
        }, e.prototype._showEnemy = function (t, e, i) {
            var n = this, r = this._model.sortie.map_id, a = o.MapUtil.toResKey(r),
                _ = PIXI.Texture.fromFrame("map" + a + "_" + t), u = new s.MapEnemy(_, 5);
            u.x = e, u.y = i, this._scene.view.map.enemy_layer.show(u, function () {
                n._endTask()
            })
        }, e.prototype._endTask = function () {
            this._scene = null, this._model = null, t.prototype._endTask.call(this)
        }, e
    }(r.TaskBase);
    e.AnimShowMapEnemy = a
}