const function1142 = function (t, e, i) {
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
        r = i(406),
        s = i(407),
        a = i(408),
        _ = i(173),
        l = i(173),
        u = i(92),
        c = i(33),
        h = i(93),
        p = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._onSelect = function (t) {
                    if (null == t) return void n._hideDialog(!1);
                    var e = PIXI.Texture.EMPTY;
                    if (11 == t.type) e = o.default.resources.getShip(t.mst_id, !1, "icon_box");
                    else if (12 == t.type) e = o.default.resources.getSlotitem(t.mst_id, "card");
                    else if (13 == t.type) e = o.default.resources.getUseitem(t.mst_id, 2);
                    else if (14 == t.type) {
                        e = o.default.resources.getFurniture(t.mst_id, "reward");
                        var i = o.default.model.furniture.getData(t.mst_id);
                        if (null == i || 1 == i.has()) return void n._dialog.showAlert(t)
                    }
                    var r = new s.TaskRewardSelectConfirm(n._layer, e);
                    r.start(function () {
                        n._dialog.deactivate(), 1 == r.result ? (n._seleced = t, n._connectAPI()) : n._dialog.activate()
                    })
                }, n._layer = e, n._candidates = [new a.SelectableRewardModel({
                    api_no: 51,
                    api_kind: 12,
                    api_mst_id: 238,
                    api_slotitem_level: 0,
                    api_count: 1
                }), new a.SelectableRewardModel({
                    api_no: 52,
                    api_kind: 12,
                    api_mst_id: 82,
                    api_slotitem_level: 0,
                    api_count: 1
                }), new a.SelectableRewardModel({
                    api_no: 53,
                    api_kind: 13,
                    api_mst_id: 4,
                    api_slotitem_level: 0,
                    api_count: 5
                })], n._target = i, n
            }
            return n(e, t), e.prototype._start = function () {
                this._loadResources()
            }, e.prototype._loadResources = function () {
                for (var t = this, e = new r.TaskLoadResources, i = 0, n = this._candidates; i < n.length; i++) {
                    var o = n[i];
                    11 == o.type ? e.addShip(o.mst_id) : 12 == o.type ? e.addSlotitem(o.mst_id) : 13 == o.type ? e.addUseitem(o.mst_id) : 14 == o.type && e.addFurniture(o.mst_id)
                }
                e.start(function () {
                    t._showDialog()
                })
            }, e.prototype._showDialog = function () {
                var t = this;
                3 == this._candidates.length ? (this._dialog = new l.RewardSelectDialog3(!0), this._dialog.position.set(195, 164)) : (this._dialog = new _.RewardSelectDialog2(!0), this._dialog.position.set(297, 164)), this._dialog.initialize(this._candidates, this._onSelect), this._dialog.alpha = 0, this._layer.addChild(this._dialog), createjs.Tween.get(this._dialog).to({
                    alpha: 1
                }, 150).call(function () {
                    t._dialog.activate()
                })
            }, e.prototype._connectAPI = function () {
                var t = this,
                    e = this._target.mstID,
                    i = this._seleced.no,
                    n = (o.default.view.overLayer, new u.UseItemUseAPI(e, !1, i)),
                    r = n.result;
                n.start(function () {
                    1 == r.hasCaution() ? t._hideDialog(!0) : (t._result = r, t._hideDialog(!1))
                })
            }, e.prototype._hideDialog = function (t) {
                var e = this;
                createjs.Tween.get(this._dialog).to({
                    alpha: 0
                }, 150).call(function () {
                    e._layer.removeChild(e._dialog), e._dialog = null, 1 == t ? e._confirm() : e._endTask()
                })
            }, e.prototype._confirm = function () {
                var t = this,
                    e = this._target.mstID,
                    i = this._seleced.no,
                    n = this._layer,
                    o = new h.TaskItemOverflowConfirm(n);
                o.start(function () {
                    if (1 == o.result) {
                        var n = new u.UseItemUseAPI(e, !0, i),
                            r = n.result;
                        n.start(function () {
                            t._result = r, t._endTask()
                        })
                    } else t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._layer = null, this._target = null, t.prototype._endTask.call(this)
            }, e
        }(c.TaskWithResult);
    e.TaskUseGiftBox = p
}