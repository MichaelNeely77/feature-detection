/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("const button = document.querySelector('button');\nconst textParagraph = document.querySelector('p');\nbutton.addEventListener('click', () => {\n  const text = textParagraph.textContent;\n  if (navigator.clipboard) {\n    navigator.clipboard.writeText(text).then(result => {\n      console.log(result);\n    }).catch(error => {\n      console.log(error);\n    });\n  } else {\n    alert('Feature not available, please copy manually!');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzIiwibmFtZXMiOlsiYnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dFBhcmFncmFwaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZXh0IiwidGV4dENvbnRlbnQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0aGVuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJhbGVydCJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jb21wbGV0ZS1ndWlkZS8uL3NyYy9hcHAuanM/MTExMiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbmNvbnN0IHRleHRQYXJhZ3JhcGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwJyk7XG5cbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgdGV4dCA9IHRleHRQYXJhZ3JhcGgudGV4dENvbnRlbnQ7XG4gIGlmIChuYXZpZ2F0b3IuY2xpcGJvYXJkKSB7XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZFxuICAgICAgLndyaXRlVGV4dCh0ZXh0KVxuICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBhbGVydCgnRmVhdHVyZSBub3QgYXZhaWxhYmxlLCBwbGVhc2UgY29weSBtYW51YWxseSEnKTtcbiAgfVxufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0FBQy9DLE1BQU1DLGFBQWEsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0FBRWpERixNQUFNLENBQUNJLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO0VBQ3JDLE1BQU1DLElBQUksR0FBR0YsYUFBYSxDQUFDRyxXQUFXO0VBQ3RDLElBQUlDLFNBQVMsQ0FBQ0MsU0FBUyxFQUFFO0lBQ3ZCRCxTQUFTLENBQUNDLFNBQVMsQ0FDaEJDLFNBQVMsQ0FBQ0osSUFBSSxDQUFDLENBQ2ZLLElBQUksQ0FBQ0MsTUFBTSxJQUFJO01BQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFNLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQ0RHLEtBQUssQ0FBQ0MsS0FBSyxJQUFJO01BQ2RILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxLQUFLLENBQUM7SUFDcEIsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxNQUFNO0lBQ0xDLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQztFQUN2RDtBQUNGLENBQUMsQ0FBQyJ9\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.js"]();
/******/ 	
/******/ })()
;