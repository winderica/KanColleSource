const function628 = function (t, e, i) {
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
    var o = i(0), r = i(65), s = i(48), a = function (t) {
        function e(e, i) {
            return t.call(this, e, i) || this
        }

        return n(e, t), Object.defineProperty(e.prototype, "model", {
            get: function () {
                return this._model
            }, enumerable: !0, configurable: !0
        }), e.prototype._createContent = function () {
            var t = this, e = this.model.mst_id, i = new r.UseitemLoader;
            i.add(e, 1), i.load(function () {
                var i = o.default.resources.getUseitem(e, 1);
                t._card = new PIXI.Sprite(i), t._card.x = -Math.round(t._card.width / 2), t._card.y = -Math.round(t._card.height / 2), t._dialog.container.addChild(t._card), t._showDialog()
            })
        }, e.prototype._removeContent = function () {
            this._dialog.container.removeChild(this._card), this._card = null
        }, e
    }(s.TaskRewardDialogBase);
    e.TaskRewardDialogUseitem = a
}