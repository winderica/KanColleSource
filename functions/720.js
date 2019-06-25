const function720 = function (t, e, i) {
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
        s = i(721),
        a = i(131),
        _ = i(21),
        u = i(57),
        l = i(306),
        c = i(722),
        h = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._loadPreset = function () {
                    var t = new c.PresetDeckAPI;
                    t.start(function () {
                        var e = t.result;
                        i.organizeScene.preInitialize(e), i._endTask()
                    })
                }, i.organizeScene = e, i
            }
            return n(e, t), e.prototype._start = function () {
                this._loadResource()
            }, e.prototype._loadResource = function () {
                var t = this;
                (new s.TaskLoadResourcesOrganize).start(function () {
                    t._uploadToGPU_common()
                })
            }, e.prototype._uploadToGPU_common = function () {
                var t = this;
                o.default.settings.renderer.plugins.prepare.upload(a.COMMON_ICON_WEAPON.getTextureFromMstID(1).baseTexture, function () {
                    o.default.settings.renderer.plugins.prepare.upload(_.COMMON_MAIN.getTexture(0).baseTexture, function () {
                        t._uploadToGPU_organize()
                    })
                })
            }, e.prototype._uploadToGPU_organize = function () {
                var t = this;
                o.default.settings.renderer.plugins.prepare.upload(u.ORGANIZE_MAIN.getTexture(0).baseTexture, function () {
                    o.default.settings.renderer.plugins.prepare.upload(l.ORGANIZE_SHIP.getTexture(0).baseTexture, function () {
                        t._loadPreset()
                    })
                })
            }, e
        }(r.TaskBase);
    e.PreInitializeTask = h
}