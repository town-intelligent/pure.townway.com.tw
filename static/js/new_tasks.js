const doneBtn = document.getElementById('doneBtn');
doneBtn.addEventListener("click", function () {
  const form = new FormData();
  const uuid = "41515037";
  const email = "400@gmail.com";
  const type = "1";
  const name = "test001";
  const overview = "overview123";
  const cover = `${TASK_COVER}`;
  form.append("uuid", uuid);
  form.append("email", email);
  form.append("type", type);
  form.append("name", name);
  form.append("overview", overview);
  form.append("cover", cover);

  let settings = {
    "url": `${HOST_URL_TPLANET_DAEMON}/tasks/new`,
    "method": "POST",
    "timeout": 0,
    "processData": false,
    "mimeType": "multipart/form-data",
    "contentType": false,
    "data": form
  };

  $.ajax(settings).done(function (res) {
    console.log(res);
  });
});