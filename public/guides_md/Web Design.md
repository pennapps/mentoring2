# Web Design

## Building your first (pretty) website

Welcome coders of all levels! Feel free to check out the [Code Weekend](http://mentoring.pennapps.com/guide/dinphil.github.io/code-weekend) website for a quick overview of HTML, CSS, and Javascript. In case you missed it, here’s how the three come together to make websites work:

## What are HTML, CSS, and Javascript?

HTML (Hypertext Markup Language) is like the backbone of any webpage. It’s where we add in all the information - what they webpage actually displays as well as information about the page itself such as its title.

### HTML

HTML stands for HyperText Markup Language. It is HyperText because it hyperlinks you to other text. It is a markup language because it is not written as plain text. It is marked up into the form of HTML elements called tags.

### CSS

CSS dresses up this information. Most (but really all) webpages link to a CSS file that stores information on how a browser should display the information it recieves in the HTML. While it is possible to add CSS code into the HTML document, it is never done as it makes it nearly impossible to keep track of code and also slows down the page.

### Javascript

Javascript is the fun part. It does dynamic things with your webpage, updates content on the fly and can animate just about anything. We’ll talk about this later.

## What is the DOM?

Every webpage is built in the [HTML DOM (Document Object Model)](http://courses.cs.washington.edu/courses/cse190m/07sp/lectures/slides/images/dom_tree.gif). This means that every element in the HTML code is an element (or a Node, the mathematical kind - not to be confused with Node.JS). So we could call this paragraph an element in the DOM; the same is true of any of the images and pretty much everything else here.

## CSS (extended)

> Does your website have style?

CSS is a really funny language with a lot of oddities. I’ll go through a few of them here:

### Cascading

CSS stands for “Cascading Style Sheets”. Go back to the idea of a DOM, and envision a website as a tree. “Cascading” just means that the same element can have the same property set to different values in different places (perhaps in different CSS files), but the most specific setting is the one followed on the page.

For example, your CSS may set all body text in the body tag to blue, but text surrounded by an h1 tag is set to black. The text will end up being black, since the h1 tag is more specific than the body tag.

### Margins and Padding

Roughly speaking, setting margins and padding to particular values will give cushions of space around your content. In general it won’t matter which you set, but technically the margin is outside the “border” and the padding is within it. You can generally specifiy which margin/padding to set, or uniformly set them in every direction.

[Margins, Borders, and Padding](https://i.stack.imgur.com/PeSIJ.gif)

You should almost always put some kind of margin/padding around text. It’s really difficult to read when words stretch all the way out to the edge of a box or page, so your eyes will appreciate the white space.

### Sizes

Sizes of elements can be set and adjusted in several ways.

- You can set exact sizes of elements by indicating the number of pixels you want it to take up (notated *px*). For example, a box can be *100px* wide.
- It’s good practice to set sizes using a percentage, which indicates what percent of the page you want your element to take up. A bar that stretches across the page would have a width property of *100%*. Using percentages makes your page responsive to the initial window size.
- *em* can be used for fonts to indicate sizes relative to the original settings. For example, you can set a font size to *2em*, which will make it twice as big as it originally was.

### Colors

Colors can generally be set by just indicting a color name. To get a really specific color, you can use a color selector to find the hexadecimal representation of a color. Hexadecimal values are between 0 and 9 or a and f. The numbers are equivalent to, well, themselves, and the letters are two-digit numbers (a=10, b=11, c=12, et cetera). For example, *#1bb99a* is the shade of green we use on the PennApps website. People generally use “color pickers” to find the hexadecimal version fo the colors they want.

If you want to change a box color, alter the *background* property. Text color can be changed with the *color* property.

### Aligning

Just like a Word document, you can align text and objects to the left, right, or center of a page.

### Floating

You can set elements to “float” to some part of the page. For example, if you’d like to see a picture on the left of a text box, you can set *float:left;*. Be careful—there are a ton of nuances here.

### Animating

Yes, you can actually animate your CSS code. Below is an animation that causes a circle to blink red:

```jsx
@keyframes blink {
	50% {
		background: radial-gradient(circle, red 15%, transparent 40%), #cc5;
	}
}
/* in the actual CSS element */
animation: blink .5s infinite;
```

Keyframes are just different snapshots of your animation. In the blinking example, the original keyframe is a white circle, and the second keyframe is a red circle.

## Bootstrap

> The easiest shortcut to good design

Poke around on [Bootstrap](https://getbootstrap.com/). There are two main ways to use it in a website.

- *Borrow Elements*: You can use [page elements](https://getbootstrap.com/components/) straight from Bootstrap, such as buttons, navigation bars, search bars, et cetera.
- *Adapt a Template*: You can take entire templates built by Bootstrap and change them for your own purposes. This can be accomplished by opening the template, right-clicking, and saving the page as an html file.

You’re welcome to download Bootstrap, but it’s probably easier just to link to the website you want (or download just the files you want off the Internet).

## Resources

> Time to realize that thievery isn’t always wrong.

There are tons of resources out there to help with CSS and design:

- [W3Schools](https://www.w3schools.com/) is essentially the online dictionary of CSS.
- [Dash](https://dash.generalassemb.ly/) has really great tutorials for learning CSS.

This guide was provided by [Brynn Claypoole](https://github.com/bclay/).