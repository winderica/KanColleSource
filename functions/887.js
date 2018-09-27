const function887 = function (t, e, i) {
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
    var o = i(5), r = i(0), s = i(14), a = i(346), _ = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._stype_name = "", e._ship_name = "", e
        }

        return n(e, t), e.prototype.preloadFromMst = function (t, e) {
            var i = r.default.model.ship_graph.get(t.mstID).getCenterOffset(!1);
            this.preload(t.mstID, t.name, t.shipTypeName, t.message_text, t.rarity, i, e)
        }, e.prototype.preload = function (t, e, i, n, a, _, u) {
            var l = this;
            this._mst_id = t, this._ship_name = e, this._stype_name = i, this._message = n, (new s.ShipLoader).add(t, !1, "full").load(function () {
                l._target.texture = r.default.resources.getShip(t, !1, "full"), l._target.x = o.default.width / 2 - 379 + _.x, l._target.y = o.default.height / 2 - 418 + _.y, l._rarityBG.initiailzeForShip(a, function () {
                    l._messageBox.initializeForShip(l._stype_name, l._ship_name, l._message), null != u && u()
                })
            })
        }, e.prototype._03_waitClick = function () {
            r.default.sound.voice.play(this._mst_id.toString(), 1), t.prototype._03_waitClick.call(this)
        }, e
    }(a.RewardAnimation);
    e.RewardAnimationShip = _
}