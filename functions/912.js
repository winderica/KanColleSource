const function912 = function (t, e, i) {
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
    var o = i(2), r = i(1), s = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._selected = null, i._onClickSortie = function () {
                i._removeEventListeners(), i._selected = i._topView.btn_sortie, i._hideTween()
            }, i._onClickPractice = function () {
                i._removeEventListeners(), i._selected = i._topView.btn_practice, i._hideTween()
            }, i._onClickExpedition = function () {
                i._removeEventListeners(), i._selected = i._topView.btn_expedition, i._hideTween()
            }, i._scene = e, i._topView = e.viewTop, i._tweens = new Array, i
        }

        return n(e, t), e.prototype.cancel = function () {
            this._removeEventListeners();
            for (var t = 0, e = this._tweens; t < e.length; t++) {
                e[t].setPaused(!0)
            }
            this._tweens = null
        }, e.prototype._start = function () {
            this._topView.btn_sortie.on(r.EventType.CLICK, this._onClickSortie), this._topView.btn_practice.on(r.EventType.CLICK, this._onClickPractice), this._topView.btn_expedition.on(r.EventType.CLICK, this._onClickExpedition)
        }, e.prototype._removeEventListeners = function () {
            this._topView.btn_sortie.off(r.EventType.CLICK, this._onClickSortie), this._topView.btn_practice.off(r.EventType.CLICK, this._onClickPractice), this._topView.btn_expedition.off(r.EventType.CLICK, this._onClickExpedition)
        }, e.prototype._hideTween = function () {
            var t = this, e = this._topView.btn_sortie;
            e != this._selected && this._tweens.push(createjs.Tween.get(e).to({ alpha: 0 }, 300)), e = this._topView.btn_practice, e != this._selected && this._tweens.push(createjs.Tween.get(e).to({ alpha: 0 }, 300)), e = this._topView.btn_expedition, e != this._selected && this._tweens.push(createjs.Tween.get(e).to({ alpha: 0 }, 300)), this._tweens[this._tweens.length - 1].call(function () {
                t._selected == t._topView.btn_sortie ? t._scene.openView(0) : t._selected == t._topView.btn_practice ? t._scene.openView(1) : t._selected == t._topView.btn_expedition && t._scene.openView(2), t._endTask()
            })
        }, e.prototype._endTask = function (e) {
            void 0 === e && (e = !1), this._scene = null, this._topView = null, this._selected = null, this._tweens = null, t.prototype._endTask.call(this)
        }, e
    }(o.TaskBase);
    e.TaskTop = s
}