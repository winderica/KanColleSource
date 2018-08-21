const function1107 = function (t, e, i) {
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
    var o = i(0), r = i(117), s = i(33), a = i(118), _ = i(1108), u = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._onResult = function (t) {
                n._dialog.deactivate(), n._selected_exchange_type = t, -1 == t ? n._hideDialog(!1) : n._connectAPI(t)
            }, n._layer = e, n._target = i, n
        }

        return n(e, t), e.prototype._start = function () {
            this._showDialog()
        }, e.prototype._showDialog = function () {
            var t = this;
            this._dialog = new _.MedalUseDialog(this._onResult), this._dialog.initialize(this._target.count), this._dialog.alpha = 0, this._layer.addChild(this._dialog), createjs.Tween.get(this._dialog).to({ alpha: 1 }, 150).call(function () {
                t._dialog.activate()
            })
        }, e.prototype._connectAPI = function (t) {
            var e = this, i = this._target.mstID, n = (o.default.view.overLayer, new r.UseItemUseAPI(i, !1, t)),
                s = n.result;
            n.start(function () {
                1 == s.hasCaution() ? e._hideDialog(!0) : (e._result = s, e._hideDialog(!1))
            })
        }, e.prototype._hideDialog = function (t) {
            var e = this;
            createjs.Tween.get(this._dialog).to({ alpha: 0 }, 150).call(function () {
                e._dialog.dispose(), e._layer.removeChild(e._dialog), e._dialog = null, 1 == t ? e._confirm() : e._endTask()
            })
        }, e.prototype._confirm = function () {
            var t = this, e = this._target.mstID, i = this._selected_exchange_type, n = this._layer,
                o = new a.TaskItemOverflowConfirm(n);
            o.start(function () {
                if (1 == o.result) {
                    var n = new r.UseItemUseAPI(e, !0, i), s = n.result;
                    n.start(function () {
                        t._result = s, t._endTask()
                    })
                } else t._endTask()
            })
        }, e.prototype._endTask = function () {
            this._layer = null, this._target = null, t.prototype._endTask.call(this)
        }, e
    }(s.TaskWithResult);
    e.TaskUseMedal = u
}