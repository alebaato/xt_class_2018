# XT Class 2018
Demoproject to get in touch and/or refresh XT basics.


## Content
* **Lesson 1 - Git Hub + Project Setup**
* **Lesson 2 - Editor Config and CSS styling methodologies**
* **Built With**
* **Install**


## Lesson 1 - Git Hub + Project Setup
* Please create a Git Hub repository, with a SSH Key authentication and a README.md.
* Create HTML5 Skeleton page with an unstyled teaser element (image, headline, excerpt, link).
* Include a normalize or css reset, and give reasons why you used it in the README.
* Add as Collaborators to your GitHub repository:
  * [0m4r (Omar Adobati) · GitHub](https://github.com/0m4r)
  * [bwcgn (Bastian Winkler) · GitHub](https://github.com/bwcgn)
  
## Lesson 2 - Editor Config and CSS styling methodologies
* align with your colleagues and define a editor config for the XT Class. The dot file should be present in everyones repo
* After you have done this, please choose at least 2 CSS methodologies from the following list:
  * BEM
  * Atomic
  * OOCSS
  * SMACSS
  * SUITCSS
  * ITCSS
* Style your previously created teaser based on the chosen methods and document shortly why you chose those methods in a blog post here in VOX.

## Lesson 3 - A tale of branches, pull-request and css preprocessors
* create a new branch where to apply the next changes to your code and 
* create a pull-request to allow for code review by the other 2 members of the class
* pick a CSS preprocessor and refactor your CSS to work with it
  * gulp 
  * grunt
  * webpack
* generate CSS
* minify CSS
* extend the README.md to document how to run and build the project

## Built With
* **[Normalize.css](https://necolas.github.io/normalize.css/)**<br/>
To achieve a more consistent rendering of elements across browsers we include normalize.css. Common bugs get corrected and usefull defaults are preserved.

* **OOCSS (Object Oriented CSS)**<br/>
OOCSS is not a programming language, it is more kind of a programming paradigm.
The purpose is to encourage code reuse and create more efficient stylesheets that are easier to maintain.

  Prinicples of OOCSS:
  * separation of structure from skin
  * separation of containers and content

  Benefits:
  * Faster websites <br>
  * Smaller filesizes lead to faster downloading the css resources
  * Maintainable stylesheets <br>
  The natural cascade of the html is taken into consideration. Existing rule sets are used an extended.

* **BEM**<br/>
BEM is a specific concrete application of OOCSS. It stands for *Block Element Modifier*, and it describes the pattern of each CSS object's class name. It provides a way to arrange your CSS classes into modules.<br/>
An Implementation for example looks like this:
  ```
  .block {}
  .block__element {}
  .block--modifier {}
  .block__element--modifier {}
  ```

## Install
* Clone git repository:
  ```
  git clone https://github.com/alebaato/xt_class_2018.git
  ```
* Install required packages via NPM
  ```
  npm install
  ```
* Generate files (html, css, js, img) into "dist" directory
  ```
  gulp default
  ```
* Watch SASS file for changes and generate css
  ```
  gulp watch
  ```
