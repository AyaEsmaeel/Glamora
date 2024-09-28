import{a as K,c as Q,f as X,m as Y}from"./chunk-PGLOZANA.js";import{a as U,e as G,g as J,j as P}from"./chunk-RVLZZBJZ.js";import{$a as T,Jb as B,Kb as $,La as h,Mb as W,Nb as q,Oa as v,P as y,Q as I,Qa as i,Ra as o,Sa as m,Ta as S,U as M,Ua as b,Va as _,Xa as E,Ya as s,Z as w,Za as l,_ as k,_a as c,ab as L,bb as R,cb as z,fa as g,ga as f,hb as A,jb as H,kb as D,ya as r,za as u}from"./chunk-ENVQAO3F.js";var d=class n{constructor(t){this.http=t}apiUrl="https://dummyjson.com/posts";getPosts(){return this.http.get(`${this.apiUrl}`)}getPostById(t){return this.http.get(`${this.apiUrl}/${t}`)}likePost(t){return this.http.post(`${this.apiUrl}/${t}/like`,{})}dislikePost(t){return this.http.post(`${this.apiUrl}/${t}/dislike`,{})}getCommentsByPostId(t){return this.http.get(`https://dummyjson.com/posts/${t}/comments`)}createPost(t){return this.http.post(this.apiUrl,t)}updatePost(t,e){return this.http.put(`${this.apiUrl}/${t}`,e)}deletePost(t){return this.http.delete(`${this.apiUrl}/${t}`)}incrementViews(t){return this.http.post(`${this.apiUrl}/${t}/increment-views`,{})}static \u0275fac=function(e){return new(e||n)(M(U))};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})};function rt(n,t){if(n&1&&(i(0,"span",18),s(1),o()),n&2){let e=t.$implicit;r(),l(e)}}function st(n,t){if(n&1){let e=S();i(0,"div",4)(1,"div",5),m(2,"img",6),i(3,"span",7),s(4),o(),i(5,"h2"),s(6),o(),i(7,"p",8),m(8,"img",9),s(9),m(10,"img",10),s(11),m(12,"img",11),s(13),o()(),i(14,"div",12)(15,"p"),s(16),A(17,"slice"),o()(),i(18,"div",13),h(19,rt,2,1,"span",14),o(),i(20,"div",15)(21,"button",16),b("click",function(){let p=g(e).$implicit,C=_(2);return f(C.viewDetails(p.id))}),m(22,"img",17),s(23," Read More "),o()()()}if(n&2){let e=t.$implicit;r(4),l(e.userId),r(2),l(e.title),r(3),c(" ",e.views," | "),r(2),c(" ",e.reactions.likes," | "),r(2),c(" ",e.reactions.dislikes," "),r(3),c("",H(17,7,e.body,0,150),"..."),r(3),v("ngForOf",e.tags)}}function at(n,t){if(n&1&&(i(0,"div")(1,"div",2)(2,"h1"),s(3,"Posts"),o()(),h(4,st,24,11,"div",3),o()),n&2){let e=_();r(4),v("ngForOf",e.posts)}}function mt(n,t){n&1&&(i(0,"p"),s(1,"No posts available."),o())}var x=class n{constructor(t,e){this.blogService=t;this.router=e}posts=[];ngOnInit(){this.blogService.getPosts().subscribe(t=>{this.posts=t.posts})}viewDetails(t){this.router.navigate(["/blog",t])}static \u0275fac=function(e){return new(e||n)(u(d),u(J))};static \u0275cmp=w({type:n,selectors:[["app-blog-list"]],decls:3,vars:2,consts:[["noPostsTemplate",""],[4,"ngIf","ngIfElse"],[1,"header"],["class","post-card",4,"ngFor","ngForOf"],[1,"post-card"],[1,"post-header"],["src","https://cdn-icons-png.flaticon.com/128/1144/1144709.png","alt","User Icon",1,"user-icon"],[1,"User"],[1,"post-meta"],["src","https://cdn-icons-png.flaticon.com/128/709/709612.png","alt","Views Icon",1,"meta-icon"],["src","https://cdn-icons-png.flaticon.com/128/126/126473.png","alt","Likes Icon",1,"meta-icon"],["src","https://cdn-icons-png.flaticon.com/128/126/126504.png","alt","Dislikes Icon",1,"meta-icon"],[1,"post-body"],[1,"post-tags"],["class","tag",4,"ngFor","ngForOf"],[1,"post-footer"],[1,"btn",3,"click"],["src","https://cdn-icons-png.flaticon.com/128/134/134808.png","alt","Comments Icon",1,"icon"],[1,"tag"]],template:function(e,a){if(e&1&&h(0,at,5,1,"div",1)(1,mt,2,0,"ng-template",null,0,D),e&2){let p=E(2);v("ngIf",a.posts.length>0)("ngIfElse",p)}},dependencies:[B,$,W],styles:["body[_ngcontent-%COMP%]{background:#eee;font-family:Arial,sans-serif}.header[_ngcontent-%COMP%]{text-align:center;margin-top:20px}.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:60px;color:#363738}.post-card[_ngcontent-%COMP%]{background:#fff;border-radius:8px;box-shadow:0 2px 10px #0000001a;margin:20px;padding:20px;position:relative;transition:transform .3s}.post-card[_ngcontent-%COMP%]:hover{transform:scale(1.02)}.post-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:20px 0 0;font-size:24px;font-weight:500}.post-meta[_ngcontent-%COMP%]{color:#666;font-size:14px;margin:5px 0 15px}.meta-icon[_ngcontent-%COMP%]{width:15px;height:15px;margin-right:5px;vertical-align:middle}.user-icon[_ngcontent-%COMP%]{width:40px;height:40px;margin-right:5px;vertical-align:middle}.post-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#333;margin:10px 0}.post-tags[_ngcontent-%COMP%]{margin:10px 0}.tag[_ngcontent-%COMP%]{background:#ffb535;color:#fff;border-radius:4px;padding:5px 10px;margin-right:5px;display:inline-block}.User[_ngcontent-%COMP%]{font-weight:500;font-size:20px;margin-right:10px}.post-footer[_ngcontent-%COMP%]{margin-top:15px}.btn[_ngcontent-%COMP%]{background-color:#fff;color:#333;border:1px solid #ccc;border-radius:5px;padding:10px 15px;display:flex;align-items:center;cursor:pointer;transition:background-color .3s}.btn[_ngcontent-%COMP%]:hover{background-color:#f0f0f0}.icon[_ngcontent-%COMP%]{width:20px;height:20px;margin-right:8px}"]})};var j=class n{constructor(t){this.http=t}apiUrl="https://dummyjson.com/comments";getComments(t){return this.http.get(`${this.apiUrl}/post/${t}`)}addComment(t,e){return this.http.post(`${this.apiUrl}/post/${t}`,e)}deleteComment(t){return this.http.delete(`${this.apiUrl}/${t}`)}updateComment(t,e){return this.http.put(`${this.apiUrl}/${t}`,e)}static \u0275fac=function(e){return new(e||n)(M(U))};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})};function ct(n,t){if(n&1&&(i(0,"div",19)(1,"p"),s(2),o(),i(3,"span"),s(4),o()()),n&2){let e=t.$implicit;r(2),l(e.body),r(2),T("By ",e.user.fullName," (",e.user.username,")")}}function lt(n,t){if(n&1&&(i(0,"div"),h(1,ct,5,3,"div",18),o()),n&2){let e=_();r(),v("ngForOf",e.comments)}}function dt(n,t){n&1&&(i(0,"p"),s(1,"No comments available for this post."),o())}var F=class n{constructor(t,e,a){this.route=t;this.blogService=e;this.commentService=a}post;comments=[];postId;newComment="";ngOnInit(){this.postId=+this.route.snapshot.paramMap.get("id"),this.loadPostDetails(),this.loadComments()}loadPostDetails(){this.blogService.getPostById(this.postId).subscribe(t=>{this.post=t},t=>{console.error("Error fetching post details:",t)})}loadComments(){this.commentService.getComments(this.postId).subscribe(t=>{this.comments=t.comments},t=>{console.error("Error fetching comments:",t)})}likePost(){this.post.reactions.likes++,this.blogService.likePost(this.postId).subscribe(()=>{},t=>{console.error("Error liking the post:",t)})}dislikePost(){this.post.reactions.dislikes++,this.blogService.dislikePost(this.postId).subscribe(()=>{},t=>{console.error("Error disliking the post:",t)})}addComment(){if(this.newComment.trim()){let t={body:this.newComment,user:{fullName:"Current User",username:"current_user"}};this.comments.push(t),this.newComment="",this.commentService.addComment(this.postId,t).subscribe(()=>{},e=>{console.error("Error adding comment:",e)})}}static \u0275fac=function(e){return new(e||n)(u(G),u(d),u(j))};static \u0275cmp=w({type:n,selectors:[["app-post-details"]],decls:31,vars:10,consts:[["noComments",""],[1,"post-details-container"],[1,"post-header"],[1,"user-details"],["src","https://cdn-icons-png.flaticon.com/128/1144/1144709.png","alt","User Icon",1,"user-icon"],[1,"User"],[1,"post-meta"],[1,"meta-action"],["src","https://cdn-icons-png.flaticon.com/128/709/709612.png","alt","Views Icon",1,"meta-icon"],[1,"meta-action",3,"click"],["src","https://cdn-icons-png.flaticon.com/128/126/126473.png","alt","Likes Icon",1,"meta-icon"],["src","https://cdn-icons-png.flaticon.com/128/126/126504.png","alt","Dislikes Icon",1,"meta-icon"],[1,"post-body"],[1,"comments-section"],[4,"ngIf","ngIfElse"],[1,"add-comment"],["type","text","placeholder","Add a comment",3,"ngModelChange","ngModel"],[3,"click"],["class","comment",4,"ngFor","ngForOf"],[1,"comment"]],template:function(e,a){if(e&1){let p=S();i(0,"div",1)(1,"div",2)(2,"div",3),m(3,"img",4),i(4,"span",5),s(5),o()(),i(6,"h2"),s(7),o(),i(8,"p",6)(9,"span",7),m(10,"img",8),s(11),o(),i(12,"span",9),b("click",function(){return g(p),f(a.likePost())}),m(13,"img",10),s(14),o(),i(15,"span",9),b("click",function(){return g(p),f(a.dislikePost())}),m(16,"img",11),s(17),o()()(),i(18,"div",12)(19,"p"),s(20),o()(),i(21,"div",13)(22,"h3"),s(23),o(),h(24,lt,2,1,"div",14)(25,dt,2,0,"ng-template",null,0,D),i(27,"div",15)(28,"input",16),z("ngModelChange",function(V){return g(p),R(a.newComment,V)||(a.newComment=V),f(V)}),o(),i(29,"button",17),b("click",function(){return g(p),f(a.addComment())}),s(30,"Submit"),o()()()()}if(e&2){let p=E(26);r(5),l(a.post.userId),r(2),l(a.post.title),r(4),c("| ",a.post.views," Views "),r(3),c(" ",a.post.reactions.likes," Likes | "),r(3),c(" ",a.post.reactions.dislikes," Dislikes "),r(3),l(a.post.body),r(3),c("Comments (",a.comments.length,")"),r(),v("ngIf",a.comments.length>0)("ngIfElse",p),r(4),L("ngModel",a.newComment)}},dependencies:[B,$,K,Q,X],styles:[".post-details-container[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;box-shadow:0 2px 10px #0000001a;padding:20px;margin:20px auto;max-width:800px}.post-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:20px 0 0;font-size:24px;font-weight:500}.post-header[_ngcontent-%COMP%]{margin-bottom:15px}.user-details[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:5px}.user-icon[_ngcontent-%COMP%]{width:30px;height:30px;border-radius:50%;margin-right:10px}.User[_ngcontent-%COMP%]{font-weight:500;font-size:18px;margin-right:10px}.post-meta[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:.9em;color:#666;margin-top:20px}.meta-icon[_ngcontent-%COMP%]{width:16px;height:16px;margin:-3px 5px}.post-body[_ngcontent-%COMP%]{margin:15px 0;font-size:1em;line-height:1.5;color:#444}.comments-section[_ngcontent-%COMP%]{margin-top:30px;border-top:1px solid #ccc;padding-top:15px}.comments-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.5em;margin-bottom:10px;color:#363738}.comment[_ngcontent-%COMP%]{border-bottom:1px solid #eaeaea;padding:10px 0}.comment[_ngcontent-%COMP%]:last-child{border-bottom:none}.comment-meta[_ngcontent-%COMP%]{font-size:.8em;color:#888}.meta-action[_ngcontent-%COMP%]{margin-right:15px;cursor:pointer}.add-comment[_ngcontent-%COMP%]{margin-top:20px}.add-comment[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:70%;padding:5px;border:1px solid #ccc;border-radius:5px}.add-comment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:5px 10px;margin-left:5px;border:none;background-color:#ffb535;color:#fff;cursor:pointer}.add-comment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#e0a92d}"]})};var gt=[{path:"",component:x}],N=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=k({type:n});static \u0275inj=I({imports:[P.forChild(gt),P]})};var tt=class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=k({type:n});static \u0275inj=I({providers:[d],imports:[q,N,Y,P.forChild([{path:"",component:x},{path:":id",component:F}])]})};export{tt as BlogModule};
