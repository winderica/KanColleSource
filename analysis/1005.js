const function1005 = function (t, e, i) {
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
    var o = i(166), r = i(4), s = i(34), a = i(54), _ = i(1006), u = i(373), l = i(1018), c = i(1),
        h = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._enabled = !1, e._activated = !1, e._onClick = function () {
                    new _.TaskDetailInfo(e._model.id, e._model.flag, e._model.medal_num).start()
                }, e
            }

            return n(e, t), e.prototype.initialize = function () {
                var t = new PIXI.Sprite(a.SALLY_PRACTICE.getTexture(14)),
                    e = new PIXI.Sprite(a.SALLY_PRACTICE.getTexture(34));
                this._flag = new u.CompFlag, this._banner = new s.ShipBanner, this._name = new r.TextBox(18, 1949120), this._level = new r.TextBox(26, 4999235), this._comment = new r.TextBox(15, 4999235), this._rank_name = new r.TextBox(18, 4999235), this._medal = new o.MedalIcon, this._result_rank = new l.CompRank, this._hit_area = new PIXI.Graphics, this._hit_area.beginFill(0, 0), this._hit_area.drawRect(0, 0, 939, 79), this._hit_area.endFill(), this._medal.initialize(), this._result_rank.initialize(), t.position.set(295, 24), e.position.set(546, -3), this._flag.position.set(0, 16), this._banner.position.set(48, 0), this._name.position.set(294, 0), this._level.anchor.set(1, 0), this._level.position.set(624, -7), this._comment.position.set(310, 33), this._rank_name.position.set(637, 0), this._medal.position.set(750, 25), this._result_rank.position.set(817, 3), this._hit_area.position.set(-10, -7), this._hit_area.visible = !1, this.addChild(t), this.addChild(e), this.addChild(this._flag), this.addChild(this._banner), this.addChild(this._name), this.addChild(this._level), this.addChild(this._comment), this.addChild(this._rank_name), this.addChild(this._medal), this.addChild(this._result_rank), this.addChild(this._hit_area)
            }, e.prototype.update = function (t) {
                this._model = t, this._flag.update(t.flag), this._banner.updateImage(t.flagShipMstID, !1), this._name.text = t.name, this._level.text = t.level.toString(), this._comment.text = t.comment, this._rank_name.text = "[" + t.rank_name + "]", this._medal.update(t.medal_num, 9466926), this._result_rank.update(t.state), this._enabled = t.isNoBattle()
            }, e.prototype.activate = function () {
                0 == this._activated && 1 == this._enabled && (this._hit_area.interactive = this._hit_area.buttonMode = !0, this._hit_area.on(c.EventType.CLICK, this._onClick), this._hit_area.visible = !0, this._activated = !0)
            }, e.prototype.deactivate = function () {
                this._hit_area.interactive = this._hit_area.buttonMode = !1, this._hit_area.off(c.EventType.CLICK, this._onClick), this._hit_area.visible = !1, this._activated = !1
            }, e.prototype.dispose = function () {
                this.deactivate(), this.removeChildren(), this._banner.dispose(), this._name.destroy(), this._level.destroy(), this._comment.destroy(), this._rank_name.destroy(), this._medal.dispose(), this._result_rank.dispose()
            }, e
        }(PIXI.Container);
    e.CompRivalDeck = h
}