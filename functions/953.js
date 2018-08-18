const function953 = function (t, e, i) {
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
    var o = i(2), r = i(954), s = i(1), a = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._onClick = function () {
                i._dialog.interactive = !1, i._dialog.buttonMode = !1, i._close()
            }, i._layer = e, i
        }

        return n(e, t), e.prototype._start = function () {
            this._dialog = new r.IntroAlertDialog, this._dialog.chara.alpha = 0, this._dialog.board.scale.y = 0, this._dialog.initialize(), this._open()
        }, e.prototype._open = function () {
            var t = this;
            this._layer.addChild(this._dialog), createjs.Tween.get(this._dialog.chara).to({ alpha: 1 }, 250), createjs.Tween.get(this._dialog.board).wait(150).to({ scaleY: 1 }, 250).call(function () {
                t._wait()
            })
        }, e.prototype._wait = function () {
            this._dialog.interactive = !0, this._dialog.buttonMode = !0, this._dialog.once(s.EventType.CLICK, this._onClick)
        }, e.prototype._close = function () {
            var t = this;
            createjs.Tween.get(this._dialog.chara).to({ alpha: 0 }, 150), createjs.Tween.get(this._dialog.board).wait(100).to({ scaleY: 0 }, 150).call(function () {
                t._layer.removeChild(t._dialog), t._endTask()
            })
        }, e.prototype._endTask = function () {
            this._layer = null, this._dialog = null, t.prototype._endTask.call(this)
        }, e
    }(o.TaskBase);
    e.ShowIntroAlertDialogTask = a
}