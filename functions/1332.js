const function1332 = function (t, e, i) {
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
    var o = i(443),
        r = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._CHUHA_ = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50], e._TAIHA_ = [51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99], e.run = function (t) {
                    for (var i = t.target.target.time, n = 0; n < e.txtParts.length; n++) e.txtParts[n].Update(i)
                }, e.callBack = null, e
            }
            return n(e, t), e.prototype.Initialize = function (t) {
                var e = [new PIXI.Point(0, 175), new PIXI.Point(375, 181), new PIXI.Point(262, 160), new PIXI.Point(246, 321), new PIXI.Point(307, 298), new PIXI.Point(291, 273), new PIXI.Point(445, 355), new PIXI.Point(399, 334), new PIXI.Point(400, 310), new PIXI.Point(364, 291), new PIXI.Point(384, 280), new PIXI.Point(405, 268), new PIXI.Point(429, 309), new PIXI.Point(441, 262), new PIXI.Point(439, 247), new PIXI.Point(439, 258), new PIXI.Point(466, 241), new PIXI.Point(468, 201), new PIXI.Point(433, 156), new PIXI.Point(426, 208), new PIXI.Point(408, 162), new PIXI.Point(406, 241), new PIXI.Point(363, 250), new PIXI.Point(357, 265), new PIXI.Point(351, 216), new PIXI.Point(339, 157), new PIXI.Point(342, 156), new PIXI.Point(246, 105), new PIXI.Point(432, 156), new PIXI.Point(168, 163), new PIXI.Point(216, 163), new PIXI.Point(247, 213), new PIXI.Point(172, 258), new PIXI.Point(177, 225), new PIXI.Point(142, 175), new PIXI.Point(69, 186), new PIXI.Point(0, 211), new PIXI.Point(49, 169), new PIXI.Point(139, 166), new PIXI.Point(157, 117), new PIXI.Point(133, 99), new PIXI.Point(1, 21), new PIXI.Point(4, 1), new PIXI.Point(124, 27), new PIXI.Point(163, 72), new PIXI.Point(213, 84), new PIXI.Point(169, 1), new PIXI.Point(121, 1), new PIXI.Point(261, 186)];
                new PIXI.Point(0, 0), new PIXI.Point(378, 184), new PIXI.Point(259, 159), new PIXI.Point(247, 322), new PIXI.Point(310, 298), new PIXI.Point(294, 270), new PIXI.Point(445, 352), new PIXI.Point(400, 336), new PIXI.Point(405, 315), new PIXI.Point(366, 292), new PIXI.Point(385, 288), new PIXI.Point(406, 271), new PIXI.Point(430, 309), new PIXI.Point(444, 261), new PIXI.Point(442, 252), new PIXI.Point(442, 256), new PIXI.Point(0, 0), new PIXI.Point(396, 141), new PIXI.Point(436, 156), new PIXI.Point(427, 208), new PIXI.Point(411, 162), new PIXI.Point(408, 244), new PIXI.Point(364, 255), new PIXI.Point(355, 276), new PIXI.Point(354, 214), new PIXI.Point(336, 159), new PIXI.Point(343, 156), new PIXI.Point(244, 105), new PIXI.Point(198, 148), new PIXI.Point(168, 165), new PIXI.Point(217, 163), new PIXI.Point(247, 213), new PIXI.Point(172, 259), new PIXI.Point(0, 0), new PIXI.Point(142, 175), new PIXI.Point(70, 186), new PIXI.Point(3, 211), new PIXI.Point(49, 171), new PIXI.Point(139, 166), new PIXI.Point(157, 118), new PIXI.Point(135, 99), new PIXI.Point(0, 22), new PIXI.Point(0, 0), new PIXI.Point(124, 25), new PIXI.Point(165, 73), new PIXI.Point(211, 84), new PIXI.Point(169, 1), new PIXI.Point(121, 0), new PIXI.Point(261, 186);
                this.txtParts = [];
                for (var i = 0; i < 49; i++) {
                    var n = t ? this._TAIHA_ : this._CHUHA_,
                        r = n[i],
                        a = o.BATTLE_CUTIN_DAMAGE.getTexture(r),
                        _ = new PIXI.Sprite(a);
                    _.x = e[i].x, _.y = e[i].y;
                    var l = new s(_);
                    this.txtParts.push(l), this.addChild(_)
                }
            }, e.prototype.Dispose = function () {
                this.removeChildren(0, this.children.length);
                for (var t = 0; t < this.txtParts.length; t++) this.txtParts[t].Dispose(), this.txtParts[t] = null;
                this.txtParts = null, this.tween.setPaused(!0), this.tween.removeAllEventListeners("change"), this.tween = null
            }, e.prototype.Play = function (t) {
                var e = this;
                this.callBack = t;
                var i = {
                    time: 0
                };
                this.tween = createjs.Tween.get(i, {
                    onChange: this.run
                }).to({
                    time: 1
                }, 2300).call(function () {
                    null != e.callBack && e.callBack()
                })
            }, e
        }(PIXI.Container);
    e.BreakText = r;
    var s = function () {
        function t(t) {
            this.sprite = t, this.sprite.anchor.set(.5, .5), this.sprite.position.set(this.sprite.position.x + .5 * this.sprite.width, this.sprite.position.y + .5 * this.sprite.height), this.fromPos = new PIXI.Point(this.sprite.x, this.sprite.y), this.toRot = (720 * Math.random() - 360) * Math.PI / 180, this.toX = 2400 * Math.random() - 1200, this.ctrlY = this.sprite.y - 1400 * Math.random()
        }
        return t.prototype.Dispose = function () {
            this.sprite = null, this.fromPos = null, this.toRot = null, this.toX = null, this.ctrlY = null
        }, t.prototype.Update = function (t) {
            this.sprite.rotation = 0 + this.toRot * t, this.sprite.x = this.fromPos.x + this.toX * t, this.sprite.y = this.setBezierPos(t, this.fromPos.y, 1050, this.ctrlY)
        }, t.prototype.setBezierPos = function (t, e, i, n) {
            return (1 - t) * (1 - t) * e + 2 * (1 - t) * t * n + t * t * i
        }, t
    }();
    e.Parts = s
}