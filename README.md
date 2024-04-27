# Summary

## What I changed?
I changed many parts of your code, so I will try to list them and tell why I changed them.

### HTML
I changed:
- Line: **18** and **34**
    <br>
    Reason: Because it's not a good pratice to use SVG directly in your HTML, try to always use and `<img/>` tag for this.
- Line: **19**,**20**,**37** and **38**
    <br>
    Reason: Because it's not a good pratice too, always when working with style, try to only use external CSS instead of Internal CSS and Inline CSS, because they make very hard to give maintance to your code.

- Line: **24 to 28**
    <br>
    Reason: Because you was using many id's, it's not wrong but wasn't necessary, this, because you wish to select all those buttons, so I decided to use data-attributes, because we can't have duplicated ID's.

### CSS
I added many class in this section, I noticed some of your class was redundant or with many informations that could be shorted, one of them:
```css
#star-result{
    color: var(--Orange);
    font-weight: 400;
    border: 1px var(--White) solid;
    border: none;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 20px;
    background-color: var(--Dark-Blue);
    display: inline-block;
    align-items: center;
    text-align: center;
}
```

This, `border: 1px var(--White) solid;` it's bein nulled by `border: none;`.

This, `padding-left: 15px; padding-right: 15px; padding-top: 5px; padding-bottom: 5px;` could be changed to `padding: 5px 15px`. Because padding has a shorthand. See more below.
    
`padding: 20px` is the same as padding-top, bottom, left, right with **20px** of value.

`padding: 20px 15px` is the same as padding-top, bottom with **20px** of value, and padding-left, right with **15px** of value.

`padding: 20px 15px 10px 5px` is the same as padding-top **20px**, padding-right **15px**, padding-bottom **10px** and padding-left **5px**.

it's work for margin, gap and border-radius too!

### JS
About JS I highly recommend to you, to see and try to understand what each part of the code do, because this will help you to improve your Progamming Logic. But I will try to give a short answer of what I did.

First I removed a bunch of code to select each button, then I used a `querySelectorAll` to select all buttons. querySelectorAll returns an array, so I iterate this array with `.forEach()`, then I took each item of the array and store them in `button`. And well, from here I think you already know what's happening.

### ***Làm tốt lắm, hãy tiếp tục luyện tập.***