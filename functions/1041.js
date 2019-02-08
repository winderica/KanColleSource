const function1041 = function (t, e, i) {
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
        s = i(322),
        a = function (t) {
            function e(e, i, n) {
                var r = t.call(this) || this;
                return r._updateView = function (t) {
                    var e = o.default.model.expedition.get(r._expedition_id);
                    0 == e.state && e.__setState__(1);
                    var i = o.default.model.deck.get(r._deck_id);
                    t.update(e, i.mstID), r._view.detail_view.update(e, i), r._showCutin(i)
                }, r._view = e, r._expedition_id = i, r._deck_id = n, r
            }
            return n(e, t), e.prototype._start = function () {
                var t = this,
                    e = this._getTargetListItem();
                e.getDeckIconTween(this._deck_id, function () {
                    t._updateView(e)
                })
            }, e.prototype._getTargetListItem = function () {
                for (var t, e = this._view.items, i = 0, n = e; i < n.length && (t = n[i], t.target_id != this._expedition_id); i++);
                return t
            }, e.prototype._showCutin = function (t) {
                var e = this;
                new s.TaskExpeditionStartCutin(t.mstID).start(function () {
                    e._endTask()
                })
            }, e
        }(r.TaskBase);
    e.GoExpeditionTask = a
}