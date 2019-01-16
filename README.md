<h4 align="center">Quickly integrate pretty checkbox Components (checkbox, switch, radio) with React</h4>

<p align="center">
 <a href="https://github.com/atomicpages/pretty-checkbox-react/releases">
    <img src="https://img.shields.io/github/release/atomicpages/pretty-checkbox-react.svg?style=flat-square&colorA=8033b0&colorB=75b7dd" alt="Github Release">
  </a>
   <a href="LICENSE">
    <img src="https://img.shields.io/npm/l/pretty-checkbox-react.svg?style=flat-square&colorA=8033b0&colorB=75b7dd" alt="Licence">
  </a>
   <a href="#">
    <img src="https://img.shields.io/npm/dm/pretty-checkbox-react.svg?style=flat-square&colorA=8033b0&colorB=75b7dd" alt="Downloads">
  </a>
</p>
<br>

<div class="highlight highlight-source-shell">
<pre>
<div align="center"><strong >Demo and documentation</strong></div>
<div align="center"><a align="center" href="https://lokesh-coder.github.io/pretty-checkbox/">https://lokesh-coder.github.io/pretty-checkbox/</a></div>
</pre>
</div>

<div align="center">
    <img src="preview.gif" alt="Pretty checkbox preview" />
</div>

### Browser
Include the script file and then the component:

```html
<script type="text/javascript" src="node_modules/react/umd/react.production.min.js"></script>
<script type="text/javascript" src="node_modules/react-dom/umd/react-dom.production.min.js"></script>
<script type="text/javascript" src="node_modules/pretty-checkbox-react/dist/pretty-checkbox-react.min.js"></script>

<script type="text/javascript">
function App() {
    return React.createElement(
        Checkbox,
        { animation: 'p-smooth' },
        React.createElement(
            'label',
            null,
            'Check me!'
        )
    )
}

ReactDOM.render(App, document.querySelector('body'));
</script>
```

### Contributions
Thanks to all those good people who spend their valuable time and helped to improve this library. Any Contributions are welcome!

### License
This project is licensed under the MIT License
