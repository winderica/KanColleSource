const function1129 = function (t, e, i) {
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
    var o = i(33),
        r = i(1130),
        s = i(1131),
        a = i(1132),
        _ = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._count = 0, i._onSelectFromTop = function (t) {
                    if (-1 == t) {
                        if (null == i._cb_onResult) return;
                        i._cb_onResult(t)
                    } else null != i._confirm_view && (null != i._confirm_view.parent && i._confirm_view.parent.removeChild(i._confirm_view), i._confirm_view.dispose(), i._confirm_view = null), 1 == t ? (i._confirm_view = new a.ConfirmRemodelPlanView(1, i._onSelectFromConfirm), i._confirm_view.position.set(220, 171)) : 0 == t ? (i._confirm_view = new s.ConfirmView(0, i._onSelectFromConfirm), i._confirm_view.position.set(225, 208)) : 2 == t && (i._confirm_view = new s.ConfirmView(2, i._onSelectFromConfirm), i._confirm_view.position.set(225, 208)), i._confirm_view.initialize(i._count), i.addChild(i._confirm_view), i._top_view.visible = !1
                }, i._onSelectFromConfirm = function (t) {
                    null != i._confirm_view && i._confirm_view.dispose(), null != i._cb_onResult && i._cb_onResult(t)
                }, i._cb_onResult = e, i._top_view = new r.TopView(i._onSelectFromTop), i._top_view.position.set(225, 208), i.addChild(i._top_view), i
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this._count = t, this._top_view.initialize(t)
            }, e.prototype.activate = function () {
                this._top_view.activate()
            }, e.prototype.deactivate = function () {
                this._top_view.deactivate()
            }, e.prototype.dispose = function () {
                this._top_view.dispose()
            }, e
        }(o.DialogBase);
    e.MedalUseDialog = _
}