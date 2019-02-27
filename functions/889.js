const function889 = function (t, e, i) {
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
    var o = i(5),
        r = i(0),
        s = i(14),
        a = i(344),
        _ = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._stype_name = "", e._ship_name = "", e
            }
            return n(e, t), e.prototype.preloadFromMst = function (t, e) {
                var i = r.default.model.ship_graph.get(t.mstID).getCenterOffset(!1);
                this.preload(t.mstID, t.name, t.shipTypeName, t.message_text, t.rarity, i, e)
            }, e.prototype.preload = function (t, e, i, n, a, _, l) {
                var u = this;
                this._mst_id = t, this._ship_name = e, this._stype_name = i, this._message = n, (new s.ShipLoader).add(t, !1, "full").load(function () {
                    u._target.texture = r.default.resources.getShip(t, !1, "full"), u._target.x = o.default.width / 2 - 379 + _.x, u._target.y = o.default.height / 2 - 418 + _.y, u._rarityBG.initiailzeForShip(a, function () {
                        u._messageBox.initializeForShip(u._stype_name, u._ship_name, u._message), null != l && l()
                    })
                })
            }, e.prototype._03_waitClick = function () {
                r.default.sound.voice.play(this._mst_id.toString(), 1), t.prototype._03_waitClick.call(this)
            }, e
        }(a.RewardAnimation);
    e.RewardAnimationShip = _
}