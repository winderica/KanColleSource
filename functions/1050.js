const function1050 = function (t, e, i) {
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
        r = i(11),
        s = i(1051),
        a = i(15),
        _ = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._scene = e, i
            }
            return n(e, t), e.prototype._start = function () {
                this._loadResources()
            }, e.prototype._loadResources = function () {
                var t = this;
                (new s.TaskLoadResources).start(function () {
                    t._showTopView()
                })
            }, e.prototype._showTopView = function () {
                this._scene.initialize(), this._scene.startTopTask(), this._scene = null, this._endTask()
            }, e
        }(r.TaskBase);
    e.PreInitializeTask = _;
    var l = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._scene = e, i
        }
        return n(e, t), e.prototype._start = function () {
            this._playBGM(), a.EditTextBoxUtil.setVisibility(!0)
        }, e.prototype._playBGM = function () {
            o.default.sound.bgm.play(102), this._startScene()
        }, e.prototype._startScene = function () {
            this._endTask()
        }, e
    }(r.TaskBase);
    e.InitializeTask = l
}