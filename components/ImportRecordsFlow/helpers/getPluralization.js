"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getPluralization;

function getPluralization(amount) {
  var pluralRules = new Intl.PluralRules('en-US');
  var plural = pluralRules.select(amount);
  return plural === 'one' ? '' : 's';
}