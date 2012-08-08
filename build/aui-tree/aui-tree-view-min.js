AUI.add("aui-tree-view",function(aa){var S=aa.Lang,ap=S.isBoolean,au=S.isString,q="boundingBox",d="children",a="container",X="content",s="contentBox",R=".",an="file",z="hitarea",P="icon",ae="label",N="lastSelected",ar="leaf",p="node",U="ownerTree",F="root",r=" ",f="tree",B="tree-node",K="tree-view",e="type",x="view",av=function(){return Array.prototype.slice.call(arguments).join(r);},aj=function(A){return(A instanceof aa.TreeNode);},y=aa.getClassName,am=y(f,z),w=y(f,P),i=y(f,ae),u=y(f,p,X),l=y(f,F,a),af=y(f,x,X);var O=aa.Component.create({NAME:K,ATTRS:{type:{value:an,validator:au},lastSelected:{value:null,validator:aj},lazyLoad:{validator:ap,value:true},io:{value:null},paginator:{value:null}},AUGMENTS:[aa.TreeData],prototype:{CONTENT_TEMPLATE:"<ul></ul>",initializer:function(){var A=this;var L=A.get(q);L.setData(K,A);},bindUI:function(){var A=this;A._delegateDOM();},renderUI:function(){var A=this;A._renderElements();},_createFromHTMLMarkup:function(L){var A=this;L.all("> li").each(function(aB){var aA=aB.one("> *").remove();var az=aA.outerHTML();var ay=aB.one("> ul");var aC=new aa.TreeNode({boundingBox:aB,container:ay,label:az,leaf:!ay,ownerTree:A});if(ay){aC.render();A._createFromHTMLMarkup(ay);}else{aC.render();}var ax=aB.get(c).get(c);var aD=ax.getData(B);if(!aa.instanceOf(aD,aa.TreeNode)){aD=ax.getData(K);}aD.appendChild(aC);});},_createNodeContainer:function(){var A=this;var L=A.get(s);A.set(a,L);return L;},_renderElements:function(){var A=this;var L=A.get(s);var ax=A.get(d);var ay=A.get(e);var az=y(f,ay);L.addClass(af);L.addClass(av(az,l));if(!ax.length){A._createFromHTMLMarkup(L);}},_delegateDOM:function(){var A=this;var L=A.get(q);L.delegate("click",aa.bind(A._onClickHitArea,A),R+am);L.delegate("dblclick",aa.bind(A._onClickHitArea,A),R+w);L.delegate("dblclick",aa.bind(A._onClickHitArea,A),R+i);L.delegate("mouseenter",aa.bind(A._onMouseEnterNodeEl,A),R+u);L.delegate("mouseleave",aa.bind(A._onMouseLeaveNodeEl,A),R+u);L.delegate("click",aa.bind(A._onClickNodeEl,A),R+u);},_onClickNodeEl:function(L){var A=this;var ay=A.getNodeByChild(L.currentTarget);if(ay&&!ay.isSelected()){var ax=A.get(N);if(ax){ax.unselect();}ay.select();}},_onMouseEnterNodeEl:function(L){var A=this;var ax=A.getNodeByChild(L.currentTarget);if(ax){ax.over();}},_onMouseLeaveNodeEl:function(L){var A=this;var ax=A.getNodeByChild(L.currentTarget);if(ax){ax.out();}},_onClickHitArea:function(L){var A=this;var ax=A.getNodeByChild(L.currentTarget);if(ax){ax.toggle();}}}});aa.TreeView=O;var J=S.isNumber,ab="above",b="append",ad="below",al="block",ag="body",at="clearfix",Z="default",t="display",ai="down",v="drag",m="draggable",W="dragCursor",ao="dragNode",h="expanded",n="helper",aq="insert",C="offsetHeight",c="parentNode",aw="scrollDelay",M="state",ah="tree-drag-drop",ak="up",I=aa.DD.DDM,ac=y(n,at),j=y(P),Y=y(f,v,n),o=y(f,v,n,X),H=y(f,v,n,ae),E=y(f,v,aq,ab),V=y(f,v,aq,b),G=y(f,v,aq,ad),k=y(f,v,M,b),Q=y(f,v,M,aq,ab),T=y(f,v,M,aq,ad),D='<div class="'+Y+'">'+'<div class="'+[o,ac].join(r)+'">'+'<span class="'+j+'"></span>'+'<span class="'+H+'"></span>'+"</div>"+"</div>";var g=aa.Component.create({NAME:ah,ATTRS:{helper:{value:null},scrollDelay:{value:100,validator:J}},EXTENDS:aa.TreeView,prototype:{direction:ad,dropAction:null,lastY:0,node:null,nodeContent:null,destructor:function(){var A=this;var L=A.get(n);if(L){L.remove(true);}if(A.ddDelegate){A.ddDelegate.destroy();}},bindUI:function(){var A=this;aa.TreeViewDD.superclass.bindUI.apply(this,arguments);A._bindDragDrop();},renderUI:function(){var A=this;aa.TreeViewDD.superclass.renderUI.apply(this,arguments);var L=aa.Node.create(D).hide();aa.one(ag).append(L);A.set(n,L);I.set(W,Z);},_bindDragDrop:function(){var A=this;var ax=A.get(q);A._createDragInitHandler=function(){A.ddDelegate=new aa.DD.Delegate({bubbleTargets:A,container:ax,nodes:R+u,target:true});var ay=A.ddDelegate.dd;ay.plug(aa.Plugin.DDProxy,{moveOnEnd:false,positionProxy:false,borderStyle:null}).plug(aa.Plugin.DDNodeScroll,{scrollDelay:A.get(aw),node:ax});ay.removeInvalid("a");L.detach();};var L=ax.on(["focus","mousedown","mousemove"],A._createDragInitHandler);A.on("drag:align",A._onDragAlign);A.on("drag:start",A._onDragStart);A.on("drop:exit",A._onDropExit);A.after("drop:hit",A._afterDropHit);A.on("drop:hit",A._onDropHit);A.on("drop:over",A._onDropOver);},_appendState:function(L){var A=this;A.dropAction=b;A.get(n).addClass(k);L.addClass(V);},_goingDownState:function(L){var A=this;A.dropAction=ad;A.get(n).addClass(T);L.addClass(G);},_goingUpState:function(L){var A=this;A.dropAction=ab;A.get(n).addClass(Q);L.addClass(E);},_resetState:function(L){var A=this;var ax=A.get(n);ax.removeClass(k);ax.removeClass(Q);ax.removeClass(T);if(L){L.removeClass(E);L.removeClass(V);L.removeClass(G);}},_updateNodeState:function(A){var aG=this;var aC=A.drag;var az=A.drop;var L=az.get(p);var aF=L.get(c);var aB=aC.get(p).get(c);var ay=aF.getData(B);aG._resetState(aG.nodeContent);if(!aB.contains(aF)){var aH=L.get(C)/3;var ax=L.getY();var aE=ax+aH;var aD=ax+aH*2;var aA=aC.mouseXY[1];if((aA>ax)&&(aA<aE)){aG._goingUpState(L);}else{if(aA>aD){aG._goingDownState(L);}else{if((aA>aE)&&(aA<aD)){if(ay&&!ay.isLeaf()){aG._appendState(L);}else{if(aG.direction===ak){aG._goingUpState(L);}else{aG._goingDownState(L);}}}}}}aG.nodeContent=L;},_afterDropHit:function(az){var A=this;var aB=A.dropAction;var aA=az.drag.get(p).get(c);var ax=az.drop.get(p).get(c);var aC=ax.getData(B);var ay=aA.getData(B);var L=A.getEventOutputMap(A);L.tree.dropNode=aC;L.tree.dragNode=ay;if(aB===ab){aC.insertBefore(ay);A.bubbleEvent("dropInsert",L);}else{if(aB===ad){aC.insertAfter(ay);A.bubbleEvent("dropInsert",L);}else{if(aB===b){if(aC&&!aC.isLeaf()){aC.appendChild(ay);if(!aC.get(h)){aC.expand();}A.bubbleEvent("dropAppend",L);}}}}A._resetState(A.nodeContent);A.bubbleEvent("drop",L);A.dropAction=null;},_onDragAlign:function(ax){var A=this;var L=A.lastY;var ay=ax.target.lastXY[1];if(ay!==L){A.direction=(ay<L)?ak:ai;}A.lastY=ay;},_onDragStart:function(aA){var A=this;var ay=aA.target;var aC=ay.get(p).get(c);
var ax=aC.getData(B);var aB=A.get(N);if(aB){aB.unselect();}ax.select();var az=A.get(n);var L=az.one(R+H);az.setStyle(t,al).show();L.html(ax.get(ae));ay.set(ao,az);},_onDropOver:function(L){var A=this;A._updateNodeState(L);},_onDropHit:function(L){var A=L.drop.get(p).get(c);var ax=A.getData(B);if(!aj(ax)){L.preventDefault();}},_onDropExit:function(){var A=this;A.dropAction=null;A._resetState(A.nodeContent);}}});aa.TreeViewDD=g;},"@VERSION@",{skinnable:true,requires:["aui-tree-node","dd-delegate","dd-proxy"]});