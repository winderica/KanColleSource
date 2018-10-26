const function999 = function (t, e, i) {
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
    var o = i(37), r = i(1e3), s = i(1001), a = i(1003), _ = i(1017), u = i(1018), l = function (t) {
        function e(e, i) {
            var n = t.call(this, e, i) || this;
            n._timer_id = 0, n._onChangeMatching = function (t) {
                new u.TaskChangeMatching(t, n).start()
            }, n._sub_title = new _.CompSubTitle, n._sub_title.position.set(202, 204), n._rivals = new Array;
            for (var o = 0; o < 5; o++) {
                var r = new a.CompRivalDeck;
                r.position.set(211, 267 + 82 * o), n._rivals.push(r)
            }
            return n._matching_btns = new s.CompMatchingSelectBtns(n._onChangeMatching), n._matching_btns.position.set(460, 669), n
        }

        return n(e, t), Object.defineProperty(e.prototype, "rivals", {
            get: function () {
                return this._rivals
            }, enumerable: !0, configurable: !0
        }), Object.defineProperty(e.prototype, "matching_btns", {
            get: function () {
                return this._matching_btns
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function () {
            t.prototype.initialize.call(this), this._sub_title.initialize(), this.addChild(this._sub_title);
            for (var e = 0, i = this._rivals; e < i.length; e++) {
                var n = i[e];
                n.initialize(), this.addChild(n)
            }
            this._matching_btns.initialize(), this.addChild(this._matching_btns)
        }, e.prototype.update = function (t) {
            o.TaskLoadShipResource.abortBy(this), this._sub_title.update(t.matching_type);
            for (var e = t.rivals, i = 0; i < this._rivals.length; i++) {
                var n = this._rivals[i];
                e.length <= i ? n.visible = !1 : (n.update(e[i]), n.visible = !0)
            }
            this._selected_matching_type = t.matching_type_next;
            var r = t.remain_time;
            this._startTimer(1e3 * r), this._matching_btns.update(r > 0, t.matching_type_next)
        }, e.prototype.updateMatchingState = function (t, e) {
            this._selected_matching_type = e, this._matching_btns.update(t, e), this._matching_btns.activate()
        }, e.prototype.activate = function () {
            t.prototype.activate.call(this);
            for (var e = 0, i = this.rivals; e < i.length; e++) {
                i[e].activate()
            }
            this._matching_btns.activate()
        }, e.prototype.deactivate = function () {
            t.prototype.deactivate.call(this);
            for (var e = 0, i = this.rivals; e < i.length; e++) {
                i[e].deactivate()
            }
            this._matching_btns.deactivate(), o.TaskLoadShipResource.abortBy(this)
        }, e.prototype.dispose = function () {
            t.prototype.dispose.call(this), this._sub_title.dispose();
            for (var e = 0, i = this.rivals; e < i.length; e++) {
                i[e].dispose()
            }
            this._matching_btns.dispose(), this._stopTimer()
        }, e.prototype._startTimer = function (t) {
            var e = this;
            this._stopTimer(), t > 0 && (this._timer_id = setTimeout(function () {
                e.updateMatchingState(!1, e._selected_matching_type), e._timer_id = 0
            }, t))
        }, e.prototype._stopTimer = function () {
            this._timer_id > 0 && clearTimeout(this._timer_id), this._timer_id = 0
        }, e
    }(r.ViewMainBase);
    e.ViewMain = l
}