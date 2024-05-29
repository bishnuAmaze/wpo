# Images Performance Hometask

## How to start project?

1. Go to `/web-performance-optimization-hometasks/4-IMAGES`.
2. Run `npm i`
3. Run `npm run start` to start server locally
4. Open `./client/index.html`

## Task description
Main goal of the task is to implement an approaches with responsive images and lazy loading images.
In this task you already have service in `./server` folder, which accepts name, desired width, height and format of image and returns it.
So, firstly you will need to start this server locally. You do not need to make any changes in service logic, you will
work only with client, which located in `./client` folder.

The task consists of 3 parts:
1. Connect all pictures from the page depending on the resolutions 320, 768, 1024 and 1920 pixels. 
With a screen size of up to 320 pixels, an image of 320 pixels should be loaded, with screen size up to 
768px - image should be 768 pixels, and so on. Browsers, which support WebP should load images in this
format, if browser does not support WebP - images in jpeg format should be loaded.
2. Implement a lazy loading image approach (browser-level).
3. Implement a lazy loading image polyfill for older browsers and use this approach only in browsers 
that do not support standard.


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
          <li>Sliced images are included to the page via srcset and media resolutions: 320, 768, 1024 and 1920px.</li>
          <li>Browsers, which support WebP - load images in this format, if browser does not support WebP - images in jpeg format should be loaded.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>70−89</td>
      <td>All from previous points and implemented a lazy loading image approach (browser-level).</td>
    </tr>
    <tr>
      <td>90−100</td>
      <td>All from previous points and implemented a lazy loading image polyfill for older browsers. This approach should be used only in browsers that do not support browser level lazy loading.</td>
    </tr>
  </tbody>
</table>
