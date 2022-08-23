function checkBoxFn() {
  let otherCheck = document.getElementById("otherCheck");
  let textArea = document.getElementById("textArea");
  if (otherCheck.checked === true) {
    textArea.style.display = "block";
  } else {
    textArea.style.display = "none";
  }
}
let checkArray = [];

$(".skillCheck").click(function () {
  var checkvalue = $(this).val();
  
  checkArray.push(checkvalue);
  console.log(checkArray);
});
// set_description
const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener("click", async function () {
  console.log('click');
  const form = new FormData();
  const url = `${HOST_URL_EID_DAEMON}/accounts/set_description`;

  form.append("email", "200@gmail.com");
  form.append("description", `{\"hhhhhhh\":[${checkArray}]}`);

  await setDescription(url, form);
});

async function setDescription(url, data) {
  try {
    const res = await axios.post(url, data);
    console.log(res);

  } catch (error) {
    console.error(error);
  }
}