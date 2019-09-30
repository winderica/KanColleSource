const function328 = function (t, e, i) {
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
    var o, r = i(0),
        s = i(3),
        a = i(4);
    ! function (t) {
        t[t.Top = 0] = "Top", t[t.Bottom = 1] = "Bottom"
    }(o = e.Direction || (e.Direction = {}));
    var _ = function (t) {
        function e() {
            var e = t.call(this) || this;
            e.balloon = new PIXI.Sprite, e.shipInfos = new Array;
            var i = new l,
                n = new l,
                o = new l,
                r = new l,
                a = new l,
                _ = new l;
            e.container = new PIXI.Container, i.position.set(0, 0), n.position.set(190, 0), o.position.set(0, 43), r.position.set(190, 43), a.position.set(0, 85), _.position.set(190, 85);
            var u = s.ORGANIZE_MAIN.getTexture(34);
            e.balloon.texture = u, e.shipInfos.push(i, n, o, r, a, _);
            for (var c = 0; c < e.shipInfos.length; c++) {
                var h = e.shipInfos[c];
                e.container.addChild(h)
            }
            return e.addChild(e.balloon, e.container), e
        }
        return n(e, t), e.prototype.dispose = function () {
            for (var t = 0; t < this.shipInfos.length; t++) this.shipInfos[t].dispose(), this.shipInfos[t] = null;
            this.shipInfos = null, this.balloon = null, this.container = null, this.removeChildren()
        }, e.prototype.update = function (t, e, i) {
            for (var n = i.getShipCount(), a = 0; a < 6; a++) {
                var _ = this.shipInfos[a];
                if (a < n) {
                    if (i.isLostShip(a)) _.updateLost();
                    else {
                        var l = i.ships[a],
                            u = r.default.model.ship.getMst(l.mstID).getClassType(),
                            c = 0 == i.isOtherDeckShip(a, t);
                        _.update(l.name, u, l.shipTypeID, c)
                    }
                } else _.updateUnSet()
            }
            switch (e) {
                case o.Bottom:
                    var h = s.ORGANIZE_MAIN.getTexture(34);
                    this.balloon.texture = h, this.container.position.set(3, 6);
                    break;
                case o.Top:
                    var p = s.ORGANIZE_MAIN.getTexture(35);
                    this.balloon.texture = p, this.container.position.set(4, 16)
            }
        }, e.prototype.getFinePosition = function (t) {
            switch (t) {
                case o.Bottom:
                    return new PIXI.Point(-192, -157);
                case o.Top:
                    return new PIXI.Point(-192, -3)
            }
            return new PIXI.Point
        }, e
    }(PIXI.Container);
    e.PresetPreviewBalloon = _;
    var l = function (t) {
        function e() {
            var e = t.call(this) || this,
                i = r.default.resources.getUIImage("mask"),
                n = new PIXI.Sprite(i);
            return e.shipShadow = new PIXI.Sprite, e.containerName = new PIXI.Container, e.textName = new a.TextBox(18, 5523516), e.shipShadow.position.set(0, 10), e.containerName.position.set(69, 10), n.anchor.set(1, 0), n.scale.x = -1, e.containerName.mask = n, e.containerName.addChild(e.textName, n), e.addChild(e.shipShadow, e.containerName), e
        }
        return n(e, t), e.prototype.dispose = function () {
            this.removeChildren(), this.containerName.cacheAsBitmap = !1, this.containerName.removeChildren(), this.containerName.mask = null, this.textName.destroy(), this.containerName = null, this.textName = null, this.shipShadow = null
        }, e.prototype.update = function (t, e, i, n) {
            this.containerName.cacheAsBitmap = !1, this.textName.text = t;
            var o = this.getShadowTextureName(e, i),
                r = s.ORGANIZE_SHIP.getTexture(o);
            this.shipShadow.texture = r, this.shipShadow.alpha = 1, this.textName.alpha = 1, this.shipShadow.position.set(0, 10), this.shipShadow.alpha = .5, this.textName.alpha = .5, n && (this.shipShadow.alpha = 1, this.textName.alpha = 1), this.containerName.cacheAsBitmap = !0
        }, e.prototype.updateLost = function () {
            this.containerName.cacheAsBitmap = !1, this.textName.text = "\u9664\u7c4d\u8266", this.shipShadow.position.set(8, 8);
            var t = s.ORGANIZE_SHIP.getTexture(0);
            this.shipShadow.texture = t, this.shipShadow.alpha = .5, this.textName.alpha = .5, this.containerName.cacheAsBitmap = !0
        }, e.prototype.updateUnSet = function () {
            this.containerName.cacheAsBitmap = !1, this.textName.alpha = 0, this.shipShadow.alpha = 0, this.containerName.cacheAsBitmap = !0
        }, e.prototype.getShadowTextureName = function (t, e) {
            switch (t) {
                case 37:
                    return 11;
                case 41:
                    return 13;
                case 52:
                    return 14
            }
            switch (e) {
                case 1:
                    return 15;
                case 2:
                    return 1;
                case 3:
                    return 12;
                case 4:
                    return 17;
                case 5:
                    return 16;
                case 6:
                    return 18;
                case 7:
                    return 21;
                case 8:
                case 9:
                    return 19;
                case 10:
                    return 20;
                case 11:
                    return 22;
                case 12:
                    return 19;
                case 13:
                    return 2;
                case 14:
                    return 3;
                case 15:
                    return 10;
                case 16:
                    return 4;
                case 17:
                    return 8;
                case 18:
                    return 6;
                case 19:
                    return 7;
                case 20:
                    return 5;
                case 21:
                    return 9;
                case 22:
                    return 10
            }
        }, e
    }(PIXI.Container)
}