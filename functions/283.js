const function283 = function (t, e, i) {
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
    var o = i(5),
        r = i(0),
        s = i(22),
        a = i(2),
        _ = i(284),
        l = i(32),
        u = i(13),
        c = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._deck = r.default.model.deck.get(e), n._ships = n._deck.getShipList(), n._result = i, n
            }
            return n(e, t), e.prototype._start = function () {
                r.default.view.clickGuard = !0, this._loadResources()
            }, e.prototype._loadResources = function () {
                for (var t = this, e = new u.ShipLoader, i = 0, n = this._ships; i < n.length; i++) {
                    var o = n[i];
                    null != o && e.add(o.mstID, o.isDamaged(), "banner")
                }
                e.load(function () {
                    t._initCutin()
                })
            }, e.prototype._initCutin = function () {
                this._cutin = new _.ExpeditionCutin, this._cutin.initialize(!1), this._createShipContainerU(), this._createShipContainerB(), this._cutin.bg.scale.set(1, 0), this._cutin.message.position.set(1440, o.default.height / 2), this._cutin.banner_top.position.set(0, 243), this._cutin.banner_top.alpha = 0, this._cutin.banner_bottom.position.set(o.default.width - this._cutin.banner_bottom.width, 417), this._cutin.banner_bottom.alpha = 0, this._playCutin()
            }, e.prototype._playCutin = function () {
                var t = this;
                r.default.view.overLayer.addChild(this._cutin);
                var e = this._ships[0],
                    i = e.mstID.toString();
                r.default.sound.voice.play(i, 7), createjs.Tween.get(this._cutin.bg.scale).to({
                    y: 2
                }, 300).wait(1500).to({
                    y: 0
                }, 300).call(function () {
                    t._endTask()
                }), createjs.Tween.get(this._cutin.message).wait(400).to({
                    x: 660
                }, 400).to({
                    x: 525
                }, 800).to({
                    x: 420,
                    alpha: 0
                }, 400), createjs.Tween.get(this._cutin.banner_top).wait(300).to({
                    alpha: 1
                }, 100).to({
                    x: o.default.width / 2 - this._cutin.banner_top.width / 2
                }, 800, createjs.Ease.cubicInOut).to({
                    x: o.default.width - this._cutin.banner_top.width,
                    alpha: 0
                }, 800, createjs.Ease.cubicInOut), createjs.Tween.get(this._cutin.banner_bottom).wait(300).to({
                    alpha: 1
                }, 100).to({
                    x: o.default.width / 2 - this._cutin.banner_bottom.width / 2
                }, 800, createjs.Ease.cubicInOut).to({
                    x: 0,
                    alpha: 0
                }, 800, createjs.Ease.cubicInOut), createjs.Tween.get(this).wait(700).call(function () {
                    t._cutin.particles.startAnim()
                })
            }, e.prototype._createShipContainerU = function () {
                var t, e = this._ships[0],
                    i = this._ships[2],
                    n = this._ships[4];
                t = null == i ? [e] : null == n ? [i, e] : [i, e, n];
                for (var o = 0; o < t.length; o++) {
                    var r = t[o],
                        a = new l.ShipBanner;
                    a.update(r, !1), a.position.x = s.BannerSize.W * o, this._cutin.banner_top.addChild(a)
                }
            }, e.prototype._createShipContainerB = function () {
                var t, e = this._ships[1],
                    i = this._ships[3],
                    n = this._ships[5],
                    o = this._ships[6];
                t = null == n ? null == i ? null == e ? [] : [e] : [e, i] : null == o ? [n, e, i] : [n, e, i, o];
                for (var r = 0; r < t.length; r++) {
                    var a = t[r],
                        _ = new l.ShipBanner;
                    _.update(a, !1), _.position.x = s.BannerSize.W * r, this._cutin.banner_bottom.addChild(_)
                }
            }, e.prototype._endTask = function (e) {
                void 0 === e && (e = !1), r.default.view.overLayer.removeChild(this._cutin), this._cutin.dispose(), r.default.view.clickGuard = !1, t.prototype._endTask.call(this)
            }, e
        }(a.TaskBase);
    e.TaskExpeditionEndCutin = c
}