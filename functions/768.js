const function768 = function (t, e, i) {
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
        s = i(769),
        a = i(309),
        _ = i(211),
        l = i(312),
        u = i(311),
        c = i(71),
        h = i(130),
        p = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i.phasePreInitialize = function () {
                    o.default.sound.bgm.play(102), i._scene.start(), i._endTask()
                }, i._scene = e, i
            }
            return n(e, t), e.prototype._start = function () {
                this._load()
            }, e.prototype._load = function () {
                var t = this;
                (new s.TaskLoadResourcesRemodel).start(function () {
                    t._uploadToGPU()
                })
            }, e.prototype._uploadToGPU = function () {
                var t, e = this;
                t = c.REMODEL_MAIN.getTexture(0), o.default.settings.renderer.plugins.prepare.upload(t.baseTexture, function () {
                    t = h.REMODEL_POWERUP.getTexture(0), o.default.settings.renderer.plugins.prepare.upload(t.baseTexture, function () {
                        t = u.REMODEL_GRADEUP.getTexture(0), o.default.settings.renderer.plugins.prepare.upload(t.baseTexture, function () {
                            t = l.REMODEL_ANIMATION.getTexture(0), o.default.settings.renderer.plugins.prepare.upload(t.baseTexture, function () {
                                t = _.COMMON_SORT.getTexture(2), o.default.settings.renderer.plugins.prepare.upload(t.baseTexture, function () {
                                    t = a.COMMON_ANIMATION.getTexture(1), o.default.settings.renderer.plugins.prepare.upload(t.baseTexture, function () {
                                        e.phasePreInitialize()
                                    })
                                })
                            })
                        })
                    })
                })
            }, e
        }(r.TaskBase);
    e.PreInitializeTask = p
}