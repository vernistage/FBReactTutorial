/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-dom\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //Libraries


	function Square(props) {
	  return _react2.default.createElement(
	    'button',
	    { className: 'square', onClick: function onClick() {
	        return props.onClick();
	      } },
	    props.value
	  );
	}

	var Board = function (_React$Component) {
	  _inherits(Board, _React$Component);

	  function Board() {
	    _classCallCheck(this, Board);

	    var _this = _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this));

	    _this.state = {
	      squares: Array(9).fill(null),
	      xIsNext: true
	    };
	    return _this;
	  }

	  _createClass(Board, [{
	    key: 'handleClick',
	    value: function handleClick(i) {
	      var squares = this.state.squares.slice();
	      squares[i] = this.state.xIsNext ? 'X' : 'O';
	      this.setState({
	        squares: squares,
	        xIsNext: !this.state.xIsNext
	      });
	    }
	  }, {
	    key: 'renderSquare',
	    value: function renderSquare(i) {
	      var _this2 = this;

	      return _react2.default.createElement(Square, { value: this.state.squares[i], onClick: function onClick() {
	          return _this2.handleClick(i);
	        } });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var winner = calculateWinner(this.state.squares);
	      var status = void 0;
	      if (winner) {
	        status = 'Winner:' + winner;
	      } else {
	        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
	      }
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'status' },
	          status
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'board-row' },
	          this.renderSquare(0),
	          this.renderSquare(1),
	          this.renderSquare(2)
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'board-row' },
	          this.renderSquare(3),
	          this.renderSquare(4),
	          this.renderSquare(5)
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'board-row' },
	          this.renderSquare(6),
	          this.renderSquare(7),
	          this.renderSquare(8)
	        )
	      );
	    }
	  }]);

	  return Board;
	}(_react2.default.Component);

	var Game = function (_React$Component2) {
	  _inherits(Game, _React$Component2);

	  function Game() {
	    _classCallCheck(this, Game);

	    return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).apply(this, arguments));
	  }

	  _createClass(Game, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'game' },
	        _react2.default.createElement(
	          'div',
	          { className: 'game-board' },
	          _react2.default.createElement(Board, null)
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'game-info' },
	          _react2.default.createElement('div', null),
	          _react2.default.createElement('ol', null)
	        )
	      );
	    }
	  }]);

	  return Game;
	}(_react2.default.Component);

	// ========================================

	_reactDom2.default.render(_react2.default.createElement(Game, null), document.getElementById('container'));

	function calculateWinner(squares) {
	  var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
	  for (var i = 0; i < lines.length; i++) {
	    var _lines$i = _slicedToArray(lines[i], 3),
	        a = _lines$i[0],
	        b = _lines$i[1],
	        c = _lines$i[2];

	    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
	      return squares[a];
	    }
	  }
	  return null;
	}

/***/ }
/******/ ]);