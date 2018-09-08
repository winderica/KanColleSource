const function196 = function (t, e, i) {
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
    var o = i(0), r = i(2), s = i(76), a = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i.floor_id = 0, i.wall_id = 0, i.window_id = 0, i.object_id = 0, i.desk_id = 0, i.chest_id = 0, i._animationFlag = !1, i._animationFlag = e, i
        }

        return n(e, t), e.prototype._start = function () {
            var t = this, e = !1, i = new s.FurnitureLoader;
            e = this._addLoader(i, this.floor_id) || e, e = this._addLoader(i, this.wall_id) || e, e = this._addLoader(i, this.window_id) || e, e = this._addLoader(i, this.object_id) || e, e = this._addLoader(i, this.desk_id) || e, e = this._addLoader(i, this.chest_id) || e, 1 == e ? i.load(function () {
                t._loadOutside()
            }) : this._loadOutside()
        }, e.prototype._loadOutside = function () {
            var t = this;
            o.default.view.portMain.furnitureLayer.outside.load(this.window_id, function () {
                t._onComplete()
            })
        }, e.prototype._onComplete = function () {
            var t = o.default.view.portMain.furnitureLayer,
                e = [this.floor_id, this.wall_id, this.window_id, this.object_id, this.desk_id, this.chest_id];
            t.updateAll(e), t.animationFlag = this._animationFlag, this._endTask()
        }, e.prototype._addLoader = function (t, e) {
            return e > 0 && (t.add(e, "normal"), !0)
        }, e
    }(r.TaskBase);
    e.FurnitureLoadTask = a
}