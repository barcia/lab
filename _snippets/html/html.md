- https://github.com/dbox/html5-kitchen-sink

# HTML

## Content sectioning

### Headings
```html
<h1>Heading H1</h1>
<h2>Heading H2</h2>
<h3>Heading H3</h3>
<h4>Heading H4</h4>
<h5>Heading H5</h5>
<h6>Heading H6</h6>
```

### Address
```html
<address>
    <a href="mailto:jim@rock.com">jim@rock.com</a><br>
    <a href="tel:+13115552368">(311) 555-2368</a>
</address>
```

## Text content

### Blockquote
```html
<blockquote>blockquote simple</blockquote>
```

```html
<blockquote cite="https://www.huxley.net/bnw/four.html">
    <p>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
    <footer>—Aldous Huxley, <cite>Brave New World</cite></footer>
</blockquote>
```

### List

```html
<ul>
    <li>first item</li>
    <li>second item      <!-- Look, the closing </li> tag is not placed here! -->
      <ul>
        <li>second item first subitem</li>
        <li>second item second subitem      <!-- Same for the second nested unordered list! -->
          <ul>
            <li>second item second subitem first sub-subitem</li>
            <li>second item second subitem second sub-subitem</li>
            <li>second item second subitem third sub-subitem</li>
          </ul>
        </li>           <!-- Closing </li> tag for the li that contains the third unordered list -->
        <li>second item third subitem</li>
      </ul>
    </li>               <!-- Here is the closing </li> tag -->
    <li>third item</li>
</ul>
```

```html
<ol>
    <li>first item</li>
    <li>second item      <!-- Look, the closing </li> tag is not placed here! -->
      <ol>
        <li>second item first subitem</li>
        <li>second item second subitem      <!-- Same for the second nested unordered list! -->
          <ol>
            <li>second item second subitem first sub-subitem</li>
            <li>second item second subitem second sub-subitem</li>
            <li>second item second subitem third sub-subitem</li>
          </ol>
        </li>           <!-- Closing </li> tag for the li that contains the third unordered list -->
        <li>second item third subitem</li>
      </ol>
    </li>               <!-- Here is the closing </li> tag -->
    <li>third item</li>
</ol>
```

```html
<dl>
    <dt>Firefox</dt>
    <dt>Mozilla Firefox</dt>
    <dd>A free, open source, cross-platform, graphical web browser
        developed by the Mozilla Corporation and hundreds of volunteers.</dd>

    <!-- other terms and definitions -->
</dl>
```

### Figure
```html
<figure>
<pre><code>! " # $ % & ' ( ) * + , - . /
0 1 2 3 4 5 6 7 8 9 : ; < = > ?
@ A B C D E F G H I J K L M N O
P Q R S T U V W X Y Z [ \ ] ^ _
` a b c d e f g h i j k l m n o
p q r s t u v w x y z { | } ~
</code></pre>
<figcaption>Figcaption in a code snippet</figcaption>
</figure>
```

### HR
```html
<hr>
```

### Paragraph
```html
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti velit voluptas, odit nihil totam id provident cumque inventore accusamus perspiciatis laborum necessitatibus fuga, hic optio ullam neque eligendi dolorem ipsam!</p>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti velit voluptas, odit nihil totam id provident cumque inventore accusamus perspiciatis laborum necessitatibus fuga, hic optio ullam neque eligendi dolorem ipsam!</p>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti velit voluptas, odit nihil totam id provident cumque inventore accusamus perspiciatis laborum necessitatibus fuga, hic optio ullam neque eligendi dolorem ipsam!</p>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti velit voluptas, odit nihil totam id provident cumque inventore accusamus perspiciatis laborum necessitatibus fuga, hic optio ullam neque eligendi dolorem ipsam!</p>
```

### Pre
```html
<pre>! " # $ % & ' ( ) * + , - . /
0 1 2 3 4 5 6 7 8 9 : ; < = > ?
@ A B C D E F G H I J K L M N O
P Q R S T U V W X Y Z [ \ ] ^ _
` a b c d e f g h i j k l m n o
p q r s t u v w x y z { | } ~
</pre>
```

## Inline text semantics

