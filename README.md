# study-course-frontendmasters-botcamp-introduction-to-html

## Inhtroduction to HTML

Tutorial link:

- https://gettingstartedwith.css.education/index.html

Finished Portfolio site:

- https://gettingstartedwith.css.education/portfolio/

### Creating Your First HTML Page

#### VS Code Setup

- Word wrap to make the VS Code window responsive and always showing the code:
  - Select 'View' and then 'Word Wrap' from the menu
- Use emmet shorthand to create a new HTML page
  - Create a new file with a '.html' extension and type '!' then TAB

#### HTML

| Main Tags                                                                        | Description                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `html <html lang="en"> `                                                         | Enables the "translation" function on browsers when you visit a website that is not in your native language and define the accessibility tools, like screenreaders to use the correct settings.                  | Defines the character set for the webpage content. UTF-8 is the standard for western countries, but for instance, it's different for Asian countries. |
| `html <meta charset="UTF-8" /> `                                                 | Defines the charset used by the content of the webpage. For western countries UTF-8 is the standard.                                                                                                             |
| `html <meta http-equiv="X-UA-Compatible" content="IE=edge" /> `                  | efines the rendering engine for the web page to make it retrocompatible with an old browser Internet Explorer. This tag must be removed soon, because Internet Explorer is no longer supported by most websites. |
| `html <meta name="viewport" content="width=device-width, initial-scale=1.0" /> ` | Defines the responsive aspect of the website when viewed in different devices.                                                                                                                                   |

### Creating Content

- https://frontendmasters.github.io/bootcamp/html

- HINT: Everything starts with a good markup (HTML).

#### Useful Tools

- https://color.adobe.com/explore
  - Click on 'All Sources' then 'Color Themes' and then on 'Most Popular'
- https://fonts.google.com/
- https://fontpair.io
- https://codepen.io/

#### Project: Initial HTML File

- Use semantic HTML to tag your content.
- Use the '<section>' tag to indicate a content block.
- Plan how to use the heading tags, for instance, you can use '<h1>' for the web page logo and '<h2>' for content titles, etc.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
	</head>
	<body>
		<section id="intro">
			<p>Hi, my name is <span>Luciano</span>.</p>
			<h2>I'm a front end developer and UX/UI Specialist.</h2>
			<p>
				Currently, I'm working at <a href="#" target="_blank">Havan Labs</a>.
			</p>
		</section>
	</body>
</html>
```

- How Box Model works
  - https://css-tricks.com/box-sizing

#### CSS Reset and Variables

```css
/* css variables */
:root {
	--black: #171321;
	--dkblue: #0d314b;
	--plum: #4b0d49;
	--hotmag: #ff17e4;
	--magenta: #e310cb;
	--aqua: #86fbfb;
	--white: #f7f8fa;
	--font-size: 1.3rem;
	--mono: 'Oxygen mono', monospace;
	--sans: Oxygen, sans-serif;
}
/* border box model */
html {
	box-sizing: border-box;
}
*,
*::before,
*::after {
	box-sizing: inherit;
}
```

HINTS

- Remember that vertical margin of 'block' elements collapse and the highest margin 'wins', so it nevers 'adds up' two vertical margins in those cases.
- Always use links with 'text-decoration' in the web page content, not just colors to indicate a link, because 10% of the population is color blind. You can use links without text-decoration on the 'navbar' though.
- When working with 'line-heigth', don't use a measure unit, just use a proportion, so it will be x times the size of the web page font size.
  - DO this:
    - line-height: 1.5;
  - DON'T do this:
    - line-height: 1.5remr;

#### CSS Initial Styles

```css
body {
	padding: 0;
	margin: 0;
	font-family: var(--sans);
	background-color: var(--black);
	color: var(--white);
	font-size: var(--font-size);
}
h1,
h2,
h3 {
	margin: 0;
}
a {
	color: var(--magenta);
}
a:hover {
	color: var(--hotmag);
	text-decoration: none;
}

