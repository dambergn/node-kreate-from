'use strict';

document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let email = document.getElementById("email").value;
  let interestsList = ['computing', 'electronics', 'robotics', 'art', 'emerging-technologies', 'science', 'machining-fabrication', 'woodworking', 'material-science', 'optics-lasers', '3-D-printing', 'gaming', 'control-systems', 'ham-radio-rf-systems', 'machining-fabrication', 'unmanned-vehicles', 'sewing', 'crafting', 'photography', 'communications', 'reverse-engineering', 'hacking-designs', 'other1', 'other2'];
  let interests = [];
  console.log(firstName)
  console.log(lastName)
  console.log(email)
  

  // Processes intrests
  for (let i = 0; i < interestsList.length - 2; i++){
    if(document.getElementById(interestsList[i]).checked === true){
      interests.push(document.getElementById(interestsList[i]).value)
    }
  }
  if(document.getElementById(interestsList[22]).checked === true){
    interests.push(document.getElementById("other1-text").value)
  }
  if(document.getElementById(interestsList[23]).checked === true){
    interests.push(document.getElementById("other2-text").value)
  }
  console.log(interests);


  // Save information
  let saveContent = {firstName:firstName, lastName:lastName, email:email, interests:interests}
  // for (let j = 0; j < interests.length; j++){
  //   saveContent.push(interests[j])
  // }
  // let string = saveContent.toString();
  console.log(JSON.stringify(saveContent))

  fetch('sighnup', {
    url: `${window.location.href}`,
    method: 'POST',
    body: JSON.stringify(saveContent)
  });


  // Clear form
  document.getElementById("first-name").value = ""
  document.getElementById("last-name").value = ""
  document.getElementById("email").value = ""
  for (let k = 0; k < interestsList.length; k++){
    if(document.getElementById(interestsList[k]).checked === true){
      document.getElementById(interestsList[k]).checked = false;
    }
  }
  document.getElementById("other1-text").value = ""
  document.getElementById("other2-text").value = ""
});