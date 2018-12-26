const function743 = function (t, e, i) {
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
        s = i(13),
        a = i(3),
        _ = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._scene = e, i
            }
            return n(e, t), e.prototype._start = function () {
                this._phaseLoadResources()
            }, e.prototype._phaseLoadResources = function () {
                var t = this,
                    e = new s.UIImageLoader("supply");
                e.add("supply_main.json"), e.load(function () {
                    t._uploadToGPU()
                })
            }, e.prototype._uploadToGPU = function () {
                var t = this;
                o.default.settings.renderer.plugins.prepare.upload(a.SUPPLY_MAIN.getTexture(0).baseTexture, function () {
                    t._phaseLoadComplete()
                })
            }, e.prototype._phaseLoadComplete = function () {
                this._scene.preInitialize(), this._scene.initialize(), o.default.sound.bgm.play(102), this._scene.start(), this._endTask()
            }, e.prototype._endTask = function () {
                this._scene = null, t.prototype._endTask.call(this)
            }, e
        }(r.TaskBase);
    e.PreInitializeTask = _
}