/* intro styles */
#intro {
	padding-bottom: 10rem;
}
#intro p {
	font-size: 1rem;
	line-height: 1.5; /* 1.5 times of the web page font-size */
}
#intro .name {
	font-family: var(--mono);
}
.name span {
	font-family: var(--sans);
	font-size: 4rem;
	color: var(--aqua);
	display: block; /* use this to make the span content act like a block and break the line*/
}
#intro h2 {
	font-size: 4rem;
	font-weight: normal;
}
```

- HINT: You must use 'margin: 0 auto;' in combination with 'width: 200px', for instance in a div, so you can center that div horizontally.
- HINT: You can use 'font-size: 80%;' to reduce the size of all fonts in a div, proportionally to the documento font size.

- HINT: If you can use a shorter selection to achieve the same result, always prefer using the shorter.

  - For instance:
    - nav h1 a { ... }
    - Instead of: nav h1 ul li a { ... }

- HINT: Use 'display: block' on '<a href=>' to make the whole quadrant of the element clickable, providing a better usability for the users.

- HINT: Use 'flex-basis' in children elements of 'display: flex' elements to define their width among other children, for instance, 'flex-basis: 25%'. You can do the same thing using the full flex property 'flex' notation: 0 0 100%', where 'flex: GROW SHRINK BASIS'.

- HINT: Use [font awesome](https://fontawesome.com/) for the icons in your project to create prototypes, but use individual .SVGs in productions because the font awesome JavaScript contains all the icons and makes the bundle size to be larger. You can download the svg icon from FA site too. After that, you just need to add an 'i' with a 'class' to display the FA icon, for instance '<i class="fab fa-linkedin">'. For a more semantic option, you must replace 'i' for 'span'. You can view all those options and instructions if you click on the link.

- HINT: To improve the accessibility when using Font Awesome, add 'aria-hidden="true"' to the element displaying the LinkedIn and GitHub icons in the project and enclose the text next to icon with '<span class="sr-only">', where 'sr-only' means 'screen reader only' for many frameworks like Font Awesome, Bootstrap, Tailwind, etc. These two options will 'hide' the text visually and still 'read' it for screen readers, and show the icon 'visually' but hide from screen readers.

- HINT: The FA class name can be abbreviated using only the initials, for instance 'fa-brands fa-github' can be written as 'fab fa-github'.

- HINT: There's a 'React' version for FontAwesome.

- HINT: To increase the size of FA icons that, for instance, are located in a 'nav' element, you can use the following 'attribute' selector to match all the elements that have a class starting with 'fa-':

```css
nav [class*='fa-'] {
	font-size: 150%;
}
```

- HINT: An HTML button should only be used when there's a JavaScript based action associated with it. If the action is just to open another link/page, it must be an '<a>' (anchor) tag. If you need to call the user attention to click on the respective link, you can style it like a button, for instance, a link to download a PDF file.

#### Media Queries (Responsive Nav bar)

```css
@media (min-width: 850px) {
	nav {
		max-width: 1200px; /* you can also use this max-width property on the 'outter' nav selector */
		margin: 0 auto;
	}
}
```

- HINT: A min-width of 850px is a good breakpoint reference widely used for mobile devices.

- HINT: After 850px of min-width, 550px is another breakpoint for mobile devices.

- HINT: Some developers prefer to use '<nav>' only on the header of the website, but others say that it cab be used anywhere where there are navigation links, for instance, in the footer.

- HINT: The '<small>' is recommended to small print, fine print, like copyright statements, disclaimers, etc.

- HINT: Create CSS gradients online with [cssgradient.io](https://www.cssgradient.io)

### Flexbox vs Grid

- You can achieve the same result with Flexbox and Grid, but only Grid can overlap two cells. Flexbox can put cells next to each other, but they can never overlap.

```css
article {
	display: grid;
	grid-template-columns: 1fr 1fr;
}
```

- In the code above, the grid is divided in 2 columns, each one occupying 1 fraction of the screen, equally.
- Another way to achieve the same result is by using the 'repeat' function:

```css
grid-template-columns: repeat(2, 1fr);
```

- You can add multiple grids to the screen and define exactly how many and which cells each element will occupy:

```css
article {
	display: grid;
	grid-template-columns: repeat(10, 1fr); /* the same as 1fr, 1fr */
	gap: 1rem;
}
#projects img {
	grid-column: 1/6;
	grid-row: 1/2;
}
.text {
	grid-column: 5/11;
	grid-row: 1/2;
	order: 2;
	text-align: right;
}
```

- The code above creates a grid of 10 columns, then specifies that the image element will occupy from the 1st to the 6th cell and the text class element will occupy from the 5th to the 11th cell, which means they will overlap on the 5th and 6th column. Then, it defines that both elements should occupy from the 1st to the 2nd row.

- HINT: Setting the image width to 100% on the 'img' main tag style guarantees that it will always be resized proportionally to fit on the available space on the screen.

### Media Queries Examples

```css
@media (min-width: 550px) {
	article {
		display: grid;
		grid-template-columns: repeat(10, 1fr); /* the same as 1fr, 1fr */
		gap: 1rem;
	}
	#projects img {
		grid-column: 1/6;
		grid-row: 1/2;
	}
	.text {
		grid-column: 5/11;
		grid-row: 1/2;
		order: 2;
		text-align: right;
	}
	#projects ul {
		justify-content: flex-end;
	}
}

