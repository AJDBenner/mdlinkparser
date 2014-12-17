Learn the following in order to accomplish your task:

    Npm https://www.npmjs.org/doc/

    Grunt http://gruntjs.com/

    Bower http://bower.io/

    Mocha test http://visionmedia.github.io/mocha/

    Travis http://docs.travis-ci.com/

1. Create git repo (e.g. github.com/[:name]/mdlinkparser
2. Write JavaScript code that can take a string (from a given markdown file) as an argument and return as an array of every link:
function findLinks(markdown) {
    // Array of all links you find
    var links = [];
    // parse markdown and find all links, adding them to the links array...
    
    return links;
}
3. Publish as NPM module
4. Publish as bower module
5. Write Grunt task that does JSHint checking
6. Add mocha unit test with a couple of tests and use grunt to run the test
7. Connected with Travis to run those tests

    Bonus point for building demo using requirejs and style with LESS on gh-pages (Github pages e.g. name.github.io/mdlinkparser)

    Bonus point for creating node command line tools that takes file path as an argument and print all the links
