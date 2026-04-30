// Sample Multilingual Content Structure
// Demonstrates new AATMA format with English, Hinglish, and Marathi support

const multilingualContentSample = {
  "joins": {
    title: "SQL Joins",
    icon: "🔗",
    difficulty: "Beginner",
    duration: "15 min",
    
    // Overview with multilingual support
    overview: {
      english: {
        simple: "SQL Joins combine rows from two or more tables based on a related column between them.",
        explanation: "Think of joins as connecting puzzle pieces. Each table is a puzzle piece, and joins help you connect them using matching edges (common columns).",
        example: "If you have a 'Students' table and a 'Courses' table, you can join them to see which student is enrolled in which course."
      },
      hinglish: {
        simple: "SQL Joins do ya zyada tables ke rows ko ek related column ke basis par combine karta hai.",
        explanation: "Joins ko aise samjho jaise puzzle pieces ko connect karna. Har table ek puzzle piece hai, aur joins unhe matching edges (common columns) use karke connect karte hain.",
        example: "Agar aapke paas 'Students' table aur 'Courses' table hai, toh aap unhe join karke dekh sakte ho ki kaun sa student kis course mein enrolled hai."
      },
      marathi: {
        simple: "SQL Joins दोन किंवा अधिक tables मधील rows ला एका संबंधित column च्या आधारे एकत्र करते.",
        explanation: "Joins ला puzzle pieces जोडण्यासारखे समजा. प्रत्येक table एक puzzle piece आहे, आणि joins त्यांना matching edges (common columns) वापरून जोडतात.",
        example: "जर तुमच्याकडे 'Students' table आणि 'Courses' table असेल, तर तुम्ही त्यांना join करून पाहू शकता की कोणता student कोणत्या course मध्ये enrolled आहे."
      }
    },

    // Comic with multilingual support
    comic: {
      english: "🎭 Imagine a wedding ceremony...\n\nThe BRIDE's family has a list: [Bride_Name, Bride_Age, Bride_City]\nThe GROOM's family has a list: [Groom_Name, Groom_Age, Groom_City]\n\nINNER JOIN = Only couples who BOTH agreed to marry 💑\nLEFT JOIN = All brides, even if groom didn't show up 👰\nRIGHT JOIN = All grooms, even if bride didn't show up 🤵\nFULL OUTER JOIN = Everyone invited, whether they matched or not 🎊",
      
      hinglish: "🎭 Ek shaadi ki ceremony imagine karo...\n\nDULHAN ki family ke paas list hai: [Dulhan_Naam, Dulhan_Umar, Dulhan_Shehar]\nDULHA ki family ke paas list hai: [Dulha_Naam, Dulha_Umar, Dulha_Shehar]\n\nINNER JOIN = Sirf woh couples jo DONO ne shaadi ke liye haan kari 💑\nLEFT JOIN = Saari dulhanein, chahe dulha aaya ho ya nahi 👰\nRIGHT JOIN = Saare dulhe, chahe dulhan aayi ho ya nahi 🤵\nFULL OUTER JOIN = Sabhi invited log, chahe match huye ho ya nahi 🎊",
      
      marathi: "🎭 एका लग्नाची कल्पना करा...\n\nवधूच्या कुटुंबाकडे यादी आहे: [वधू_नाव, वधू_वय, वधू_शहर]\nवराच्या कुटुंबाकडे यादी आहे: [वर_नाव, वर_वय, वर_शहर]\n\nINNER JOIN = फक्त ती जोडपी ज्यांनी दोघांनी लग्नाला होकार दिला 💑\nLEFT JOIN = सर्व वधू, वर आला की नाही याची पर्वा न करता 👰\nRIGHT JOIN = सर्व वर, वधू आली की नाही याची पर्वा न करता 🤵\nFULL OUTER JOIN = सर्व आमंत्रित लोक, match झाले की नाही याची पर्वा न करता 🎊"
    },

    // Deep Dive with multilingual support
    deepDive: {
      english: `Step-by-step understanding of SQL Joins:

1. INNER JOIN - Returns only matching rows from both tables
   - Most commonly used join
   - Only shows records where condition is TRUE in both tables

2. LEFT JOIN (LEFT OUTER JOIN) - Returns all rows from left table + matching rows from right
   - If no match found, NULL values appear for right table columns
   - Useful when you want to keep all records from primary table

3. RIGHT JOIN (RIGHT OUTER JOIN) - Returns all rows from right table + matching rows from left
   - Opposite of LEFT JOIN
   - Less commonly used (can be rewritten as LEFT JOIN)

4. FULL OUTER JOIN - Returns all rows from both tables
   - Combines LEFT and RIGHT JOIN
   - Shows all records, with NULLs where no match exists

5. CROSS JOIN - Cartesian product of both tables
   - Every row from first table paired with every row from second table
   - Use with caution - can create huge result sets`,

      hinglish: `SQL Joins ko step-by-step samajhte hain:

1. INNER JOIN - Dono tables se sirf matching rows return karta hai
   - Sabse zyada use hone wala join
   - Sirf woh records dikhata hai jahan condition DONO tables mein TRUE hai

2. LEFT JOIN (LEFT OUTER JOIN) - Left table ki saari rows + right table ki matching rows
   - Agar match nahi mila, toh right table columns ke liye NULL values aati hain
   - Useful hai jab aapko primary table ke saare records rakhne hain

3. RIGHT JOIN (RIGHT OUTER JOIN) - Right table ki saari rows + left table ki matching rows
   - LEFT JOIN ka opposite
   - Kam use hota hai (LEFT JOIN ke roop mein likh sakte hain)

4. FULL OUTER JOIN - Dono tables ki saari rows return karta hai
   - LEFT aur RIGHT JOIN ko combine karta hai
   - Saare records dikhata hai, jahan match nahi hai wahan NULL

5. CROSS JOIN - Dono tables ka Cartesian product
   - Pehli table ki har row ko doosri table ki har row ke saath pair karta hai
   - Dhyan se use karo - bahut bada result set ban sakta hai`,

      marathi: `SQL Joins ला step-by-step समजून घेऊया:

1. INNER JOIN - दोन्ही tables मधून फक्त matching rows return करतो
   - सर्वात जास्त वापरला जाणारा join
   - फक्त त्या records दाखवतो जिथे condition दोन्ही tables मध्ये TRUE आहे

2. LEFT JOIN (LEFT OUTER JOIN) - Left table च्या सर्व rows + right table च्या matching rows
   - जर match सापडला नाही, तर right table columns साठी NULL values येतात
   - उपयुक्त आहे जेव्हा तुम्हाला primary table चे सर्व records ठेवायचे असतात

3. RIGHT JOIN (RIGHT OUTER JOIN) - Right table च्या सर्व rows + left table च्या matching rows
   - LEFT JOIN चा opposite
   - कमी वापरला जातो (LEFT JOIN म्हणून लिहू शकतो)

4. FULL OUTER JOIN - दोन्ही tables च्या सर्व rows return करतो
   - LEFT आणि RIGHT JOIN ला combine करतो
   - सर्व records दाखवतो, जिथे match नाही तिथे NULL

5. CROSS JOIN - दोन्ही tables चे Cartesian product
   - पहिल्या table च्या प्रत्येक row ला दुसऱ्या table च्या प्रत्येक row सोबत pair करतो
   - सावधगिरीने वापरा - खूप मोठा result set तयार होऊ शकतो`
    },

    // Memory tricks with multilingual support
    memory: {
      english: "🧠 MEMORY TRICK:\nINNER = INtersection (common part)\nLEFT = LEFT table is boss (keeps all its rows)\nRIGHT = RIGHT table is boss (keeps all its rows)\nFULL = FULL attendance (everyone included)\nCROSS = CROSS multiply (all combinations)",
      
      hinglish: "🧠 YAAD RAKHNE KI TRICK:\nINNER = INtersection (common part)\nLEFT = LEFT table boss hai (apni saari rows rakhta hai)\nRIGHT = RIGHT table boss hai (apni saari rows rakhta hai)\nFULL = FULL attendance (sabhi shamil)\nCROSS = CROSS multiply (saare combinations)",
      
      marathi: "🧠 लक्षात ठेवण्याची TRICK:\nINNER = INtersection (common part)\nLEFT = LEFT table boss आहे (आपल्या सर्व rows ठेवतो)\nRIGHT = RIGHT table boss आहे (आपल्या सर्व rows ठेवतो)\nFULL = FULL attendance (सर्व समाविष्ट)\nCROSS = CROSS multiply (सर्व combinations)"
    },

    // Interview answer with multilingual support
    interview: {
      english: "When asked 'Explain SQL Joins' in an interview:\n\n'SQL Joins are used to combine rows from two or more tables based on a related column. There are 5 main types:\n\n1. INNER JOIN - Returns only matching records from both tables\n2. LEFT JOIN - Returns all records from left table and matching records from right\n3. RIGHT JOIN - Returns all records from right table and matching records from left\n4. FULL OUTER JOIN - Returns all records from both tables\n5. CROSS JOIN - Returns Cartesian product of both tables\n\nIn real-world scenarios, INNER JOIN is most commonly used, followed by LEFT JOIN. The choice depends on whether you want to preserve all records from one table or only show matching records.'",
      
      hinglish: "Jab interview mein 'SQL Joins explain karo' pucha jaye:\n\n'SQL Joins ka use do ya zyada tables ke rows ko ek related column ke basis par combine karne ke liye hota hai. 5 main types hain:\n\n1. INNER JOIN - Dono tables se sirf matching records return karta hai\n2. LEFT JOIN - Left table ke saare records aur right table ke matching records return karta hai\n3. RIGHT JOIN - Right table ke saare records aur left table ke matching records return karta hai\n4. FULL OUTER JOIN - Dono tables ke saare records return karta hai\n5. CROSS JOIN - Dono tables ka Cartesian product return karta hai\n\nReal-world scenarios mein, INNER JOIN sabse zyada use hota hai, uske baad LEFT JOIN. Choice depend karti hai ki aapko ek table ke saare records preserve karne hain ya sirf matching records dikhane hain.'",
      
      marathi: "Interview मध्ये 'SQL Joins explain करा' विचारले तर:\n\n'SQL Joins चा वापर दोन किंवा अधिक tables च्या rows ला एका संबंधित column च्या आधारे combine करण्यासाठी होतो. 5 मुख्य types आहेत:\n\n1. INNER JOIN - दोन्ही tables मधून फक्त matching records return करतो\n2. LEFT JOIN - Left table चे सर्व records आणि right table चे matching records return करतो\n3. RIGHT JOIN - Right table चे सर्व records आणि left table चे matching records return करतो\n4. FULL OUTER JOIN - दोन्ही tables चे सर्व records return करतो\n5. CROSS JOIN - दोन्ही tables चे Cartesian product return करतो\n\nReal-world scenarios मध्ये, INNER JOIN सर्वात जास्त वापरला जातो, त्यानंतर LEFT JOIN. निवड यावर अवलंबून असते की तुम्हाला एका table चे सर्व records preserve करायचे आहेत की फक्त matching records दाखवायचे आहेत.'",
    },

    // Revision with multilingual support
    revision: {
      english: "⚡ QUICK REVISION: INNER=matching only | LEFT=all left+matching right | RIGHT=all right+matching left | FULL=all from both | CROSS=all combinations",
      hinglish: "⚡ QUICK REVISION: INNER=sirf matching | LEFT=saare left+matching right | RIGHT=saare right+matching left | FULL=dono se saare | CROSS=saare combinations",
      marathi: "⚡ QUICK REVISION: INNER=फक्त matching | LEFT=सर्व left+matching right | RIGHT=सर्व right+matching left | FULL=दोन्हीतून सर्व | CROSS=सर्व combinations"
    },

    // Audio URLs (optional - can be pre-recorded or generated via TTS)
    audio: {
      overview: {
        english: null, // Will use TTS
        hinglish: null, // Will use TTS
        marathi: null  // Will use TTS
      },
      comic: {
        english: null,
        hinglish: null,
        marathi: null
      },
      deepDive: {
        english: null,
        hinglish: null,
        marathi: null
      }
    }
  }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { multilingualContentSample };
}
