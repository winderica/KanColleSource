const function1232 = function (t, e, i) {
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
    var o = i(2), r = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._anim = function () {
                var t = n._scene.view.map.ship_icon;
                createjs.Tween.get(t).to({ alpha: 1 }, 300), createjs.Tween.get(t.scale).to({
                    x: 1,
                    y: 1
                }, 300).call(function () {
                    n._endTask()
                })
            }, n._scene = e, n._model = i, n
        }

        return n(e, t), e.prototype._start = function () {
            this._initialize()
        }, e.prototype._initialize = function () {
            var t = this._scene.view.map.ship_icon;
            t.alpha = 0, t.scale.set(1.7);
            var e = this._model.deck_f.type;
            t.initialize(e);
            var i = this._model.sortie.now_cell_no, n = this._scene.view.map.spotLayer.getSpot(i);
            t.position.set(n.x, n.y);
            var o = t.direction, r = this._scene.resInfo.getShipDirection(i);
            1 == r ? o = 1 : 2 == r && (o = 2), t.turn(o, this._anim, 0)
        }, e
    }(o.TaskBase);
    e.AnimShipInit = r
}