```html
The <a href="#" title="The link title" target="_blank">a element</a> example
The <abbr>abbr element</abbr> and an <abbr title="Abbreviation">abbr</abbr> element with title examples
The <b>b element</b> element
The <bdi>bdi element</bdi> element
The <bdo dir="rtl">bdo element</bdo> element
The <br> br element
The <cite>cite</cite> element
The <code class="syntax-grey">code</code> element
The <data value="297554859">data</data> element
The <dfn title="Here the dfn value">dfn</dfn> element
The <em>em</em> element
The <i>i</i> element
The <kbd>kbd</kbd> element
The <mark>mark</mark> element
The <q cite="The link to quote author">q</q> element
The ruby, rp, rt and rtc elements<br>
<ruby>
漢 <rp>(</rp><rt>Kan</rt><rp>)</rp>
字 <rp>(</rp><rt>ji</rt><rp>)</rp>
<rtc>San Francisco</rtc>
</ruby>
The <s>s (Strikethrough)</s> element
The <samp>samp</samp> element
The <small>small</small> element
The <span>span</span> element
The <strong>strong</strong> element
The <sub>sub</sub> element
The <sup>sup</sup> element
The time <time datetime="2016-03-30T22:00">22:00</time> element
The <u>u (Unarticulated)</u> element
The <var>var</var> element
The wbr element can split a long<wbr>.word
The <del cite="A URI for a resource that explains the change" datetime="2014-10-16 19:00">del</del> element
The <ins cite="A URI for a resource that explains the change" datetime="2015-10-09">ins</ins> element
```

## Media
### Audio
```html
<figure>
    <audio src="./assets/audio/sound.ogg" controls>
      <source src="./assets/audio/sound.wav" type="audio/wav">
      <source src="./assets/audio/sound.mp3" type="audio/mpeg"> Your browser does not support the audio element.
    </audio>
    <figcaption>Listen this audio:</figcaption>
</figure>
```

### IMG
```html
<img src="./assets/img/forest.jpg" alt=""  width="800px">
```

### Video
```html
<video controls width="500">
    <source src="./assets/video/earth.ogg" type="video/ogg">
    <source src="./assets/video/earth.mp4" type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
</video>
```
```html
<video controls width="500" poster="./assets/img/forest.jpg">
    <source src="./assets/video/earth.ogg" type="video/ogg">
    <source src="./assets/video/earth.mp4" type="video/mp4">
    <track kind="captions" src="" srclang="en">
    <track kind="descriptions" src="" srclang="en">
    <track kind="chapters" src="" srclang="en">
    <track kind="subtitles" src="" srclang="gl">
    <track kind="subtitles" src="" srclang="en">
    <track kind="subtitles" src="" srclang="es">
    <track kind="metadata" src="" srclang="en" label="Key Stage 1">
    <track kind="metadata" src="" srclang="en" label="Key Stage 2">
    Sorry, your browser doesn't support embedded videos.
</video>
```

## Embed
### Iframe
```html
<iframe src="http://example.com/" height="300"></iframe>
```

### Picture
```html
<picture>
    <!-- <source srcset="./assets/img/logo/logo.png 768w, ./assets/img/logo/logo.png 1.5px"> -->
    <img src="./assets/img/logo/logo.png" alt="logo">
</picture>
```

## Table
```html
<table>
    <thead>
        <tr>
            <th colspan="2">The table header</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>The table body</td>
            <td>with two columns</td>
        </tr>
    </tbody>
</table>
```

```html
<table>
    <caption>Table title</caption>
    <thead>
      <tr>
        <th>Table Header 1</th>
        <th>Table Header 2</th>
        <th>Table Header 3</th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <td>Total 1</td>
        <td>Total 2</td>
        <td>Total 3</td>
      </tr>
    </tfoot>
    <tbody>
      <tr>
        <td>Division 1</td>
        <td>Division 2</td>
        <td>Division 3</td>
      </tr>
      <tr>
        <td>Division 1</td>
        <td>Division 2</td>
        <td>Division 3</td>
      </tr>
      <tr>
        <td>Division 1</td>
        <td>Division 2</td>
        <td>Division 3</td>
      </tr>
    </tbody>
  </table>
  ```


## Form

