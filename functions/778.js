const function778 = function (t, e, i) {
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
                return e._onMouseOver = function () {
                    e.gauge_on.visible = !0, e.huki.visible = !0
                }, e._onMouseOut = function () {
                    e.gauge_on.visible = !1, e.huki.visible = !1
                }, e._onClick = function () {
                    e.onClick()
                }, e.textureGauge1 = o.REMODEL_MAIN.getTexture(23), e.textureGauge1_on = o.REMODEL_MAIN.getTexture(24), e.textureGauge2 = o.REMODEL_MAIN.getTexture(25), e.textureGauge2_on = o.REMODEL_MAIN.getTexture(26), e.textureGauge3 = o.REMODEL_MAIN.getTexture(27), e.textureGauge3_on = o.REMODEL_MAIN.getTexture(28), e.textureGauge4 = o.REMODEL_MAIN.getTexture(29), e.textureGauge4_on = o.REMODEL_MAIN.getTexture(30), e.textureGauge5 = o.REMODEL_MAIN.getTexture(31), e.textureGauge5_on = o.REMODEL_MAIN.getTexture(32), e.gauge = new PIXI.Sprite, e.gauge_on = new PIXI.Sprite, e.gauge_on.visible = !1, e.huki = new PIXI.Sprite(o.REMODEL_MAIN.getTexture(35)), e.huki.position.x = -6, e.huki.visible = !1, e.slotIconDelete = new PIXI.Sprite(o.REMODEL_MAIN.getTexture(50)), e.slotIconDelete.on(r.EventType.MOUSEOVER, e._onMouseOver), e.slotIconDelete.on(r.EventType.MOUSEOUT, e._onMouseOut), e.slotIconDelete.on(r.EventType.CLICK, e._onClick), e.slotIconDelete.interactive = e.slotIconDelete.buttonMode = !0, e.slotIconDelete.anchor.x = .5, e.slotIconDelete.x = 11, e.addChild(e.gauge, e.gauge_on, e.slotIconDelete, e.huki), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.slotIconDelete.off(r.EventType.CLICK), this.slotIconDelete.off(r.EventType.MOUSEOUT), this.slotIconDelete.off(r.EventType.MOUSEOVER), this.onClick = null, this.gauge = null, this.gauge_on = null, this.slotIconDelete = null, this.huki = null, this.textureGauge1 = null, this.textureGauge1_on = null, this.textureGauge2 = null, this.textureGauge2_on = null, this.textureGauge3 = null, this.textureGauge3_on = null, this.textureGauge4 = null, this.textureGauge4_on = null, this.textureGauge5 = null, this.textureGauge5_on = null, this.removeChildren()
            }, e.prototype.update = function (t) {
                switch (t) {
                    case 0:
                        this.visible = !1;
                        break;
                    case 1:
                        this.gauge.texture = this.textureGauge1, this.gauge_on.texture = this.textureGauge1_on, this.slotIconDelete.y = 32 + this.slotIconDelete.height, this.slotIconDelete.visible = !0, this.huki.position.y = 35;
                        break;
                    case 2:
                        this.gauge.texture = this.textureGauge2, this.gauge_on.texture = this.textureGauge2_on, this.slotIconDelete.y = 81 + this.slotIconDelete.height, this.slotIconDelete.visible = !0, this.huki.position.y = 84;
                        break;
                    case 3:
                        this.gauge.texture = this.textureGauge3, this.gauge_on.texture = this.textureGauge3_on, this.slotIconDelete.y = 131 + this.slotIconDelete.height, this.slotIconDelete.visible = !0, this.huki.position.y = 134;
                        break;
                    case 4:
                        this.gauge.texture = this.textureGauge4, this.gauge_on.texture = this.textureGauge4_on, this.slotIconDelete.y = 180 + this.slotIconDelete.height, this.slotIconDelete.visible = !0, this.huki.position.y = 183;
                        break;
                    case 5:
                        this.gauge.texture = this.textureGauge5, this.gauge_on.texture = this.textureGauge5_on, this.slotIconDelete.y = 230 + this.slotIconDelete.height, this.slotIconDelete.visible = !0, this.huki.position.y = 233
                }
            }, e
        }(PIXI.Container);
    e.DetachAllButton = s
}