(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19132c4b"],{"333d":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[i("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total,"hide-on-single-page":!0},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},a=[];i("c5f6");Math.easeInOutQuad=function(t,e,i,n){return t/=n/2,t<1?i/2*t*t+e:(t--,-i/2*(t*(t-2)-1)+e)};var l=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function o(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(t,e,i){var n=r(),a=t-n,s=20,u=0;e="undefined"===typeof e?500:e;var c=function t(){u+=s;var r=Math.easeInOutQuad(u,n,a,e);o(r),u<e?l(t):i&&"function"===typeof i&&i()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&s(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},c=u,d=(i("fe41"),i("2877")),p=Object(d["a"])(c,n,a,!1,null,"df7d1fa0",null);e["a"]=p.exports},3737:function(t,e,i){"use strict";i.d(e,"c",(function(){return a})),i.d(e,"d",(function(){return l})),i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return r}));var n=i("b775");function a(t){return Object(n["a"])({url:"/hippo4j/v1/cs/item/query/page",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/hippo4j/v1/cs/item/update",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/hippo4j/v1/cs/item/save",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/hippo4j/v1/cs/item/delete/"+t[0]+"/"+t[1],method:"delete"})}},6724:function(t,e,i){"use strict";i("8d41");var n="@@wavesContext";function a(t,e){function i(i){var n=Object.assign({},e.value),a=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),l=a.ele;if(l){l.style.position="relative",l.style.overflow="hidden";var o=l.getBoundingClientRect(),r=l.querySelector(".waves-ripple");switch(r?r.className="waves-ripple":(r=document.createElement("span"),r.className="waves-ripple",r.style.height=r.style.width=Math.max(o.width,o.height)+"px",l.appendChild(r)),a.type){case"center":r.style.top=o.height/2-r.offsetHeight/2+"px",r.style.left=o.width/2-r.offsetWidth/2+"px";break;default:r.style.top=(i.pageY-o.top-r.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",r.style.left=(i.pageX-o.left-r.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return r.style.backgroundColor=a.color,r.className="waves-ripple z-active",!1}}return t[n]?t[n].removeHandle=i:t[n]={removeHandle:i},i}var l={bind:function(t,e){t.addEventListener("click",a(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[n].removeHandle,!1),t.addEventListener("click",a(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[n].removeHandle,!1),t[n]=null,delete t[n]}},o=function(t){t.directive("waves",l)};window.Vue&&(window.waves=l,Vue.use(o)),l.install=o;e["a"]=l},"8d41":function(t,e,i){},"9dfd":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"filter-container"},[i("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"项目"},model:{value:t.listQuery.itemId,callback:function(e){t.$set(t.listQuery,"itemId",e)},expression:"listQuery.itemId"}}),t._v(" "),i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.fetchData}},[t._v("\n      搜索\n    ")]),t._v(" "),i("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit",disabled:t.isEditDisabled},on:{click:t.handleCreate}},[t._v("\n      添加\n    ")])],1),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{border:"",data:t.list,"highlight-current-row":"","element-loading-text":"Loading"}},[i("el-table-column",{attrs:{fixed:"",label:"序号",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.$index+1))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"租户",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.tenantId))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"项目",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.itemId))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"项目名称",width:"210"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.itemName))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"项目简介",width:"400"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.itemDesc))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"OWNER",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.owner)+" ")]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"创建时间",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.gmtCreate))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"修改时间",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.gmtModified))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作",fixed:"right",width:"90",align:"center","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;return[i("el-button",{attrs:{type:"text",disabled:t.isEditDisabled,size:"small"},on:{click:function(e){return t.handleUpdate(n)}}},[t._v("\n          编辑\n        ")]),t._v(" "),"deleted"!==n.status?i("el-button",{attrs:{disabled:t.isEditDisabled,size:"small",type:"text"},on:{click:function(e){return t.handleDelete(n)}}},[t._v("\n          删除\n        ")]):t._e()]}}])})],1),t._v(" "),i("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],attrs:{total:t.total,page:t.listQuery.current,limit:t.listQuery.size},on:{"update:page":function(e){return t.$set(t.listQuery,"current",e)},"update:limit":function(e){return t.$set(t.listQuery,"size",e)},pagination:t.fetchData}}),t._v(" "),i("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible,width:"800px"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-form",{ref:"dataForm",attrs:{rules:t.rules,model:t.temp,"label-position":"left","label-width":"100px"}},[i("el-form-item",{attrs:{label:"租户",prop:"tenantId"}},[i("el-select",{staticClass:"filter-item",staticStyle:{width:"40%"},attrs:{placeholder:"租户",filterable:"",clearable:"",disabled:"create"!==t.dialogStatus},model:{value:t.temp.tenantId,callback:function(e){t.$set(t.temp,"tenantId",e)},expression:"temp.tenantId"}},t._l(t.tenantOptions,(function(t){return i("el-option",{key:t.key,attrs:{label:t.display_name,value:t.key}})})),1)],1),t._v(" "),i("el-form-item",{attrs:{label:"项目",prop:"itemId"}},[i("el-input",{staticStyle:{width:"40%"},attrs:{disabled:"create"!==t.dialogStatus,placeholder:"项目"},model:{value:t.temp.itemId,callback:function(e){t.$set(t.temp,"itemId",e)},expression:"temp.itemId"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"项目名称",prop:"itemName"}},[i("el-input",{staticStyle:{width:"40%"},attrs:{placeholder:"项目名称"},model:{value:t.temp.itemName,callback:function(e){t.$set(t.temp,"itemName",e)},expression:"temp.itemName"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"OWNER",prop:"owner"}},[i("el-input",{staticStyle:{width:"40%"},attrs:{placeholder:"OWNER"},model:{value:t.temp.owner,callback:function(e){t.$set(t.temp,"owner",e)},expression:"temp.owner"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"项目描述",prop:"itemDesc"}},[i("el-input",{staticStyle:{width:"40%"},attrs:{autosize:{minRows:3,maxRows:6},type:"textarea",placeholder:"项目描述"},model:{value:t.temp.itemDesc,callback:function(e){t.$set(t.temp,"itemDesc",e)},expression:"temp.itemDesc"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(" 取消 ")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){"create"===t.dialogStatus?t.createData():t.updateData()}}},[t._v("\n        确认\n      ")])],1)],1),t._v(" "),i("el-dialog",{attrs:{visible:t.dialogPluginVisible,title:"Reading statistics"},on:{"update:visible":function(e){t.dialogPluginVisible=e}}},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.pluginData,border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{prop:"key",label:"Channel"}}),t._v(" "),i("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogPvVisible=!1}}},[t._v("Confirm")])],1)],1)],1)},a=[],l=i("3737"),o=i("dd71"),r=i("6724"),s=i("333d"),u={name:"JobProject",components:{Pagination:s["a"]},directives:{waves:r["a"]},filters:{statusFilter:function(t){var e={published:"success",draft:"gray",deleted:"danger"};return e[t]},ellipsis:function(t){return t?t.length>26?t.slice(0,26)+"...":t:""}},data:function(){return{list:null,listLoading:!0,total:0,listQuery:{current:1,size:10,itemId:"",desc:!0},pluginTypeOptions:["reader","writer"],dialogPluginVisible:!1,pluginData:[],dialogFormVisible:!1,tenantOptions:[],dialogStatus:"",isEditDisabled:!1,textMap:{update:"Edit",create:"Create"},rules:{tenantId:[{required:!0,message:"this is required",trigger:"blur"}],itemId:[{required:!0,message:"this is required",trigger:"blur"}],itemName:[{required:!0,message:"this is required",trigger:"blur"}],owner:[{required:!0,message:"this is required",trigger:"blur"}],itemDesc:[{required:!0,message:"this is required",trigger:"blur"}]},temp:{id:void 0,tenantId:"",tenantName:"",owner:"",tenantDesc:""},visible:!0}},created:function(){this.fetchData(),this.initSelect()},mounted:function(){this.isEditDisabled="admin"!==this.$cookie.get("userName")},methods:{fetchData:function(){var t=this;this.listLoading=!0,l["c"](this.listQuery).then((function(e){var i=e.records,n=e.total;t.total=n,t.list=i,t.listLoading=!1}))},initSelect:function(){var t=this;o["c"]({}).then((function(e){for(var i=e.records,n=0;n<i.length;n++)t.tenantOptions.push({key:i[n].tenantId,display_name:i[n].tenantId+" "+i[n].tenantName})}))},resetTemp:function(){this.temp={id:void 0,tenantName:"",tenantDesc:""}},handleCreate:function(){var t=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},createData:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&l["a"](t.temp).then((function(){t.fetchData(),t.dialogFormVisible=!1,t.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})}))}))},handleUpdate:function(t){var e=this;this.temp=Object.assign({},t),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},updateData:function(){var t=this;this.$refs["dataForm"].validate((function(e){if(e){var i=Object.assign({},t.temp);l["d"](i).then((function(){t.fetchData(),t.dialogFormVisible=!1,t.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})}))}}))},openDelConfirm:function(t){return this.$confirm("此操作将删除 ".concat(t,", 是否继续?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"})},handleDelete:function(t){var e=this;this.openDelConfirm(t.itemId).then((function(){var i=[t.tenantId,t.itemId];l["b"](i).then((function(t){e.fetchData(),e.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3})}))}))}}},c=u,d=i("2877"),p=Object(d["a"])(c,n,a,!1,null,null,null);e["default"]=p.exports},b36cf:function(t,e,i){},dd71:function(t,e,i){"use strict";i.d(e,"c",(function(){return a})),i.d(e,"d",(function(){return l})),i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return r}));var n=i("b775");function a(t){return Object(n["a"])({url:"/hippo4j/v1/cs/tenant/query/page",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/hippo4j/v1/cs/tenant/update",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/hippo4j/v1/cs/tenant/save",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/hippo4j/v1/cs/tenant/delete/"+t,method:"delete"})}},fe41:function(t,e,i){"use strict";i("b36cf")}}]);