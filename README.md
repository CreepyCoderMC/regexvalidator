# RegEx Validator
This module is small but easy to use. The purpose of this module is to check if a string can be validated via regular expressions.
## Validation processes
The code only use regular expressions.
## Code sample
This following code is actually how I tested that all methods correctly functioned as intended, is also provided in this module.
```
import subStringIsValid from './node_modules/@teamcoder/regexvalidator/regexvalidator.js';

console.log( "Testing Condition 1 Passed = " + regExIsValid( "Hallo world"  , "^Hallo" ) );
console.log( "Testing Condition 2 Passed = " + !regExIsValid( "Hallo world" , "^world" ) );
```
The results will look as follows
```
Testing Condition 1 Passed = true
Testing Condition 2 Passed = true
```
## Function Parameters
```
@param  { String  } source        The source string to be checked
@param  { String  } expression    The regular expression to use
@return { Boolean }               Validation passed or failed
```
## Version History
| Version  | Date                   | Remark                                                |
|----------|------------------------|-------------------------------------------------------|
| 1.0.0    | 06 September 2022      | Official first release                                |
| 1.0.1    | 06 September 2022      | Correcting documentation                              |
| 1.0.2    | 09 September 2022      | Fixed package.json so that npm can install on any os  |
## How To Install
Run the following command in a terminal or command prompt in the folder you want to install the module to.
> npm i @teamcoder/regexvalidator
## Operating Systems Tested On
>Windows, Linux and RaspberryPi
## License Information
RegExValidator © 2022 by Adriaan J. van Rensburg (CreepyCoderMC) is licensed under CC BY-NC-ND 4.0.
> To view a online copy of this license, visit [http://creativecommons.org/licenses/by-nc-nd/4.0/](http://creativecommons.org/licenses/by-nc-nd/4.0/)