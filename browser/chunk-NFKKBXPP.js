import{a as s}from"./chunk-CL22T3UY.js";import{e as f,j as y}from"./chunk-RVLZZBJZ.js";import{Nb as l,Q as g,Qa as n,Ra as a,Ya as c,Z as i,_ as d,za as r}from"./chunk-ENVQAO3F.js";var m=class o{constructor(t){this.categoryService=t}categories=[];ngOnInit(){this.loadCategories()}loadCategories(){this.categoryService.getCategories().subscribe(t=>{this.categories=t},t=>{console.error("Error fetching categories:",t)})}static \u0275fac=function(e){return new(e||o)(r(s))};static \u0275cmp=i({type:o,selectors:[["app-category"]],decls:2,vars:0,template:function(e,v){e&1&&(n(0,"p"),c(1,"category works!"),a())}})};var p=class o{constructor(t,e){this.route=t;this.categoryService=e}products=[];ngOnInit(){let t=this.route.snapshot.paramMap.get("id");t?this.categoryService.getProductsByCategory(t).subscribe({next:e=>{this.products=e.products},error:e=>{console.error("Error fetching products:",e)}}):console.error("Invalid category ID")}static \u0275fac=function(e){return new(e||o)(r(f),r(s))};static \u0275cmp=i({type:o,selectors:[["app-category-details"]],decls:2,vars:0,template:function(e,v){e&1&&(n(0,"p"),c(1,"category-details works!"),a())}})};var u=class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=d({type:o});static \u0275inj=g({imports:[l,y.forChild([{path:"",component:m},{path:":id",component:p}])]})};export{u as CategoryModule};
