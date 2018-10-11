const function584 = function (t, e, i) {
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
    var o = i(8), r = i(4), s = i(585), a = i(33), _ = i(279), u = i(586), l = i(102), c = i(280), h = i(149),
        p = i(591), d = i(1), f = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._initialized = !1, e._activated = !1, e._onClick = function () {
                    var t = new s.ExpeditionResultModel, i = new u.ExpeditionResultAPI(e._deck_id, t);
                    (new a.APIConnector).add(i).add(new _.PortAPI).add(new l.UseItemAPI).start(function () {
                        e._showExpeditionCutin(t)
                    })
                }, e._showExpeditionCutin = function (t) {
                    new c.TaskExpeditionEndCutin(e._deck_id, t).start(function () {
                        e._showExpeditionResult(t)
                    })
                }, e._showExpeditionResult = function (t) {
                    new p.TaskExpeditionResultShow(e._deck_id, t).start()
                }, e
            }

            return n(e, t), e.prototype.initialize = function (t) {
                this._deck_id = t, 0 == this._initialized && (this._bg = new o.AreaBox(0, 16711680), this.addChild(this._bg), this._balloon = new PIXI.Sprite(h.PORT_MAIN.getTexture(0)), this._balloon.position.set(726, 6), this.addChild(this._balloon), this._message = new r.TextBox(20, 1949120), this._message.position.set(810, 30), this._message.text = "\u9060\u5f81\u304b\u3089\u623b\u3063\u3066\u6765\u307e\u3057\u305f\u3002", this.addChild(this._message)), this._initialized = !0
            }, e.prototype.activate = function () {
                0 == this._activated && (this._activated = !0, this.interactive = this.buttonMode = !0, this.on(d.EventType.CLICK, this._onClick))
            }, e.prototype.deactive = function () {
                this.interactive = this.buttonMode = !1, this.off(d.EventType.CLICK, this._onClick), this._activated = !1
            }, e.prototype.dispose = function () {
                this.deactive(), this._initialized = !1, this.removeChildren(), this._bg = null, this._balloon = null, this._message && this._message.destroy(), this._message = null
            }, e
        }(PIXI.Container);
    e.ExpeditionAlert = f
}