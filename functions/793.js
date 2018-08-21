const function793 = function (t, e, i) {
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
    var o = i(3), r = i(0), s = i(4), a = i(32), _ = i(132), u = i(3), l = i(794), c = i(1), h = function (t) {
        function e() {
            var e = t.call(this) || this;
            e._onClickYES = function () {
                e.onClickYES()
            }, e._onClickNO = function () {
                e.onClickNO()
            };
            var i = new PIXI.Sprite(o.COMMON_MAIN.getTexture(59));
            e.btn_no = new PIXI.Sprite(u.REMODEL_GRADEUP.getTexture(2)), e.btn_yes = new PIXI.Sprite(u.REMODEL_GRADEUP.getTexture(6));
            var n = new PIXI.Sprite(u.REMODEL_POWERUP.getTexture(0));
            e.shipBanner = new a.ShipBanner;
            var _ = new s.TextBox(19, 1949120), h = new s.TextBox(19, 1949120), p = new s.TextBox(19, 1949120);
            e.containerName = new PIXI.Container, e.containerNames = new PIXI.Container;
            var d = new PIXI.Sprite(r.default.resources.getUIImage("mask")),
                f = new PIXI.Sprite(r.default.resources.getUIImage("mask"));
            return d.scale.set(-2.8, 3.5), d.anchor.x = 1, f.scale.set(-2.8, 3.5), f.anchor.x = 1, e.textName = new s.TextBox(19, 16777215), e.textNames = new s.TextBox(19, 16777215), e.iconCategories = new l.IconCategories, _.text = "\u5f37\u5316\u3059\u308b\u8266\u8239", h.text = "\u5408\u6210\u7d20\u6750\u306e\u8266\u8239", p.text = "\u5f37\u5316\u9805\u76ee", _.position.set(414, 201), h.position.set(414, 309), p.position.set(414, 483), e.containerName.addChild(e.textName, d), e.containerName.mask = d, e.containerName.position.set(617, 201), e.containerNames.addChild(e.textNames, f), e.containerNames.mask = f, e.containerNames.position.set(617, 309), e.iconCategories.position.set(617, 473), e.shipBanner.position.set(623, 234), i.position.set(86, 60), n.position.set(516, 20), e.btn_no.position.set(377, 588), e.btn_yes.position.set(639, 588), e.btn_yes.interactive = e.btn_yes.buttonMode = !0, e.btn_no.interactive = e.btn_no.buttonMode = !0, e.btn_yes.on(c.EventType.CLICK, e._onClickYES), e.btn_no.on(c.EventType.CLICK, e._onClickNO), e.addChild(i, n, e.btn_no, e.btn_yes, e.shipBanner, _, h, p, e.containerName, e.containerNames, e.iconCategories), e
        }

        return n(e, t), e.prototype.dispose = function () {
            this.containerName.removeChildren(), this.containerNames.removeChildren(), this.containerName.mask = null, this.containerNames.mask = null, this.shipBanner.dispose(), this.iconCategories.dispose(), this.btn_yes.off(c.EventType.CLICK), this.btn_no.off(c.EventType.CLICK), this.onClickYES = this._onClickYES = null, this.onClickNO = this._onClickNO = null, this.iconCategories = null, this.textName = null, this.textNames = null, this.shipBanner = null, this.btn_yes = null, this.containerName = null, this.containerNames = null, this.btn_no = null, this.removeChildren()
        }, e.prototype.update = function (t, e, i) {
            this.containerName.cacheAsBitmap = !1, this.containerNames.cacheAsBitmap = !1;
            for (var n = "", o = 0; o < e.length; o++) {
                var r = e[o];
                r.mstID;
                n += r.shipTypeName + " \u300c" + r.name + "\u300d\n"
            }
            var s = {};
            s[_.PowerUpCategory.Karyoku] = i.karyoku, s[_.PowerUpCategory.Raisou] = i.raiso, s[_.PowerUpCategory.Taiku] = i.taiku, s[_.PowerUpCategory.Soukou] = i.souko, this.iconCategories.update(s), this.textNames.text = n, this.textName.text = t.shipTypeName + " \u300c" + t.name + "\u300d", this.shipBanner.update(t, !1), this.containerName.cacheAsBitmap = !0, this.containerNames.cacheAsBitmap = !0
        }, e
    }(PIXI.Container);
    e.PowerUpStartConfirm = h
}