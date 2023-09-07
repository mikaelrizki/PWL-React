// 1. set default value = fullName = "unknown", age = 25, isMale = false, 
const Person = (fullName = "unknown", age = 25, isMale = false, avatar) => { 
    // ternary operator, menggantikan if-else 
    const info = () => { 
        // 2. tampilkan full name, sex dan age 
        console.log("Full Name", fullName)
        console.log("Age", age)
        console.log("Sex", `${isMale ? "Laki-laki" : "Perempuan"}`)
        console.log("Avatar", avatar)
        return `Full Name: ${fullName}, Sex: ${isMale ? "Male" : "Female"}, Age: ${age}`
    }; 
    
    return { 
        get getInfo() { 
            // 3. kembalikan nilai info diatas 
            return info();
        }, 
        toString() { 
            // 4. kembalikan nilai info diatas
            return info();
        }, 
        // 5. kembalikan usia sekarang ditambah dengan tahun inputan user, 
        addAge: (years) => {
            age += years;
            return age;
        },
        
        // 6. fungsi yang mengeset usia yang baru, 
        setAge: (newAge) => {
            age = newAge;
        },
        
        // 7. fungsi yang mengeset nama yang baru, 
        rename: (newName) => {
            fullName = newName;
        },
        
        // 8. kembalikan semua nilai dengan shorthand property 
        get allValues() {
            return { fullName, age, isMale, avatar };
        },
    }; 
}; 

// 9. export objek person sebagai sebuah modul
export default Person;