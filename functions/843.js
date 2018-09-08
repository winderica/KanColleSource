const function843 = function (t, e, i) {
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
    var o = i(844), r = i(845), s = i(850), a = i(3), _ = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            i._onClickExtension = function (t) {
                i.onClickExtension(t)
            }, i._onClickHiSpeed = function (t) {
                i.onClickHiSpeed(t)
            }, i._onClickEmptySlot = function (t) {
                i.onClickEmptySlot(t)
            };
            var n = new PIXI.Sprite(a.COMMON_MAIN.getTexture(64));
            n.position.set(0, 105);
            var _ = new PIXI.Sprite(a.REPAIR_MAIN.getTexture(0));
            _.anchor.y = .5, _.position.set(199, 20), n.addChild(_), i.addChild(n);
            var u = new PIXI.Container;
            u.position.set(195, 180);
            for (var l = [], c = [], h = [], p = 0; p < 4; p++) {
                var d = e[p], f = new s.EmptyDock;
                f.onClick = i._onClickEmptySlot, f.position.set(0, 123 * p), f.visible = !1, l.push(f), u.addChild(f);
                var y = new r.ShipInDock;
                if (y.onClickHiSpeed = i._onClickHiSpeed, y.position.set(0, 123 * p), y.visible = !1, c.push(y), u.addChild(y), -1 === d.state) {
                    var v = new o.ExtensionDock;
                    v.update(-1, !1, !1), v.onClick = i._onClickExtension, v.position.set(0, 123 * p), v.visible = !1, h.push(v), u.addChild(v)
                } else h.push(null)
            }
            return i.emptyDocks = l, i.shipInDocks = c, i.extensionDocks = h, i.addChild(u), i
        }

        return n(e, t), e.prototype.updateTime = function (t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i], o = this.shipInDocks[i];
                1 == n.state && o.updateTime(t, n.completeTime)
            }
        }, e.prototype.highSpeedAnimation = function (t, e) {
            this.shipInDocks[t].playHispeed(e)
        }, e.prototype.hideAnimation = function (t, e) {
            for (var i = Date.now(), n = !1, o = 0; o < t.length; o++) {
                var r = this.shipInDocks[o];
                if (0 == t[o].state) {
                    var s = function () {
                    };
                    0 == n && (s = function () {
                        e()
                    }, n = !0), r.playTimelimit(i, s)
                }
            }
        }, e.prototype.updateHighSpeedButton = function (t, e) {
            this.shipInDocks[t].updateUsable(e)
        }, e.prototype.updateExtensionState = function (t, e) {
            for (var i = !1, n = 0; n < this.extensionDocks.length; n++) {
                var o = this.extensionDocks[n];
                if (null !== o) {
                    var r = t[n];
                    0 == i ? (o.update(r.mstID, !0, e), i = !0) : o.update(r.mstID, !1, !1)
                }
            }
        }, e.prototype.updateDockInfo = function (t, e, i, n) {
            this.shipInDocks[t].updateDockInfo(i, n), this.emptyDocks[t].update(i);
            var o = this.extensionDocks[t];
            null !== o && o.update(i, !1, !1)
        }, e.prototype.stopAnimation = function (t) {
            this.shipInDocks[t].stopAnimation()
        }, e.prototype.playAnimation = function (t) {
            this.shipInDocks[t].playAnimation()
        }, e.prototype.unLockAnimation = function (t, e) {
            this.emptyDocks[t].alpha = 0, this.emptyDocks[t].visible = !0, this.extensionDocks[t].visible = !1, createjs.Tween.get(this.emptyDocks[t]).to({ alpha: 1 }, 1500).call(function () {
                e()
            }).play(null)
        }, e.prototype.updateViewState = function (t, e) {
            var i = this.shipInDocks[t];
            i.updateState(e), this.emptyDocks[t].visible = !1, i.visible = !1;
            var n = this.extensionDocks[t];
            switch (null !== n && (n.visible = !1), e) {
                case-1:
                    n.visible = !0;
                    break;
                case 0:
                    this.emptyDocks[t].visible = !0;
                    break;
                case 1:
                    i.visible = !0
            }
        }, e.prototype.updateShipInfo = function (t, e, i, n, o, r, s, a, _, u) {
            this.shipInDocks[t].updateShipInfo(r, o, a, e, i, n, _, u)
        }, e.prototype.dockState = function (t) {
            return this.shipInDocks[t].state
        }, e.prototype.forceEnd = function (t) {
            this.updateViewState(t, 0), this.shipInDocks[t].playTimelimit(Date.now(), function () {
            })
        }, e.prototype.dispose = function () {
            for (var t = 0; t < this.emptyDocks.length; t++) this.emptyDocks[t].dispose(), this.emptyDocks[t] = null;
            for (var t = 0; t < this.shipInDocks.length; t++) this.shipInDocks[t].dispose(), this.shipInDocks[t] = null;
            for (var t = 0; t < this.extensionDocks.length; t++) null !== this.extensionDocks[t] && (this.extensionDocks[t].dispose(), this.extensionDocks[t] = null);
            this.onClickHiSpeed = null, this.onClickEmptySlot = null, this.onClickExtension = null, this.emptyDocks = null, this.shipInDocks = null, this.extensionDocks = null, this.removeChildren()
        }, e
    }(PIXI.Container);
    e.MainView = _
}