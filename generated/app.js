(function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  function main(args) {
    var express = require('express');
    var app = express();
  }
  function Event(domain, location, name, time) {
    this.domain = domain;
    this.location = location;
    this.name = name;
    this.time = time;
  }
  Event.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Event',
    interfaces: []
  };
  Event.prototype.component1 = function () {
    return this.domain;
  };
  Event.prototype.component2 = function () {
    return this.location;
  };
  Event.prototype.component3 = function () {
    return this.name;
  };
  Event.prototype.component4 = function () {
    return this.time;
  };
  Event.prototype.copy_msyqkw$ = function (domain, location, name, time) {
    return new Event(domain === void 0 ? this.domain : domain, location === void 0 ? this.location : location, name === void 0 ? this.name : name, time === void 0 ? this.time : time);
  };
  Event.prototype.toString = function () {
    return 'Event(domain=' + Kotlin.toString(this.domain) + (', location=' + Kotlin.toString(this.location)) + (', name=' + Kotlin.toString(this.name)) + (', time=' + Kotlin.toString(this.time)) + ')';
  };
  Event.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.domain) | 0;
    result = result * 31 + Kotlin.hashCode(this.location) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.time) | 0;
    return result;
  };
  Event.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.domain, other.domain) && Kotlin.equals(this.location, other.location) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.time, other.time)))));
  };
  function Key(id, domains) {
    if (domains === void 0)
      domains = emptyList();
    this.id = id;
    this.domains = domains;
  }
  Key.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Key',
    interfaces: []
  };
  Key.prototype.component1 = function () {
    return this.id;
  };
  Key.prototype.component2 = function () {
    return this.domains;
  };
  Key.prototype.copy_kwv3np$ = function (id, domains) {
    return new Key(id === void 0 ? this.id : id, domains === void 0 ? this.domains : domains);
  };
  Key.prototype.toString = function () {
    return 'Key(id=' + Kotlin.toString(this.id) + (', domains=' + Kotlin.toString(this.domains)) + ')';
  };
  Key.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.domains) | 0;
    return result;
  };
  Key.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.domains, other.domains)))));
  };
  function User(keys, username) {
    this.keys = keys;
    this.username = username;
  }
  User.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'User',
    interfaces: []
  };
  _.main_kand9s$ = main;
  _.Event = Event;
  _.Key = Key;
  _.User = User;
  main([]);
  Kotlin.defineModule('app', _);
  return _;
}(module.exports, require('kotlin')));

//# sourceMappingURL=app.js.map
