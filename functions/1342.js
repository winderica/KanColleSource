const function1342 = function (t, e, i) {
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
        r = i(4),
        s = i(33),
        a = i(252),
        _ = i(29),
        l = i(19),
        u = i(447),
        c = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                return n._onClickTaihi = function () {
                    null != n._cb_onYes && n._cb_onYes()
                }, n._onClickTaihiSezu = function () {
                    null != n._cb_onNo && n._cb_onNo()
                }, n._cb_onYes = e, n._cb_onNo = i, n._taihi = new h(n._onClickTaihi), n._taihi.position.set(438, 563), n.addChild(n._taihi), n._taihisezu = new p(n._onClickTaihiSezu), n._taihisezu.position.set(771, 563), n.addChild(n._taihisezu), n._ship_target = new s.ShipBanner, n._ship_target.position.set(344, 255), n.addChild(n._ship_target), n._txt1 = new PIXI.Sprite, n._txt1.position.set(584, 258), n.addChild(n._txt1), n._txt2 = new PIXI.Sprite, n._txt2.position.set(266, 347), n.addChild(n._txt2), n._ship_name = new r.TextBox(27, 16777215), n._ship_name.y = 258, n.addChild(n._ship_name), n._ship_level = new r.TextBox(18, 16777215), n._ship_level.y = 258, n.addChild(n._ship_level), n._ship_hp = new r.TextBox(18, 16777215), n._ship_hp.y = 291, n.addChild(n._ship_hp), n._title = new a.PhaseTitle, n._title.y = 17, n.addChild(n._title), n
            }
            return n(e, t), e.prototype.initialize = function () {
                this._taihi.initialize(), this._taihisezu.initialize(), this._txt1.texture = l.MAP_COMMON.getTexture(171), this._txt2.texture = l.MAP_COMMON.getTexture(174), this._title.initialize(!1), this._title.update(l.MAP_COMMON.getTexture(113)), this._title.activate()
            }, e.prototype.updateTargetShipBanner = function (t, e, i, n, r) {
                var s = "",
                    a = o.default.model.ship.getMst(t);
                null != a && (s = a.name);
                var l = _.ShipUtil.isDamaged(n, r),
                    u = _.ShipUtil.getDamageType(n, r);
                this._ship_target.updateImage(t, l);
                if (this._ship_target.updateIcon(!1, !1, u), this._ship_target.updateRing(i), this._ship_name.text = s, this._ship_name.x = 240 - this._ship_name.width, this._ship_name.x < 30) {
                    this._ship_name.x = 30;
                    var c = new PIXI.Graphics;
                    c.beginFill(16711680, .5), c.drawRect(0, 0, 210, 33), c.endFill(), this._ship_name.addChild(c), this._ship_name.mask = c
                }
                this._ship_level.text = "Lv " + e, this._ship_level.x = 338 - this._ship_level.width, this._ship_hp.text = n + "/" + r, this._ship_hp.x = 338 - this._ship_hp.width
            }, e.prototype.activate = function () {
                this._taihi.activate(), this._taihisezu.activate()
            }, e.prototype.deactivate = function () {
                this._taihi.deactivate(), this._taihisezu.deactivate()
            }, e.prototype.dispose = function () {
                this._taihi.dispose(), this._taihisezu.dispose(), this._title.dispose(), this._cb_onYes = null, this._cb_onNo = null
            }, e
        }(PIXI.Container);
    e.EscapeTankanView = c;
    var h = function (t) {
            function e(e) {
                return t.call(this, !1, e) || this
            }
            return n(e, t), e.prototype.initialize = function () {
                this._initialize(0)
            }, e.prototype._setTexture = function (t) {
                this._btn.texture = 1 == t ? l.MAP_COMMON.getTexture(14) : l.MAP_COMMON.getTexture(13), this._btn.x = -Math.round(this._btn.width / 2), this._btn.y = -Math.round(this._btn.height / 2)
            }, e
        }(u.WaveBtnBase),
        p = function (t) {
            function e(e) {
                return t.call(this, !0, e) || this
            }
            return n(e, t), e.prototype.initialize = function () {
                this._initialize(-3)
            }, e.prototype._setTexture = function (t) {
                this._btn.texture = 1 == t ? l.MAP_COMMON.getTexture(12) : l.MAP_COMMON.getTexture(11), this._btn.x = -Math.round(this._btn.width / 2), this._btn.y = -Math.round(this._btn.height / 2)
            }, e
        }(u.WaveBtnBase)
}