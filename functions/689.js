const function689 = function (t, e, i) {
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
        r = i(4),
        s = i(32),
        a = i(1),
        _ = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._onClickYES = function () {
                    e.onClickYES()
                }, e._onClickNO = function () {
                    e.onClickNO()
                };
                var i = new PIXI.Container;
                i.position.set(69, 153), e.firstShipInDeckBanners = new Array;
                for (var n = 0; n < 6; n++) {
                    var _ = new s.ShipBanner;
                    _.scale.set(.75, .75), _.y = 51 * n, _.visible = !1, e.firstShipInDeckBanners.push(_), i.addChild(_)
                }
                var l = new PIXI.Container;
                l.position.set(678, 153), e.secondShipInDeckBanners = new Array;
                for (var n = 0; n < 6; n++) {
                    var _ = new s.ShipBanner;
                    _.scale.set(.75, .75), _.y = 51 * n, _.visible = !1, e.secondShipInDeckBanners.push(_), l.addChild(_)
                }
                e.background = new PIXI.Sprite;
                var u = o.ORGANIZE_MAIN.getTexture(15);
                e.buttonOrganize = new PIXI.Sprite(u);
                var c = o.ORGANIZE_MAIN.getTexture(8);
                return e.buttonBack = new PIXI.Sprite(c), e.message = new PIXI.Sprite, e.firstDeckName = new r.TextBox(18, 16777215), e.secondDeckName = new r.TextBox(18, 16777215), e.firstDeckName.position.set(60, 122), e.secondDeckName.position.set(667, 122), e.buttonOrganize.position.set(300, 420), e.buttonBack.position.set(480, 420), e.buttonOrganize.interactive = e.buttonOrganize.buttonMode = !0, e.buttonBack.interactive = e.buttonBack.buttonMode = !0, e.buttonOrganize.addListener(a.EventType.CLICK, e._onClickYES), e.buttonBack.addListener(a.EventType.CLICK, e._onClickNO), e.addChild(e.background, e.message, e.buttonOrganize, e.buttonBack, e.firstDeckName, e.secondDeckName, i, l), e
            }
            return n(e, t), e.prototype.dispose = function () {
                this.removeChildren();
                for (var t = 0; t < this.firstShipInDeckBanners.length; t++) this.firstShipInDeckBanners[t].dispose(), this.firstShipInDeckBanners[t] = null;
                for (var t = 0; t < this.secondShipInDeckBanners.length; t++) this.secondShipInDeckBanners[t].dispose(), this.secondShipInDeckBanners[t] = null;
                this.firstDeckName.destroy(), this.secondDeckName.destroy(), this.onClickYES = null, this.onClickNO = null, this.background = null, this.buttonOrganize = null, this.buttonBack = null, this.message = null, this.firstDeckName = null, this.secondDeckName = null, this.firstShipInDeckBanners = null, this.secondShipInDeckBanners = null
            }, e.prototype.updateFirstDeck = function (t) {
                this.firstDeckName.text = t.name;
                for (var e = t.getShipList(), i = 0; i < e.length; i++) {
                    var n = this.firstShipInDeckBanners[i],
                        o = e[i];
                    n.visible = !1, o && (n.update(o, !1), n.visible = !0)
                }
            }, e.prototype.updateSecondDeck = function (t) {
                this.secondDeckName.text = t.name;
                for (var e = null != t.expedition, i = t.getShipList(), n = 0; n < i.length; n++) {
                    var o = this.secondShipInDeckBanners[n],
                        r = i[n];
                    o.visible = !1, r && (o.update(r, e), o.visible = !0)
                }
            }, e.prototype.updateCombineDeck = function (t, e) {
                this.updateFirstDeck(t), this.updateSecondDeck(e)
            }, e.prototype.updateViewType = function (t) {
                switch (t) {
                    case 1:
                        this.initKidoView();
                        break;
                    case 2:
                        this.initSuijoView();
                        break;
                    case 3:
                        this.initYusoView()
                }
            }, e.prototype.initKidoView = function () {
                var t = o.ORGANIZE_RENGO.getTexture(13);
                this.background.texture = t;
                var e = o.ORGANIZE_RENGO.getTexture(14);
                this.message.texture = e, this.message.position.set(213, 49)
            }, e.prototype.initSuijoView = function () {
                var t = o.ORGANIZE_RENGO.getTexture(19);
                this.background.texture = t;
                var e = o.ORGANIZE_RENGO.getTexture(20);
                this.message.texture = e, this.message.position.set(213, 49)
            }, e.prototype.initYusoView = function () {
                var t = o.ORGANIZE_RENGO.getTexture(22);
                this.background.texture = t;
                var e = o.ORGANIZE_RENGO.getTexture(23);
                this.message.texture = e, this.message.position.set(183, 49)
            }, e
        }(PIXI.Container);
    e.CombineConfirmDialog = _
}