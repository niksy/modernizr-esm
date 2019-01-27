# modernizr-esm

[Modernizr](http://modernizr.com) tests as ES Modules.

Features:

* Each test can be imported and used separately
* Tests return multiple named exports if they test multiple features
* Async tests support Promises as result
* No global modifications like setting classes on `html` element

Refer to [original Modernizr documentation](https://github.com/Modernizr/Modernizr/blob/master/README.md) for more information.

## Install

```sh
npm install modernizr-esm --save
```

## Usage

```js
import emoji from 'modernizr-esm/feature/emoji';

console.log(emoji); // Are emojis supported?
```

### Async tests

```js
import flash from 'modernizr-esm/feature/flash';

flash(( support ) => {
	console.log(support); // Is Flash supported?
});
```

If you don’t provide callback, calling function will return Promise.

```js
import flash from 'modernizr-esm/feature/flash';

flash().then(( support ) => {
	console.log(support); // Is Flash supported?
});
```

### Multiple feature tests

```js
import { cssgrid } from 'modernizr-esm/feature/css/cssgrid';

console.log(cssgrid); // Is CSS Grid supported?
```

### Setting feature HTML classes

Use `classList` and export value of feature test:

```js
import emoji from 'modernizr-esm/feature/emoji';

document.documentElement.classList.add(`${emoji ? '' : 'no-'}emoji`);
```

Or if you want to use Modernizr HTML class setter:

```js
import setClasses from 'modernizr-esm/src/setClasses';
import emoji from 'modernizr-esm/feature/emoji';

setClasses([`${emoji ? '' : 'no-'}emoji`]);
```

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)  
MIT © [Modernizr](https://modernizr.com/)
