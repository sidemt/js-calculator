var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} else {return Array.from(arr);}}var nums = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine'


  // Redux:
};var OPERATOR = 'OPERATOR';
var NUMBER = 'NUMBER';
var ADD = 'ADD';

var addCalculations = function addCalculations(calc) {
  return {
    type: ADD,
    calculations: calc };

};

var calculationReducer = function calculationReducer() {var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];var action = arguments[1];
  switch (action.type) {
    case ADD:
      return [].concat(_toConsumableArray(state), [action.calclations]);
    default:
      return state;}

};

var store = Redux.createStore(calculationReducer);

// React:
var Provider = ReactRedux.Provider;
var connect = ReactRedux.connect;var

Presentational = function (_React$Component) {_inherits(Presentational, _React$Component);
  function Presentational(props) {_classCallCheck(this, Presentational);var _this = _possibleConstructorReturn(this, (Presentational.__proto__ || Object.getPrototypeOf(Presentational)).call(this,
    props));
    _this.state = {
      input: '0',
      calculations: [] };

    _this.handleClick = _this.handleClick.bind(_this);
    _this.clear = _this.clear.bind(_this);
    _this.dot = _this.dot.bind(_this);
    _this.zero = _this.zero.bind(_this);
    _this.calculate = _this.calculate.bind(_this);
    _this.equals = _this.equals.bind(_this);
    _this.submitCalculation = _this.submitCalculation.bind(_this);return _this;
  }_createClass(Presentational, [{ key: 'clear', value: function clear()
    {
      this.setState({
        input: '' });

    } }, { key: 'dot', value: function dot()
    {
      if (this.state.input.indexOf(".") == -1) {
        this.setState({
          input: this.state.input + "." });

      };
    } }, { key: 'zero', value: function zero()
    {
      if (this.state.input != '0') {
        this.setState({
          input: this.state.input + '0' });

      };
    } }, { key: 'handleClick', value: function handleClick(
    event) {
      this.setState({
        input: this.state.input + event.target.innerText });

    } }, { key: 'calculate', value: function calculate(
    str) {
      if (str != undefined) {
        var f = new Function('return ' + str + ';');
        return f();
      } else {
        return 0;
      }
    } }, { key: 'equals', value: function equals()
    {
      this.setState({
        input: this.calculate(this.state.input) });

    } }, { key: 'submitCalculation', value: function submitCalculation()
    {
      var currentCalculation = this.state.input;
      this.setState({
        input: '',
        calculations: this.state.calculations.concat(currentCalculation) });

    } }, { key: 'render', value: function render()
    {
      var numKeys = [];
      for (var i = 0; i <= 9; i++) {
        numKeys.push(
        React.createElement(RenderNumKey, { keyName: nums[i], keyNum: i, onClick: this.handleClick }));

      }
      return (
        React.createElement('div', null, 'Calculator',

          React.createElement('div', null, 'input: ', this.state.input),
          React.createElement('div', null, 'calculations: ', this.state.calculations),
          React.createElement('div', { className: 'row' },
            React.createElement('div', { id: 'display' }, this.state.input)),


          React.createElement('div', { className: 'row' },
            React.createElement(RenderKey, { keyName: 'clear', keyValue: 'AC', onClick: this.clear }),
            React.createElement(RenderKey, { keyName: 'divide', keyValue: '/', onClick: this.handleClick }),
            React.createElement(RenderKey, { keyName: 'multiply', keyValue: '*', onClick: this.handleClick }),
            React.createElement(RenderKey, { keyName: 'add', keyValue: '+', onClick: this.handleClick }),
            React.createElement(RenderKey, { keyName: 'subtract', keyValue: '-', onClick: this.handleClick })),


          React.createElement('div', { className: 'row' },
            numKeys[7], numKeys[8], numKeys[9]),

          React.createElement('div', { className: 'row' },
            numKeys[4], numKeys[5], numKeys[6]),

          React.createElement('div', { className: 'row' },
            numKeys[1], numKeys[2], numKeys[3]),

          React.createElement('div', { className: 'row' },
            React.createElement(RenderNumKey, { keyName: nums[0], keyNum: 0, onClick: this.zero }),
            React.createElement(RenderKey, { keyName: 'decimal', keyValue: '.', onClick: this.dot }),
            React.createElement(RenderKey, { keyName: 'equals', keyValue: '=', onClick: this.equals }),
            React.createElement(RenderKey, { keyName: 'submit', keyValue: 'submit', onClick: this.submitCalculation }))));



    } }]);return Presentational;}(React.Component);
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



// React-Redux:
var mapStateToProps = function mapStateToProps(state) {
  return { calculations: state };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    submitNewCalculations: function submitNewCalculations(newCalc) {
      dispatch(addCalculations(newCalc));
    } };

};



var Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);var

AppWrapper = function (_React$Component4) {_inherits(AppWrapper, _React$Component4);function AppWrapper() {_classCallCheck(this, AppWrapper);return _possibleConstructorReturn(this, (AppWrapper.__proto__ || Object.getPrototypeOf(AppWrapper)).apply(this, arguments));}_createClass(AppWrapper, [{ key: 'render', value: function render()
    {
      return (
        React.createElement(Provider, { store: store },
          React.createElement(Container, null)));


    } }]);return AppWrapper;}(React.Component);
;

ReactDOM.render(React.createElement(AppWrapper, null), document.getElementById('calculator'));