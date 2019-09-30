const function1123 = function (t, e, i) {
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
    var o = i(0),
        r = i(2),
        s = i(17),
        a = i(34),
        _ = i(167),
        l = i(130),
        u = i(106),
        c = i(158),
        h = i(200),
        p = i(6),
        d = i(403),
        f = i(1128),
        y = i(1130),
        m = i(1135),
        g = i(1139),
        v = i(1143),
        b = i(1147),
        w = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._layer = e, n._target = i, n
            }
            return n(e, t), Object.defineProperty(e.prototype, "result", {
                get: function () {
                    return null != this._api_result
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._start = function () {
                if (null == this._target) return void this._endTask();
                this._fade = new s.FadeBox(.6), this._fade.hide(0), this._startTask()
            }, e.prototype._startTask = function () {
                var t, e = this._target.mstID;
                if (10 == e || 11 == e || 12 == e) t = new f.TaskUseFurnitureBox(this._fade, this._target);
                else if (57 == e) t = new y.TaskUseMedal(this._fade, this._target);
                else if (60 == e) t = new m.TaskUsePresentBox(this._fade, this._target);
                else if (61 == e) t = new g.TaskUseKouMedal(this._fade, this._target);
                else if (62 == e) t = new v.TaskUseHishimochi(this._fade, this._target);
                else if (63 == e) {
                    var i = o.default.model.const.quest_max,
                        n = o.default.model.basic.getDutyExecutableCount();
                    n < i ? (p.SE.play("244"), t = new d.TaskUseNormalItem(this._fade, this._target)) : p.SE.play("248")
                } else 68 == e || 72 == e || (80 == e ? t = new b.TaskUseGiftBox(this._fade, this._target) : 85 == e || 86 == e || 87 == e || 88 == e || 89 == e || 90 == e || (t = new d.TaskUseNormalItem(this._fade, this._target)));
                null != t ? this._showFade(t) : this._endTask()
            }, e.prototype._showFade = function (t) {
                var e = this;
                this._layer.addChild(this._fade), this._fade.show(200, function () {
                    t.start(function () {
                        e._api_result = t.result, e._updateData()
                    })
                })
            }, e.prototype._updateData = function () {
                var t = this;
                if (null == this._api_result) return void this._hideFade();
                if (63 == this._target.mstID) {
                    var e = o.default.model.basic.getDutyExecutableCount();
                    o.default.model.basic.setDutyExcutableCount(e + 1)
                } else if (68 == this._target.mstID) {
                    var i = o.default.model.deck.get(1).getShipModel(0);
                    o.default.sound.voice.play(i.mstID.toString(), 26)
                }
                var n = new a.APIConnector;
                if (n.add(new u.UseItemAPI), this._api_result.hasMaterialReward() && n.add(new _.MaterialAPI), this._api_result.hasCoinReward() && n.add(new c.UserDataAPI), this._api_result.hasSlotitemReward()) {
                    var r = this._api_result.getSlotitemObjects();
                    o.default.model.slot.addMemData(r), n.add(new l.UnsetSlotAPI)
                }
                n.start(function () {
                    o.default.model.useItem.updateCount(), o.default.view.portMain.updateInfo(), t._showReward()
                })
            }, e.prototype._showReward = function () {
                var t = this;
                if (null == this._api_result) return void this._hideFade();
                var e = this._api_result.rewards;
                if (null == e || 0 == e.length) return void this._hideFade();
                var i = o.default.view.overLayer;
                new h.TaskReward(i, e).start(function () {
                    t._hideFade()
                })
            }, e.prototype._hideFade = function () {
                var t = this;
                this._fade.hide(150, function () {
                    t._layer.removeChild(t._fade), t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._layer = null, this._target = null, this._fade = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase);
    e.TaskUseItem = w
}