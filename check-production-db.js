// Script to check production database via API
const API = 'https://kaal-morphed-tech.onrender.com/api';

async function checkProductionData() {
  try {
    // Try to login with admin credentials
    const adminEmail = 'admin@morphedtech.com';
    const adminPassword = 'MorphedTech@2024!Secure';
    
    console.log('🔐 Logging in as admin...');
    const loginRes = await fetch(`${API}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: adminEmail, password: adminPassword })
    });
    
    const loginData = await loginRes.json();
    
    if (!loginRes.ok) {
      console.error('❌ Admin login failed:', loginData.error);
      return;
    }
    
    console.log('✅ Admin logged in successfully');
    const token = loginData.token;
    
    // Get all students
    console.log('\n📊 Fetching students from production...');
    const studentsRes = await fetch(`${API}/admin/students`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    
    const students = await studentsRes.json();
    
    console.log(`\n✅ Found ${students.length} students in production:\n`);
    
    students.forEach((s, i) => {
      console.log(`${i+1}. ${s.name} (${s.email})`);
      console.log(`   Phone: ${s.phone || 'N/A'}`);
      console.log(`   Payment: ${s.payment_status || 'No enrollment'}`);
      console.log(`   Transaction ID: ${s.transaction_id || 'N/A'}`);
      console.log(`   Enrolled: ${s.enrolled_at || 'N/A'}`);
      console.log('');
    });
    
    // Get stats
    const statsRes = await fetch(`${API}/admin/stats`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const stats = await statsRes.json();
    
    console.log('📈 Production Stats:');
    console.log(`   Total Students: ${stats.totalStudents}`);
    console.log(`   Paid Students: ${stats.paidStudents}`);
    console.log(`   Total Revenue: ₹${stats.totalRevenue}`);
    console.log(`   Pending Payments: ${stats.pendingPayments}`);
    
  } catch(e) {
    console.error('❌ Error:', e.message);
  }
}

checkProductionData();