/* If the screen min-width is higher than 850px applies this style */
@media (min-width: 850px) {
	nav {
		max-width: var(--content-max-width);
		margin: 0 auto;
	}
	nav li:first-child {
		flex-basis: auto;
		text-align: left;
		margin-right: auto;
	}
}
```

- In the above example, there are 02 breakpoints that change the style of some elements, one for when the screen width is higher than 550px and another one when the width is higher than 850px, all the other styles in the css file not encapsulated in the media queries will keep the same style in all resolutions. This is called the "mobile first" approach.
- Media queries are set with selectors to specific elements that must be styled differently in specific resolutions (screen width size).

## Tutorial Final Version

index.html

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link
			href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,200;0,300;1,100&family=Oxygen&family=Oxygen+Mono&display=swap"
			rel="stylesheet"
		/>
		<link rel="stylesheet" href="./css/style.css" />
		<script
			defer
			src="https://kit.fontawesome.com/ff2d0f3281.js"
			crossorigin="anonymous"
		></script>
	</head>
	<body>
		<nav>
			<ul>
				<li>
					<h1>
						<a href="index.html">
							<span class="fa-solid fa-code" aria-hidden="true"></span>
							<span>Luciano Ayres</span>
						</a>
					</h1>
				</li>
				<li>
					<a href="#projects">Projects</a>
				</li>
				<li><a href="about.html">About</a></li>
				<li>
					<a href="#contact"
						><span class="fa-solid fa-envelope" aria-hidden="true"></span>
						<span class="sr-only">Contact</span></a
					>
				</li>
				<li>
					<a href="#" target="_blank"
						><span class="fa-brands fa-linkedin" aria-hidden="true"></span>
						<span class="sr-only">LinkedIn</span></a
					>
				</li>
				<li>
					<a href="#" target="_blank"
						><span class="fab fa-github" aria-hidden="true"></span>
						<span class="sr-only">Github</span></a
					>
				</li>
				<li><a href="#" class="button">Resume</a></li>
			</ul>
		</nav>
		<section id="intro">
			<p class="name">Hi, my name is <span>Luciano Ayres.</span></p>
			<h2>I create websites.</h2>
			<p>I'm a front end developer and UX/UI Specialist.</p>
			<p>
				Currently, I'm working at <a href="#" target="_blank">Havan Labs</a>.
			</p>
		</section>

		<div class="section-dkblue">
			<section id="projects">
				<h2>Projects I'm proud of</h2>
				<article>
					<div class="text">
						<h4>Latest Project</h4>
						<h3>Wall of Wonder</h3>
						<p class="blackbox">
							Description of the project. This should be fairly concise while
							also describing the key components that you developed or worked
							on. It can be as long as you need it to be but should at least be
							a few sentences long. Be sure to include specific links anywhere
							in the description. A link looks like <a href="#">this</a>, and
							multiple links look <a href="#">like this</a> and
							<a href="#">like this</a>.
						</p>
						<h4>Technologies used include</h4>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>SVG</li>
						</ul>
					</div>

					<img
						src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-1.png"
						alt="Screenshot of the Portfolio Item"
					/>
				</article>

				<article class="reverse">
					<div class="text">
						<h4>HTML Project</h4>
						<h3>Magic Cube</h3>
						<p class="blackbox">
							Description of the project. This should be fairly concise while
							also describing the key components that you developed or worked
							on. It can be as long as you need it to be but should at least be
							a few sentences long. Be sure to include specific links anywhere
							in the description. Be sure to include specific links anywhere in
							the description. Be sure to include specific links anywhere in the
							description. Be sure to include specific links anywhere in the
							description. A link looks like <a href="#">this</a>, and multiple
							links look <a href="#">like this</a> and
							<a href="#">like this</a>.
						</p>
						<h4>Technologies used include</h4>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>JavaScript</li>
						</ul>
					</div>

					<img
						src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-5.png"
						alt="Screenshot of the Portfolio Item"
					/>
				</article>

				<article>
					<div class="text">
						<h4>React Project</h4>
						<h3>Amazing View</h3>
						<p class="blackbox">
							Description of the project. This should be fairly concise while
							also describing the key components that you developed or worked
							on. It can be as long as you need it to be but should at least be
							a few sentences long. Be sure to include specific links anywhere
							in the description. Be sure to include specific links anywhere in
							the description. A link looks like <a href="#">this</a>, and
							multiple links look <a href="#">like this</a> and
							<a href="#">like this</a>.
						</p>
						<h4>Technologies used include</h4>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>React</li>
							<li>TypeScript</li>
						</ul>
					</div>

					<img
						src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-4.png"
						alt="Screenshot of the Portfolio Item"
					/>
				</article>
			</section>
		</div>

		<div class="gradient"></div>

		<div class="section-plum">
			<section id="contact">
				<h2>Contact me</h2>
				<p>
					I'm always interested in hearing about new project opportunities,
					writing code or creating websites.
				</p>
				<p><a href="#" class="button">Email me</a></p>
			</section>
		</div>

		<div class="gradient"></div>

		<footer>
			<h2>Luciano Ayres &middot; Front end developer</h2>
			<ul>
				<li>
					<a href="#" target="_blank"
						><span class="fa-brands fa-linkedin" aria-hidden="true"></span>
						<span class="sr-only">LinkedIn</span></a
					>
				</li>
				<li>
					<a href="#" target="_blank"
						><span class="fab fa-github" aria-hidden="true"></span>
						<span class="sr-only">Github</span></a
					>
				</li>
				<li>
					<a href="#contact"
						><span class="fa-solid fa-envelope" aria-hidden="true"></span>
						<span class="sr-only">Contact</span></a
					>
				</li>
			</ul>
			<p><small>&copy; 2022 Luciano Ayres. All rights reserved.</small></p>
		</footer>
	</body>
</html>
```

