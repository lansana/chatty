# Chatty

A lightweight notification library for broadcasting messages in a user-interface.

![chatty.js preview image](https://raw.githubusercontent.com/lansana/chatty/master/dist/img/chatty-preview.gif)

## Download

Bower:

`bower install chatty`

Raw source code:

**JavaScript**

- [Full JavaScript](https://raw.githubusercontent.com/lansana/chatty/master/dist/js/chatty.js) ([~5 kB](https://raw.githubusercontent.com/lansana/chatty/master/dist/js/chatty.js))
- [Minified Javascript](https://raw.githubusercontent.com/lansana/chatty/master/dist/js/chatty.min.js) ([~1 kB](https://raw.githubusercontent.com/lansana/chatty/master/dist/js/chatty.min.js))

**CSS**

- [Full CSS](https://raw.githubusercontent.com/lansana/chatty/master/dist/css/chatty.css) ([~5 kB](https://raw.githubusercontent.com/lansana/chatty/master/dist/css/chatty.css))
- [Minified CSS](https://raw.githubusercontent.com/lansana/chatty/master/dist/css/chatty.min.css) ([~3 kB](https://raw.githubusercontent.com/lansana/chatty/master/dist/css/chatty.min.css))

## Installation

In your markup:

```html
<head>
    <link rel="stylesheet" href="/path/to/chatty.css">
</head>
<body>
    <script src="/path/to/chatty.js"></script>
</body>
```

## Usage and examples

**Creating a new Chatty object**

```js
var chatty = new Chatty(); 

chatty.show();
```

![chatty.js default image](https://raw.githubusercontent.com/lansana/chatty/master/dist/img/chatty-default.gif)

**Changing the position of your chatty**

Note: all of the examples except this one use the default position, 'bottom right', which spawns
the chatty from the bottom right corner of the screen. This may not be visible in the GIF's as
they are all zoomed in.

```js
    var chatty = new Chatty({
        message: 'I live on the top left corner of the screen!',
        position: 'top left'
    });
    
    chatty.show();
```

![chatty.js position image](https://raw.githubusercontent.com/lansana/chatty/master/dist/img/chatty-position.gif)

**Creating a new Chatty object with custom options**
```js
var chatty = new Chatty({
    message: 'This is my first chatty',
    duration: '7500',
    styles: {
        fontSize: '30px',
        color: '#000',
        borderColor: '#000',
        backgroundColor: '#fff'
    }
});

chatty.show();
```

![chatty.js custom image](https://raw.githubusercontent.com/lansana/chatty/master/dist/img/chatty-custom.gif)

**Rendering HTML inside your chatty**

```js
var chatty = new Chatty({
    message: '<img src="loader.gif">',
    styles: {
        backgroundColor: '#fff',
        borderColor: 'rgb(240, 240, 240)'
    },
    renderHTML: true,
    infinite: true
});

chatty.show();
```

![chatty.js html image](https://raw.githubusercontent.com/lansana/chatty/master/dist/img/chatty-html.gif)

**Removing your chatty from the screen**

```js
var chatty = new Chatty({
    message: 'I am immortal',
    infinite: true
});

//...

setTimeout(function() {
    chatty.close();
}, 2500);
```

![chatty.js close image](https://raw.githubusercontent.com/lansana/chatty/master/dist/img/chatty-close.gif)

**Updating your chatty after it's already been created**

```js
var chatty = new Chatty({
    message: 'Watch me change!',
    infinite: true
});

chatty.show();

setTimeout(function () {
    chatty.update({
        message: 'Error, error, error!',
        styles: {
            backgroundColor: 'red'
        }
    });
}, 3500);
```

![chatty.js update image](https://raw.githubusercontent.com/lansana/chatty/master/dist/img/chatty-update.gif)

## Options

These are the options you can pass to the `Chatty` constructor or the `update` method.

Option | Type | Default | Description
-------|------|---------|------------
message | String | `Woohoo, you rock!` | This is the text content of your chatty.
duration | Int | `3000` | The time (milliseconds) to show the chatty for.
infinite | Boolean | `false` | If this flag is set to true, your chatty will not close until explicitly instructed with the `close` method.
position | String | `bottom right` | The position the chatty will appear in. There are four options: `top left`, `top right`, `bottom left` and `bottom right`.
renderHTML | Boolean | `false` | If this flag is set to true, the content within the `message` property will be rendered as HTML instead of plain text.
isError | Boolean | `false` | If this flag is set to true, a class or `error` will be added to your chatty.
styles | Object | `{}` | A value that represents the speed of the typing. The lower you go, the faster it types.

## Contributing

Feel free to contribute by forking, opening issues, etc.

## License

The MIT License (MIT)

Copyright (c) 2017 Lansana Camara

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.