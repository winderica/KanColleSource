const function709 = function (t, e, i) {
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
    var o = i(84),
        r = i(710),
        s = function (t) {
            function e(e, i, n) {
                var o = t.call(this) || this;
                o.HEIGHT = 76, o.presetEditSlots = [];
                for (var s = 0; s < 5; s++) {
                    var a = new r.PresetEditSlot(s);
                    a.onClickSave = e, a.onClickDelete = i, a.onClickExtension = n, a.position.y = o.HEIGHT * s, o.presetEditSlots.push(a)
                }
                return o.presetEditSlots.forEach(function (t) {
                    return o.addChild(t)
                }), o
            }
            return n(e, t), Object.defineProperty(e.prototype, "slotsLength", {
                get: function () {
                    return this.presetEditSlots.length
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dispose = function () {
                o.TaskLoadShipResource.abortBy(this), this.presetEditSlots.forEach(function (t) {
                    t.dispose(), t = null
                }), this.presetEditSlots = null, this.removeChildren()
            }, e.prototype.update = function (t, e, i, n, r) {
                void 0 === r && (r = null), o.TaskLoadShipResource.abortBy(this);
                for (var s = !1, a = 0; a < 5; a++) s = this.presetEditSlots[a].update(t[a], e, i, n, r, s)
            }, e
        }(PIXI.Container);
    e.PresetEditContainer = s
}