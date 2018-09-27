const function602 = function (t, e, i) {
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
    var o = i(0), r = i(187), s = i(603), a = i(604), _ = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._touch_count = 0, e._marrigaeEff = !1, e._sakura = new r.Sakura, e._container = new u, e._chara = new PIXI.Sprite, e.addChild(e._sakura), e._container.addChild(e._chara), e.addChild(e._container), e._timerBeLeftVoice = new s.BeLeftVoiceTimer, e._timeSignal = new a.TimeSignal(e._timerBeLeftVoice), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "marriageEff", {
            get: function () {
                return this._marrigaeEff
            }, set: function (t) {
                this._marrigaeEff != t && (this._marrigaeEff = t, 1 == this._marrigaeEff ? this._showMarriageEff() : this._hideMarriageEff())
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function (t, e, i) {
            this._touch_count = 0, this._ship_mst_id = t;
            var n = o.default.resources.getShip(t, e, "full");
            this._chara.texture = n;
            var r = new PIXI.Sprite(n);
            this._hit_area_map = o.default.settings.renderer.extract.pixels(r), this._container.position.set(491, -88);
            var s = this._chara.width / 2, a = this._chara.height / 2,
                _ = o.default.model.ship_graph.get(t).getPortOffset(e);
            this._chara.position.set(-s + _.x, -a + _.y), this._container.positionSet(491 + s, -88 + a), this._timerBeLeftVoice.initialize(t, i), this._timeSignal.initialize(t)
        }, e.prototype.activate = function () {
            null == this._loop_tween && (this._loop_tween = createjs.Tween.get(this._container, { loop: !0 }).to({ anim_value: Math.PI }, 5200)), this._timerBeLeftVoice.reset(), this._timeSignal.reset()
        }, e.prototype.deactivate = function () {
            null != this._loop_tween && (this._loop_tween.setPaused(!0), this._loop_tween = null), this._timerBeLeftVoice.stop(), this._timeSignal.stop()
        }, e.prototype.onMouseMove = function (t) {
            var e = t.getLocalPosition(this._chara);
            return this._isCharaHit(e)
        }, e.prototype.onClick = function (t) {
            var e = t.getLocalPosition(this._chara), i = this._isCharaHit(e);
            return 1 == i && this._onClick(), i
        }, e.prototype._showMarriageEff = function () {
            var t = new PIXI.Rectangle(600, 0, 600, 720);
            this._ship_is_marriage = !0, this._sakura.startAnimation(t)
        }, e.prototype._hideMarriageEff = function () {
            this._ship_is_marriage = !1, this._sakura.stopAnimation()
        }, e.prototype._isCharaHit = function (t, e) {
            if (void 0 === e && (e = 0), t.x < 0 || t.y < 0 || t.x > this._chara.width) return !1;
            var i = 4 * (Math.floor(t.x) + this._chara.width * Math.floor(t.y));
            return null != this._hit_area_map && (!(i + 3 >= this._hit_area_map.length) && this._hit_area_map[i + 3] > e)
        }, e.prototype._onClick = function () {
            this._touch_count < 4 ? 1 == this._ship_is_marriage && 0 == this._touch_count ? o.default.sound.voice.play(this._ship_mst_id.toString(), 28) : o.default.sound.voice.playAtRandom(this._ship_mst_id.toString(), [2, 3, 4], [60, 30, 10]) : o.default.sound.voice.play(this._ship_mst_id.toString(), 4), this._touch_count++, this._timerBeLeftVoice.reset()
        }, e
    }(PIXI.Container);
    e.FlagShipLayer = _;
    var u = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return n(e, t), Object.defineProperty(e.prototype, "anim_value", {
            get: function () {
                return 0
            }, set: function (t) {
                var e = Math.sin(t), i = 1 + .012 * (.5 + .5 * e);
                this.scale.set(i), this.y = this._base_y - 1.5 * e * 1.8
            }, enumerable: !0, configurable: !0
        }), e.prototype.positionSet = function (t, e) {
            this.position.set(t, e), this._base_y = e
        }, e
    }(PIXI.Container)
}