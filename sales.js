var runningTotal = 0.0;

function addItem()
{
  var newItem;
  newItem = document.getElementById("price").value;
   if (isNaN(newItem)){
      alert("Must enter a number.");}
  else {


  newItem = Number(newItem);
  runningTotal += newItem;
  var dollars;
  dollars = asCurrency(runningTotal);
  document.getElementById("subtotal").innerHTML=dollars;
  document.getElementById("price").value = "";

  setCookie("preTax", runningTotal, 10);
}
}

//takes a number and gives a string with the number displayed as USD currency
function asCurrency(val)
{
  return "$" + val.toFixed(2);
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function calculateReceipt(){
    var  receiptSubtotal = getCookie("preTax");

    receiptSubtotal = Number(receiptSubtotal);
    var receiptTax = receiptSubtotal * 0.075;
    var receiptTotal = receiptTax + receiptSubtotal;
    document.getElementById("sub").innerHTML = asCurrency(receiptSubtotal);
    document.getElementById("tax").innerHTML = asCurrency(receiptTax);
    document.getElementById("tot").innerHTML = asCurrency(receiptTotal);
}
