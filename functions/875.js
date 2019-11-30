const function875 = function (t, e, i) {
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
        s = i(876),
        a = i(3),
        _ = i(3),
        l = i(3),
        u = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._uploadTexture = function () {
                    o.default.settings.renderer.plugins.prepare.upload(l.ARSENAL_ANIMATION.getTexture(0).baseTexture, function () {
                        o.default.settings.renderer.plugins.prepare.upload(_.ARSENAL_MAIN.getTexture(0).baseTexture, function () {
                            o.default.settings.renderer.plugins.prepare.upload(a.COMMON_SORT.getTexture(0).baseTexture, function () {
                                i.arsenalScene.start(), i.arsenalScene = null, i._endTask()
                            })
                        })
                    })
                }, i.arsenalScene = e, i
            }
            return n(e, t), e.prototype._start = function () {
                var t = this,
                    e = o.default.model.basic.getUISkinID();
                new s.TaskLoadResourcesArsenal(e).start(function () {
                    t._uploadTexture()
                })
            }, e
        }(r.TaskBase);
    e.PreInitializeTask = u
}