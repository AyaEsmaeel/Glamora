import{a as D}from"./chunk-BIEDQ6MX.js";import{a as w}from"./chunk-22LNHBQQ.js";import{a as E}from"./chunk-CL22T3UY.js";import{g as k}from"./chunk-RVLZZBJZ.js";import{Jb as S,La as b,Lb as M,Oa as f,Qa as e,Ra as o,Sa as C,Ta as P,Ua as s,Va as x,Wa as _,Ya as i,Z as v,Za as l,fa as u,ga as g,hb as y,ib as O,va as h,ya as a,za as p}from"./chunk-ENVQAO3F.js";function A(r,n){if(r&1){let t=P();e(0,"div",9),C(1,"img",10),e(2,"h3",11),i(3),o(),e(4,"p",12),i(5),o(),e(6,"p",13),i(7),y(8,"currency"),o(),e(9,"button",14),s("click",function(){let d=u(t).$implicit,m=x();return g(m.navigateToEditProduct(d.id))}),i(10,"Edit"),o(),e(11,"button",15),s("click",function(){let d=u(t).$implicit,m=x();return g(m.deleteProduct(d.id))}),i(12,"Delete"),o()()}if(r&2){let t=n.$implicit;a(),_("src",t.thumbnail,h),_("alt",t.name),a(2),l(t.name),a(2),l(t.description),a(2),l(O(8,5,t.price))}}function T(r,n){if(r&1&&(e(0,"div",16)(1,"h3",17),i(2),o()()),r&2){let t=n.$implicit;a(2),l(t.name)}}var I=class r{constructor(n,t,c,d){this.productService=n;this.authService=t;this.categoryService=c;this.router=d}products=[];categories=[];isAdmin=!1;ngOnInit(){this.isAdmin=this.authService.isAdmin(),this.loadProducts(),this.loadCategories()}loadProducts(){this.productService.getProducts().subscribe(n=>{this.products=n.products})}loadCategories(){this.categoryService.getCategories().subscribe(n=>{this.categories=n})}deleteProduct(n){this.productService.deleteProduct(n).subscribe(()=>{this.loadProducts()})}navigateToEditProduct(n){this.router.navigate(["/admin/edit-product",n])}navigateToAddProduct(){this.router.navigate(["/admin/add-product"])}navigateToAddCategory(){this.router.navigate(["/admin/add-category"])}static \u0275fac=function(t){return new(t||r)(p(w),p(D),p(E),p(k))};static \u0275cmp=v({type:r,selectors:[["app-dashboard"]],decls:17,vars:2,consts:[[1,"dashboard-container"],[1,"dashboard-title"],[1,"product-section"],[1,"btn-add",3,"click"],[1,"product-list"],["class","product-card",4,"ngFor","ngForOf"],[1,"category-section"],[1,"category-list"],["class","category-card",4,"ngFor","ngForOf"],[1,"product-card"],[1,"product-image",3,"src","alt"],[1,"product-name"],[1,"product-description"],[1,"product-price"],[1,"btn-edit",3,"click"],[1,"btn-delete",3,"click"],[1,"category-card"],[1,"category-name"]],template:function(t,c){t&1&&(e(0,"div",0)(1,"h1",1),i(2,"DashBoard"),o(),e(3,"section",2)(4,"h2"),i(5," Products "),e(6,"button",3),s("click",function(){return c.navigateToAddProduct()}),i(7,"Add"),o()(),e(8,"div",4),b(9,A,13,7,"div",5),o()(),e(10,"section",6)(11,"h2"),i(12," Categories "),e(13,"button",3),s("click",function(){return c.navigateToAddCategory()}),i(14,"Add"),o()(),e(15,"div",7),b(16,T,3,1,"div",8),o()()()),t&2&&(a(9),f("ngForOf",c.products),a(7),f("ngForOf",c.categories))},dependencies:[S,M],styles:["body[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#f4f4f4;margin:0;padding:0}.dashboard-container[_ngcontent-%COMP%]{max-width:1200px;margin:20px auto;padding:20px;background:#fff;border-radius:8px;box-shadow:0 2px 10px #0000001a}.dashboard-title[_ngcontent-%COMP%]{text-align:center;color:#333;margin-bottom:20px}.product-section[_ngcontent-%COMP%]{margin-bottom:40px}.product-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;color:#555}.btn-add[_ngcontent-%COMP%]{background-color:#28a745;color:#fff;border:none;padding:8px 12px;border-radius:4px;cursor:pointer;transition:background-color .3s}.btn-add[_ngcontent-%COMP%]:hover{background-color:#218838}.product-list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:20px}.product-card[_ngcontent-%COMP%]{background:#fff;border-radius:8px;padding:15px;box-shadow:0 1px 5px #0003;transition:transform .2s}.product-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px)}.product-image[_ngcontent-%COMP%]{max-width:100%;height:auto;border-radius:8px}.product-name[_ngcontent-%COMP%]{font-size:1.25rem;color:#333;margin:10px 0 5px}.product-description[_ngcontent-%COMP%]{font-size:.9rem;color:#666;margin-bottom:10px}.product-price[_ngcontent-%COMP%]{font-size:1.1rem;color:#28a745;margin-bottom:15px}.btn-edit[_ngcontent-%COMP%], .btn-delete[_ngcontent-%COMP%]{background-color:#007bff;color:#fff;border:none;padding:8px 12px;border-radius:4px;cursor:pointer;margin-right:5px;transition:background-color .3s}.btn-edit[_ngcontent-%COMP%]:hover{background-color:#0056b3}.btn-delete[_ngcontent-%COMP%]{background-color:#dc3545}.btn-delete[_ngcontent-%COMP%]:hover{background-color:#c82333}.category-section[_ngcontent-%COMP%]{margin-bottom:40px}.category-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#555}.category-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:15px}.category-card[_ngcontent-%COMP%]{background:#fff;border-radius:8px;padding:15px;box-shadow:0 1px 5px #0003;flex:1 1 calc(30% - 15px);min-width:150px;text-align:center}.category-name[_ngcontent-%COMP%]{font-size:1.1rem;color:#333}"]})};export{I as a};
