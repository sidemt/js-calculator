var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var nums = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine' };var


Calculator = function (_React$Component) {_inherits(Calculator, _React$Component);
  function Calculator(props) {_classCallCheck(this, Calculator);var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this,
    props));
    _this.state = {
      input: '0' };

    _this.handleClick = _this.handleClick.bind(_this);
    _this.clear = _this.clear.bind(_this);
    _this.dot = _this.dot.bind(_this);return _this;
  }_createClass(Calculator, [{ key: 'clear', value: function clear()
    {
      this.setState({
        input: '0' });

    } }, { key: 'dot', value: function dot()
    {
      if (this.state.input.indexOf(".") == -1) {
        this.setState({
          input: this.state.input + "." });

      };
    } }, { key: 'handleClick', value: function handleClick(
    event) {
      this.setState({
        input: this.state.input + event.target.innerText });

    } }, { key: 'render', value: function render()
    {
      var numKeys = [];
      for (var i = 0; i <= 9; i++) {
        numKeys.push(
        React.createElement(RenderNumKey, { keyName: nums[i], keyNum: i, onClick: this.handleClick }));

      }
      return (
        React.createElement('div', null, 'Calculator',

          React.createElement('div', null, 'test: ', this.state.input),
          React.createElement('div', { 'class': 'row' },
            React.createElement('div', { id: 'display' }, parseFloat(this.state.input, 10))),


          React.createElement('div', { 'class': 'row' },
            React.createElement(RenderKey, { keyName: 'clear', keyValue: 'AC', onClick: this.clear }),
            React.createElement(RenderKey, { keyName: 'divide', keyValue: '/' }),
            React.createElement(RenderKey, { keyName: 'multiply', keyValue: '*' }),
            React.createElement(RenderKey, { keyName: 'add', keyValue: '+' }),
            React.createElement(RenderKey, { keyName: 'subtract', keyValue: '-' })),


          React.createElement('div', { 'class': 'row' },
            numKeys[7], numKeys[8], numKeys[9]),

          React.createElement('div', { 'class': 'row' },
            numKeys[4], numKeys[5], numKeys[6]),

          React.createElement('div', { 'class': 'row' },
            numKeys[1], numKeys[2], numKeys[3]),

          React.createElement('div', { 'class': 'row' },
            numKeys[0],
            React.createElement(RenderKey, { keyName: 'decimal', keyValue: '.', onClick: this.dot }),
            React.createElement(RenderKey, { keyName: 'equals', keyValue: '=' }))));



    } }]);return Calculator;}(React.Component);
;var

RenderKey = function (_React$Component2) {_inherits(RenderKey, _React$Component2);
  function RenderKey(props) {_classCallCheck(this, RenderKey);return _possibleConstructorReturn(this, (RenderKey.__proto__ || Object.getPrototypeOf(RenderKey)).call(this,
    props));
  }_createClass(RenderKey, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('button', { id: this.props.keyName, onClick: this.props.onClick }, this.props.keyValue));

    } }]);return RenderKey;}(React.Component);var


RenderNumKey = function (_React$Component3) {_inherits(RenderNumKey, _React$Component3);
  function RenderNumKey(props) {_classCallCheck(this, RenderNumKey);return _possibleConstructorReturn(this, (RenderNumKey.__proto__ || Object.getPrototypeOf(RenderNumKey)).call(this,
    props));
  }_createClass(RenderNumKey, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('button', { id: this.props.keyName, onClick: this.props.onClick }, this.props.keyNum));

    } }]);return RenderNumKey;}(React.Component);


ReactDOM.render(React.createElement(Calculator, null), document.getElementById('calculator'));