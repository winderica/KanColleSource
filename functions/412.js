const function412 = function (t, e, i) {
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
    var o = i(0), r = i(2), s = i(1172), a = i(1173), _ = i(413), u = i(413), l = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._result = null, n._onSelect = function (t) {
                var e = PIXI.Texture.EMPTY;
                if (11 == t.type) e = o.default.resources.getShip(t.mst_id, !1, "icon_box"); else if (12 == t.type) e = o.default.resources.getSlotitem(t.mst_id, "card"); else if (13 == t.type) e = o.default.resources.getUseitem(t.mst_id, 2); else if (14 == t.type) {
                    e = o.default.resources.getFurniture(t.mst_id, "reward");
                    var i = o.default.model.furniture.getData(t.mst_id);
                    if (null == i || 1 == i.has()) return void n._dialog.showAlert(t)
                }
                var r = new a.TaskRewardSelectConfirm(n._layer, e);
                r.start(function () {
                    1 == r.result && (n._layer.removeChild(n._dialog), n._result = t, n._endTask())
                })
            }, n._layer = e, n._candidates = i, n
        }

        return n(e, t), Object.defineProperty(e.prototype, "result", {
            get: function () {
                return this._result
            }, enumerable: !0, configurable: !0
        }), e.prototype._start = function () {
            this._loadResources()
        }, e.prototype._loadResources = function () {
            for (var t = this, e = new s.TaskLoadResources, i = 0, n = this._candidates; i < n.length; i++) {
                var o = n[i];
                11 == o.type ? e.addShip(o.mst_id) : 12 == o.type ? e.addSlotitem(o.mst_id) : 13 == o.type ? e.addUseitem(o.mst_id) : 14 == o.type && e.addFurniture(o.mst_id)
            }
            e.start(function () {
                3 == t._candidates.length ? (t._dialog = new u.RewardSelectDialog3, t._dialog.position.set(195, 164)) : (t._dialog = new _.RewardSelectDialog2, t._dialog.position.set(297, 164)), t._dialog.initialize(t._candidates, t._onSelect), t._layer.addChild(t._dialog), t._dialog.activate()
            })
        }, e.prototype._endTask = function () {
            this._layer = null, this._candidates = null, this._dialog = null, t.prototype._endTask.call(this)
        }, e
    }(r.TaskBase);
    e.TaskRewardSelect = l
}