const function773 = function (t, e, i) {
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
    var o = i(3), r = i(1), s = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onMouseOver = function () {
                e.gauge_on.visible = !0, e.huki.visible = !0
            }, e._onMouseOut = function () {
                e.gauge_on.visible = !1, e.huki.visible = !1
            }, e._onClick = function () {
                e.onClick()
            };
            var i = o.REMODEL_MAIN.getTexture(23), n = o.REMODEL_MAIN.getTexture(24),
                s = o.REMODEL_MAIN.getTexture(25), a = o.REMODEL_MAIN.getTexture(26),
                _ = o.REMODEL_MAIN.getTexture(27), u = o.REMODEL_MAIN.getTexture(28),
                l = o.REMODEL_MAIN.getTexture(29), c = o.REMODEL_MAIN.getTexture(30),
                h = o.REMODEL_MAIN.getTexture(31), p = o.REMODEL_MAIN.getTexture(32), d = new PIXI.Sprite,
                f = new PIXI.Sprite, y = new PIXI.Sprite(o.REMODEL_MAIN.getTexture(50)),
                v = new PIXI.Sprite(o.REMODEL_MAIN.getTexture(35));
            return f.visible = !1, v.visible = !1, y.addListener(r.EventType.MOUSEOVER, e._onMouseOver), y.addListener(r.EventType.MOUSEOUT, e._onMouseOut), y.addListener(r.EventType.CLICK, e._onClick), y.interactive = y.buttonMode = !0, y.anchor.x = .5, y.x = 11, v.position.x = -6, e.addChild(d, f, y, v), e.textureGauge1 = i, e.textureGauge1_on = n, e.textureGauge2 = s, e.textureGauge2_on = a, e.textureGauge3 = _, e.textureGauge3_on = u, e.textureGauge4 = l, e.textureGauge4_on = c, e.textureGauge5 = h, e.textureGauge5_on = p, e.gauge = d, e.gauge_on = f, e.slotIconDelete = y, e.huki = v, e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.slotIconDelete.removeAllListeners(r.EventType.CLICK), this.slotIconDelete.removeAllListeners(r.EventType.MOUSEOUT), this.slotIconDelete.removeAllListeners(r.EventType.MOUSEOVER), this.gauge.texture = PIXI.Texture.EMPTY, this.gauge_on.texture = PIXI.Texture.EMPTY, this.slotIconDelete.texture = PIXI.Texture.EMPTY, this.huki.texture = PIXI.Texture.EMPTY, this.onClick = this._onClick = null, this._onMouseOver = null, this._onMouseOut = null, this.gauge = null, this.gauge_on = null, this.slotIconDelete = null, this.huki = null, this.textureGauge1 = null, this.textureGauge1_on = null, this.textureGauge2 = null, this.textureGauge2_on = null, this.textureGauge3 = null, this.textureGauge3_on = null, this.textureGauge4 = null, this.textureGauge4_on = null, this.textureGauge5 = null, this.textureGauge5_on = null, this.removeChildren()
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