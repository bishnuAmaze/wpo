# Identify Target Browser Hometask

## How to start project?

1. Go to `/web-performance-optimization-hometasks/3-LINK-AND-SCRIPT-TAG-ATTRIBUTES`.
2. Run `npm i`
3. Run `npm run build` to build project
4. Run `npm run start` to start project locally
5. Run `npm run watch` to start project locally and watch for changes
6. Check if everything is OK with your local setup by opening [localhost:8080](http://localhost:8080)

## Task description
The main goal of the task is to make changes in 2 webpack projects and compare the sizes of the resulting js files. 

In the first project you need to:
* Add .babelrc file and configure it to support last 2 versions of browsers, not dead browsers and browsers with usability more then 5%
* Add necessary babel packages in package.json
* Connect Babel via babel-loader in webpack.config.modern.js

In the second, you need to:
* Configure a separate assembly for old and modern browsers based on the esmodules in babel in webpack.config.legacy.js and webpack.config.modern.js
* Connect ScriptExtHtmlWebpackPlugin to add the module and nomodule attributes to the module and legacy script respectively
* Add necessary packages in package.json

Structure of the task should be:

```
<task folder>
\---part-1
|   \---index.html
|   \---index.js
|   \---package.json
|   \---webpack.config.js
|   +---.babelrc
|   \---...
\---part-2
|   \---index.html
|   \---index.js
|   \---package.json
|   \---webpack.config.js
|   +---webpack.config.modern.js
|   +---webpack.config.legacy.js
|   \---...
+---Comparative Report
```

In case if you have problems with implementation of this task, please familiarize with program materials and this [article](https://web.dev/codelab-serve-modern-code/) first.

## Evaluation criteria
For every day of lateness there is a penalty in 5%.
Minimal passing grade is 60%. In case task cannot be graded 60% - task should be sent for updates.

<table>
  <tbody>
    <tr>
      <th>Grade</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>Send back for updates</td>
      <td>If any of the following:
        <ul>
          <li>Task(s) is/are not working</li>
          <li>Implementation has low quality</li>
          <li>Some acceptance criteria are not met</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>60−89</td>
      <td>Hometask contains 2 projects: 
        <ul>
          <li>In the first project Webpack was set up to work with Babel. Created a .babelrc file and configured Babel to support the last 2 versions of browsers, not dead browsers and browsers with usability of more than 5%.</li>
          <li>In the second project, ES modules were used with Babel in order to create two different js files, one of which will have less weight and is loaded in modern browsers, and the second is larger and provided support for older browsers.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>90−100</td>
      <td>An all of above plus a comparative report, which compares 3 js file sizes from both projects</td>
    </tr>
  </tbody>
</table>
