const function864 = function (t, e, i) {
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
        a = i(15),
        _ = i(865),
        l = i(343),
        u = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._updateNDock = function () {
                    (new l.NDockAPI).start(i._loadAtlas)
                }, i._loadAtlas = function () {
                    var t = new a.UIImageLoader("repair");
                    t.add("repair_main.json"), t.load(i._loadShipBanner)
                }, i._loadShipBanner = function () {
                    var t = o.default.model.ndock.getShipMemIDs();
                    if (0 < t.length) {
                        for (var e = new s.ShipLoader, n = 0; n < t.length; n++) {
                            var r = t[n],
                                a = o.default.model.ship.get(r);
                            e.add(a.mstID, a.isDamaged(), "banner")
                        }
                        e.load(function () {
                            i._onCompleteLoad()
                        })
                    } else i._onCompleteLoad()
                }, i._onCompleteLoad = function () {
                    var t = o.default.model.ndock.getAll(),
                        e = new _.MainView(t);
                    i.repairScene.start(e), i.repairScene.updateNDocks(t), i.repairScene.startNDockTimer(), i._endTask()
                }, i.repairScene = e, i
            }
            return n(e, t), e.prototype._start = function () {
                this._updateNDock()
            }, e
        }(r.TaskBase);
    e.PreInitializeTask = u
}