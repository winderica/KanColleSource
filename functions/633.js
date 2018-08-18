const function633 = function (t, e, i) {
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
    var o = i(0), r = i(2), s = i(634), a = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._onClick = function () {
                e._view.deactivate(), e._hideDialog()
            }, e
        }

        return n(e, t), e.prototype._start = function () {
            -1 != o.default.model.deck.combined.type ? this._endTask() : this._breakCombined()
        }, e.prototype._breakCombined = function () {
            o.default.model.deck.combined.__update__(0), this._showDialog()
        }, e.prototype._showDialog = function () {
            var t = this, e = o.default.view.overLayer;
            this._view = new s.CompCombinedAlert(this._onClick), this._view.bg.alpha = 0, this._view.btn.alpha = 0, this._view.initialize(), e.addChild(this._view), createjs.Tween.get(this._view.bg).to({ alpha: 1 }, 300), createjs.Tween.get(this._view.btn).wait(100).to({ alpha: 1 }, 300).call(function () {
                t._view.activate()
            })
        }, e.prototype._hideDialog = function () {
            var t = this;
            createjs.Tween.get(this._view.btn).to({ alpha: 0 }, 300), createjs.Tween.get(this._view.bg).wait(100).to({ alpha: 0 }, 300).call(function () {
                t._view.parent.removeChild(t._view), t._endTask()
            })
        }, e
    }(r.TaskBase);
    e.TaskCombinedAlert = a
}