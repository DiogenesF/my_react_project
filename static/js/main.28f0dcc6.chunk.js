(this.webpackJsonpownproject=this.webpackJsonpownproject||[]).push([[0],{44:function(e,t,a){e.exports=a.p+"static/media/computer.ff2eb920.jpeg"},47:function(e,t,a){e.exports=a(87)},52:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),c=a.n(r),o=(a(52),a(45)),s=a(18),i=a(12),m=a(13),u=a(15),p=a(14),d=a(6),h=a(16),E=a(19),g=a(23),f=a(100),b=a(88),y=a(89),v=a(90),N=a(91),w=a(92),k=a(93),O=a(94),T=a(28).default,x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleLogin=function(e){e.preventDefault(),T.get("http://localhost:3001/acc").then((function(e){var t=e.data.filter((function(e){return e.email===a.state.email&&e.password===a.state.password}));console.log(t.length),1===t.length?alert("Logged in"):alert("The information you entered didn't match any account in our database")}))},a.handleChange=function(e){a.setState(Object(g.a)({},a.state,Object(E.a)({},e.target.id,e.target.value)))},a.state={email:"",password:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(f.a,{isOpen:this.props.isModalOpen,toggle:function(){return e.props.toggleModal()}},l.a.createElement(b.a,{toggle:function(){return e.props.toggleModal()}},"Login"),l.a.createElement(y.a,null,l.a.createElement(v.a,{onSubmit:this.handleLogin},l.a.createElement(N.a,null,l.a.createElement(w.a,{htmlFor:"email"},"Email"),l.a.createElement(k.a,{onChange:this.handleChange,type:"email",id:"email",name:"email"})),l.a.createElement(N.a,null,l.a.createElement(w.a,{htmlFor:"password"},"Password"),l.a.createElement(k.a,{onChange:this.handleChange,type:"password",id:"password",name:"password"})),l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(O.a,{type:"submit",value:"submit",color:"primary"},"Login")))))}}]),t}(l.a.Component),j=a(95),C=a(96),S=a(97),M=a(98),P=a(99),Y=a(8),F=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).toggleNav=a.toggleNav.bind(Object(d.a)(a)),a.toggleModal=a.toggleModal.bind(Object(d.a)(a)),a.state={isNavOpen:!1,isModalOpen:!1},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(j.a,{dark:!0,expand:"md",className:"fixed-top"},l.a.createElement("div",{className:"container"},l.a.createElement(C.a,{onClick:this.toggleNav}),l.a.createElement(S.a,{isOpen:this.state.isNavOpen,navbar:!0},l.a.createElement(M.a,{navbar:!0},l.a.createElement(P.a,null,l.a.createElement(Y.c,{className:"nav-link",to:"/"},l.a.createElement("span",{className:"fa fa-home fa-lg"}),"Home")),l.a.createElement(P.a,null,l.a.createElement(Y.c,{className:"nav-link",to:"/game"},l.a.createElement("span",{className:"fa fa-info fa-lg"}),"Games")),l.a.createElement(P.a,null,l.a.createElement(Y.c,{className:"nav-link",to:"/signup"},l.a.createElement("span",{className:"fa fa-list fa-lg"}),"Sign Up"))),l.a.createElement(M.a,{className:"ml-auto",navbar:!0},l.a.createElement(P.a,null,l.a.createElement(O.a,{outline:!0,onClick:this.toggleModal},l.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")))))),l.a.createElement(x,{isModalOpen:this.state.isModalOpen,toggleModal:this.toggleModal}))}}]),t}(l.a.Component);var U=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-3 col-sm-2"},l.a.createElement("h5",{style:{color:"floralwhite"}},"Links"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement(Y.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(Y.b,{to:"/game"},"Games")),l.a.createElement("li",null,l.a.createElement(Y.b,{to:"/signup"},"Sign Up")))),l.a.createElement("div",{className:"col-4 offset-3 col-sm-4"},l.a.createElement("h5",{style:{color:"floralwhite"}},"These are my social networks"),l.a.createElement("div",null,l.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"https://www.facebook.com/Doesntexis"},l.a.createElement("i",{className:"fa fa-facebook"})),l.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"https://www.linkedin.com/in/diogenes-fiorezi"},l.a.createElement("i",{className:"fa fa-linkedin"})),l.a.createElement("a",{className:"btn btn-social-icon btn-instagram",href:"https://www.instagram.com/diiogeneesf/"},l.a.createElement("i",{className:"fa fa-instagram"})),l.a.createElement("a",{className:"btn btn-social-icon btn-github",href:"https://github.com/DiogenesF"},l.a.createElement("i",{className:"fa fa-github"})),l.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"mailto:diogenesfiorezi@hotmail.com"},l.a.createElement("i",{className:"fa fa-envelope-o"}))))),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-auto"},l.a.createElement("p",{style:{color:"floralwhite"}},"\xa9 Diogenes Fiorezi 2019")))))},X=a(44),R=a.n(X);var B=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{background:"url("+R.a+") no-repeat center center fixed",backgroundSize:"cover",height:"100%",width:"100%"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 text-center"},l.a.createElement("h3",{style:{marginTop:"80px",color:"white"}},l.a.createElement("strong",null,"Be welcome to my webpage!!")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 mt-4 text-center"},l.a.createElement("img",{src:"assets/images/my_image.png",alt:"me",height:"300px"}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 mt-4"},l.a.createElement("h5",{style:{color:"lightgray"}},l.a.createElement("strong",null,"This is a website that I created using React just to practice and test my knowledge using this library. I didn't want to spend too much time with the design so I decided to keep it as simple as possible. Btw I used",l.a.createElement("a",{style:{color:"gray"},href:"https://reactstrap.github.io/"}," ","reactstrap")," ","and a little inline CSS."),l.a.createElement("strong",null,l.a.createElement("br",null),"A few details of the implementation: The state of the Rock-Paper-Scissors game won't change if you move through the routes, but in the Tic-Tac-Toe game it will."),l.a.createElement("br",null),l.a.createElement("strong",null,"Up until now I used the following features: "),l.a.createElement("ul",{style:{marginLeft:"50px"}},l.a.createElement("li",null,l.a.createElement("strong",null,"React-Router-Dom")),l.a.createElement("li",null,l.a.createElement("strong",null,"React-Hooks")),l.a.createElement("li",null,l.a.createElement("strong",null,"Reactstrap")))))))))},A=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{backgroundColor:"lightCyan",height:"100%",width:"100%"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{style:{marginTop:"80px"},className:"col-12 text-center"},l.a.createElement("h3",null,"Here you can choose a game to play, ok ?"),l.a.createElement("h4",{style:{marginTop:"40px"}},"You have 2 options!!"))),l.a.createElement("div",{style:{marginTop:"30px"},className:"row"},l.a.createElement("div",{className:"col-12 text-center"},l.a.createElement(Y.b,{to:"/TicTacToe",className:"btn btn-danger"},"Tic-Tac-Toe"),l.a.createElement("h6",{style:{margin:"20px"}},"Or"),l.a.createElement(Y.b,{to:"/RPS",className:"btn btn-success mb-5"},"Rock-Paper-Scissors")))))}}]),t}(l.a.Component);var D=function(){return l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h1",null,"Oooops.."),l.a.createElement("h2",null,"The page you're trying to access doesn't exist!"),l.a.createElement("h3",{style:{color:"red"}},":("))};function I(e){var t=e.plays,a=e.toggle,n=e.resetPlays;if(!1===a)return null;if(0!==t.length){var r=t.map((function(e){return"tie"===e.winner?l.a.createElement("div",{key:e.play},l.a.createElement("p",null,"Play: ",e.play,". Opponent: ",e.opp,". You: ",e.you,". Winner: ",e.winner)):l.a.createElement("div",{key:e.play,style:{color:"you"===e.winner?"green":"red"}},l.a.createElement("p",null,"Play: ",e.play,". Opponent: ",e.opp,". You: ",e.you,". Winner: ",e.winner))}));return l.a.createElement("div",{style:{marginTop:"20px"}},l.a.createElement("h3",null,"Score: "),r,l.a.createElement("button",{onClick:function(){return n()},className:"btn btn-dark"},"Reset Score"))}return l.a.createElement("div",{style:{marginTop:"30px"}},l.a.createElement("h5",null,"No games have been played yet!"))}var L=function(e){return l.a.createElement("div",{style:{marginTop:"50px",marginBottom:"90px"}},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return e.handleToggle()},className:"btn btn-dark"}," ",l.a.createElement("i",{className:"fa fa-clipboard"}),"Show/Hide Score"))),l.a.createElement(I,{plays:e.plays,toggle:e.toggle,resetPlays:e.resetPlays}))},W=function(e){var t=e.plays,a=e.check;if(0!==t.length){var n=t.length-1,r=a(t[n].opp,t[n].you);if(""===t[n].you)return l.a.createElement("div",null,l.a.createElement("h5",null,"An error occurred! We are sorry! Please try again!!"));if("you"===r)return l.a.createElement("div",{style:{marginTop:"30px"}},l.a.createElement("h6",null,"Your opponent chose ",t[n].opp),l.a.createElement("h3",{style:{color:"green"}},"You won!! Congratz :D"));if("opp"===r)return l.a.createElement("div",{style:{marginTop:"30px"}},l.a.createElement("h6",null,"Your opponent chose ",t[n].opp),l.a.createElement("h3",{style:{color:"red"}},"You lost!! Better luck next time :("));if("tie"===r)return l.a.createElement("div",{style:{marginTop:"30px"}},l.a.createElement("h6",null,"Your opponent chose ",t[n].opp),l.a.createElement("h3",null,"It was a tie! Good game!"))}return null},z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).CheckWinner=function(e,t){return"rock"===e?"rock"===t?"tie":"paper"===t?"you":"opp":"paper"===e?"paper"===t?"tie":"scissors"===t?"you":"opp":"scissors"===t?"tie":"rock"===t?"you":"opp"},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=function(t){if(""!==t.target.id){var a=Math.floor(3*Math.random());a=0===a?"rock":1===a?"paper":"scissors";var n=e.CheckWinner(a,t.target.id),l={play:e.props.plays.length+1,you:t.target.id,opp:a,winner:n};e.props.addPlay(l)}};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{marginTop:"100px"},className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 text-center"},l.a.createElement("h4",null,"Make your choice and we will randomly generate a choice for your opponent!!"))),l.a.createElement("div",{style:{marginTop:"40px"},className:"row text-center"},l.a.createElement("div",{className:"col-12 justify-content-center"},l.a.createElement("button",{onClick:t,id:"rock",className:"btn btn-primary"}," ",l.a.createElement("i",{className:"fa fa-hand-rock-o"})," Rock"),l.a.createElement("button",{onClick:t,id:"paper",className:"btn btn-danger"}," ",l.a.createElement("i",{className:"fa fa-hand-paper-o"})," Paper"),l.a.createElement("button",{onClick:t,id:"scissors",className:"btn btn-success"}," ",l.a.createElement("i",{className:"fa fa-hand-scissors-o"})," Scissors"))),l.a.createElement("div",{className:"row text-center"},l.a.createElement("div",{className:"col-12 justify-content-center"},l.a.createElement(W,{plays:this.props.plays,check:this.CheckWinner}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 text-center"},l.a.createElement(L,{plays:this.props.plays,toggle:this.props.toggle,handleToggle:this.props.handleToggle,resetPlays:this.props.resetPlays})))))}}]),t}(l.a.Component);var H=function(e){var t=e.didUserChoose,a=e.handleUserChoice,n=e.isUserX,r=function(e){a(e.target.value)};return!1===t?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h4",null,"What do you wanna play with ?")),l.a.createElement("div",{style:{marginBottom:"20px"}},l.a.createElement("button",{onClick:r,style:{margin:"10px"},value:"O",className:"btn btn-primary"},"O"),"Or",l.a.createElement("button",{onClick:r,style:{margin:"10px"},value:"X",className:"btn btn-danger"},"X")))):l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h5",null,"We will automatically generate your opponent's plays!!")),l.a.createElement("div",{style:{marginTop:"40px",marginBottom:"20px"}},l.a.createElement("h4",null,"You are: ",n?"X":"O"),l.a.createElement("h6",null,"Just click in a square to make your move")))};a(82);function G(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(s.a)(t[a],3),l=n[0],r=n[1],c=n[2];if(e[l]&&e[l]===e[r]&&e[l]===e[c])return e[l]}return null}function J(e){var t=e.winner,a=e.isUserX,n=e.finished;return null===t?n?l.a.createElement("div",{className:"text-center",style:{marginTop:"20px"}},l.a.createElement("h4",null,"It was a tie!! Good game!")):null:t===(a?"X":"O")?l.a.createElement("div",{className:"text-center",style:{marginTop:"20px"}},l.a.createElement("h4",{style:{color:"green"}},"Congratz!! You won :D")):l.a.createElement("div",{className:"text-center",style:{marginTop:"20px"}},l.a.createElement("h4",{style:{color:"red"}},"Unfortunately you lost :("))}var q=function(){var e=Object(n.useState)(Array(9).fill(null)),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),o=Object(s.a)(c,2),i=o[0],m=o[1],u=Object(n.useState)(!1),p=Object(s.a)(u,2),d=p[0],h=p[1],E=Object(n.useState)(!1),g=Object(s.a)(E,2),f=g[0],b=g[1],y=Object(n.useState)(null),v=Object(s.a)(y,2),N=v[0],w=v[1],k=function(e){if(null!==a[e.target.id])return alert("You can only select empty spots!!"),null;var t=G(a);if(null!==t)return b(!0),w(t),null;if(!1===i)return null;if(!0===f)return null;for(var n,l,c=0,o=0;o<a.length;o++)null===a[o]&&c++;if(0===c){var s=G(a);return w(s),b(!0),null}if(1===c){var m=a.slice();m[e.target.id]=d?"X":"O",r(m);var u=G(m);return null!==u?(w(u),null):(b(!0),null)}if(d){(l=a.slice())[e.target.id]="X",r(l);var p=G(l);if(null!==p)return b(!0),w(p),null;do{n=Math.floor(9*Math.random())}while(null!==l[n]);l[n]=d?"O":"X"}else{(l=a.slice())[e.target.id]="O",r(l);var h=G(l);if(null!==h)return b(!0),w(h),null;do{n=Math.floor(9*Math.random())}while(null!==l[n]);l[n]=d?"O":"X"}r(l);for(var E=0,g=0;g<l.length;g++)null===l[g]&&E++;if(0===E){var y=G(l);return w(y),b(!0),null}var v=G(l);return null!==v?(b(!0),w(v),null):void 0};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{marginTop:"100px"},className:"container"},l.a.createElement("div",{className:"row text-center"},l.a.createElement("div",{className:"col-12"},l.a.createElement(H,{didUserChoose:i,handleUserChoice:function(e){h("X"===e),m(!0)},isUserX:d}))),l.a.createElement("table",{style:{margin:"0px auto"}},l.a.createElement("tbody",null,l.a.createElement("button",{onClick:k,id:"0",className:"white TTTbtn"},a[0]),l.a.createElement("button",{onClick:k,id:"1",className:"white TTTbtn"},a[1]),l.a.createElement("button",{onClick:k,id:"2",className:"white TTTbtn"},a[2])),l.a.createElement("tbody",null,l.a.createElement("button",{onClick:k,id:"3",className:"white TTTbtn"},a[3]),l.a.createElement("button",{onClick:k,id:"4",className:"white TTTbtn"},a[4]),l.a.createElement("button",{onClick:k,id:"5",className:"white TTTbtn"},a[5])),l.a.createElement("tbody",null,l.a.createElement("button",{onClick:k,id:"6",className:"white TTTbtn"},a[6]),l.a.createElement("button",{onClick:k,id:"7",className:"white TTTbtn"},a[7]),l.a.createElement("button",{onClick:k,id:"8",className:"white TTTbtn"},a[8]))),l.a.createElement(J,{winner:N,isUserX:d,finished:f}),l.a.createElement("div",{className:"text-center",style:{marginBottom:"100px",marginTop:"50px"}},l.a.createElement("button",{onClick:function(){var e=a.slice().fill(null);r(e),m(!1),h(!1),b(!1),w(null)},className:"btn btn-dark"},"Start Again"))))},_=a(28).default,K=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",email:"",password:"",confirm:""},a.handleSubmit=function(e){e.preventDefault();var t=!1;a.state.password!==a.state.confirm?alert("Your passwords didn't match!"):_.get("http://localhost:3001/acc").then((function(e){0===e.data.filter((function(e){return e.email===a.state.email})).length&&(t=!0),t?_({method:"post",url:"http://localhost:3001/acc",data:{name:a.state.name,email:a.state.email,password:a.state.password}}).then((function(e){alert("Your account was succesfully created"),a.setState({name:"",email:"",password:"",confirm:""})})):alert("This email is already registered!!")}))},a.handleChange=function(e){a.setState(Object(g.a)({},a.state,Object(E.a)({},e.target.id,e.target.value)))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{backgroundColor:"lightCyan",padding:"1px"}},l.a.createElement("div",{style:{marginTop:"100px"},className:"container"},l.a.createElement("div",{style:{padding:"0px 50px 0px 50px"},className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("h5",null,"By creating an account here, you will be able to keep your own to-do list and access it anytime, and it's only available to you :D")),l.a.createElement("div",{className:"col-md-8 col-10"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"name"},"Your name"),l.a.createElement("input",{value:this.state.name,onChange:this.handleChange,type:"name",className:"form-control",id:"name",placeholder:"Your name..."})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Your email"),l.a.createElement("input",{value:this.state.email,onChange:this.handleChange,type:"email",className:"form-control",id:"email",placeholder:"Your email..."})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{value:this.state.password,onChange:this.handleChange,type:"password",className:"form-control",id:"password",placeholder:"Your password..."})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"confirm"},"Confirm"),l.a.createElement("input",{value:this.state.confirm,onChange:this.handleChange,type:"password",className:"form-control",id:"confirm",placeholder:"Confirm password..."})),l.a.createElement("button",{style:{marginBottom:"40px"},type:"submit",className:"col-5 col-md-3 offset-4 btn btn-primary text-center"},"Sign Up"))))))}}]),t}(l.a.Component),Q=a(20);var V=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),i=Object(s.a)(c,2),m=i[0],u=i[1],p=function(e){var t=[].concat(Object(o.a)(a),[e]);r(t)},d=function(){u(!m)},h=function(){r([])};return l.a.createElement(l.a.Fragment,null,l.a.createElement(F,null),l.a.createElement(Q.d,null,l.a.createElement(Q.b,{exact:!0,path:"/",component:B}),l.a.createElement(Q.b,{exact:!0,path:"/game",component:A}),l.a.createElement(Q.b,{exact:!0,path:"/notfound",component:D}),l.a.createElement(Q.b,{exact:!0,path:"/RPS",component:function(){return l.a.createElement(z,{plays:a,addPlay:p,toggle:m,handleToggle:d,resetPlays:h})}}),l.a.createElement(Q.b,{exact:!0,path:"/signup",component:K}),l.a.createElement(Q.b,{exact:!0,path:"/TicTacToe",component:q}),l.a.createElement(Q.a,{to:"/notfound"})),l.a.createElement(U,null))};a(83);var Z=function(){return l.a.createElement(Y.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(V,null)))};a(84),a(85),a(86);c.a.render(l.a.createElement(Z,null),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.28f0dcc6.chunk.js.map