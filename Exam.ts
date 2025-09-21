import{ bank }from"./Bank.ts";

const myBank = new bank();
console.log("--------------------------------------------------");
console.log("ยินดีต้อนรับสู่ระบบธนาคาร");
console.log("--------------------------------------------------");
const numCustomers = Number(prompt("กรุณากรอกจำนวนลูกค้าที่ต้องการเพิ่ม:")||"0");
for(let i=0;i<numCustomers;i++){
    const id = prompt(`กรุณากรอก ID ของลูกค้าคนที่ ${i+1}:`)||""
    const name = prompt(`กรุณากรอกชื่อของลูกค้าคนที่ ${i+1}:`)||""
    myBank.addCustomer(id, name)
}
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
console.log("สิ้นสุดการบริการ");
console.log("--------------------------------------------------");
