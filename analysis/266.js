const function266 = function (t, e, i) {
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
    var o = i(0), r = i(2), s = i(144), a = function (t) {
        function e(e, i, n) {
            var o = t.call(this) || this;
            return o._before = e, o._after = i, o._model = n, o
        }

        return n(e, t), Object.defineProperty(e.prototype, "before", {
            get: function () {
                return this._before
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "after", {
            get: function () {
                return this._after
            }, enumerable: !0, configurable: !0
        }), e.prototype._start = function () {
            o.default.view.clickGuard = !0, this._doPrefinalize()
        }, e.prototype._doPrefinalize = function () {
            var t = this;
            s.TaskLoadBase.abortAll();
            var e = o.default.view.getNowScene(), i = e.getPreFinalizeTask();
            null != i ? i.start(function () {
                t._fadeOn()
            }) : this._fadeOn()
        }, e.prototype._fadeOn = function () {
            var t = this, e = this._getFadeBox(this._before, this._after);
            e.visible = !0, e.show(300, function () {
                t._doFinalize()
            })
        }, e.prototype._doFinalize = function () {
            var t = this, e = o.default.view.getNowScene(), i = e.getFinalizeTask();
            null != i ? i.start(function () {
                t._loadBackground()
            }) : this._loadBackground()
        }, e.prototype._loadBackground = function () {
            var t = this;
            o.default.view.bg.setImage(this._after, function () {
                t._change()
            })
        }, e.prototype._change = function () {
            if (o.default.view.portMain.playChangeAnimation(this._after), 0 == this._after) o.default.view.portMain.setContent(null), o.default.view.portMain.update(0), o.default.view.portMain.visible = !0, o.default.view.mapLayer.setContent(null); else {
                var t = e.__factory__(this._after);
                33 == this._after || 32 == this._after ? (o.default.view.portMain.setContent(null), o.default.view.portMain.visible = !1, o.default.view.mapLayer.setContent(t)) : (o.default.view.portMain.setContent(t), o.default.view.portMain.update(this._after), o.default.view.portMain.visible = !0, o.default.view.mapLayer.setContent(null))
            }
            this._doPreInitialize()
        }, e.prototype._doPreInitialize = function () {
            var t = this, e = o.default.view.getNowScene(), i = e.getPreInitializeTask(this._before, this._model);
            null != i ? i.start(function () {
                t._fadeOff()
            }) : this._fadeOff()
        }, e.prototype._fadeOff = function () {
            var t = this, e = this._getFadeBox(this._before, this._after), i = 0 == this._after;
            i && o.default.view.portMain.ringMenu.prePosition(), e.hide(300, function () {
                e.visible = !1, t._doInitialize(), i && o.default.view.portMain.ringMenu.startAnimation()
            })
        }, e.prototype._doInitialize = function () {
            var t = this, e = o.default.view.getNowScene(), i = e.getInitializeTask(this._before);
            null != i ? i.start(function () {
                t._preEnd()
            }) : this._preEnd()
        }, e.prototype._preEnd = function () {
            o.default.view.clickGuard = !1, this._endTask()
        }, e.prototype._getFadeBox = function (t, e) {
            return 23 == t || 23 == e ? o.default.view.fadeLayer : 25 == t || 25 == e ? o.default.view.fadeLayer : 33 == t || 33 == e ? o.default.view.fadeLayer : 32 == t || 32 == e ? o.default.view.fadeLayer : o.default.view.portMain.fadeLayer
        }, e
    }(r.TaskBase);
    e.TaskSceneChange = a
}