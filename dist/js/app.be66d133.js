(function(){"use strict";var e={7072:function(e,t,l){var a=l(7764),o=l(4108);const n={id:"app"};function i(e,t,l,a,i,s){const r=(0,o.E1)("MainHeader"),d=(0,o.E1)("BoardItem");return(0,o.Wz)(),(0,o.An)("div",n,[(0,o.K2)(r,{onChangeAlgoOptions:s.changeAlgoOptions,onChangeWallOptions:s.changeWallOptions,onChangeSpeedOptions:s.changeSpeedOptions,onToggleAlgoRun:t[0]||(t[0]=e=>this.didAlgoRun=!this.didAlgoRun),onToggleClearWalls:t[1]||(t[1]=e=>this.didClearWalls=!this.didClearWalls),onToggleClearPath:t[2]||(t[2]=e=>this.didClearPath=!this.didClearPath),onClearPath:t[3]||(t[3]=e=>i.didAlgoRun=!1),didAlgoRun:i.didAlgoRun,isPossibleToClear:i.isPossibleToClear},null,8,["onChangeAlgoOptions","onChangeWallOptions","onChangeSpeedOptions","didAlgoRun","isPossibleToClear"]),(0,o.K2)(d,{options:this.options,didAlgoRun:this.didAlgoRun,didClearWalls:i.didClearWalls,didClearPath:i.didClearPath,onStartedClearing:t[4]||(t[4]=e=>i.isPossibleToClear=!1),onEndedClearing:t[5]||(t[5]=e=>i.isPossibleToClear=!0)},null,8,["options","didAlgoRun","didClearWalls","didClearPath"])])}var s=l(9096);const r=(0,o.QD)("div",{class:"title centered"},"Algorithm Visualizer",-1),d={class:"header-row"};function h(e,t,l,a,n,i){const h=(0,o.E1)("CustomDropDown");return(0,o.Wz)(),(0,o.An)("header",null,[r,(0,o.QD)("div",d,[(0,o.K2)(h,{onChangeOptions:i.changeAlgoOptions,didAlgoRun:l.didAlgoRun,propVals:n.ALGOVALUES,defaultIndex:0},null,8,["onChangeOptions","didAlgoRun","propVals"]),(0,o.K2)(h,{onChangeOptions:i.changeWallOptions,didAlgoRun:l.didAlgoRun,propVals:n.MAZEVALUES,defaultIndex:0},null,8,["onChangeOptions","didAlgoRun","propVals"]),(0,o.K2)(h,{onChangeOptions:i.changeSpeedOptions,didAlgoRun:l.didAlgoRun,propVals:n.SPEEDVALUES,defaultIndex:2},null,8,["onChangeOptions","didAlgoRun","propVals"]),0==l.didAlgoRun?((0,o.Wz)(),(0,o.An)("button",{key:0,class:(0,s.WN)(0==this.isPossibleToClear?"disabled":""),onClick:t[0]||(t[0]=e=>{1==this.isPossibleToClear&&this.$emit("toggleAlgoRun")})}," Visualize ",2)):(0,o.g1)("",!0),1==l.didAlgoRun?((0,o.Wz)(),(0,o.An)("button",{key:1,class:"clear-btn",onClick:t[1]||(t[1]=e=>this.$emit("clearPath"))}," Clear ")):(0,o.g1)("",!0),(0,o.QD)("button",{onClick:t[2]||(t[2]=e=>{0==this.didAlgoRun&&this.$emit("toggleClearWalls")}),class:(0,s.WN)([1==this.didAlgoRun?"disabled":"","clear-btn"])}," Clear Walls ",2)])])}const c=["onClick"];function p(e,t,l,a,n,i){return(0,o.Wz)(),(0,o.An)("div",{class:"dropdown",onClick:t[0]||(t[0]=(...e)=>this.handleDropdown&&this.handleDropdown(...e))},[(0,o.QD)("div",{class:(0,s.WN)(["select",this.dropdownOpen?"select-clicked":""])},[(0,o.QD)("span",{class:(0,s.WN)(["selected",{"menu-disabled":this.didAlgoRun,"menu-enabled":!this.didAlgoRun}])},(0,s.WA)(this.vals[this.selectedVal]),3),(0,o.QD)("div",{class:(0,s.WN)({"caret-rotate":this.dropdownOpen,caret:!this.dropdownOpen,"menu-disabled":this.didAlgoRun})},null,2)],2),(0,o.QD)("ul",{class:(0,s.WN)(["menu",this.dropdownOpen?"menu-open":""])},[((0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)(this.propVals,((e,t)=>((0,o.Wz)(),(0,o.An)("li",{onClick:e=>this.selectedVal=t,key:t,class:(0,s.WN)(this.selectedVal==t?"active":"")},(0,s.WA)(e),11,c)))),128))],2)])}var u={name:"CustomDropDown",props:["propVals","didAlgoRun","defaultIndex"],data(){return{dropdownOpen:!1,vals:this.propVals,selectedVal:0}},mounted:function(){this.defaultIndex&&(this.selectedVal=this.defaultIndex)},methods:{handleDropdown(){this.didAlgoRun||(this.dropdownOpen=!this.dropdownOpen)}},watch:{selectedVal:function(e,t){e!=t&&this.$emit("changeOptions",e)},didAlgoRun:function(e){e&&(this.dropdownOpen=!1)}}},g=l(4100);const A=(0,g.c)(u,[["render",p]]);var T=A;const f=1e-7,D=150,m=200,C=["DFS","BFS","Dijkstra"],R=["No Maze","Random Maze"],S=["Slow","Normal","Fast"],y=!0;var L={name:"MainHeader",components:{CustomDropDown:T},emits:["changeAlgoOptions","changeWallOptions","changeSpeedOptions","toggleAlgoRun","toggleClearWalls","clearPath","toggleClearPath"],props:["didAlgoRun","isPossibleToClear"],data(){return{ALGOVALUES:C,MAZEVALUES:R,SPEEDVALUES:S}},methods:{changeAlgoOptions:function(e){this.$emit("changeAlgoOptions",e)},changeWallOptions:function(e){this.$emit("changeWallOptions",e)},changeSpeedOptions:function(e){this.$emit("changeSpeedOptions",e)}}};const O=(0,g.c)(L,[["render",h]]);var E=O;const w={class:"centered"},W={key:0,id:"board"},b={id:"stats"},v={key:0,id:"hint-text"},N={key:1,id:"fyi-text"},M={id:"stats-text"};function F(e,t,l,a,n,i){const r=(0,o.E1)("CellItem");return(0,o.Wz)(),(0,o.An)(o.ae,null,[(0,o.QD)("div",w,[0!==this.board.length?((0,o.Wz)(),(0,o.An)("div",W,[((0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)(n.board,((e,t)=>((0,o.Wz)(),(0,o.An)("div",{class:"row",key:t},[((0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)(e,(e=>((0,o.Wz)(),(0,o.Az)(r,{key:e.id,cellInfo:e,onMousedown:t=>this.handleMouseDown(e),onMouseenter:t=>this.handleMouseEnter(e),onMouseup:this.handleMouseUp},null,8,["cellInfo","onMousedown","onMouseenter","onMouseup"])))),128))])))),128))])):(0,o.g1)("",!0)]),(0,o.QD)("div",b,[!this.metaData.isMouseDown||0!=this.metaData.cellTypeClicked&&1!=this.metaData.cellTypeClicked?(0,o.g1)("",!0):((0,o.Wz)(),(0,o.An)("p",v,[(0,o.mY)(" * Click somewhere on the board to place the "),(0,o.QD)("span",{style:(0,s.MN)(0==this.metaData.cellTypeClicked?{color:"rgb(0, 255, 0)"}:{color:"red"})},(0,s.WA)(0==this.metaData.cellTypeClicked?"start":"end"),5),(0,o.mY)(" cell * ")])),!this.metaData.isMouseDown||0!=this.metaData.cellTypeClicked&&1!=this.metaData.cellTypeClicked?((0,o.Wz)(),(0,o.An)("p",N," Made with ❤️ by SainitinD ")):(0,o.g1)("",!0),(0,o.QD)("p",M," No.of visited cells: "+(0,s.WA)(this.visited.length)+"   No.of path cells: "+(0,s.WA)(this.path.length),1)])],64)}l(3248);function k(e,t,l,a,n,i){return(0,o.Wz)(),(0,o.An)("div",{class:(0,s.WN)(["cell",i.handleCellItemStyling()])},null,2)}const I={SLOW:0,NORMAL:1,FAST:2},P={NOMAZE:0,RANDOMMAZE:1},$={DFS:0,BFS:1,Djikstra:2},z={START:0,END:1,FREE:2,FILLED:3,WALL:4,PATH:5,FILLEDNOANIM:6},B={SLOW:10,NORMAL:1,FAST:.01};var V={name:"CellItem",props:["cellInfo"],data(){return{}},computed:{getGridStyle:function(){return{"grid-row-start":this.cellInfo.row,"grid-row-end":(this.cellInfo.row??0)+1,"grid-column-start":this.cellInfo.col,"grid-column-end":(this.cellInfo.col??0)+1}}},methods:{handleCellItemStyling(){return this.cellInfo.cellType===z.START?"cell-start":this.cellInfo.cellType===z.END?"cell-end":this.cellInfo.cellType===z.FREE?"":this.cellInfo.cellType===z.FILLED?"cell-filled":this.cellInfo.cellType===z.WALL?"cell-wall":this.cellInfo.cellType===z.PATH?"cell-path":this.cellInfo.cellType===z.FILLEDNOANIM?"cell-filled-noAnim":void 0}}};const j=(0,g.c)(V,[["render",k]]);var x=j,Q=l(2976),H={name:"BoardItem",props:["options","didAlgoRun","didClearPath","didClearWalls"],components:{CellItem:x},emits:["startedClearing","endedClearing"],data(){return{metaData:{STARTCELL:[12,5],ENDCELL:[5,5],BOARDCOLS:42,BOARDROWS:18,isMouseDown:!1,cellTypeClicked:null,lastClickedCell:null},curSpeed:B.NORMAL,path:[],visited:[],board:[]}},mounted:function(){let e=window.innerWidth;y&&console.log(`Window has a width of ${e}px`),this.metaData.BOARDCOLS=Math.round((e-180)/30),this.board=this.createBoard();const[t,l]=this.metaData.STARTCELL,[a,o]=this.metaData.ENDCELL;this.board[t][l].cellType=z.START,this.board[a][o].cellType=z.END},watch:{"metaData.lastClickedCell":function(e,t){null!=t&&e.cellType==t.cellType&&(t.cellType=z.FREE)},"options.wallType":function(e,t){e!=t&&(e==P.NOMAZE?this.clearWalls():e==P.RANDOMMAZE&&this.createRandomMaze())},"options.speed":function(e,t){e!=t&&(e==I.SLOW?this.curSpeed=B.SLOW:e==I.NORMAL?this.curSpeed=B.NORMAL:e==I.FAST&&(this.curSpeed=B.FAST),y&&console.log(`Changing speed type to ${this.curSpeed}`))},didClearWalls:function(){y&&console.log("Cleared all the walls"),this.clearWalls()},didAlgoRun:async function(e){if(1==e){var t=!1;this.options.algoType==$.DFS?(t=await this.dfs(),t&&(await this.sleep(m),this.path.reverse())):this.options.algoType==$.BFS?t=await this.bfs():this.options.algoType==$.Djikstra?t=await this.dijkstra():this.options.algoType==$.ASTAR&&y&&console.log("A* Called but none implemented :("),t?(y&&console.log("Tracing Shortest Path now!"),await this.tracePath()):y&&console.log("Path wasn't found :(")}else await this.clearVisitedCells()}},methods:{createBoard(){const e=[];for(let t=0;t<this.metaData.BOARDROWS;t++){let l=[];for(let e=0;e<this.metaData.BOARDCOLS;e++)l.push({row:t,col:e,cellType:z.FREE});e.push(l)}return e},async createRandomMaze(){for(let e=0;e<this.metaData.BOARDROWS;e++)for(let t=0;t<this.metaData.BOARDCOLS;t++)this.board[e][t].cellType!=z.START&&this.board[e][t].cellType!=z.END&&Math.random()>.7&&(this.board[e][t].cellType=z.WALL,await this.sleep(this.curSpeed))},handleMouseDown(e){this.metaData.isMouseDown=!0,this.metaData.cellTypeClicked=e.cellType,this.metaData.lastClickedCell=e,y&&console.log("Mouse Down")},async handleMouseEnter(e){this.metaData.isMouseDown&&!this.didAlgoRun&&(this.metaData.cellTypeClicked==z.START&&e.cellType!=z.END?(e.cellType=z.START,this.metaData.lastClickedCell=e,this.metaData.STARTCELL=[e.row,e.col],y&&console.log(`Start Cell changed to ${e.row}, ${e.col}`)):this.metaData.cellTypeClicked==z.END&&e.cellType!=z.START?(e.cellType=z.END,this.metaData.lastClickedCell=e,this.metaData.ENDCELL=[e.row,e.col],y&&console.log(`End Cell changed to ${e.row}, ${e.col}`)):e.cellType!=z.START&&e.cellType!=z.END?e.cellType==z.WALL?e.cellType=z.FREE:e.cellType=z.WALL:y&&console.log("Nothing Here!"))},handleMouseUp(){this.metaData.isMouseDown=!1,y&&console.log("Mouse Up")},clearWalls(){for(let e=0;e<this.metaData.BOARDROWS;e++)for(let t=0;t<this.metaData.BOARDCOLS;t++)this.board[e][t].cellType==z.WALL&&(this.board[e][t].cellType=z.FREE)},async clearVisitedCells(){this.$emit("startedClearing");for(const[e,t]of this.visited)this.board[e][t].cellType!=z.FILLED&&this.board[e][t].cellType!=z.PATH||(this.board[e][t].cellType=z.FREE,await this.sleep(f));this.visited=[],this.path=[],this.$emit("endedClearing")},sleep(e){return new Promise((t=>setTimeout(t,e)))},getAdjIndexes(e,t){const l=[],a=[[-1,0],[0,1],[1,0],[0,-1]];for(const[o,n]of a)0<=e+o&&e+o<this.metaData.BOARDROWS&&0<=t+n&&t+n<this.metaData.BOARDCOLS&&this.board[e+o][t+n].cellType!=z.START&&this.board[e+o][t+n].cellType!=z.WALL&&l.push([e+o,t+n]);return l},async bfs(){this.visited=[];const e=[],t=[[this.metaData.STARTCELL[0],this.metaData.STARTCELL[1]]];y&&console.log(t);while(t.length>0){const[l,a]=t.shift();for(const[o,n]of this.getAdjIndexes(l,a)){if(!this.didAlgoRun)return!1;if(this.board[o][n].cellType==z.END)return e.push([[o,n],[l,a]]),this.traceBFSShortestPath(e),!0;this.board[o][n].cellType==z.FREE&&(this.board[o][n].cellType=z.FILLED,t.push([o,n]),e.push([[o,n],[l,a]]),this.visited.push([o,n]),y&&console.log(this.curSpeed),await this.sleep(this.curSpeed))}}return!1},traceBFSShortestPath(e){var t=null;e.reverse(),this.path=[];for(const[l,a]of e)if(null==t&&l[0]==this.metaData.ENDCELL[0]&&l[1]==this.metaData.ENDCELL[1]){t=a,this.path.push(a);const[e,l]=t;y&&console.log(`Starting Path from end cell at [${e}, ${l}]`)}else if(t[0]==l[0]&&t[1]==l[1]){t=a;const[e,o]=t;if(e==this.metaData.STARTCELL[0]&&o==this.metaData.STARTCELL[1])return void(y&&console.log(`Found start cell at [${e}, ${o}]`));this.path.push(a),y&&console.log(`Going from [${l[0]}, ${l[1]}] to [${e}, ${o}]`)}},async dfs(){const e=async(t,l)=>{if(!this.didAlgoRun)return!1;for(const[a,o]of this.getAdjIndexes(t,l)){if(!this.didAlgoRun)return!1;if(this.board[a][o].cellType==z.END)return!0;if(this.board[a][o].cellType==z.FREE){if(this.board[a][o].cellType=z.FILLED,this.visited.push([a,o]),this.path.push([a,o]),await this.sleep(this.curSpeed),1==await e(a,o))return!0;this.path.pop()}}return!1};return await e(this.metaData.STARTCELL[0],this.metaData.STARTCELL[1])},async dijkstra(){const e=async(e,t)=>{const l=this.createDistanceMap(),a={};a[`${e},${t}`]=null;const o=new Q.PriorityQueue(((e,t)=>e[0]<=t[0]?-1:1));o.enqueue([0,[e,t]]);while(o.size()>0){const[e,[t,i]]=o.dequeue();if(!(e>l[t][i]))for(const[s,r]of this.getAdjIndexes(t,i)){if(!this.didAlgoRun)return!1;var n=1+Number(e);if(this.board[s][r].cellType==z.END)return a[`${s},${r}`]=[t,i],this.traceDijkstraShortestPath(a),!0;n<l[s][r]&&(l[s][r]=n,a[`${s},${r}`]=[t,i],this.board[s][r].cellType=z.FILLED,o.enqueue([Number(n),[s,r]]),this.visited.push([s,r]),await this.sleep(this.curSpeed))}}return!1};return await e(this.metaData.STARTCELL[0],this.metaData.STARTCELL[1])},traceDijkstraShortestPath(e){this.path=[];const[t,l]=this.metaData.ENDCELL;var[a,o]=e[`${t},${l}`];for(let n=0;n<Object.keys(e).length;n++)if(a==this.metaData.STARTCELL[0]&&o==this.metaData.STARTCELL[1])y&&y&&console.log(`FOUND THE START NODE at ${a},${o}`);else{this.path.push([a,o]);const[t,l]=e[`${a},${o}`];a=t,o=l}},createDistanceMap(){const e=[];for(let a=0;a<this.metaData.BOARDROWS;a++){const t=[];for(let e=0;e<this.metaData.BOARDCOLS;e++)t.push(1/0);e.push(t)}const[t,l]=this.metaData.STARTCELL;return e[t][l]=0,e},async tracePath(){if(0!=this.path.length&&(1!=this.path.length||this.path[0][0]!=this.metaData.STARTCELL[0]||this.path[0][1]!=this.metaData.STARTCELL[1]))for(const[e,t]of this.path){if(!this.didAlgoRun)return void await this.clearPath();this.board[e][t].cellType=z.PATH,await this.sleep(D)}},async clearPath(){for(const[e,t]of this.path)this.board[e][t].cellType!=z.FILLED&&this.board[e][t].cellType!=z.PATH||(this.board[e][t].cellType=z.FREE);this.path=[]}}};const U=(0,g.c)(H,[["render",F]]);var Z=U,_={name:"App",components:{MainHeader:E,BoardItem:Z},data(){return{didAlgoRun:!1,isPossibleToClear:!0,didClearWalls:!1,didClearPath:!1,options:{algoType:$.DFS,wallType:P.NOMAZE,speed:I.FAST}}},methods:{changeAlgoOptions:function(e){y&&console.log(`Changed algo type to ${this._getNameFromType("Algo",e)}`),this.options.algoType=e},changeWallOptions:function(e){y&&console.log(`Changed wall type to ${this._getNameFromType("Wall",e)}`),this.options.wallType=e},changeSpeedOptions:function(e){y&&console.log(`Changed speed type to ${this._getNameFromType("Speed",e)}`),this.options.speed=e},_getNameFromType(e,t){if("Algo"===e){if(t==$.DFS)return"DFS";if(t==$.BFS)return"BFS";if(t==$.Djikstra)return"Dijkstra";if(t==$.ASTAR)return"A*"}else if("Wall"===e){if(t==P.NOMAZE)return"No Maze";if(t==P.RANDOMMAZE)return"Random Maze"}else if("Speed"===e){if(t==I.SLOW)return"SLOW";if(t==I.NORMAL)return"NORMAL";if(t==I.FAST)return"FAST"}}}};const K=(0,g.c)(_,[["render",i]]);var G=K;(0,a.W0)(G).mount("#app")}},t={};function l(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={exports:{}};return e[a].call(n.exports,n,n.exports,l),n.exports}l.m=e,function(){var e=[];l.O=function(t,a,o,n){if(!a){var i=1/0;for(h=0;h<e.length;h++){a=e[h][0],o=e[h][1],n=e[h][2];for(var s=!0,r=0;r<a.length;r++)(!1&n||i>=n)&&Object.keys(l.O).every((function(e){return l.O[e](a[r])}))?a.splice(r--,1):(s=!1,n<i&&(i=n));if(s){e.splice(h--,1);var d=o();void 0!==d&&(t=d)}}return t}n=n||0;for(var h=e.length;h>0&&e[h-1][2]>n;h--)e[h]=e[h-1];e[h]=[a,o,n]}}(),function(){l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,{a:t}),t}}(),function(){l.d=function(e,t){for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};l.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,n,i=a[0],s=a[1],r=a[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)l.o(s,o)&&(l.m[o]=s[o]);if(r)var h=r(l)}for(t&&t(a);d<i.length;d++)n=i[d],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(h)},a=self["webpackChunkalgo_vis"]=self["webpackChunkalgo_vis"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=l.O(void 0,[999],(function(){return l(7072)}));a=l.O(a)})();
//# sourceMappingURL=app.be66d133.js.map