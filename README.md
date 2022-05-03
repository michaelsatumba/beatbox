
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

<!-- **Note: Delete this note and update the table of contents based on what sections you keep.** -->

## Overview

### The challenge

Users should be able to:

- Play sounds when clicked.

### Screenshot

![](<./screenshot2.png>)

<!-- Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above. -->

<!-- **Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.** -->

### Links

<!-- - Solution URL: [Add solution URL here](https://your-solution-url.com) -->

- Live Site URL: [Live Site](https://weather-any-storm.vercel.app/)

## My process

Basic HTML, logic, styling.

### Built with

- html
- css
- js

## What I Learned
How to use a switch statement and use mp3 files in a function.

<!-- Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge. -->

<!-- To see how you can add code snippets, see below: -->

```html
<div class="container">
        <div class="row">
            <button class="blue" onClick="soundA()">A</button>
            <button class="blue" onClick="soundS()">S</button>
            <button class="blue" onClick="soundD()">D</button>
        </div>

        <div class="row">
            <button class="pink" onClick="soundF()">F</button>
            <button class="pink" onClick="soundG()">G</button>
            <button class="pink" onClick="soundH()">H</button>
        </div>

        <div class="row">
            <button class="pink" onClick="soundJ()">J</button>
            <button class="grey" onClick="soundK()">K</button>
            <button class="grey" onClick="soundL()">L</button>
        </div>

    </div>
```

```css
body {
	background-color: #7f5a83;
	background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);
	min-height: 100vh;
	/* height of the browser viewport */
	display: flex;
	justify-content: center;
	align-items: center;
}

.container {
	background-color: #212121;
	height: 305px;
	width: 305px;
	padding: 20px;
	border-radius: 25px;
}

.row {
	display: flex;
	/* justify-content: center; */
	/* justify-content: space-between; */
	/* justify-content: space-around; */
	justify-content: space-evenly;
	/* margin: 15px; */
	margin-top: 15px;
}
```

```js
window.addEventListener('keydown', (event) => {
	// if (event.key === 's') {
	// 	soundS();
	// }
	switch (event.key) {
		case 'a':
			soundA();
			break;
		case 's':
			soundS();
			break;
		case 'd':
			soundD();
			break;
		case 'f':
			soundF();
			break;
		case 'g':
			soundG();
			break;
		case 'h':
			soundH();
			break;
		case 'j':
			soundJ();
			break;
		case 'k':
			soundK();
			break;
		case 'l':
			soundL();
			break;

		default:
			break;
	}
});
```

<!-- If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more. -->

<!-- **Note: Delete this note and the content within this section and replace with your own learnings.** -->

### Continued development

<!-- Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect. -->

🤷‍♂️.

<!-- **Note: Delete this note and the content within this section and replace with your own plans for continued development.** -->

### Useful resources

- [Dribble](https://dribbble.com/tags/beatbox) - Inspiration.
<!-- - [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.** -->

## Author

- Website - [Michael Satumba](https://mkeport.vercel.app/)
<!-- - Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername) -->

<!-- **Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.** -->

## Acknowledgments

<!-- This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit. -->

Thank you Dribbble for inspring me.

<!-- **Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.** -->

