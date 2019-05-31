const function861 = function (t, e, i) {
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
    var o = i(339),
        r = i(3),
        s = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._materialList = {
                    fuel: r.REPAIR_MAIN.getTexture(26),
                    steel: r.REPAIR_MAIN.getTexture(27),
                    bucket: r.REPAIR_MAIN.getTexture(28)
                }, e._wire = new o.Wire, e._wire.rotation = Math.PI / 180 * 90, e.WIRE_WIDTH = e._wire.width;
                var i = new PIXI.Sprite(r.REPAIR_MAIN.getTexture(13));
                return e._material = new PIXI.Sprite, e._handContainer = new PIXI.Container, e._handContainer.position.set(-Math.floor(i.width / 2 + e._wire.height / 2), e.WIRE_WIDTH), e.initialize(), e._handContainer.addChild(i, e._material), e.addChild(e._wire, e._handContainer), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this.randomMaterial(), this.update(.3)
            }, e.prototype.randomMaterial = function () {
                var t = 50 < 100 * Math.random();
                this._material.texture = t ? this._materialList.fuel : this._materialList.steel, this._material.position.set(-7, 3), this._material.visible = !0
            }, e.prototype.bucketMaterial = function () {
                this._material.texture = this._materialList.bucket, this._material.position.set(-18, 0), this._material.visible = !0
            }, e.prototype.hideMaterial = function () {
                this._material.texture = PIXI.Texture.EMPTY, this._material.visible = !1
            }, e.prototype.update = function (t) {
                var e = this.WIRE_WIDTH * (1 - t);
                this._wire.width = e, this._handContainer.y = e - 3
            }, Object.defineProperty(e.prototype, "obj", {
                get: function () {
                    return {
                        wire: this._wire,
                        container: this._handContainer
                    }
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.getPosition = function (t) {
                var e = this.WIRE_WIDTH * (1 - t);
                return {
                    wire: {
                        width: e
                    },
                    container: {
                        y: e - 3
                    }
                }
            }, e.prototype.dispose = function () {
                this._wire.dispose(), this._handContainer.removeChildren(), this._wire = null, this._handContainer = null, this._material = null, this.removeChildren()
            }, e
        }(PIXI.Container);
    e.WireHand = s
}