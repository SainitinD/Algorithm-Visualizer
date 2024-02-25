(function(){"use strict";var e={4880:function(e,t,a){var l=a(7764),o=a(4108);const s={id:"app"};function n(e,t,a,l,n,i){const r=(0,o.E1)("MainHeader"),h=(0,o.E1)("BoardItem");return(0,o.Wz)(),(0,o.An)("div",s,[(0,o.K2)(r,{onChangeAlgoOptions:i.changeAlgoOptions,onChangeWallOptions:i.changeWallOptions,onChangeSpeedOptions:i.changeSpeedOptions,onToggleAlgoRun:t[0]||(t[0]=e=>this.didAlgoRun=!this.didAlgoRun),onToggleClearWalls:t[1]||(t[1]=e=>this.didClearWalls=!this.didClearWalls),onToggleClearPath:t[2]||(t[2]=e=>this.didClearPath=!this.didClearPath),onClearPath:t[3]||(t[3]=e=>n.didAlgoRun=!1),didAlgoRun:n.didAlgoRun,isPossibleToClear:n.isPossibleToClear},null,8,["onChangeAlgoOptions","onChangeWallOptions","onChangeSpeedOptions","didAlgoRun","isPossibleToClear"]),(0,o.K2)(h,{options:this.options,didAlgoRun:this.didAlgoRun,didClearWalls:n.didClearWalls,didClearPath:n.didClearPath,onStartedClearing:t[4]||(t[4]=e=>n.isPossibleToClear=!1),onEndedClearing:t[5]||(t[5]=e=>n.isPossibleToClear=!0)},null,8,["options","didAlgoRun","didClearWalls","didClearPath"])])}var i=a(9096);const r=(0,o.QD)("div",{class:"title centered"},"Algorithm Visualizer",-1),h={class:"header-row"};function d(e,t,a,l,s,n){const d=(0,o.E1)("CustomDropDown");return(0,o.Wz)(),(0,o.An)("header",null,[r,(0,o.QD)("div",h,[(0,o.K2)(d,{onChangeOptions:n.changeAlgoOptions,didAlgoRun:a.didAlgoRun,propVals:s.ALGOVALUES,defaultIndex:0},null,8,["onChangeOptions","didAlgoRun","propVals"]),(0,o.K2)(d,{onChangeOptions:n.changeWallOptions,didAlgoRun:a.didAlgoRun,propVals:s.MAZEVALUES,defaultIndex:0},null,8,["onChangeOptions","didAlgoRun","propVals"]),(0,o.K2)(d,{onChangeOptions:n.changeSpeedOptions,didAlgoRun:a.didAlgoRun,propVals:s.SPEEDVALUES,defaultIndex:2},null,8,["onChangeOptions","didAlgoRun","propVals"]),0==a.didAlgoRun?((0,o.Wz)(),(0,o.An)("button",{key:0,class:(0,i.WN)(0==this.isPossibleToClear?"disabled":""),onClick:t[0]||(t[0]=e=>{1==this.isPossibleToClear&&this.$emit("toggleAlgoRun")})}," Visualize ",2)):(0,o.g1)("",!0),1==a.didAlgoRun?((0,o.Wz)(),(0,o.An)("button",{key:1,class:"clear-btn",onClick:t[1]||(t[1]=e=>this.$emit("clearPath"))}," Clear ")):(0,o.g1)("",!0),(0,o.QD)("button",{onClick:t[2]||(t[2]=e=>{0==this.didAlgoRun&&this.$emit("toggleClearWalls")}),class:(0,i.WN)([1==this.didAlgoRun?"disabled":"","clear-btn"])}," Clear Walls ",2)])])}const c=["onClick"];function p(e,t,a,l,s,n){return(0,o.Wz)(),(0,o.An)("div",{class:"dropdown",onClick:t[0]||(t[0]=(...e)=>this.handleDropdown&&this.handleDropdown(...e))},[(0,o.QD)("div",{class:(0,i.WN)(["select",this.dropdownOpen?"select-clicked":""])},[(0,o.QD)("span",{class:(0,i.WN)(["selected",{"menu-disabled":this.didAlgoRun,"menu-enabled":!this.didAlgoRun}])},(0,i.WA)(this.vals[this.selectedVal]),3),(0,o.QD)("div",{class:(0,i.WN)({"caret-rotate":this.dropdownOpen,caret:!this.dropdownOpen,"menu-disabled":this.didAlgoRun})},null,2)],2),(0,o.QD)("ul",{class:(0,i.WN)(["menu",this.dropdownOpen?"menu-open":""])},[((0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)(this.propVals,((e,t)=>((0,o.Wz)(),(0,o.An)("li",{onClick:e=>this.selectedVal=t,key:t,class:(0,i.WN)(this.selectedVal==t?"active":"")},(0,i.WA)(e),11,c)))),128))],2)])}var u={name:"CustomDropDown",props:["propVals","didAlgoRun","defaultIndex"],data(){return{dropdownOpen:!1,vals:this.propVals,selectedVal:0}},mounted:function(){this.defaultIndex&&(this.selectedVal=this.defaultIndex)},methods:{handleDropdown(){this.didAlgoRun||(this.dropdownOpen=!this.dropdownOpen)}},watch:{selectedVal:function(e,t){e!=t&&this.$emit("changeOptions",e)},didAlgoRun:function(e){e&&(this.dropdownOpen=!1)}}},A=a(4100);const g=(0,A.c)(u,[["render",p]]);var D=g;const T=1e-7,f=50,m=200,R=["DFS","BFS","Dijkstra"],C=["No Maze","Random Maze"],O=["Slow","Normal","Fast"],S=!0;var L={name:"MainHeader",components:{CustomDropDown:D},emits:["changeAlgoOptions","changeWallOptions","changeSpeedOptions","toggleAlgoRun","toggleClearWalls","clearPath","toggleClearPath"],props:["didAlgoRun","isPossibleToClear"],data(){return{ALGOVALUES:R,MAZEVALUES:C,SPEEDVALUES:O}},methods:{changeAlgoOptions:function(e){this.$emit("changeAlgoOptions",e)},changeWallOptions:function(e){this.$emit("changeWallOptions",e)},changeSpeedOptions:function(e){this.$emit("changeSpeedOptions",e)}}};const y=(0,A.c)(L,[["render",d]]);var E=y;const W={class:"centered"},w={id:"stats"},M={key:0,id:"hint-text"},b={key:1,id:"fyi-text"},v={id:"stats-text"};function N(e,t,a,l,s,n){const r=(0,o.E1)("CellItem");return(0,o.Wz)(),(0,o.An)(o.ae,null,[(0,o.QD)("div",W,[0!==this.board.length?((0,o.Wz)(),(0,o.An)("div",{key:0,id:"board",onMouseleave:t[0]||(t[0]=(...e)=>this.handleMouseUp&&this.handleMouseUp(...e))},[((0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)(s.board,((e,t)=>((0,o.Wz)(),(0,o.An)("div",{class:"row",key:t},[((0,o.Wz)(!0),(0,o.An)(o.ae,null,(0,o.mi)(e,(e=>((0,o.Wz)(),(0,o.Az)(r,{key:e.id,cellInfo:e,onMousedown:t=>this.handleMouseDown(e),onMouseenter:t=>this.handleMouseEnter(e),onMouseup:this.handleMouseUp},null,8,["cellInfo","onMousedown","onMouseenter","onMouseup"])))),128))])))),128))],32)):(0,o.g1)("",!0)]),(0,o.QD)("div",w,[!this.metaData.isMouseDown||0!=this.metaData.cellTypeClicked&&1!=this.metaData.cellTypeClicked?(0,o.g1)("",!0):((0,o.Wz)(),(0,o.An)("p",M,[(0,o.mY)(" * Click somewhere on the board to place the "),(0,o.QD)("span",{style:(0,i.MN)(0==this.metaData.cellTypeClicked?{color:"rgb(0, 255, 0)"}:{color:"red"})},(0,i.WA)(0==this.metaData.cellTypeClicked?"start":"end"),5),(0,o.mY)(" cell * ")])),!this.metaData.isMouseDown||0!=this.metaData.cellTypeClicked&&1!=this.metaData.cellTypeClicked?((0,o.Wz)(),(0,o.An)("p",b," Mouse Status: "+(0,i.WA)(this.metaData.isMouseDown?"DOWN":"UP")+" | Made with ❤️ by SainitinD ",1)):(0,o.g1)("",!0),(0,o.QD)("p",v," No.of visited cells: "+(0,i.WA)(this.visited.length)+"   No.of path cells: "+(0,i.WA)(this.path.length),1)])],64)}a(3248);function F(e,t,a,l,s,n){return(0,o.Wz)(),(0,o.An)("div",{class:(0,i.WN)(["cell",n.handleCellItemStyling()])},null,2)}const k={SLOW:0,NORMAL:1,FAST:2},$={NOMAZE:0,RANDOMMAZE:1},P={DFS:0,BFS:1,Djikstra:2},I={START:0,END:1,FREE:2,FILLED:3,WALL:4,PATH:5,FILLEDNOANIM:6},B={SLOW:100,NORMAL:10,FAST:1};var z={name:"CellItem",props:["cellInfo"],data(){return{}},computed:{getGridStyle:function(){return{"grid-row-start":this.cellInfo.row,"grid-row-end":(this.cellInfo.row??0)+1,"grid-column-start":this.cellInfo.col,"grid-column-end":(this.cellInfo.col??0)+1}}},methods:{handleCellItemStyling(){return this.cellInfo.cellType===I.START?"cell-start":this.cellInfo.cellType===I.END?"cell-end":this.cellInfo.cellType===I.FREE?"":this.cellInfo.cellType===I.FILLED?"cell-filled":this.cellInfo.cellType===I.WALL?"cell-wall":this.cellInfo.cellType===I.PATH?"cell-path":this.cellInfo.cellType===I.FILLEDNOANIM?"cell-filled-noAnim":void 0}}};const V=(0,A.c)(z,[["render",F]]);var x=V,j=a(9312),U={name:"BoardItem",props:["options","didAlgoRun","didClearPath","didClearWalls"],components:{CellItem:x},emits:["startedClearing","endedClearing"],data(){return{metaData:{STARTCELL:[12,5],ENDCELL:[5,5],BOARDCOLS:42,BOARDROWS:18,isMouseDown:!1,cellTypeClicked:null,lastClickedCell:null},curSpeed:B.NORMAL,path:[],visited:[],board:[]}},mounted:function(){let e=window.innerWidth,t=window.innerHeight;S&&console.log(`Window has a width of ${e}px and ${t}px`),this.metaData.BOARDCOLS=Math.max(Math.round((e-180)/30),5),this.metaData.BOARDROWS=Math.max(Math.round((t-270)/30),5),e<493?this.metaData.BOARDROWS-=5:e<576?this.metaData.BOARDROWS-=3:e<1e3&&(this.metaData.BOARDROWS-=1),this.board=this.createBoard(),this.setStartAndEndCells(),S&&console.log(`Selected ${this.metaData.BOARDROWS} rows and ${this.metaData.BOARDCOLS} cols`)},watch:{"metaData.lastClickedCell":async function(e,t){null!=t&&e.cellType==t.cellType&&t.cellType!=I.WALL&&(t.cellType=I.FREE)},"options.wallType":function(e,t){e!=t&&(e==$.NOMAZE?this.clearWalls():e==$.RANDOMMAZE&&this.createRandomMaze())},"options.speed":function(e,t){e!=t&&(e==k.SLOW?this.curSpeed=B.SLOW:e==k.NORMAL?this.curSpeed=B.NORMAL:e==k.FAST&&(this.curSpeed=B.FAST),S&&console.log(`Changing speed type to ${this.curSpeed}`))},didClearWalls:function(){S&&console.log("Cleared all the walls"),this.clearWalls()},didAlgoRun:async function(e){if(1==e){var t=!1;this.options.algoType==P.DFS?(t=await this.dfs(),t&&(await this.sleep(m),this.path.reverse())):this.options.algoType==P.BFS?t=await this.bfs():this.options.algoType==P.Djikstra&&(t=await this.dijkstra()),t?(S&&console.log("Tracing Shortest Path now!"),await this.tracePath()):S&&console.log("Path wasn't found :(")}else await this.clearVisitedCells()}},methods:{createBoard(){const e=[];for(let t=0;t<this.metaData.BOARDROWS;t++){let a=[];for(let e=0;e<this.metaData.BOARDCOLS;e++)a.push({row:t,col:e,cellType:I.FREE});e.push(a)}return e},setStartAndEndCells(){var e=Math.floor(Math.random()*this.metaData.BOARDROWS),t=Math.floor(Math.random()*this.metaData.BOARDCOLS),a=Math.floor(Math.random()*this.metaData.BOARDROWS),l=Math.floor(Math.random()*this.metaData.BOARDCOLS);while(e==a&&t==l)e==a&&(a=Math.floor(Math.random()*this.metaData.BOARDROWS)),t==l&&(l=Math.floor(Math.random()*this.metaData.BOARDCOLS));this.metaData.STARTCELL=[e,t],this.metaData.ENDCELL=[a,l],this.board[e][t].cellType=I.START,this.board[a][l].cellType=I.END,S&&console.log(`Selected Start Cell is at ${e},${t}) and selected end cell is at (${a},${l}).`)},async createRandomMaze(){for(let e=0;e<this.metaData.BOARDROWS;e++)for(let t=0;t<this.metaData.BOARDCOLS;t++)this.board[e][t].cellType!=I.START&&this.board[e][t].cellType!=I.END&&Math.random()>.7&&(this.board[e][t].cellType=I.WALL,await this.sleep(this.curSpeed))},handleMouseDown(e){this.didAlgoRun||(this.metaData.isMouseDown=!0,this.metaData.cellTypeClicked=e.cellType,this.metaData.lastClickedCell=e,e.cellType!=I.START&&e.cellType!=I.END?e.cellType==I.WALL?e.cellType=I.FREE:e.cellType=I.WALL:S&&console.log("Nothing Here!"),S&&console.log("Mouse Down"))},async handleMouseEnter(e){this.metaData.isMouseDown&&!this.didAlgoRun&&(this.metaData.cellTypeClicked==I.START&&e.cellType!=I.END?(e.cellType=I.START,this.metaData.lastClickedCell=e,this.metaData.STARTCELL=[e.row,e.col],S&&console.log(`Start Cell changed to ${e.row}, ${e.col}`)):this.metaData.cellTypeClicked==I.END&&e.cellType!=I.START?(e.cellType=I.END,this.metaData.lastClickedCell=e,this.metaData.ENDCELL=[e.row,e.col],S&&console.log(`End Cell changed to ${e.row}, ${e.col}`)):e.cellType!=I.START&&e.cellType!=I.END?e.cellType==I.WALL?e.cellType=I.FREE:e.cellType=I.WALL:S&&console.log("Nothing Here!"))},handleMouseUp(){this.metaData.isMouseDown=!1,S&&console.log("Mouse Up")},clearWalls(){for(let e=0;e<this.metaData.BOARDROWS;e++)for(let t=0;t<this.metaData.BOARDCOLS;t++)this.board[e][t].cellType==I.WALL&&(this.board[e][t].cellType=I.FREE)},async clearVisitedCells(){this.$emit("startedClearing");for(const[e,t]of this.visited)this.board[e][t].cellType!=I.FILLED&&this.board[e][t].cellType!=I.PATH||(this.board[e][t].cellType=I.FREE,await this.sleep(T));this.visited=[],this.path=[],this.$emit("endedClearing")},sleep(e){return new Promise((t=>setTimeout(t,e)))},getAdjIndexes(e,t){const a=[],l=[[-1,0],[0,1],[1,0],[0,-1]];for(const[o,s]of l)0<=e+o&&e+o<this.metaData.BOARDROWS&&0<=t+s&&t+s<this.metaData.BOARDCOLS&&this.board[e+o][t+s].cellType!=I.START&&this.board[e+o][t+s].cellType!=I.WALL&&a.push([e+o,t+s]);return a},async bfs(){this.visited=[];const e=[],t=[[this.metaData.STARTCELL[0],this.metaData.STARTCELL[1]]];S&&console.log(t);while(t.length>0){const[a,l]=t.shift();for(const[o,s]of this.getAdjIndexes(a,l)){if(!this.didAlgoRun)return!1;if(this.board[o][s].cellType==I.END)return e.push([[o,s],[a,l]]),this.traceBFSShortestPath(e),!0;this.board[o][s].cellType==I.FREE&&(this.board[o][s].cellType=I.FILLED,t.push([o,s]),e.push([[o,s],[a,l]]),this.visited.push([o,s]),S&&console.log(this.curSpeed),await this.sleep(this.curSpeed))}}return!1},traceBFSShortestPath(e){var t=null;e.reverse(),this.path=[];for(const[a,l]of e)if(null==t&&a[0]==this.metaData.ENDCELL[0]&&a[1]==this.metaData.ENDCELL[1]){t=l,this.path.push(l);const[e,a]=t;S&&console.log(`Starting Path from end cell at [${e}, ${a}]`)}else if(t[0]==a[0]&&t[1]==a[1]){t=l;const[e,o]=t;if(e==this.metaData.STARTCELL[0]&&o==this.metaData.STARTCELL[1])return void(S&&console.log(`Found start cell at [${e}, ${o}]`));this.path.push(l),S&&console.log(`Going from [${a[0]}, ${a[1]}] to [${e}, ${o}]`)}},async dfs(){const e=async(t,a)=>{if(!this.didAlgoRun)return!1;for(const[l,o]of this.getAdjIndexes(t,a)){if(!this.didAlgoRun)return!1;if(this.board[l][o].cellType==I.END)return!0;if(this.board[l][o].cellType==I.FREE){if(this.board[l][o].cellType=I.FILLED,this.visited.push([l,o]),this.path.push([l,o]),await this.sleep(this.curSpeed),1==await e(l,o))return!0;this.path.pop()}}return!1};return await e(this.metaData.STARTCELL[0],this.metaData.STARTCELL[1])},async dijkstra(){const e=async(e,t)=>{const a=this.createDistanceMap(),l={};l[`${e},${t}`]=null;const o=new j.PriorityQueue(((e,t)=>e[0]<=t[0]?-1:1));o.enqueue([0,[e,t]]);while(o.size()>0){const[e,[t,n]]=o.dequeue();if(!(e>a[t][n]))for(const[i,r]of this.getAdjIndexes(t,n)){if(!this.didAlgoRun)return!1;var s=1+Number(e);if(this.board[i][r].cellType==I.END)return l[`${i},${r}`]=[t,n],this.traceDijkstraShortestPath(l),!0;s<a[i][r]&&(a[i][r]=s,l[`${i},${r}`]=[t,n],this.board[i][r].cellType=I.FILLED,o.enqueue([Number(s),[i,r]]),this.visited.push([i,r]),await this.sleep(this.curSpeed))}}return!1};return await e(this.metaData.STARTCELL[0],this.metaData.STARTCELL[1])},traceDijkstraShortestPath(e){this.path=[];const[t,a]=this.metaData.ENDCELL;var[l,o]=e[`${t},${a}`];for(let s=0;s<Object.keys(e).length;s++)if(l==this.metaData.STARTCELL[0]&&o==this.metaData.STARTCELL[1])S&&S&&console.log(`FOUND THE START NODE at ${l},${o}`);else{this.path.push([l,o]);const[t,a]=e[`${l},${o}`];l=t,o=a}},createDistanceMap(){const e=[];for(let l=0;l<this.metaData.BOARDROWS;l++){const t=[];for(let e=0;e<this.metaData.BOARDCOLS;e++)t.push(1/0);e.push(t)}const[t,a]=this.metaData.STARTCELL;return e[t][a]=0,e},async tracePath(){if(0!=this.path.length&&(1!=this.path.length||this.path[0][0]!=this.metaData.STARTCELL[0]||this.path[0][1]!=this.metaData.STARTCELL[1]))for(const[e,t]of this.path){if(!this.didAlgoRun)return void await this.clearPath();this.board[e][t].cellType=I.PATH,await this.sleep(f)}},async clearPath(){for(const[e,t]of this.path)this.board[e][t].cellType!=I.FILLED&&this.board[e][t].cellType!=I.PATH||(this.board[e][t].cellType=I.FREE);this.path=[]}}};const H=(0,A.c)(U,[["render",N]]);var Q=H,Z={name:"App",components:{MainHeader:E,BoardItem:Q},data(){return{didAlgoRun:!1,isPossibleToClear:!0,didClearWalls:!1,didClearPath:!1,options:{algoType:P.DFS,wallType:$.NOMAZE,speed:k.FAST}}},methods:{changeAlgoOptions:function(e){S&&console.log(`Changed algo type to ${this._getNameFromType("Algo",e)}`),this.options.algoType=e},changeWallOptions:function(e){S&&console.log(`Changed wall type to ${this._getNameFromType("Wall",e)}`),this.options.wallType=e},changeSpeedOptions:function(e){S&&console.log(`Changed speed type to ${this._getNameFromType("Speed",e)}`),this.options.speed=e},_getNameFromType(e,t){if("Algo"===e){if(t==P.DFS)return"DFS";if(t==P.BFS)return"BFS";if(t==P.Djikstra)return"Dijkstra";if(t==P.ASTAR)return"A*"}else if("Wall"===e){if(t==$.NOMAZE)return"No Maze";if(t==$.RANDOMMAZE)return"Random Maze"}else if("Speed"===e){if(t==k.SLOW)return"SLOW";if(t==k.NORMAL)return"NORMAL";if(t==k.FAST)return"FAST"}}}};const _=(0,A.c)(Z,[["render",n]]);var K=_;(0,l.W0)(K).mount("#app")}},t={};function a(l){var o=t[l];if(void 0!==o)return o.exports;var s=t[l]={exports:{}};return e[l].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,l,o,s){if(!l){var n=1/0;for(d=0;d<e.length;d++){l=e[d][0],o=e[d][1],s=e[d][2];for(var i=!0,r=0;r<l.length;r++)(!1&s||n>=s)&&Object.keys(a.O).every((function(e){return a.O[e](l[r])}))?l.splice(r--,1):(i=!1,s<n&&(n=s));if(i){e.splice(d--,1);var h=o();void 0!==h&&(t=h)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[l,o,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var l in t)a.o(t,l)&&!a.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,l){var o,s,n=l[0],i=l[1],r=l[2],h=0;if(n.some((function(t){return 0!==e[t]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(r)var d=r(a)}for(t&&t(l);h<n.length;h++)s=n[h],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(d)},l=self["webpackChunkalgo_vis"]=self["webpackChunkalgo_vis"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=a.O(void 0,[999],(function(){return a(4880)}));l=a.O(l)})();
//# sourceMappingURL=app.cfa00a37.js.map