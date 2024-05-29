# Service Workers hometask

## How to start project?

1. Go to `/web-performance-optimization-hometasks/7-LOADING-PERFORMANCE`.
2. Run `npm i`
3. Run `npm run start`
4. Check if everything is OK with your local setup by opening [localhost:8080](http://localhost:8080)

## Task description:
Main goal of the task is to create and register a simple service worker which will help with difficult calculations.
When you will start this project you will be able to see two buttons. First button starts difficult calculations without
service workers approach and as a result blocks a page. Your task will be to implement same calculations using service
workers approach on the second button click. There are some comments in ./src/js/index.js and ./src/js/worker.js files
and you will need only to write code under these comments. You should not change anything elsewhere.

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
          <li>Code changes were made in any places other than those marked with comments</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>60−100</td>
      <td>All of above is done:
        <ul>
          <li>Service worker registered in 'index.js' according to comments</li>
          <li>Service worker implemented in 'worker.js' according to comments</li>
          <li>Second button works and the page does not freeze while the SW is working</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
