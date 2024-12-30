# What is `emmet`?
- Emmet is a plug in for your text editor that allows you to type shortcuts that are then expanded into full pieces of code.

# Difference b/w a `Library` & a `Framework`
- Both frameworks and libraries are code written by someone else that is used to help solve common problems.
- The technical difference between a framework and library lies in a term called inversion of control.
- When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.

# What is `CDN`? Why do we use it?
- CDN (content delivery network) is a bunch of servers placed in different locations all over the world. To minimize the physical distance between your website and your user you can choose to deliver it through CDN which would cache a copy of your content on each of their servers.

# Why is React known as React?
- React is aptly named because: It "reacts" quickly to changes without reloading the whole page. It uses the virtual DOM to efficiently update parts of a webpage. It's built around components that "react" and update.

# What is `crossorigin` in script tag?
- The crossorigin attribute, valid on the <audio>, <img>, <link>, <script>, and <video> elements, provides support for CORS, defining how the element handles cross-origin requests, thereby enabling the configuration of the CORS requests for the element's fetched data.

# What is difference between `React` and `ReactDOM`?
- While React provides the tools and concepts to define component-based user interfaces, ReactDOM handles the task of rendering those interfaces in a web environment. Together, they form the foundation of React web applications.

# What is difference between react.development.js and react.production.js files via CDN?
- In development mode, we can enable and utilize React developer tools, devtools profiler, debugging environment attached with source code. We can utilize various functionalities such as Hot Module Replacement, diagnostics so that development environment will help to debug code.
- In production mode, compression and minification of Javascript and other resources happens to reduce size of the code which is not the case when it comes to development mode. Performance will be much faster in production mode when compared to development mode.

# What is `async` and `defer`?
- Async: Executes scripts as soon as they are available, regardless of their order in the HTML document. 
- Defer: Executes scripts in the order they appear in the HTML document, after HTML parsing is complete.

# What is `NPM`?
- npm is the package manager for Node.js

# What is `Parcel/Webpack`? Why do we need it?
- Parcel and Webpack are both bundlers for web applications. They serve a crucial purpose in the development process by transforming your raw code (think of it as raw ingredients) into optimized files (the delicious meal ready to serve) that browsers can understand and display.

# What is `.parcel-cache`?
- parcel-cache in parcel (v2) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

# What is `npx` ?
- NPX stands for Node Package eXecute. It is simply an NPM package runner. It allows developers to execute any Javascript Package available on the NPM registry without even installing it.

# What is difference between `dependencies` vs `devDependencies`?
- Dependencies are the crucial packages required for your application to function in a production environment. At the same time, devDependencies are tools and utilities that aid in the development process but are not needed in production.

# What is the difference between `package.json` and `package-lock.json`?
- While package. json acts as the project's manifest, detailing dependencies and scripts, package-lock. json ensures consistent and reliable installation of these dependencies across different environments.

# What's the difference between `tilde(~)` and `caret(^)` in package.json?
- Using tilde ( ~ ) gives you bug-fix releases, while caret ( ^ ) in addition gives you backward-compatible new functionality.

# Parcel advantages
- Dev Build
- Local Server
- HMR (Hot Module Replacement) - automatically refreshes the page on changes in any file
- File Watching Algorithm - Written in C++
- Image Optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostics
- Error Handling
- HTTPS support
- Tree Shaking - remove unused code
- Different Dev & Prod Bundles