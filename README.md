# fluent_interface
basic implementation of a fluent interface

https://medium.com/lambda-school-students/how-to-create-fluent-interfaces-the-easy-way-with-vanilla-javascript-2a61b6558f01 

How to create fluent interfaces the easy way with vanilla JavaScript
Fluent interfaces make your code more readable and, just as importantly, more fun to work with. We’ll build a small DOM manipulation library with a fluent interface to show how this simple technique can improve your code style and efficiency.
Go to the profile of Jason Barr
Jason Barr
Jan 31
jQuery might not be needed for most modern JavaScript applications, but we can still take advantage of its better design features in our own projects!

Fluent interfaces are a beautiful thing.

I mean, when you take something like this:

And compare it to this:

Ok, it’s not like the first is completely unreadable, at least not with this simple example. But if you’ve had significant experience working with native DOM methods in JavaScript you know how much more clunky and cluttered it can get.

And doesn’t the second example feel more like the actual HTML fragment the code is creating? Even if you don’t have trouble reading the first example, having code to generate HTML that reads like what’s actually going on and nests like HTML elements helps you see what’s going on more clearly at a glance.

Remember, it’s not just about how terse you can make your code or what neat tricks you can do with it that matters; keeping in mind how your code clearly presents the end product is also important. And I would say element.addId('id') more intuitively depicts what’s going on behind the scenes than element.id = 'id'.

Plus it’s not really much fun to type all those variable declarations, equals signs, and semicolons.

…obviously that last bit is just my ever so humble (but accurate) opinion…
Image source: YouTube

    By the way, kids, always use semicolons — Andrea Giammarchi, paraphrased

An Open Letter to JavaScript Leaders Regarding No Semicolons

No semicolons has side effects.
hackernoon.com
Fluent Interfaces, tl;dr

First, what is a fluent interface?

    In software engineering, a fluent interface (as first coined by Eric Evans and Martin Fowler) is a method for designing object oriented APIs based extensively on method chaining with the goal of making the readability of the source code close to that of ordinary written prose, essentially creating a domain-specific language within the interface. (source)

Not entirely wrong, but…

Let’s say the list item has buttons to perform different actions for each task, like marking it complete. Assuming there’s some kind of data persistence on the backend, here’s what this could look like with jQuery:

The fluent interface makes the code much more compact and readable than it would have been otherwise.
How to create a simple fluent interface

The essential element of creating a fluent interface with chainable methods in JavaScript is to write methods that perform an action on the object and then return this.

We’ll build a small library to add and modify HTML elements to a document since working with the DOM is a great use case for this sort of thing.
Step 1: Define the constructor

I prefer using the old style constructor with methods declared on the prototype to ES2015’s class syntax both because get off my lawn and, more importantly, because I agree with Eric Elliott that class in JavaScript is fundamentally flawed.
How to Fix the ES6 `class` keyword

Make class inheritance compositional similar to the way stamps are composed. In other words, change the behavior of…
medium.com

We’re just going to make a wrapper around a regular HTML element for simplicity. If the argument passed to the constructor is an instance of the DOM Level 2 HTMLElement interface we’ll just wrap it with the object. Otherwise it should be a string so we’ll use document.createElement to make it.

We’ll also add a create method to call the constructor and allow immediate chaining.

Using HtmlElement.create not only allows you to chain your element creation in the example above, but also absolves you of having to remember to use new, which is a common source of bugs.
Step 2: Methods to add attributes and text content

Now let’s define the attribute methods used in the example. Note the use of the ES2015 rest parameter syntax in addClasses. We’ll also set the element’s textContent property and use shortcut evaluation with the || and && operators for cases where the relevant properties are undefined. That will be relevant when we add methods to create child elements, in case we don’t want to specify all the properties for every child element.

Now you can create an element, id and any number of classes one nice method chain.

Obviously for a real application or library you’d need methods to add other attributes, including custom and data attributes. You’d also want methods to remove attributes as well, but this will do for an example.
Step 3: Add methods to nest child elements

These methods do exactly as advertised, adding one or more child elements to the parent.
Step 4: Methods to select and append elements

