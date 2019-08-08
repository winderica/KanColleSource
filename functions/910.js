const function910 = function (t, e, i) {
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
        s = i(24),
        a = i(346),
        _ = function (t) {
            function e() {
                return t.call(this) || this
            }
            return n(e, t), e.prototype.preload = function (t, e, i, n) {
                var a = this;
                this._mst_id = t, this._message = e, (new s.SlotLoader).add(t, "card").load(function () {
                    a._target.texture = r.default.resources.getSlotitem(t, "card"), a._target.x = o.default.width / 2 - a._target.width / 2, a._target.y = 67, a._rarityBG.initiailzeForSlotitem(i, function () {
                        a._messageBox.initialize(a._message), null != n && n()
                    })
                })
            }, e
        }(a.RewardAnimation);
    e.RewardAnimationSlot = _
}