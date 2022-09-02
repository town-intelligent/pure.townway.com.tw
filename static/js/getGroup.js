const form = new FormData();
const userEmail = getLocalStorage('email');
const dataJason = {};
form.append("email", userEmail);

let settings = {
  "url": `${HOST_URL_EID_DAEMON}/accounts/get_group`,
  "method": "POST",
  "timeout": 0,
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
  "data": form
};

$.ajax(settings).done(async function (res) {
  const obj = JSON.parse(res);
  await getGroup(obj)
});

function getGroup(data){
  const Dropdown = document.getElementById('dropdown');
  if(data.group === '300'){
    Dropdown.innerHTML = dropdown();
  }else if(data.group === '201'){
    Dropdown.innerHTML=`
    ${dropdown()}
    <a class="dropdown-item d-flex align-items-center" href="#">
      <img src="/static/imgs/cooperate.svg" alt="" width="30" height="30" class="d-inline-block align-middle">
      <span class="pl-2">永續合作</span>
    </a>
    <a class="dropdown-item d-flex align-items-center" href="#">
      <img src="/static/imgs/groups.svg" alt="" width="30" height="30" class="d-inline-block align-middle">
      <span class="pl-2">志工專區</span>
    </a>
    `
  }
}

function dropdown () {
  return `<a class="dropdown-item d-flex align-items-center" href="/backend/edit-info.html">
    <img src="/static/imgs/personal_info.svg" alt="" width="30" height="30" class="d-inline-block align-middle">
    <span class="pl-2">基本資料</span>
  </a>
  <a class="dropdown-item d-flex align-items-center" href="/eid.html">
    <img src="/static/imgs/eID.svg" alt="" width="30" height="30" class="d-inline-block align-middle">
    <span class="pl-2">數位身分證</span>
  </a>`
}