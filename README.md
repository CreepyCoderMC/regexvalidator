# RegEx Validator
This module is small but easy to use. The purpose of this module is to check if a string can be validated via regular expressions.
## Validation processes
The code only use regular expressions.
## Code sample
This following code is actually how I tested that all methods correctly functioned as intended, is also provided in this module.
```
import { subStringIsValid } from '@teamcoder/regexvalidator';

console.log( "Testing Condition 1 Passed = " + regExIsValid( "Hallo world"  , "^Hallo" ) );
console.log( "Testing Condition 2 Passed = " + !regExIsValid( "Hallo world" , "^world" ) );
```
The results will look as follows
```
Testing Condition 1 Passed = true
Testing Condition 2 Passed = true
```
## Function Parameters
### Parameters Passed
```
@param  { String  } source        The source string to be checked
@param  { String  } expression    The regular expression to use
```
### Parameters Returned
```
@return { Boolean }               Validation passed or failed
```
## Notes Before You Start
Very important to remember to always include the following in your main project package.json file:
```
"type": "module"
```
Without this entry in the package file you will get the following error if you try to run your project
```
(node:15500) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use 'node --trace-warnings ...' to show where the warning was created)
C:\Users\ ... \regexvalidator\regexvalidator.js:1
import { regExIsValid } from '@teamcoder/regexvalidator';
```
## Version History
| Version  | Date                   | Remark                                                                                                |
|----------|------------------------|-------------------------------------------------------------------------------------------------------|
| 1.0.0    | 06 September 2022      | Official first release                                                                                |
| 1.0.1    | 06 September 2022      | Correcting documentation                                                                              |
| 1.0.2    | 09 September 2022      | Fixed package.json so that npm can install on any os                                                  |
| 1.0.3    | 10 September 2022      | Fixed code to be proper npm package                                                                   |
| 1.0.4    | 11 September 2022      | Removed Default from export function in regexvalidator.js file                                        |
## How To Install
Run the following command in a terminal or command prompt in the folder you want to install the module to.
> npm i @teamcoder/regexvalidator
## Operating Systems Tested On
>Windows, Linux and RaspberryPi
## License Information
RegExValidator © 2022 by Adriaan J. van Rensburg (CreepyCoderMC) is licensed under CC BY-NC-ND 4.0.
> To view a online copy of this license, visit [http://creativecommons.org/licenses/by-nc-nd/4.0/](http://creativecommons.org/licenses/by-nc-nd/4.0/)