Obviously if we were using this in the wild we’d want more methods to select and manipulate elements, traverse the DOM, and more, but for demonstration purposes these three will do.
Step 5: Put it all together

Here’s the complete “class.”
Moving forward: What next?

Now that we’ve seen a basic implementation of a fluent interface, it’s simple to make additions and improvements to extend functionality.

Let me know in the responses if this is helpful, and how you might use fluent interfaces to improve your own projects in the future!

    JavaScriptWeb DevelopmentLearningLearning To CodeTutorial

Go to the profile of Jason Barr
Jason Barr

Developer, ADHD advocate, entrepreneur. I promote open source software, hardware, politics, & society. Most important, the greatest kid on Earth calls me Daddy.
Lambda School Students
Lambda School Students

An inside look at what it’s like to be part of Lambda School, where students of all ages, backgrounds, and experience levels train to be software engineers, data scientists, and more.
Also tagged Web Development
The Magic Of this Keyword
Go to the profile of JavaScript Teacher
JavaScript Teacher
Mar 3
Related reads
The power of JavaScript
Go to the profile of Anna Sóley og Ragnhildur Rós
Anna Sóley og Ragnhildur Rós
Dec 17, 2018
Also tagged Tutorial
The definitive Node.js handbook
Go to the profile of Flavio Copes
Flavio Copes
Sep 6, 2018
Responses
Maryann Jordan
Write a response…
Maryann Jordan
Conversation between Hajime Yamasaki Vukelic and Jason Barr.
Go to the profile of Hajime Yamasaki Vukelic
Hajime Yamasaki Vukelic
Feb 8
Ok, it’s not like the first is completely unreadable, at least not with this simple example.

LOL, I thought the second one was the example of ugly… :-)
Go to the profile of Jason Barr
Jason Barr
Feb 8

To each their own ;)
Go to the profile of Jason Barr
Jason Barr
Feb 18

I honestly can’t believe so many people have read this. It’s the first tutorial I’ve ever written. Thanks for the engagement, y’all, I really appreciate it.
Conversation between JM Santos and Jason Barr.
Go to the profile of JM Santos
JM Santos
Feb 10

Cool! Taking advantage of the builder pattern. I’m just thinking what do you think on using a factory pattern?
Go to the profile of Jason Barr
Jason Barr
Feb 18

I actually prefer the factory pattern to the way I did it here. I used an old-style constructor function for this because it’s something someone with a basic knowledge of JS is likely to be familiar with and I didn’t want to potentially include too many new concepts for someone who didn’t have as much experience.
Conversation between Hùng Lê and Andy Rad.
Go to the profile of Hùng Lê
Hùng Lê
Feb 5

Uncaught TypeError: this.querySelector is not a function.

Why?
Go to the profile of Andy Rad
Andy Rad
Feb 8

try this.element.querySelector
Conversation between Hùng Lê and Jason Barr.
Go to the profile of Hùng Lê
Hùng Lê
Uncaught TypeError: this.querySelector is not a function. Why?
Go to the profile of Jason Barr
Jason Barr
Feb 8

Yes, `this.element.querySelector` should work. That’s what I have in my local file, not sure how I managed to copy it wrong to the post. Whoops!
Conversation with Jason Barr.
Go to the profile of Juan Mendes
Juan Mendes
Feb 15

The power of fluid interfaces is good for one-offs. I don’t think a statement over 15 lines is simpler to understand after you’ve written it. Not to mention how much harder it is to debug. Don’t get me wrong, the aesthetics are great but to me they hurt comprehensibility. Sorry for the negativity, but I never liked jQuery, or rx-js style of coding. I…
Go to the profile of Jason Barr
Jason Barr
Feb 18

Yeah, if I were doing more here than just explaining the basic concept I would have done some things differently, that’s for sure.

I like a more functional style myself, and I actually dig reactive programming (with or without Rx.js), but there’s certainly more than one way to get things done.

Thanks for sharing!
Go to the profile of Jason Barr
Jason Barr
Feb 8

Ok, fixed a few bugs. That’s what I get for just assuming things will work without testing to make sure I’ve got the details right. I’ll call that a learning experience.




