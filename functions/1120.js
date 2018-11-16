const function1120 = function (t, e, i) {
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
    var o = i(34), r = i(1121), s = i(1122), a = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._count = 0, i._onSelectFromTop = function (t) {
                if (i._top_view.deactivate(), -1 == t) {
                    if (null == i._cb_onResult) return;
                    i._cb_onResult(t)
                } else i._confirm_view = new s.ConfirmView(i._onSelectFromConfirm), i._confirm_view.position.set(215, 206), i.addChild(i._confirm_view), i._confirm_view.initialize(i._count), i._confirm_view.activate(), i._top_view.dispose(), i.removeChild(i._top_view), i._top_view = null
            }, i._onSelectFromConfirm = function (t) {
                null != i._cb_onResult && i._cb_onResult(t)
            }, i._cb_onResult = e, i._top_view = new r.TopView(i._onSelectFromTop), i._top_view.position.set(215, 206), i.addChild(i._top_view), i
        }

        return n(e, t), e.prototype.initialize = function (t) {
            this._count = t, this._top_view.initialize(t)
        }, e.prototype.activate = function () {
            null != this._top_view && this._top_view.activate(), null != this._confirm_view && this._confirm_view.activate()
        }, e.prototype.deactivate = function () {
            null != this._top_view && this._top_view.deactivate(), null != this._confirm_view && this._confirm_view.deactivate()
        }, e.prototype.dispose = function () {
            null != this._top_view && this._top_view.dispose(), null != this._confirm_view && this._confirm_view.dispose()
        }, e
    }(o.DialogBase);
    e.KouMedalUseDialog = a
}