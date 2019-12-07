const function372 = function (t, e, i) {
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
    var o = i(41),
        r = i(236),
        s = i(1015),
        a = i(1018),
        _ = i(360),
        l = function (t) {
            function e(e, i) {
                var n = t.call(this, e) || this;
                n._onMouseOver = function (t) {
                    n._strategy_map.update(t)
                }, n._onMouseOut = function (t) {};
                var r = o.SALLY_EVENT.getTexture(4),
                    _ = new PIXI.Sprite(r);
                return _.position.set(182, 207), n.addChild(_), n._strategy_map = new s.StrategyMap, n._strategy_map.position.set(204, 261), n.addChild(n._strategy_map), n._airunitbtn = new a.AirUnitBtn(i), n._airunitbtn.position.set(206, 570), n._airunitbtn.visible = !1, n.addChild(n._airunitbtn), n
            }
            return n(e, t), e.prototype.initialize = function (e) {
                t.prototype.initialize.call(this, e);
                var i = e[this.offset].mst_id;
                this._strategy_map.update(i), this._airunitbtn.initialize()
            }, e.prototype.updateAirUnitEnabled = function (e) {
                t.prototype.updateAirUnitEnabled.call(this, e), this._airunitbtn.visible = e, 1 == e ? this._airunitbtn.activate() : this._airunitbtn.deactivate()
            }, e.prototype.dispose = function () {
                t.prototype.dispose.call(this), this._strategy_map.dispose(), this._airunitbtn.dispose(), _.EventOperationVoice.killVoice()
            }, e
        }(r.LayoutBase);
    e.EventLayoutBase = l
}