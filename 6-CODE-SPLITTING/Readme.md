# Code Splitting Hometask

## How to start project?

1. Go to `/web-performance-optimization-hometasks/6-CODE-SPLITTING`.
2. Run `npm i`
3. Run `npm run build`

## Task description
This project contains only js files. There are two files `script1.js` and `script2.js`. Both of them imports small
functions from lodash. When you will build project, you will see, that both files have abnormally huge size for such a
small functionality.

First to investigate root-cause you need to integrate Webpack Bundle Analyzer into build process. After
that you will see that in both bundles almost all size takes lodash.

What we see should lead us to 2 thoughts:

1. Lodash is contained in both bundles, although it could be bundled separately and connected to `script1.bundle.js` and
`script2.bundle.js` files as dependency. Split Chunks Plugin should be used.
2. Lodash have too big size. If you have a look in `script1.js` and `script2.js` - you will see that we use only 1 small
function in each file, there is no need to load whole library. We need to import these functions from lodash properly
and to use Tree Shaking approach.

Goal of this task is to integrate Webpack Bundle Analyzer into build process properly and to optimize bundles using
Split Chunks Plugin and tree shaking. At the end you should see 3 files in `dist` - `script1.bundle.js`,
`script2.bundle.js` and `vendors.bundle.js` (should have only necessary part of lodash library).

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
          <li>Task is not working</li>
          <li>Implementation has low quality</li>
          <li>Some acceptance criteria are not met</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>60−69</td>
      <td>All of above is done:
        <ul>
          <li>Webpack Bundle Analyzer integrated correctly.</li>
          <li>Split Chunks Plugin set up correctly, dist contains vendors.bundle.js with Lodash inside. script1.bundle.js and script2.bundle.js doesn't contain Lodash</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>70−100</td>
      <td>All from previous points and Tree-Shakable imports used, vendors.bundle.js contains only necessary part of Lodash library</td>
    </tr>
  </tbody>
</table>
