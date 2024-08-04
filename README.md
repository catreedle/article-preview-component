# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](/images/screenshot.jpeg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

This is the 1st JS challenge I completed on frontend mentor. I learned a lot. I feel like this one is much harder than the last one I did. I'm proud of finishing this one :D (there's still rooms for improvement of course). I got the chance to practice grid layout. Then come the author/share section, it's quite challenging. First I used JS to change the CSS display property between flex and none, apparently it doesn't work for the desktop version so I switched to z-index, then I had to change take the share button out of its initial parent element, and then I combined using z-index and switching the display property. It looks right to me now.

```css
.card-share {
  ...
  display: none;
  z-index: 10;
```

This guy got promoted out of its container!
```css
#share-button {
  z-index: 100;
  position: absolute;
  bottom: 1rem;
  right: 2rem;
}
```
Changing the display property with JS won't work for the first time but it works with this.
```js
const computedStyle = window.getComputedStyle(shareSection);

if (computedStyle.display === "none") {
    shareSection.style.display = "flex";
```
`shareSection.style.display` will only reflect inline styles set directly via JavaScript or inline styles within the HTML. To check the effective display property, including those applied through external CSS, you should use getComputedStyle as it provides the computed value of the display property.


### Continued development

I should spend more time in planning how to solve the problem instead of jumping into it headfirst.

## Author

- Website - [Purnama S Rahayu](https://www.purnamaa.dev)
- Frontend Mentor - [@catreedle](https://www.frontendmentor.io/profile/catreedle)