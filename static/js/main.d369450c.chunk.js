(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{111:function(e,t,c){},125:function(e,t,c){},127:function(e,t,c){},128:function(e,t,c){},373:function(e,t,c){},374:function(e,t,c){},376:function(e,t,c){},377:function(e,t,c){},378:function(e,t,c){},379:function(e,t,c){},380:function(e,t,c){},381:function(e,t,c){},383:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(34),r=c.n(n),o=c(21),i=c(13),j=c(9),l=c(10),b=c(14),d=c(15),O=(c(71),c(125),c(72),c(54)),m=c(1);var p=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col-xs-12 col-sm-12 col-md-12 divT",children:[Object(m.jsx)("div",{className:"f",children:Object(m.jsx)(O.a,{tag:"h1",className:"animate__animated animate__zoomIn animate__slower\t1s mdTag",children:"INSTITUTO"})}),Object(m.jsx)("div",{className:"f",children:Object(m.jsx)(O.a,{tag:"h1",className:"animate__animated animate__zoomIn animate__delay-2s\t2s animate__slower\t1s mdTag",children:"TECNOL\xd3GICO"})}),Object(m.jsx)("div",{className:"f",children:Object(m.jsx)(O.a,{tag:"h1",className:"animate__animated animate__zoomIn animate__delay-4s\t4s animate__slower\t1s mdTag",children:"AYACUCHO"})})]})})})})},x=c(116),E=c(39),h=c(68),u=(c(56),c(127),c(128),c(37)),N=(c(73),c.p+"static/media/logo.9aaf6623.png"),A="",I="",C="",f=function(e){Object(b.a)(c,e);var t=Object(d.a)(c);function c(e){var a;return Object(j.a)(this,c),(a=t.call(this,e)).handleChange=function(e){e.e;var t=e.target;a.setState({form:Object(h.a)(Object(h.a)({},a.state.form),{},Object(E.a)({},t.name,t.value))});var c=t.name,s=t.value;a.setState(Object(E.a)({},c,s)),"ESTUDIANTE"==s?a.setState({title:"DESCARGAR"}):a.setState({title:"ACEPTAR"})},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state);var t=a.state,c=(t.errors,Object(x.a)(t,["errors"])),s=function(e){var t={};return"Seleccione"!=e.typeUser&&null!=e.typeUser||(t.typeUser="Debes seleccionar una opcion",A=e.typeUser),e.user||(t.user="Debes escribir tu nombre de usuario",I=e.user),e.password||(t.password="Debes escribir tu contrase\xf1a",C=e.password),t}(c);if(a.setState({errors:s}),A=c.typeUser,I=c.user,C=c.password,!Object.keys(s).length){"ADMINISTRADOR"==A&&"Shadow"==I&&"acespades"==C?u.a.fire({icon:"success",title:"Correcto",text:"Usuario encontrado"}).then((function(e){e.isConfirmed&&document.getElementById("ingresar").click()})):u.a.fire({icon:"error",title:"Error",text:"no se encontr\xf3 el usuario"})}},a.state={title:"ACEPTAR",errors:{},dataSource:[],form:{}},a}return Object(l.a)(c,[{key:"render",value:function(){var e=this.state.errors,t=this.state;t.type,t.us,t.pass;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-6 divL",children:Object(m.jsx)("img",{src:N,alt:"logo-ita",className:"img-responsive lb divLogo"})}),Object(m.jsx)("div",{className:"animate__animated animate__fadeInBottomRight animate__delay-5s animate__slower\t1s col-xs-12 col-sm-12 col-md-6 form-div",children:Object(m.jsxs)("form",{className:"form-log",onSubmit:this.handleSubmit,children:[Object(m.jsxs)("div",{className:"div-imput",children:[e.typeUser&&Object(m.jsx)("p",{className:"error",children:e.typeUser}),Object(m.jsxs)("select",{name:"typeUser",className:"form-select",onChange:this.handleChange,value:this.state.type,children:[Object(m.jsx)("option",{className:"opt",children:"SELECCIONE"}),Object(m.jsx)("option",{className:"opt",children:"DIRECTOR  ACADEMICO"}),Object(m.jsx)("option",{className:"opt",children:"SECRETARIA"}),Object(m.jsx)("option",{className:"opt",children:"DOCENTE"}),Object(m.jsx)("option",{className:"opt",children:"ESTUDIANTE"}),Object(m.jsx)("option",{className:"opt",children:"ADMINISTRADOR"})]}),Object(m.jsx)("br",{}),e.user&&Object(m.jsx)("p",{className:"error",children:e.user}),Object(m.jsx)("input",{className:"form-control imputC",name:"user",type:"text",autoComplete:"off",placeholder:"INGRESE  SU  NOMBRE  DE  USUARIO",value:this.state.user,onChange:this.handleChange}),Object(m.jsx)("br",{}),e.password&&Object(m.jsx)("p",{className:"error",children:e.password}),Object(m.jsx)("input",{className:"form-control imputC",name:"password",type:"password",placeholder:"INGRESE  SU  CONTRASE\xd1A",autoComplete:"off",value:this.state.password,onChange:this.handleChange})]}),Object(m.jsxs)("div",{className:"div-btn",children:[Object(m.jsx)("button",{className:"btnAc",type:"submit",children:this.state.title}),Object(m.jsxs)(o.b,{to:"/ITA/admin",children:[" ",Object(m.jsx)("button",{id:"ingresar",hidden:!0,children:"Ingresar"})," "]})]})]})})]})})})})}}]),c}(s.a.Component),S=c(113),R=c.n(S),v={particles:{number:{value:80,density:{enable:!0,value_area:1e3}},color:{value:"rgb(149, 148, 170)"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:40,height:40}},opacity:{value:1,random:!0,anim:{enable:!0,speed:1,opacity_min:0,sync:!1}},size:{value:2.3,random:!0,anim:{enable:!1,speed:1,size_min:.3,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:.3,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:250,size:0,duration:2,opacity:0,speed:1},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0};var T=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(R.a,{id:"particles-js",params:v})})},y=(c(373),function(e){Object(b.a)(c,e);var t=Object(d.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(T,{}),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"conte",children:[Object(m.jsx)(p,{}),Object(m.jsx)(f,{})]})})]})}}]),c}(s.a.Component)),g=(c(374),c(115)),D=c.n(g),L=c(114),U=c.n(L),_="";var M=function(e){Object(b.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(j.a)(this,c);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).mostrar=function(e){u.a.fire({title:"\xbfQu\xe9 tipo de estudiante es?",text:"Selecciona una opcion",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Nuevo",cancelButtonText:"Antiguo",allowOutsideClick:!1,allowEscapeKey:!1,allowEnterKey:!1}).then((function(e){e.isConfirmed?(_="SI",document.getElementById("addEstBtn").click()):(_="NO",document.getElementById("addEstBtn").click())}))},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(o.b,{to:"/ITA/",children:Object(m.jsx)("button",{id:"cerrar",hidden:!0,children:"Cerrar"})}),Object(m.jsx)("div",{className:"menu",children:Object(m.jsx)("div",{className:"ico",children:Object(m.jsx)("label",{htmlFor:"btn-menu",className:"iconoMenu",children:Object(m.jsx)(U.a,{style:{color:"#fff",fontSize:50},className:"ic"})})})}),Object(m.jsx)("input",{type:"checkbox",id:"btn-menu"}),Object(m.jsx)("div",{className:"container-menu",children:Object(m.jsxs)("div",{className:"cont-menu",children:[Object(m.jsxs)("nav",{children:[Object(m.jsx)(o.b,{to:"/ITA/admin/addSecretary",children:"Agregar secretaria "}),Object(m.jsx)(o.b,{to:"/ITA/admin/addAcademicDirector",children:"Agregar director academico "}),Object(m.jsx)(o.b,{to:"/ITA/admin/addTeacher",children:"Agregar docente "}),Object(m.jsx)(o.b,{to:"/ITA/admin/addClassroom",children:"Agregar curso "}),Object(m.jsx)(o.b,{onClick:this.mostrar,children:"Agregar estudiante "}),Object(m.jsx)(o.b,{to:"/ITA/admin/addStudent",hidden:!0,children:Object(m.jsx)("button",{id:"addEstBtn",hidden:!0})})]}),Object(m.jsx)("label",{htmlFor:"btn-menu",className:"iconoClose",children:Object(m.jsx)(D.a,{style:{color:"#fff",fontSize:40}})})]})})]})}}]),c}(s.a.Component),G=c.p+"static/media/logoAdmin.a0b1d9e0.svg",w=c.p+"static/media/settings.251ad766.svg";c(376);var P=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"content",children:Object(m.jsxs)("div",{className:"cont",children:[Object(m.jsx)("img",{src:G,className:"logoAdmin"}),Object(m.jsx)("h1",{children:"MODO ADMINISTRADOR"}),Object(m.jsx)("img",{src:w,className:"logoAdmin2"})]})})})},k=function(e){Object(b.a)(c,e);var t=Object(d.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(T,{}),Object(m.jsx)(M,{}),Object(m.jsx)(P,{})]})}}]),c}(s.a.Component),B=(c(377),function(e){return Object(m.jsx)("input",{className:"form-control imputC",name:e.name,type:e.type,autoComplete:"off",placeholder:e.placeholder})}),F=(c(378),function(e){return Object(m.jsx)("button",{className:"btnAc",type:"submit",children:e.title})}),z=(c(50),c(111),function(e){Object(b.a)(c,e);var t=Object(d.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(T,{}),Object(m.jsx)(M,{}),Object(m.jsx)("div",{className:"content-form",children:Object(m.jsxs)("form",{method:"",children:[Object(m.jsx)(B,{name:"idCarnetDir",type:"text",placeholder:"INGRESE EL CARNET DE IDENTIDAD"}),Object(m.jsx)("br",{}),Object(m.jsx)(B,{name:"nombreDir",type:"text",placeholder:"INGRESE EL NOMBRE COMPLETO"}),Object(m.jsx)("br",{}),Object(m.jsx)(B,{name:"apDir",type:"text",placeholder:"INGRESE EL APELLIDO PATERNO"}),Object(m.jsx)("br",{}),Object(m.jsx)(B,{name:"amDir",type:"text",placeholder:"INGRESE EL APELLIDO MATERNO"}),Object(m.jsx)("br",{}),Object(m.jsx)(B,{name:"userDir",type:"text",placeholder:"INGRESE UN NOMBRE DE USUARIO"}),Object(m.jsx)("br",{}),Object(m.jsx)(B,{name:"passDir",type:"text",placeholder:"INGRESE UNA CONTRASE\xd1A"}),Object(m.jsx)("input",{name:"typeUs",type:"hidden",value:"Director academico"}),Object(m.jsx)("br",{}),Object(m.jsx)(F,{title:"ACEPTAR"})]})})]})}}]),c}(s.a.Component)),J=(c(67),["SELECCIONE LA GESTION",1,2,3]),V=["SELECCIONE EL SEMESTRE",1,2,3,4,5,6],Y=["SELECCIONE LA CARRERA","SISTEMAS INFORM\xc1TICOS","MEC\xc1NICA AUTOMOTRIZ","MEC\xc1NICA INDUSTRIAL","ELECTROMEC\xc1NICA","ELECTR\xd3NICA","CONSTRUCCION CIVIL"],H=["ESCOGE UNA CARRERA"],K=function(e){Object(b.a)(c,e);var t=Object(d.a)(c);function c(e){var a;return Object(j.a)(this,c),(a=t.call(this,e)).mostrar=function(e){"SELECCIONE LA CARRERA"==e.target.value?a.setState({vals:H}):"SISTEMAS INFORM\xc1TICOS"==e.target.value?a.setState({vals:J}):a.setState({vals:V})},a.state={carrera:Y,vals:H},a}return Object(l.a)(c,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(T,{}),Object(m.jsx)(M,{}),Object(m.jsx)("div",{className:"content-form",children:Object(m.jsxs)("form",{children:[Object(m.jsx)("select",{name:"tipoCarrera",className:"form-select",onClick:this.mostrar,children:Y.map((function(e){return Object(m.jsx)("option",{className:"opt",children:e})}))}),Object(m.jsx)("br",{}),Object(m.jsx)(B,{name:"idCurso",type:"text",placeholder:"INGRESE EL CODIGO DEL CURSO"}),Object(m.jsx)("br",{}),Object(m.jsx)(B,{name:"nombreCurso",type:"text",placeholder:"INGRESE EL NOMBRE DEL CURSO"}),Object(m.jsx)("br",{}),Object(m.jsxs)("select",{name:"turno",className:"form-select",children:[Object(m.jsx)("option",{className:"opt",children:"SELECCIONE EL TURNO"}),Object(m.jsx)("option",{className:"opt",children:"Ma\xf1ana"}),Object(m.jsx)("option",{className:"opt",children:"Tarde"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)("select",{name:"dictaDoc",className:"form-select",children:[Object(m.jsx)("option",{className:"opt",children:"SELECCIONE DOCENTE"}),Object(m.jsx)("option",{className:"opt",children:"Wendy Navia Chambi"}),Object(m.jsx)("option",{className:"opt",children:"Jhonatan Hinojosa Delgadillo"}),Object(m.jsx)("option",{className:"opt",children:"Freddy Calcina"}),Object(m.jsx)("option",{className:"opt",children:"Roxana Foronda"}),Object(m.jsx)("option",{className:"opt",children:"Victor Paco"}),Object(m.jsx)("option",{className:"opt",children:"Ynclan Santos"}),Object(m.jsx)("option",{className:"opt",children:"Angel Rodriguez"}),Object(m.jsx)("option",{className:"opt",children:"Luis Gutierrez"}),Object(m.jsx)("option",{className:"opt",children:"Patricia Fernandez"})]}),Object(m.jsx)("br",{}),Object(m.jsx)("select",{name:"gestion",className:"form-select",children:this.state.vals.map((function(e){return Object(m.jsx)("option",{className:"opt",children:e})}))}),Object(m.jsx)("br",{}),Object(m.jsx)(F,{title:"ACEPTAR"})]})})]})}}]),c}(s.a.Component),Z=function(e){Object(b.a)(c,e);var t=Object(d.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(T,{}),Object(m.jsx)(M,{}),Object(m.jsx)("div",{className:"content-form",children:Object(m.jsxs)("form",{children:[Object(m.jsx)(B,{name:"idCarnetSec",type:"text",placeholder:"INGRESE EL CARNET DE IDENTIDAD"}),Object(m.jsx)("br",{}),Object(m.jsx)(B,{name:"nombreSec",type:"text",placeholder:"INGRESE EL NOMBRE COMPLETO"}),Object(m.jsx)("br",{}),Object(m.jsx)(B,{name:"apSec",type:"text",placeholder:"INGRESE EL APELLIDO PATERNO"}),Object(m.jsx)("br",{}),Object(m.jsx)(B,{name:"amSec",type:"text",placeholder:"INGRESE EL APELLIDO MATERNO"}),Object(m.jsx)("br",{}),Object(m.jsx)(B,{name:"userSec",type:"text",placeholder:"INGRESE UN NOMBRE DE USUARIO"}),Object(m.jsx)("br",{}),Object(m.jsx)(B,{name:"passSec",type:"text",placeholder:"INGRESE UNA CONTRASE\xd1A"}),Object(m.jsx)("input",{name:"typeUs",type:"hidden",value:"Secretaria"}),Object(m.jsx)("br",{}),Object(m.jsx)(F,{title:"ACEPTAR"})]})})]})}}]),c}(s.a.Component);c(379);var Q=function(e){Object(b.a)(c,e);var t=Object(d.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(T,{}),Object(m.jsx)(M,{}),"SI"==_?Object(m.jsx)("div",{className:"content-form",children:Object(m.jsxs)("form",{children:[Object(m.jsxs)("select",{name:"tipoCarreraEst",className:"form-select",children:[Object(m.jsx)("option",{className:"opt",children:"SELECCIONE LA CARRERA"}),Object(m.jsx)("option",{className:"opt",children:"SISTEMAS INFORM\xc1TICOS"}),Object(m.jsx)("option",{className:"opt",children:"MECANICA AUTOMOTRIZ"}),Object(m.jsx)("option",{className:"opt",children:"ELECTR\xd3NICA"}),Object(m.jsx)("option",{className:"opt",children:"CONSTRUCCION CIVIL"})]}),Object(m.jsx)("br",{}),Object(m.jsx)(B,{name:"carnetEst",type:"text",placeholder:"INGRESE EL CARNET DEL ESTUDIANTE"}),Object(m.jsx)("br",{}),Object(m.jsx)(B,{name:"apEst",type:"text",placeholder:"INGRESE EL APELLIDO PATERNO DEL ESTUDIANTE"}),Object(m.jsx)("br",{}),Object(m.jsx)(B,{name:"amEst",type:"text",placeholder:"INGRESE EL APELLIDO MATERNO DEL ESTUDIANTE"}),Object(m.jsx)("br",{}),Object(m.jsx)(B,{name:"nombreEst",type:"text",placeholder:"INGRESE EL NOMBRE DEL ESTUDIANTE"}),Object(m.jsx)("br",{}),Object(m.jsxs)("select",{name:"turno",className:"form-select",children:[Object(m.jsx)("option",{className:"opt",children:"SELECCIONE EL TURNO"}),Object(m.jsx)("option",{className:"opt",children:"Ma\xf1ana"}),Object(m.jsx)("option",{className:"opt",children:"Tarde"})]}),Object(m.jsx)("br",{}),Object(m.jsx)(B,{name:"userEst",type:"text",placeholder:"INGRESE UN NOMBRE DE USUARIO"}),Object(m.jsx)("br",{}),Object(m.jsx)(B,{name:"passEst",type:"text",placeholder:"INGRESE UNA CONTRASE\xd1A"}),Object(m.jsx)("input",{name:"typeUs",type:"hidden",value:"Estudiante"}),Object(m.jsx)("br",{}),Object(m.jsx)(F,{title:"ACEPTAR"})]})}):"NO"==_?Object(m.jsx)("div",{className:"content-form",children:Object(m.jsxs)("form",{children:[Object(m.jsx)(B,{name:"carnetEst",type:"text",placeholder:"INGRESE EL CARNET DEL ESTUDIANTE"}),Object(m.jsx)("br",{}),Object(m.jsxs)("select",{name:"turno",className:"form-select",children:[Object(m.jsx)("option",{className:"opt",children:"SELECCIONE EL TURNO"}),Object(m.jsx)("option",{className:"opt",children:"Ma\xf1ana"}),Object(m.jsx)("option",{className:"opt",children:"Tarde"})]}),Object(m.jsx)("br",{}),Object(m.jsx)(F,{title:"ACEPTAR"})]})}):void 0]})}}]),c}(s.a.Component),W=function(e){Object(b.a)(c,e);var t=Object(d.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(T,{}),Object(m.jsx)(M,{}),Object(m.jsx)("div",{className:"content-form",children:Object(m.jsxs)("form",{children:[Object(m.jsx)(B,{name:"idCarnetDoc",type:"text",placeholder:"INGRESE EL CARNET DE IDENTIDAD"}),Object(m.jsx)("br",{}),Object(m.jsx)(B,{name:"nombreDoc",type:"text",placeholder:"INGRESE EL NOMBRE COMPLETO"}),Object(m.jsx)("br",{}),Object(m.jsx)(B,{name:"apDoc",type:"text",placeholder:"INGRESE EL APELLIDO PATERNO"}),Object(m.jsx)("br",{}),Object(m.jsx)(B,{name:"amDoc",type:"text",placeholder:"INGRESE EL APELLIDO MATERNO"}),Object(m.jsx)("br",{}),Object(m.jsx)(B,{name:"userDoc",type:"text",placeholder:"INGRESE UN NOMBRE DE USUARIO"}),Object(m.jsx)("br",{}),Object(m.jsx)(B,{name:"passDoc",type:"text",placeholder:"INGRESE UNA CONTRASE\xd1A"}),Object(m.jsx)("input",{name:"typeUs",type:"hidden",value:"Docente"}),Object(m.jsx)("br",{}),Object(m.jsx)(F,{title:"ACEPTAR"})]})})]})}}]),c}(s.a.Component),X=c.p+"static/media/moon.d55c67e9.png",q=(c(380),c(381),c.p+"static/media/astro.5b068ae9.png"),$=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(T,{}),Object(m.jsx)("h1",{className:"perd",children:"\xbfPerdido?"}),Object(m.jsxs)("div",{children:[" ",Object(m.jsx)("img",{src:q,className:"astro"})," "]}),Object(m.jsx)("img",{src:X,className:"moon"})]})};var ee=function(){return Object(m.jsx)(o.a,{children:Object(m.jsxs)(i.c,{children:[Object(m.jsx)(i.a,{exact:!0,path:"/ITA/",component:y}),Object(m.jsx)(i.a,{exact:!0,path:"/ITA/admin",component:k}),Object(m.jsx)(i.a,{exact:!0,path:"/ITA/admin/addAcademicDirector",component:z}),Object(m.jsx)(i.a,{exact:!0,path:"/ITA/admin/addClassroom",component:K}),Object(m.jsx)(i.a,{exact:!0,path:"/ITA/admin/addSecretary",component:Z}),Object(m.jsx)(i.a,{exact:!0,path:"/ITA/admin/addStudent",component:Q}),Object(m.jsx)(i.a,{exact:!0,path:"/ITA/admin/addTeacher",component:W}),Object(m.jsx)(i.a,{component:$})]})})},te=document.getElementById("root");r.a.render(Object(m.jsx)(ee,{}),te)},50:function(e,t,c){},67:function(e,t,c){}},[[383,1,2]]]);
//# sourceMappingURL=main.d369450c.chunk.js.map