import"./modulepreload-polyfill.js";/* empty css        */let o=async()=>{document.getElementById("RefreshBSTableId").click()};const n="pk",c="true",i=!0,s=!0,d="responseHandler",m="queryParams",u=[],I="",h=[{field:"KS-Serial",title:"#",formatter:"jFLocalSerialColumn"},{field:"QrCodeId",title:"QrCode"},{field:"OrderNumber",title:"OrderNumber",filtercontrol:"select"},{title:"OrderDate",field:"OrderDate",filtercontrol:"select"},{title:"DeliveryDate",field:"DeliveryDate",filtercontrol:"select"},{field:"BranchName",title:"Branch Name",filtercontrol:"select"},{field:"ItemName",title:"ItemName",filtercontrol:"select"},{title:"Rate",field:"Rate",filtercontrol:"select"},{title:"Time Span",field:"TimeSpan"}],l={idfield:n,showFooter:c,search:i,searchHighlight:s,responseHandler:d,queryParams:m,data:u,onClickRow:I,columns:h},L=(e,t,a)=>{},f=()=>{var e={};return console.log("bbbbbbbbbb : ",e),e},S=()=>{var e=$("#table");l.onClickRow=L,l.queryParams=f,e.bootstrapTable(l)};let V=()=>{let e=j({inGetKey:"VoucherRef"});(e===null||e=="")&&Swal.fire({icon:"error",title:"Error",text:"VoucherRef not found in URL"})},j=({inGetKey:e})=>{const t=window.location.search;return new URLSearchParams(t).get(e)},T=()=>{y(),V()},y=()=>{let e=localStorage.getItem("FactoryName"),t=document.getElementById("FactoryNameId");t!==null&&(t.innerHTML=e)};const p="/binV4/BranchDC/Show",F={url:p};let b=async()=>{let e=w({inGetKey:"VoucherRef"}),t=`${F.url}/${e}`;return await await(await fetch(t)).json()},w=({inGetKey:e})=>{const t=window.location.search;return new URLSearchParams(t).get(e)},g=({inDataToShow:e})=>{let t=e;H({inpkTextId:t.pk}),D({inVoucherNumberTextId:t.pk}),N({inDescriptionTextId:t.Description}),B({inDateTextId:t.Date}),x({inDCBranchNameTextId:t.BranchName})},H=({inpkTextId:e})=>{let a=document.getElementById("pkTextId");a.innerHTML=e},D=({inVoucherNumberTextId:e})=>{let a=document.getElementById("VoucherNumberTextId");a.innerHTML=e},N=({inDescriptionTextId:e})=>{let a=document.getElementById("DescriptionTextId");a.innerHTML=e},B=({inDateTextId:e})=>{let a=document.getElementById("DateTextId");a.innerHTML=e},x=({inDCBranchNameTextId:e})=>{let a=document.getElementById("DCBranchNameTextId");a.innerHTML=e},R=async()=>{let e=await b();Object.keys(e).length===0&&Swal.fire({icon:"error",title:"Error",text:"No QrCodes found in this voucher"}),e!==null&&e&&g({inDataToShow:e})};const C="/Custom/Clients/Laundry/Factory/Inward/Scan/QrCode/RowData",k={url:C};let v=async()=>{let e=E({inGetKey:"VoucherRef"}),t=localStorage.getItem("FactoryName"),a=`${k.url}/${e}/${t}`;return await await(await fetch(a)).json()},E=({inGetKey:e})=>{const t=window.location.search;return new URLSearchParams(t).get(e)},U=({inDataToShow:e})=>{let t=e;P();var a=$("#table");a.bootstrapTable("load",t)},P=()=>{let e=document.getElementById("SpinnerId");e.style.display="none"},q=async()=>{let e=await v();U({inDataToShow:e})},Q=()=>{R(),q()},M=()=>{let e=document.getElementById("RefreshBSTableId");e!==null&&e.addEventListener("click",Q)},O=()=>{M()};const K=()=>{S(),T(),O()},G=()=>{K(),o().then()};G();
