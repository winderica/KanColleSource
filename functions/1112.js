const function1112 = function (t, e, i) {
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
    var o = i(2),
        r = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                n._switchOrder = [1, 2], n._switch_btn = e, n._tab_container = i;
                var o = n._switchOrder.indexOf(n._switch_btn.mode);
                return n._switchMode = o + 1 >= n._switchOrder.length ? n._switchOrder[0] : n._switchOrder[o + 1], n
            }
            return n(e, t), e.prototype._start = function () {
                this._switch_btn.mode = this._switchMode, this._tab_container.switchViewAlbumMode(this._switchMode), this._animate()
            }, e.prototype._animate = function () {
                var t = this;
                createjs.Tween.get(this._switch_btn).to({
                    alpha: 0
                }, 0).to({
                    x: -137
                }, 0).wait(300).call(function () {
                    t._switch_btn.update(!1), createjs.Tween.get(t._switch_btn).to({
                        alpha: 1
                    }, 0).wait(100).to({
                        x: 0
                    }, 450, createjs.Ease.quintOut).call(function () {
                        t._endTask()
                    })
                })
            }, e.prototype._endTask = function () {
                this._switch_btn.addOnceClickEvent(), t.prototype._endTask.call(this)
            }, e
        }(o.TaskBase);
    e.TaskSwitchAlbumMode = r
}