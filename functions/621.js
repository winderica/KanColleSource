const function621 = function (t, e, i) {
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
    var o = i(0), r = i(305), s = i(4), a = i(75), _ = i(48), u = function (t) {
        function e(e, i) {
            return t.call(this, e, i) || this
        }

        return n(e, t), Object.defineProperty(e.prototype, "model", {
            get: function () {
                return this._model
            }, enumerable: !0, configurable: !0
        }), e.prototype._createContent = function () {
            var t = this, e = this.model.mst_id, i = this.model.name, n = new a.FurnitureLoader;
            n.add(e, "reward"), n.load(function () {
                var n = o.default.model.furniture.getData(e);
                if (null != n) {
                    var a = (n.type, o.default.resources.getFurniture(e, "reward"));
                    t._thumb = new r.FurnitureThumbnail(!0), t._thumb.position.set(-123, -187), t._thumb.initialize(), t._thumb.update(a), t._dialog.container.addChild(t._thumb), t._text = new s.TextBox(25, 16774898), t._text.text = i, t._text.x = -Math.round(t._text.width / 2), t._text.y = 124, t._dialog.container.addChild(t._text)
                }
                t._showDialog()
            })
        }, e.prototype._removeContent = function () {
            null != this._thumb && null != this._thumb.parent && this._thumb.parent.removeChild(this._thumb), this._thumb = null, null != this._text && null != this._text.parent && this._text.parent.removeChild(this._text), this._text = null
        }, e
    }(_.TaskRewardDialogBase);
    e.TaskRewardDialogFurniture = u
}