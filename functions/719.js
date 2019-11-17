const function719 = function (t, e, i) {
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
        s = i(2),
        a = i(22),
        _ = i(33),
        l = i(287),
        u = function (t) {
            function e(e) {
                var i = t.call(this) || this;
                return i._deck_id = e, i
            }
            return n(e, t), e.prototype._start = function () {
                r.default.view.clickGuard = !0, this._cutin = new l.ExpeditionCutin, this._cutin.initialize(!0), this._loadShipRespirces()
            }, e.prototype._loadShipRespirces = function () {
                this._anim()
            }, e.prototype._anim = function () {
                var t = this,
                    e = r.default.model.deck.get(this._deck_id),
                    i = e.getShipList();
                this._createShipContainerU(i), this._createShipContainerB(i), this._cutin.bg.scale.set(1, 0), this._cutin.message.position.set(1440, 360), this._cutin.banner_top.position.set(0, 243), this._cutin.banner_top.alpha = 0, this._cutin.banner_bottom.position.set(o.default.width - this._cutin.banner_bottom.width, 417), this._cutin.banner_bottom.alpha = 0, r.default.view.overLayer.addChild(this._cutin), createjs.Tween.get(this._cutin.bg.scale).to({
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
                    x: 600 - this._cutin.banner_top.width / 2
                }, 800, createjs.Ease.cubicInOut).to({
                    x: o.default.width - this._cutin.banner_top.width,
                    alpha: 0
                }, 800, createjs.Ease.cubicInOut), createjs.Tween.get(this._cutin.banner_bottom).wait(300).to({
                    alpha: 1
                }, 100).to({
                    x: 600 - this._cutin.banner_bottom.width / 2
                }, 800, createjs.Ease.cubicInOut).to({
                    x: 0,
                    alpha: 0
                }, 800, createjs.Ease.cubicInOut), createjs.Tween.get(this).wait(700).call(function () {
                    t._cutin.particles.startAnim()
                })
            }, e.prototype._createShipContainerU = function (t) {
                var e, i = t[0],
                    n = t[2],
                    o = t[4];
                e = null == n ? [i] : null == o ? [n, i] : [n, i, o];
                for (var r = 0; r < e.length; r++) {
                    var s = e[r],
                        l = new _.ShipBanner;
                    l.update(s, !0), l.position.x = a.BannerSize.W * r, this._cutin.banner_top.addChild(l)
                }
            }, e.prototype._createShipContainerB = function (t) {
                var e, i = t[1],
                    n = t[3],
                    o = t[5],
                    r = t[6];
                e = null == o ? null == n ? null == i ? [] : [i] : [i, n] : null == r ? [o, i, n] : [o, i, n, r];
                for (var s = 0; s < e.length; s++) {
                    var l = e[s],
                        u = new _.ShipBanner;
                    u.update(l, !0), u.position.x = a.BannerSize.W * s, this._cutin.banner_bottom.addChild(u)
                }
            }, e.prototype._endTask = function (e) {
                void 0 === e && (e = !1), r.default.view.overLayer.removeChild(this._cutin), this._cutin.dispose(), r.default.view.clickGuard = !1, t.prototype._endTask.call(this)
            }, e
        }(s.TaskBase);
    e.TaskExpeditionStartCutin = u
}