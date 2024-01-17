# What is eslint? 
- ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline.
- ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.
- ESLint is completely pluggable. Every single rule is a plugin and you can add more at runtime. You can also add community plugins, configurations, and parsers to extend the functionality of ESLint.
- The configurations (rules) are kept in the .eslintrc.json  file.

# Structure of .eslintrcs.json
```
{
  "extends": [
    //plugins
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  //rules
        "rules": {
            // ... // 
            "semi": "off",
            "@typescript-eslint/semi": "warn",
            "no-unexpected-multiline": "error",
        // ...//
        "plugins": [
            "@typescript-eslint"
        ]
    }
}
```
# Building blocks
##  Rules 
- A rule has :
    - a name 
    - an expacation 
    -  what it should do if the expectation is not met
    - additional configuration  (sometimes)
-  Example of rules : semi. Do you want your js statements to always have the ";"? If yes, what should  eslint do? Raise an error, a warning? 

- Rules  may provide fixes, they  can safely correct the violation without changing the app logic (aka breaking something). These fixes can be applied automatically through commands, or just listed.

- Rules may provide suggestions instead of fixes, when a change in questio nmight  break app logic. They cannot be auto applied, not even with the commands.


## Shareable configurations
-  configurations shared via npm - used to enforce style guides using ESLint's build-in  rules.

## Plugins 
- it's a nnpm module which can contain :
    - a set of ESLINT rules
    - configurations
    - processors
    - environments
- can be used  to enfroce a style guide and spport Js extensions (for example, a plugin for react)

## Parsers
- a parter converts code into abstract syntax tree that ESLINT can evaluate. Espree is the default parser.
- Custom parsers exist, they parse non-standard js code, some of them are already part of plugins nad shareable configurations, so you don't have to install the manually. e.g @typescript-eslint/parser.


## Processors
- they extract js code from other kinds of files, then gives them to ESlint. 

## Formatters
 - an eslint formatter controls the appearance of the linting results in the CLI 
 

## Configuring 


