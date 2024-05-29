# Critical CSS Hometask

## How to start project?

1. Go to `/web-performance-optimization-hometasks/5-FONTS-AND-CSS`.
2. Run `npm i`
3. Run `npm run build` to build project
4. Run `npm run start` to start project locally
5. Check if everything is OK with your local setup by opening [localhost:8080](http://localhost:8080)

## Task description
Main goal of the task is to try the critical css approach and to use fonts in an optimized way.

The task consists of next steps:
1. Connect [html-critical-webpack-plugin](https://www.npmjs.com/package/html-critical-webpack-plugin) to separate the
critical css and include it inline. Configure plugin according to 3 dimensions (iphone 5, ipad and desktop).
2. Import both roboto and raleway fonts properly using the most optimal font format (woff, woff2)
3. Use Roboto for all paragraph texts and Raleway for all headers
4. Ensure that fonts are properly preloaded with crossorgin property set properly
5. Use proper font-face declaration with the appropriate unicode range, setting a correct font stack starting with local()
6. Make sure that fonts are displayed with the FOUT strategy


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
          <li>[html-critical-webpack-plugin](https://www.npmjs.com/package/html-critical-webpack-plugin) connected according to task requirements, there is only 1 .css file in dist and critical inline styles connected in html</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>70−89</td>
      <td>All from previous points and:
        <ul>
          <li>Used Roboto font for all paragraphs and Raleway for all headers</li>
          <li>Fonts preloaded properly with crossorgin property</li>
          <li>Used proper font-face declaration with the appropriate unicode range, setting a correct font stack starting with local()</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>90−100</td>
      <td>All from previous points and fonts are displayed with the FOUT strategy.</td>
    </tr>
  </tbody>
</table>