style.css

```css
/* css variables */
:root {
	--white: #ffffff;
	--black: #171321;
	--dkblue: #0d314b;
	--plum: #4b0d49;
	--hotmag: #ff17e4;
	--magenta: #e310cb;
	--aqua: #86fbfb;
	--white: #f7f8fa;
	--font-size: 1.3rem;
	--mono: 'Oxygen mono', monospace;
	--sans: Oxygen, sans-serif;
	--animation-transition-0: 0.2s ease-in-out;
	--transform-hover-0: translateY(-3px) scale(1.1);
	--content-max-width: 1200px;
}
/* border box model */
html {
	box-sizing: border-box;
}
*,
*::before,
*::after {
	box-sizing: inherit;
}
/* generic styles of the page */
body {
	padding: 0;
	margin: 0;
	font-family: var(--sans);
	background-color: var(--black);
	color: var(--white);
	font-size: var(--font-size);
}
h1,
h2,
h3 {
	margin: 0;
}
a {
	color: var(--magenta);
	font-weight: bold;
	transition: var(--animation-transition-0);
}
a:hover {
	color: var(--hotmag);
	text-decoration: none;
	transform: var(--transform-hover-0);
}
img {
	width: 100%;
}
/* background color div */
.section-plum {
	background-color: var(--plum);
}
.section-dkblue {
	background-color: var(--dkblue);
}

.gradient {
	background: linear-gradient(
		90deg,
		rgba(255, 23, 228, 1) 0%,
		rgba(134, 251, 251, 1) 100%
	);
	height: 2px;
}

/* intro styles */
#intro {
	padding: 4rem 1rem 10rem 1rem;
	max-width: var(--content-max-width);
	margin: 0 auto;
}
#intro p {
	font-size: 1rem;
	line-height: 1.5; /* 1.5 times of the web page font-size */
}
#intro .name {
	font-family: var(--mono);
	font-size: 1rem;
}
.name span {
	font-family: var(--sans);
	font-size: 4rem;
	color: var(--aqua);
	display: block; /* use this to make the span content act like a block and break the line*/
}
#intro h2 {
	font-size: 4rem;
	font-weight: normal;
}

#projects {
	padding: 4rem 1rem;
	max-width: var(--content-max-width);
	margin: 0 auto;
}

#projects h2 {
	font-size: 2.5rem;
	margin-bottom: calc(2.5rem * 1.5);
}

#projects h3 {
	color: var(--aqua);
}

#projects h4 {
	font-size: 1rem;
	font-family: var(--mono);
	margin: 0;
}

.blackbox {
	background-color: var(--black);
	padding: 1rem;
	border-radius: 10px;
	color: var(--white);
	font-size: 1rem;
	line-height: 1.5;
}

#projects ul {
	list-style-type: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
	gap: 1rem;
	font-size: 1rem;
}

#contact {
	width: 400px;
	text-align: center;
	margin: 0 auto;
	padding: 3rem 0;
}

#projects img {
	margin: 2rem 0 4rem 0;
	border-left: 1px solid var(--aqua);
	border-top: 1px solid var(--aqua);
	border-radius: 25px;
	padding: 1rem;
}

#contact p:last-child {
	margin-top: 3rem;
}
nav {
	font-family: var(--mono);
	font-size: 80%;
	padding: 1rem 1rem 2rem 1rem;
	/* padding: 4rem 1rem; */
}

nav h1 a {
	font-family: var(--sans);
}
nav ul {
	list-style-type: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
	gap: 2rem;
}
nav li:first-child {
	flex-basis: 100%;
	text-align: center;
}
nav [class*='fa-'] {
	font-size: 150%;
	color: var(--aqua);
	transition: var(--animation-transition-0);
}

nav h1 [class*='fa-'] {
	font-size: 100%;
	color: var(--aqua);
}

nav a {
	color: var(--white);
	text-decoration: none;
	display: block;
}

nav a:hover,
nav [class*='fa-']:hover {
	color: var(--magenta);
}

.button {
	font-family: var(--mono);

	color: var(--white);
	text-decoration: none;
	background-color: var(--magenta);
	padding: 0.3rem 0.8rem;
	border-radius: 6px;
}

.button:hover {
	color: var(--hotmag);
	background-color: var(--white);
}

footer {
	text-align: center;
	padding: 4rem 0;
}

footer ul {
	list-style-type: none;
	padding: 0;
	margin: 2rem 0;
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	gap: 3rem;
	font-size: 3rem;
}

footer span,
footer a {
	transition: var(--animation-transition-0);
}
footer span:hover,
footer a:hover {
	color: var(--white);
	transform: var(--transform-hover-0);
}

/* If the screen min-width is higher than 550px applies this style */

@media (min-width: 550px) {
	article {
		display: grid;
		grid-template-columns: repeat(10, 1fr); /* the same as 1fr, 1fr */
		gap: 1rem;
	}
	#projects img {
		grid-column: 1/6;
		grid-row: 1/2;
	}
	.text {
		grid-column: 5/11;
		grid-row: 1/2;
		order: 2;
		text-align: right;
	}
	#projects ul {
		justify-content: flex-end;
	}
	#projects .reverse .text {
		grid-column: 1/7;
		order: 2;
		text-align: left;
	}
	#projects .reverse img {
		grid-column: 6/11;
		grid-row: 1/2;
	}
	#projects .reverse ul {
		justify-content: flex-start;
	}
}

/* If the screen min-width is higher than 850px applies this style */
@media (min-width: 850px) {
	nav {
		max-width: var(--content-max-width);
		margin: 0 auto;
	}
	nav li:first-child {
		flex-basis: auto;
		text-align: left;
		margin-right: auto;
	}
}
```

## Official Tutorial Repository (Final)

- https://gettingstartedwith.css.education/ch6.html#:~:text=Revisit%20the%20CodePen%20we%20just%20finished
