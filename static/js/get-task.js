const uuid = "01867595";
let settings = {
  "url": `${HOST_URL_TPLANET_DAEMON}/tasks/get/${uuid}`,
  "method": "GET",
  "timeout": 0,
  "processData": false,
  "mimeType": "multipart/form-data",
  "contentType": false,
};

$.ajax(settings).done(async function (res) {
  const obj = JSON.parse(res);
  await renderTask(obj);
});

function renderTask(taskData){
  const cover = document.getElementById('cover');
  const taskName = document.getElementById('taskName');
  const taskContent = document.getElementById('taskContent');
  const coverContent = `<img class="img-fluid" src=${taskData.thumbnail} alt="">`
  cover.innerHTML = coverContent;
  taskName.textContent = taskData.name;
  taskContent.textContent = taskData.content;
}
