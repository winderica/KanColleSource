const function744 = function (t, e, i) {
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
    var o = i(3),
        r = i(1),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._onClick = function () {
                    e.onClick()
                };
                var i = new PIXI.Sprite(o.SUPPLY_MAIN.getTexture(19)),
                    n = new PIXI.Sprite;
                return n.position.set(3, 3), n.buttonMode = !0, n.addListener(r.EventType.CLICK, e._onClick), e.addChild(i, n), e.background = i, e.checkState = n, e
            }
            return n(e, t), e.prototype.update = function (t) {
                switch (this.checkState.interactive = !1, t) {
                    case 1:
                        this.background.texture = o.SUPPLY_MAIN.getTexture(18), this.checkState.texture = o.SUPPLY_MAIN.getTexture(20);
                        break;
                    case 2:
                        this.background.texture = o.SUPPLY_MAIN.getTexture(19), this.checkState.texture = o.SUPPLY_MAIN.getTexture(21), this.checkState.interactive = !0;
                        break;
                    case 3:
                        this.background.texture = o.SUPPLY_MAIN.getTexture(19), this.checkState.texture = o.SUPPLY_MAIN.getTexture(22), this.checkState.interactive = !0
                }
            }, e.prototype.dispose = function () {
                this.background = null, this.checkState.removeListener(r.EventType.CLICK, this._onClick), this.checkState = null, this.onClick = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.SupplySelectAllButton = s
}