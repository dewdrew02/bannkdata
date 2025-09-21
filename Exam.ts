import{ bank }from"./Bank.ts";

const myBank = new bank()
myBank.addCustomer(prompt("กรุณากรอก ID ของคุณ:")||"",prompt("กรุณากรอกชื่อของคุณ:")||"")
const action = prompt("คุณต้องการทำอะไร? (1: ฝากเงิน, 2: ถอนเงิน, 3: เช็คข้อมูลลูกค้า)")||""
if(action==="1"){
  const id = prompt("กรุณากรอก ID ของคุณ:")||""
    const amount = Number(prompt("กรุณากรอกจำนวนเงินที่ต้องการฝาก:")||"0")
    myBank.deposit(id, amount)
}else if(action==="2"){
  const id = prompt("กรุณากรอก ID ของคุณ:")||""
    const amount = Number(prompt("กรุณากรอกจำนวนเงินที่ต้องการถอน:")||"0")
    myBank.withdraw(id, amount)
}else if(action==="3"){
    const id = prompt("กรุณากรอก ID ของคุณ:")||""
    myBank.checkCustomer(id)
}else{
    console.log("❌ ตัวเลือกไม่ถูกต้อง")
}



console.log("--------------------------------------------------");
console.log("ยินดีต้อนรับเข้าสู่ระบบธนาคารของเรา");
console.log("--------------------------------------------------");
