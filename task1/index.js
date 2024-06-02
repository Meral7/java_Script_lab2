let username

do
  { 
    username = prompt("Enter Your Name")
    document.write("welcome dear guest ")
    document.write(username)
    document.write('<br></br>' )
  }
  while(!(/^[A-Za-z]{2,}$/.test(username)))
let phoneNumber
do{
phoneNumber = prompt("Enter Your Phone")
document.write("Your telephone is ")
document.write(phoneNumber)
document.write('<br></br>' )
}
while(!(/^[0-9]{8}$/.test(phoneNumber)))
    let MobilePhone
do {
    MobilePhone = prompt("Enter Your Mobile Phone")
    document.write("Your mobile number is ")
    document.write(MobilePhone)
    document.write('<br></br>' )
}
while((/^[010|011|012][0-9]{8}$/.test(phoneNumber)))
let email
do {
  email = prompt("Enter Your Email")
  document.write("Your email address is ")
  document.write(email)
  console.log(email)
}
while((/^[A-Za-z]{3,}[@][0-9]{3}[.com]{$/.test(email)))
