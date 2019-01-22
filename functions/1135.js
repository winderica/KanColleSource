const function1135 = function (t, e, i) {
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
        r = i(239),
        s = i(401),
        a = i(27),
        _ = i(173),
        l = i(1136),
        u = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._onResult = function (t) {
                    n._dialog.deactivate(), n._seleced_use_type = t, -1 == t ? n._hideDialog(!1) : n._connectAPI()
                }, n._layer = e, n._target = i, n
            }
            return n(e, t), e.prototype._start = function () {
                this._loadResources()
            }, e.prototype._loadResources = function () {
                var t = this,
                    e = new r.TaskLoadResources;
                e.addUseitem(4), e.addSlotitem(169), e.addSlotitem(187), e.addFurniture(412), e.start(function () {
                    t._showDialog()
                })
            }, e.prototype._showDialog = function () {
                this._dialog = new l.SetsubunUseDialog(this._onResult), this._dialog.initialize(this._target.count), this._dialog.alpha = 1, this._layer.addChild(this._dialog), this._dialog.activate()
            }, e.prototype._connectAPI = function () {
                var t = this,
                    e = this._target.mstID,
                    i = this._seleced_use_type,
                    n = (o.default.view.overLayer, new s.UseItemUseAPI(e, !1, i)),
                    r = n.result;
                n.start(function () {
                    if (1 == r.hasCaution()) t._hideDialog(!0);
                    else {
                        if (82 == i) {
                            o.default.model.furniture.getData(412).updateHasFlag(!0)
                        }
                        if (83 == i) {
                            var e = o.default.model.useItem.getMaterialCounts(),
                                n = e.devKit - 10,
                                s = o.default.model.useItem.get(3);
                            s.__setCount__(n)
                        }
                        if (84 == i) {
                            var e = o.default.model.useItem.getMaterialCounts(),
                                n = e.devKit - 40,
                                s = o.default.model.useItem.get(3);
                            s.__setCount__(n), o.default.model.basic.setCFlag(1)
                        }
                        t._result = r, t._hideDialog(!1)
                    }
                })
            }, e.prototype._hideDialog = function (t) {
                this._dialog.dispose(), this._layer.removeChild(this._dialog), this._dialog = null, 1 == t ? this._confirm() : this._endTask()
            }, e.prototype._confirm = function () {
                var t = this,
                    e = this._target.mstID,
                    i = this._seleced_use_type,
                    n = this._layer,
                    o = new _.TaskItemOverflowConfirm(n);
                o.start(function () {
                    if (1 == o.result) {
                        var n = new s.UseItemUseAPI(e, !0, i),
                            r = n.result;
                        n.start(function () {
                            t._result = r, t._endTask()
                        })
                    } else t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._layer = null, this._target = null, t.prototype._endTask.call(this)
            }, e
        }(a.TaskWithResult);
    e.TaskUseSetsubun = u
}