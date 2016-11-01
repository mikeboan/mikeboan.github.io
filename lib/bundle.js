/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/lib/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	var FACEPLANT = {
	  img: "faceplant.png",
	  description: "Faceplant is a single-page web application for connecting and communicating with friends, inspired by Facebook. It was built using Ruby on Rails and React/Redux.",
	  links: {
	    Live: "http://faceplant.site",
	    GitHub: "https://github.com/mikeboan/faceplant"
	  }
	};

	var BATTLE_TETRIS = {
	  img: "battle_tetris.png",
	  description: "Battle tetris is a new take on the classic video game. Complete lines on your board to send unclearable bricks to your opponent. Battle tetris relies on bit-level operations for tetromino logic and the Observer design pattern to allow for inter-board communication.",
	  links: {
	    Live: "battle_tetris/index.html",
	    GitHub: "https://github.com/mikeboan/battle-tetris"
	  }
	};

	var CENT = {
	  img: "cent-snake.png",
	  description: "$cent is a lighweight DOM manupulation library. Check out the source or play a simple game of snake built on the library.",
	  links: {
	    Live: "cent/snake.html",
	    GitHub: "https://github.com/mikeboan/cent",
	  }
	};


	function createProjectHTML(projectName) {
	  var project;
	  switch (projectName) {
	    case "Faceplant":
	      project = FACEPLANT;
	      break;
	    case "BattleTetris":
	      project = BATTLE_TETRIS;
	      break;
	    case "$cent":
	      project = CENT;
	      break;
	    }
	  var html =  "<div class='main-img-container'>" +
	                "<!-- IMAGE PLACEHOLDER -->" +
	                "<img class='macbook' src='lib/images/macbook-retina.png' alt='' />" +
	                "<div class='screenshot-outer-container'>" +
	                  "<div class='screenshot-inner-container'>" +
	                    "<img class='project-screenshot' src='lib/images/" + project.img + "' />" +
	                  "</div>" +
	                "</div>" +
	              "</div>" +
	              "<section class='project-description'>" +
	                "<p>" + project.description + "</p>" +
	              "<div class='project-links'>";
	      for (var key in project.links) {
	        html += "<a target='_blank' href='" + project.links[key] + "'>" + key + "</a>";
	      }
	      html += "</div>" +
	      "</section>";

	  return html;
	}

	$(function () {
	  $('a.profile-link').click(toggleProfileView);
	  $('div.overlay').click(toggleProjectView);

	  switchProjectView('');
	  $('li.project-link').click(switchProjectView);

	  function switchProjectView(e) {
	    if (e.target == $('li.project-link.active')[0]) return;

	    var target = e.target || $('li.project-link.faceplant')[0];
	    window.clearTimeout(window.animateSS);

	    $('li.project-link').removeClass('active');
	    $(target).addClass('active');

	    var html = createProjectHTML(target.innerHTML);

	    $('img.project-screenshot').css('bottom', 0);
	    $('article.project-details').hide().html(html).fadeIn(500);

	    window.animateSS = window.setTimeout(animateScreenshot, 2600);
	  }
	});


	function toggleProfileView(e) {
	  e.preventDefault();

	  $('div.overlay').removeClass('inactive');
	  $('section.profile').removeClass('inactive');

	  $('main').animate({ left: '-65%'}, {
	    duration: 1000,
	    specialEasing: {
	      left: "easeInOutQuad"
	    },
	    always: function (e) {
	      $('section.projects').addClass('inactive');
	      $('div.resume-link-container').addClass('sticky');
	    }
	  });
	}

	function toggleProjectView(e) {
	  e.preventDefault();
	  $("html, body").animate({
	      scrollTop: 0
	  }, 600, shiftLeft);

	  function shiftLeft() {
	    $('div.resume-link-container').removeClass('sticky');
	    $('section.projects').removeClass('inactive');

	    $('main').animate({ left: 0 }, {
	      duration: 1000,
	      specialEasing: {
	        left: "easeInOutQuad"
	      },
	      always: function (e) {
	        $('div.overlay').addClass('inactive');
	        $('section.profile').addClass('inactive');
	      }
	    });
	  }
	}

	function animateScreenshot() {
	  var screenshot = $('img.project-screenshot');
	  var containerHeight = $('div.screenshot-inner-container').height();
	  var ssHeight = screenshot.height();
	  screenshot.animate({ top: "-" + (ssHeight - containerHeight) }, {
	    duration: 1500,
	    specialEasing: {
	      bottom: "easeInOutQuad"
	    }, complete: function () {
	      screenshot.css({"bottom": 0, "top": ""});
	    }
	  });
	}


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
