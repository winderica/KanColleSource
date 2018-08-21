const function1007 = function (t, e, i) {
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
    var o = i(165), r = i(4), s = i(29), a = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._name = new r.TextBox(30, 4999235), e._name.position.set(193, 129), e.addChild(e._name), e._level = new r.TextBox(26, 4999235), e._level.anchor.set(1, 0), e._level.position.set(319, 192), e.addChild(e._level), e._rank_name = new r.TextBox(19, 4999235), e._rank_name.position.set(324, 198), e.addChild(e._rank_name), e._exp = new r.TextBox(19, 4999235), e._exp.position.set(363, 235), e.addChild(e._exp), e._comment = new r.TextBox(16, 4999235), e._comment.position.set(151, 286), e.addChild(e._comment), e._friend_num = new r.TextBox(20, 4999235), e._friend_num.anchor.set(1, 0), e._friend_num.position.set(645, 344), e.addChild(e._friend_num), e._ship_num = new r.TextBox(20, 4999235), e._ship_num.anchor.set(1, 0), e._ship_num.position.set(645, 375), e.addChild(e._ship_num), e._slot_num = new r.TextBox(20, 4999235), e._slot_num.anchor.set(1, 0), e._slot_num.position.set(645, 407), e.addChild(e._slot_num), e._furniture_num = new r.TextBox(20, 4999235), e._furniture_num.anchor.set(1, 0), e._furniture_num.position.set(645, 438), e.addChild(e._furniture_num), e._rank_icon = new s.RankIcon, e._rank_icon.position.set(135, 181), e.addChild(e._rank_icon), e._medal = new o.MedalIcon, e._medal.position.set(594, 543), e.addChild(e._medal), e
        }

        return n(e, t), e.prototype.initialize = function () {
            this._medal.initialize()
        }, e.prototype.update = function (t) {
            this._name.text = t.name, this._level.text = t.level.toString(), this._rank_name.text = t.rank_name, this._exp.text = t.exp_now + "/" + t.exp_next, this._comment.text = t.comment, this._friend_num.text = t.friend_num.toString();
            var e = t.ship_nums;
            this._ship_num.text = e[0] + "/" + e[1];
            var i = t.slot_nums;
            this._slot_num.text = i[0] + "/" + i[1], this._furniture_num.text = t.furniture_num.toString(), this._rank_icon.update(t.rank), this._medal.update(t.medal_num, 9466926)
        }, e
    }(PIXI.Container);
    e.UserinfoPanelInfoDetail = a
}