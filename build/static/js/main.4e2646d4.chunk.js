(this.webpackJsonpreactinterface=this.webpackJsonpreactinterface||[]).push([[0],{14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),r=s(8),c=s.n(r),o=(s(14),s(9)),i=s(4),m=s(2),l=s(0),d=function(e){var t=e.toggle,s=e.sortBy,n=e.onSortByChange,a=e.orderBy,r=e.onOrderByChange;return t?Object(l.jsx)("div",{className:"origin-top-right absolute right-0 mt-2 w-56\r rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5",children:Object(l.jsxs)("div",{className:"py-1",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu",children:[Object(l.jsxs)("div",{onClick:function(){return n("petName")},className:"px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer",role:"menuitem",children:["Pet Name ","petName"===s&&Object(l.jsx)(m.d,{})]}),Object(l.jsxs)("div",{onClick:function(){return n("ownerName")},className:"px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer",role:"menuitem",children:["Owner Name ","ownerName"===s&&Object(l.jsx)(m.d,{})]}),Object(l.jsxs)("div",{onClick:function(){return n("aptDate")},className:"px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer",role:"menuitem",children:["Date ","aptDate"===s&&Object(l.jsx)(m.d,{})]}),Object(l.jsxs)("div",{onClick:function(){return r("asc")},className:"px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer border-gray-1 border-t-2",role:"menuitem",children:["Asc ","asc"===a&&Object(l.jsx)(m.d,{})]}),Object(l.jsxs)("div",{onClick:function(){return r("desc")},className:"px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer",role:"menuitem",children:["Desc ","desc"===a&&Object(l.jsx)(m.d,{})]})]})}):null},u=function(e){var t=e.query,s=e.onQueryChange,a=e.sortBy,r=e.onSortByChange,c=e.orderBy,o=e.onOrderByChange,u=Object(n.useState)(!1),b=Object(i.a)(u,2),j=b[0],x=b[1];return Object(l.jsx)("div",{className:"py-5",children:Object(l.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[Object(l.jsxs)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:[Object(l.jsx)(m.e,{}),Object(l.jsx)("label",{htmlFor:"query",className:"sr-only"})]}),Object(l.jsx)("input",{type:"text",name:"query",id:"query",value:t,onChange:function(e){s(e.target.value)},className:"pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300",placeholder:"Search"}),Object(l.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center",children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("button",{type:"button",onClick:function(){return x(!j)},className:"justify-center px-4 py-2 bg-blue-400 border-2 border-blue-400 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center",id:"options-menu","aria-haspopup":"true","aria-expanded":"true",children:["Sort By ",Object(l.jsx)(m.c,{className:"ml-2"})]}),Object(l.jsx)(d,{toggle:j,sortBy:a,onSortByChange:function(e){return r(e)},orderBy:c,onOrderByChange:function(e){return o(e)}})]})})]})})},b=s(3),j=function(e){var t=e.onSendAppointment,s=e.lastId,a={ownerName:"",petName:"",aptDate:"",aptTime:"",aptNotes:""};var r=Object(n.useState)(!1),c=Object(i.a)(r,2),o=c[0],d=c[1],u=Object(n.useState)(a),j=Object(i.a)(u,2),x=j[0],p=j[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:function(){return d(!o)},className:"bg-blue-400 text-white px-2 py-3 w-full text-left rounded-t-md",children:Object(l.jsxs)("div",{children:[Object(l.jsx)(m.b,{className:"inline-block align-text-top"}),"  Add Appointment"]})}),o&&Object(l.jsxs)("div",{className:"border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4",children:[Object(l.jsxs)("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5",children:[Object(l.jsx)("label",{htmlFor:"ownerName",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Owner Name"}),Object(l.jsx)("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:Object(l.jsx)("input",{type:"text",name:"ownerName",id:"ownerName",onChange:function(e){p(Object(b.a)(Object(b.a)({},x),{},{ownerName:e.target.value}))},value:x.ownerName,className:"max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"})})]}),Object(l.jsxs)("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5",children:[Object(l.jsx)("label",{htmlFor:"petName",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Pet Name"}),Object(l.jsx)("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:Object(l.jsx)("input",{type:"text",name:"petName",id:"petName",onChange:function(e){p(Object(b.a)(Object(b.a)({},x),{},{petName:e.target.value}))},value:x.petName,className:"max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"})})]}),Object(l.jsxs)("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5",children:[Object(l.jsx)("label",{htmlFor:"aptDate",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Apt Date"}),Object(l.jsx)("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:Object(l.jsx)("input",{type:"date",name:"aptDate",id:"aptDate",onChange:function(e){p(Object(b.a)(Object(b.a)({},x),{},{aptDate:e.target.value}))},value:x.aptDate,className:"max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"})})]}),Object(l.jsxs)("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5",children:[Object(l.jsx)("label",{htmlFor:"aptTime",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Apt Time"}),Object(l.jsx)("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:Object(l.jsx)("input",{type:"time",name:"aptTime",id:"aptTime",onChange:function(e){p(Object(b.a)(Object(b.a)({},x),{},{aptTime:e.target.value}))},value:x.aptTime,className:"max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"})})]}),Object(l.jsxs)("div",{className:"sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5",children:[Object(l.jsx)("label",{htmlFor:"aptNotes",className:"block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2",children:"Appointment Notes"}),Object(l.jsx)("div",{className:"mt-1 sm:mt-0 sm:col-span-2",children:Object(l.jsx)("textarea",{id:"aptNotes",name:"aptNotes",rows:"3",onChange:function(e){p(Object(b.a)(Object(b.a)({},x),{},{aptNotes:e.target.value}))},value:x.aptNote,className:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md",placeholder:"Detailed comments about the condition"})})]}),Object(l.jsx)("div",{className:"pt-5",children:Object(l.jsx)("div",{className:"flex justify-end",children:Object(l.jsx)("button",{onClick:function(){var e={id:s+1,ownerName:x.ownerName,petName:x.petName,aptDate:x.aptDate+" "+x.aptTime,aptNotes:x.aptNotes};t(e),p(a),d(!o)},type:"submit",className:"ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400",children:"Submit"})})})]})]})},x=function(e){var t=e.appointment,s=e.onDeleteAppointment;return Object(l.jsxs)("li",{className:"px-3 py-3 flex items-start",children:[Object(l.jsx)("button",{type:"button",onClick:function(){return s(t.id)},className:"p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:Object(l.jsx)(m.f,{})}),Object(l.jsxs)("div",{className:"flex-grow",children:[Object(l.jsxs)("div",{className:"flex items-center",children:[Object(l.jsx)("span",{className:"flex-none font-medium text-2xl text-blue-500",children:t.petName}),Object(l.jsx)("span",{className:"flex-grow text-right",children:t.aptDate})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{className:"font-bold text-blue-500",children:"Owner:"})," ",t.ownerName]}),Object(l.jsx)("div",{className:"leading-tight",children:t.aptNotes})]})]})};var p=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),s=t[0],a=t[1],r=Object(n.useState)(""),c=Object(i.a)(r,2),d=c[0],b=c[1],p=Object(n.useState)("petName"),g=Object(i.a)(p,2),f=g[0],h=g[1],O=Object(n.useState)("asc"),N=Object(i.a)(O,2),y=N[0],v=N[1],w=s.filter((function(e){return e.petName.toLowerCase().includes(d.toLowerCase())||e.ownerName.toLowerCase().includes(d.toLowerCase())||e.aptNotes.toLowerCase().includes(d.toLowerCase())})).sort((function(e,t){var s="asc"===y?1:-1;return e[f].toLowerCase()<t[f].toLowerCase()?-1*s:1*s})),C=Object(n.useCallback)((function(){fetch("./data.json").then((function(e){return e.json()})).then((function(e){a(e)}))}),[]);return Object(n.useEffect)((function(){C()}),[C]),Object(l.jsxs)("div",{className:"Ap container mx-auto mt-3 font-thin",children:[Object(l.jsxs)("h1",{className:"text-5xl",children:[Object(l.jsx)(m.a,{className:"inline-block text-red-400 align-top"}),"Your Appointment"]}),Object(l.jsx)(j,{onSendAppointment:function(e){return a([].concat(Object(o.a)(s),[e]))},lastId:s.reduce((function(e,t){return Number(t.id)>e?Number(t.id):e}),0)}),Object(l.jsx)(u,{query:d,onQueryChange:function(e){return b(e)},orderBy:y,onOrderByChange:function(e){return v(e)},sortBy:f,onSortByChange:function(e){return h(e)}}),Object(l.jsx)("ul",{className:"divide-y divide-gray-400",children:w.map((function(e){return Object(l.jsx)(x,{appointment:e,onDeleteAppointment:function(e){return a(s.filter((function(t){return t.id!==e})))}},e.id)}))})]})};c.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4e2646d4.chunk.js.map