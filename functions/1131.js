const function1131 = function (t, e, i) {
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
        r = i(90),
        s = i(34),
        a = i(91),
        _ = i(1132),
        u = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._onResult = function (t) {
                    n._dialog.deactivate(), -1 == t ? n._hideDialog(!1) : n._connectAPI()
                }, n._layer = e, n._target = i, n
            }
            return n(e, t), e.prototype._start = function () {
                this._showDialog()
            }, e.prototype._showDialog = function () {
                var t = this;
                this._dialog = new _.KouMedalUseDialog(this._onResult), this._dialog.initialize(this._target.count), this._dialog.alpha = 0, this._layer.addChild(this._dialog), createjs.Tween.get(this._dialog).to({
                    alpha: 1
                }, 150).call(function () {
                    t._dialog.activate()
                })
            }, e.prototype._connectAPI = function () {
                var t = this,
                    e = this._target.mstID,
                    i = (o.default.view.overLayer, new r.UseItemUseAPI(e, !1, 0)),
                    n = i.result;
                i.start(function () {
                    1 == n.hasCaution() ? t._hideDialog(!0) : (t._result = n, t._hideDialog(!1))
                })
            }, e.prototype._hideDialog = function (t) {
                var e = this;
                createjs.Tween.get(this._dialog).to({
                    alpha: 0
                }, 150).call(function () {
                    e._dialog.dispose(), e._layer.removeChild(e._dialog), e._dialog = null, 1 == t ? e._confirm() : e._endTask()
                })
            }, e.prototype._confirm = function () {
                var t = this,
                    e = this._target.mstID,
                    i = this._layer,
                    n = new a.TaskItemOverflowConfirm(i);
                n.start(function () {
                    if (1 == n.result) {
                        var i = new r.UseItemUseAPI(e, !0, 0),
                            o = i.result;
                        i.start(function () {
                            t._result = o, t._endTask()
                        })
                    } else t._endTask()
                })
            }, e.prototype._endTask = function () {
                this._layer = null, this._target = null, t.prototype._endTask.call(this)
            }, e
        }(s.TaskWithResult);
    e.TaskUseKouMedal = u
}