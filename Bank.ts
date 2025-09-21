// ประเภทข้อมูลของลูกค้า
interface Customer {
  id: string;
  name: string;
  balance: number;
};


export class bank {
  private customers: Customer[] = [];

  addCustomer(id: string, name: string): void {
    const existing = this.customers.find(c => c.id === id);
    if (existing) {
      console.log(`❌ ลูกค้า ID นี้มีอยู่แล้ว`);
      return;
    }
    this.customers.push({ id, name, balance: 0 });
    console.log(`✅ เพิ่มลูกค้า ${name} เรียบร้อย`);
  }

  // 2. ฟังก์ชันฝากเงิน
  deposit(id: string, amount: number): void {
    const customer = this.customers.find(c => c.id === id);
    if (!customer) {
      console.log(`❌ ไม่พบลูกค้า`);
      return;
    }
    customer.balance += amount;
    console.log(`💰 ฝากเงิน ${amount} บาทให้ ${customer.name} เรียบร้อย`);
  }

  // 2. ฟังก์ชันถอนเงิน
  withdraw(id: string, amount: number): void {
    const customer = this.customers.find(c => c.id === id);
    if (!customer) {
      console.log(`❌ ไม่พบลูกค้า`);
      return;
    }
    if (customer.balance < amount) {
      console.log(`⚠️ ยอดเงินไม่พอสำหรับการถอน`);
      return;
    }
    customer.balance -= amount;
    console.log(`💸 ถอนเงิน ${amount} บาทจาก ${customer.name} เรียบร้อย`);
  }

  // 3. ฟังก์ชันเช็คข้อมูลลูกค้า
  checkCustomer(id: string): void {
    const customer = this.customers.find(c => c.id === id);
    if (!customer) {
      console.log(`❌ ไม่พบลูกค้า`);
      return;
    }
    console.log(`📋 ข้อมูลลูกค้า:
    - ชื่อ: ${customer.name}
    - ยอดคงเหลือ: ${customer.balance} บาท`);
  }
}

