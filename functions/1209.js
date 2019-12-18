const function1209 = function (t, e, i) {
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
        s = i(34),
        a = i(380),
        _ = i(169),
        l = i(131),
        u = i(106),
        c = i(160),
        h = i(1210),
        p = i(212),
        d = i(130),
        f = i(8),
        y = i(201),
        m = i(6),
        g = i(418),
        v = i(419),
        b = i(175),
        w = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                return o._layer = e, o._model = i, o._holder = n, o
            }
            return n(e, t), e.prototype._start = function () {
                var t = this,
                    e = this._model.getRewardCandidates();
                if (null != e && e.length > 0) {
                    this._click_guard = new f.AreaBox(.2), this._layer.addChild(this._click_guard);
                    var i = new v.TaskRewardSelectMulti(this._layer, e);
                    i.start(function () {
                        var e = i.result;
                        t._receiveReward(e)
                    })
                } else this._click_guard = new f.AreaBox(0), this._layer.addChild(this._click_guard), this._receiveReward(null)
            }, e.prototype._receiveReward = function (t) {
                var e, i = this;
                m.SE.play("215"), this._model.hasVoiceID && o.default.sound.voice.play("9999", this._model.voiceID, null, "duty");
                var n = this._model.id,
                    r = [];
                if (null != t)
                    for (var s = 0, a = t; s < a.length; s++) {
                        var e = a[s];
                        null != e && r.push(e.no)
                    }
                var _ = new g.DutyEndAPI(n, r),
                    l = _.result;
                _.start(function () {
                    i._showRewardDialog(l)
                })
            }, e.prototype._showRewardDialog = function (t) {
                var e = this,
                    i = o.default.view.overLayer,
                    n = t.getRewardList();
                new y.TaskReward(i, n, this._model.id).start(function () {
                    e._updateInternalData(t)
                })
            }, e.prototype._updateInternalData = function (t) {
                var e = this,
                    i = new s.APIConnector;
                if (i.add(new _.MaterialAPI), 653 == this._model.id) {
                    var n = o.default.model.useItem.get(44);
                    n.__setCount__(n.count - 6e3)
                }
                1 == t.isNeedUpdateUserBasic() && i.add(new c.UserDataAPI), 1 != t.isNeedUpdateSlotitem() && 318 != this._model.id && 513 != this._model.id || i.add(new d.UserSlotItemAPI), 1 == t.isNeedUpdateSlotitem() && i.add(new l.UnsetSlotAPI);
                var r = [511, 513, 620, 621, 688, 689, 690, 695, 696];
                if ((1 == t.isNeedUpdateUseitem() || r.indexOf(this._model.id) >= 0) && i.add(new u.UseItemAPI), t.getRewards(2).length > 0 && i.add(new a.DeckAPI), t.getRewards(11).length > 0) i.add(new p.UserShipAPI);
                else if (318 == this._model.id || 513 == this._model.id) {
                    var f = o.default.model.deck.get(1).getShipList()[0].memID;
                    i.add(new p.UserShipAPI(f))
                }
                t.getRewards(14).length > 0 && i.add(new h.UserFurnitureAPI), i.start(function () {
                    var i = t.getRewards(6);
                    if (i.length > 0)
                        for (var n = 0; n < i.length; n++) {
                            var r = i[n],
                                s = r.flag,
                                a = [o.default.model.basic.getExtraSupplySortie() ? 1 : 0, o.default.model.basic.getExtraSupplyExpedition() ? 1 : 0];
                            1 == s ? a[0] = 1 : 2 == s && (a[1] = 1), o.default.model.basic.setExtraSupplyFlag(a)
                        }
                    e._updateDutyList(t)
                })
            }, e.prototype._updateDutyList = function (t) {
                var e = this;
                new b.TaskUpdateDutyListData(this._holder.selected_page_no, this._holder.selected_type, this._holder).start(function () {
                    t.getRewards(2).length > 0 && o.default.view.portMain.updateUserInfo({
                        fleetNum: o.default.model.deck.num
                    }), o.default.view.portMain.updateInfo(), null != e._click_guard && e._layer.removeChild(e._click_guard), e._endTask()
                })
            }, e.prototype._endTask = function () {
                this._layer = null, this._model = null, this._holder = null, this._click_guard = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase);
    e.TaskTasseiDutySelect = w
}