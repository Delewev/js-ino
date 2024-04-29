/*! For license information please see components-Button-stories.581781ad.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_first=self.webpackChunkreact_first||[]).push([[672],{"./src/components/Button.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);const Button_module_is_disabled="Button_is-disabled__E4d1M",Button_module_primary="Button_primary__SlBQU",Button_module_secondary="Button_secondary__dOXrE",Button_module_btn="Button_btn__sqocL";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=_ref=>{let{isDisabled=!1,type="primary",text="Войти",onClick=null}=_ref;const className=classnames_default()(Button_module_btn,{[Button_module_primary]:"primary"===type,[Button_module_secondary]:"secondary"===type,[Button_module_is_disabled]:isDisabled});return(0,jsx_runtime.jsx)("button",{className,disabled:isDisabled,onClick:e=>{"function"==typeof onClick&&onClick(e)},children:text})};Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{isDisabled:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:'"primary"',computed:!1},required:!1},text:{defaultValue:{value:'"Войти"',computed:!1},required:!1},onClick:{defaultValue:{value:"null",computed:!1},required:!1}}};const Button_stories={title:"Button",component:Button,argTypes:{type:{type:"string",description:"Выбор внешнего вида кнопки",control:{type:"radio"},options:["primary","secondary"]},isDisabled:{control:{type:"boolean"}},text:{type:"string",description:"Текст кнопки",defaultValue:"Войти"}}},Default=(arg=>(0,jsx_runtime.jsx)(Button,{...arg})).bind({});Default.args={type:"primary",text:"Войти",isDisabled:!1},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"arg => <Button {...arg} />",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);