### Input
```html
<label for="input_text">Text Input</label>
<input id="input_text" type="text" autocomplete="username" placeholder="Text Input">

<label for="input_text_d">Text Input Disabled</label>
<input id="input_text_d" type="text" placeholder="Text Input" disabled>

<label for="input_password">Password</label>
<input id="input_password" type="password" placeholder="Type your Password">

<label for="input_webaddress">Web Address</label>
<input id="input_webaddress" type="url" placeholder="http://yoursite.com" autocomplete="url">

<label for="input_emailaddress">Email Address</label>
<input id="input_emailaddress" type="email" placeholder="name@email.com" autocomplete="email">

<label for="input_phone">Phone Number</label>
<input id="input_phone" type="tel" placeholder="666 999 666" autocomplete="tel">

<label for="input_search">Search</label>
<input id="input_search" type="search" results="5" placeholder="Enter Search Term">

<label for="input_text2">Number Input</label>
<input id="input_text2" type="number" min="0" max="10" step="1" value="5"  placeholder="Enter a Number">

<label for="checkbox1"><input id="checkbox1" name="checkbox" type="checkbox" checked="checked"> Choice A</label>
<label for="checkbox2"><input id="checkbox2" name="checkbox" type="checkbox"> Choice B</label>
<label for="checkbox3"><input id="checkbox3" name="checkbox" type="checkbox"> Choice C</label>

<label for="radio1"><input id="radio1" name="radio" type="radio" class="radio" checked="checked"> Option 1</label>
<label for="radio2"><input id="radio2" name="radio" type="radio" class="radio"> Option 2</label>
<label for="radio3"><input id="radio3" name="radio" type="radio" class="radio"> Option 3</label>

<textarea name="textarea" rows="5" cols="30">Write something here</textarea>

<label for="ic">Color input</label>
<input type="color" id="ic" value="#000000">

<label for="ir">Range input</label>
<input type="range" id="ir" min="1" max="10" value="7">

<label for="idd">Date input</label>
<input type="date" id="idd" value="1970-01-01">

<label for="idm">Month input</label>
<input type="month" id="idm" value="1970-01">

<label for="idw">Week input</label>
<input type="week" id="idw" value="1970-W01">

<label for="idt">Datetime input</label>
<input type="datetime" id="idt" value="1970-01-01T00:00:00Z">

<label for="idtl">Datetime-local input</label>
<input type="datetime-local" id="idtl" value="1970-01-01T00:00">

<label for="iti">Time input</label>
<input type="time" id="iti" value="23:15">

<label for="ifi">File input</label>
<input type="file" accept=".pdf" id="ifi">
```

### Select
```html
<label for="select">Select</label>
<select id="select">
    <optgroup label="Group 1">
        <option>Option 1.1</option>
    </optgroup>
    <optgroup label="Group 2">
        <option>Option 2.1</option>
        <option>Option 2.2</option>
    </optgroup>
    <optgroup label="Group 3" disabled>
        <option>Option 3.1</option>
        <option>Option 3.2</option>
        <option>Option 3.3</option>
    </optgroup>
</select>
```

### Datalist
```html
<label for="browsers">Datalist</label>
<input list="browsers" placeholder="Write here..." name="myBrowser" /></label><br>
<datalist id="browsers">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Internet Explorer">
    <option value="Opera">
    <option value="Safari">
    <option value="Microsoft Edge">
</datalist>
```

### Measurement

#### Meter
```html
<label>Meter</label>
<meter min="200" max="500" high="400" value="450">450 degrees</meter>
```

#### Progress
```html
<label>Progress</label>
<progress value="70" max="100">70 %</progress>
```

#### Output
```html
<output name="result">Output</output>
```

### Button
```html
<button>Button</button>
<input type="submit" value="submit">
<input type="button" value="button">
<input type="reset" value="reset">
<input type="submit" value="disabled" disabled>
```

## Interactive
### Details
```html
<details>
    <summary>Details</summary>
    Something small enough to escape casual notice.
</details>
```

### Dialog
```html
<button id="myDialog-trigger">Open dialog</button>
<button id="myDialog-triggerModal">Open dialog as modal</button>
````

```html
<dialog id="myDialog">
    <h2>Modal title</h2>
    <div>This is a modal</div>
    <button id="myDialog-close">close</button>
</dialog>
```

```js
const trigger = document.querySelector('#myDialog-trigger');
const modal = document.querySelector('#myDialog-triggerModal');
const close = document.querySelector('#myDialog-close');
const dialog = document.querySelector('#myDialog');

trigger.addEventListener('click', function() {
    dialog.show();
})

modal.addEventListener('click', function() {
    dialog.showModal();
})

close.addEventListener('click', function() {
    dialog.close();
})
```
