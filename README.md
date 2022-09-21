# jest-memory-leak
A demo repo to highlight Jest's memory leak issues.

## Quick start

1. Install deps with `npm i`
2. Run tests with `npm test`
3. Open Chrome to view Node.js Debugger
4. Take a memory heap snapshot in Memory
5. Resume execution script in Sources
5. Run the tests in the terminal
6. Take another snapshot
7. Repeat steps 4 - 6 to see memory grow
7. Profit

<img width="1400" alt="Screen Shot 2022-09-21 at 11 09 54 AM" src="https://user-images.githubusercontent.com/3740655/191541832-5c71aba1-9995-4e31-b46f-8d254bc929c9.png">

<img width="1563" alt="Screen Shot 2022-09-21 at 11 02 13 AM" src="https://user-images.githubusercontent.com/3740655/191540992-ee1303f1-0919-4229-b931-d1c32ec07ba5.png">

