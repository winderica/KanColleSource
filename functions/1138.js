const function1138 = function (t, e, i) {
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
    var o = i(6),
        r = i(27),
        s = i(1139),
        a = i(1140),
        _ = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._onSelectFromTop = function (t) {
                    if (i._top_view.deactivate(), -1 == t) {
                        if (null == i._cb_onResult) return;
                        i._cb_onResult(t)
                    } else i._confirm_view = new a.ConfirmView(t, i._onSelectFromConfirm), i._confirm_view.position.set(327, 192), i.addChild(i._confirm_view), i._confirm_view.initialize(t, i._count), i._confirm_view.activate()
                }, i._onSelectFromConfirm = function (t) {
                    if (-1 == t) {
                        if (null == i._cb_onResult) return;
                        i._confirm_view.deactivate(), i._top_view.activate()
                    } else {
                        if (null == i._cb_onResult) return;
                        i._cb_onResult(t), o.SE.play("215")
                    }
                }, i._cb_onResult = e, i._top_view = new s.TopView(i._onSelectFromTop), i._top_view.position.set(293, 205), i.addChild(i._top_view), i
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this._count = t, this._top_view.initialize()
            }, e.prototype.activate = function () {
                null != this._top_view && this._top_view.activate(), null != this._confirm_view && this._confirm_view.activate()
            }, e.prototype.deactivate = function () {
                null != this._top_view && this._top_view.deactivate(), null != this._confirm_view && this._confirm_view.deactivate()
            }, e.prototype.dispose = function () {
                null != this._top_view && this._top_view.dispose(), null != this._confirm_view && this._confirm_view.dispose()
            }, e
        }(r.DialogBase);
    e.SetsubunUseDialog = _
}