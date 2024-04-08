export default function getPluralization(amount) {
  var pluralRules = new Intl.PluralRules('en-US');
  var plural = pluralRules.select(amount);
  return plural === 'one' ? '' : 's';
}