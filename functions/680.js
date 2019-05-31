const function680 = function (t, e, i) {
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
        r = i(681),
        s = i(111),
        a = i(687),
        _ = i(314),
        l = function (t) {
            function e() {
                var e = t.call(this) || this;
                e.SLOT_MAX = 6, e.shipSlots = [];
                for (var i = 0; i < e.SLOT_MAX; i++) {
                    var n = new a.ShipSlot(i),
                        o = _.ShipOffsetPosition[0] + _.ShipAreaPosition[i][0],
                        r = _.ShipOffsetPosition[1] + _.ShipAreaPosition[i][1];
                    n.position.set(o, r), e.shipSlots.push(n)
                }
                return e.arrowTopButton = new s.ArrowButton(!1), e.arrowBottomButton = new s.ArrowButton(!0), e.addChild(e.shipSlots[1], e.shipSlots[3], e.shipSlots[5], e.shipSlots[0], e.shipSlots[2], e.shipSlots[4]), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "ShipSlots", {
                get: function () {
                    return this.shipSlots
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "ArrowTopButton", {
                get: function () {
                    return this.arrowTopButton
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "ArrowBottomButton", {
                get: function () {
                    return this.arrowBottomButton
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.dispose = function () {
                this.removeChildren();
                for (var t = 0; t < this.shipSlots.length; t++) this.shipSlots[t].dispose(), this.shipSlots[t] = null;
                this.shipSlots = null, this.arrowTopButton.dispose(), this.arrowTopButton = null, this.arrowBottomButton.dispose(), this.arrowBottomButton = null, this.taskShipDetail && this.taskShipDetail.dispose(), this.taskShipDetail = null
            }, e.prototype.init = function (t, e, i) {
                this.shipSlots.forEach(function (n) {
                    n.activate(t, e, i)
                })
            }, e.prototype.initArrow = function (t) {
                this.arrowTopButton.position.set(686, 220), this.arrowBottomButton.position.set(683, 663), this.arrowTopButton.initialize(function () {
                    t && t(-2)
                }), this.arrowBottomButton.initialize(function () {
                    t && t(2)
                })
            }, e.prototype.show = function () {
                this.visible = !0
            }, e.prototype.hide = function () {
                this.visible = !1
            }, e.prototype.update = function (t, e) {
                for (var i = o.default.model.deck.get(t), n = null != i.expedition, r = i.getCount(), s = i.getShipList().length, a = 0; a < this.shipSlots.length; a++) {
                    var _ = this.shipSlots[a],
                        l = a + e,
                        u = i.getShipModel(l);
                    if (_.visible = !1, u) _.visible = !0, _.update(l, u, n), _.open();
                    else if (l < s) {
                        var c = r < s,
                            h = l == r,
                            p = 0 == n,
                            d = p && c && h;
                        _.visible = !0, _.updateEmpty(l, d), _.close()
                    }
                }
                this.arrowBottomButton.visible = !1, this.arrowTopButton.visible = !1, this.arrowBottomButton.deactivate(), this.arrowTopButton.deactivate(), 0 < e && (this.arrowTopButton.visible = !0, this.arrowTopButton.activate()), this.shipSlots.length + e < s && (this.arrowBottomButton.visible = !0, this.arrowBottomButton.activate())
            }, e.prototype.shutterAnimation = function (t, e, i) {
                var n = this.shipSlots[t];
                n.closeAnimation(function () {
                    e && e(), n.close();
                    createjs.Tween.get(null).wait(100).call(function () {
                        n.openAnimation(function () {
                            i && i()
                        }, 200)
                    })
                }, 200)
            }, e.prototype.onShipDetail = function (t, e, i) {
                var n = this;
                this.taskShipDetail = new r.TaskShipDetail(e), this.taskShipDetail.onClickBack = function () {
                    n.taskShipDetail.hide(function () {
                        n.taskShipDetail.dispose(), n.taskShipDetail = null, i && i()
                    })
                }, this.taskShipDetail.start(t)
            }, e
        }(PIXI.Container);
    e.ShipSlotLayer = l
}