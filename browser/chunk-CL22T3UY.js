import{a as o}from"./chunk-RVLZZBJZ.js";import{P as e,U as i}from"./chunk-ENVQAO3F.js";var a=class t{constructor(r){this.http=r}apiUrl="https://dummyjson.com/docs/products/categories";getCategories(){return this.http.get(`${this.apiUrl}/categories`)}getProductsByCategory(r){return this.http.get(`${this.apiUrl}/category/${r}`)}static \u0275fac=function(s){return new(s||t)(i(o))};static \u0275prov=e({token:t,factory:t.\u0275fac,providedIn:"root"})};export{a};
