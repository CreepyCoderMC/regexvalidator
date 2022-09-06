import regExIsValid from './regexvalidator.js';

console.log( "Testing Condition 1 Passed = " + regExIsValid( "Hallo world"  , "^Hallo" ) );
console.log( "Testing Condition 2 Passed = " + !regExIsValid( "Hallo world" , "^world" ) );