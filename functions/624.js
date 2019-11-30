const function624 = function (t, e, i) {
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
        r = i(309),
        s = i(627),
        a = i(48),
        _ = function (t) {
            function e(e, i) {
                return t.call(this, e, i) || this
            }
            return n(e, t), Object.defineProperty(e.prototype, "model", {
                get: function () {
                    return this._model
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._createContent = function () {
                this._showDialog()
            }, e.prototype._showContent = function () {
                var t = this,
                    e = new r.ModelChangeModelEdit;
                e.setItemFrom(73, !0), e.setItemTobe(-1);
                var i = this.model.message1,
                    n = this.model.message2;
                e.setMessage(i, n), e.addMeltInto([{
                    id: 31,
                    type: 6
                }], 1, 1), e.addMeltInto([{
                    id: 34,
                    type: 6
                }], 2, 1);
                var a = o.default.view.overLayer;
                new s.AirunitBaseOpenTask(a, e).start(function () {
                    t._showContentComplete()
                })
            }, e.prototype._showDialog = function () {
                this._showContent()
            }, e.prototype._removeContent = function () {}, e.prototype._showContentComplete = function () {
                var t = o.default.model.useItem.get(73);
                t.__setCount__(t.count - 1), this._removeContent(), this._endTask()
            }, e
        }(a.TaskRewardDialogBase);
    e.TaskRewardDialogAirUnit = _
}