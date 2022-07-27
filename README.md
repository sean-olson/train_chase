# Train Chase
<p align="center">
    A simple sorting problem with a story
</p>

<p align="center">
  <img width="640" src="https://amtrakguide.files.wordpress.com/2017/10/1000px-amtrakfreqmapcolor_svg-svg.png">
</p>

### Problem
The FBI is hot on the trail of a notorious, international smuggler who has fled the jurisdiction.  Fortunately, your office has discovered a stack of train tickets that your quarry has foolishly abandoned on his escape. You can use these to track your target.  Unfortunately, the tickets are out of order, and they **must** be sorted before any action can be taken.  You, being a resourceful and technically savvy agent, offer to write a quick Node.js application that takes in the randomly sequenced array of ticket-objects and returns the array of tickets sorted.  Each ticket contains two fields (`{from: string, to: string}`), which you will use to sort them, mapping the smuggler's path.

### Intructions
This repository provides you with a node app and some starter code in `index.js`.  Use it, and complete the `sort_tickets()` function, ordering the tickets such that the `to` property in the initial ticket is the same as the `from` property of the next sequential ticket, and so on.

Once the tickets are sorted, log the final city to the console to reveal the whereabouts of the suspect.

Because you're a careful agent, you will write one or more tests in `tests\case_cracker.test.js` file to verify the proper function of your code.

Good luck, and be careful!


