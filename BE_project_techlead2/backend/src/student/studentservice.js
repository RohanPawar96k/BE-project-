var studentModel = require('./studentModel');
var key = '123456789trytryrtyr';
var encryptor = require('simple-encryptor')(key);

module.exports.createStudentDBService = (studentDetails) => {
  return new Promise(async function myFn(resolve, reject) {
    try {
      var studentModelData = new studentModel();
      studentModelData.firstname = studentDetails.firstname;
      studentModelData.lastname = studentDetails.lastname;
      studentModelData.email = studentDetails.email;
      
      // Encrypt the password
      var encrypted = encryptor.encrypt(studentDetails.password);
      studentModelData.password = encrypted;

      // Save the document
      const result = await studentModelData.save();

      // Handle the result
      console.log('Student saved successfully:', result);
      resolve(true);
    } catch (error) {
      console.error('Error saving student:', error.message);
      reject(false);
    }
  });
};

module.exports.loginuserDBService = (studentDetails) => {
  return new Promise(async function myFn(resolve, reject) {
    try {
      const result = await studentModel.findOne({ email: studentDetails.email });

      if (result !== null) {
        // Decrypt the password
        var decrypted = encryptor.decrypt(result.password);

        if (decrypted == studentDetails.password) {
          console.log('Student Validated Successfully');
          resolve({ status: true, msg: "Student Validated Successfully" });
        } else {
          console.log('Student Validation Failed');
          reject({ status: false, msg: "Student Validation Failed" });
        }
        
      } else {
        console.log('Invalid Student Data');
        reject({ status: false, msg: "Invalid Student Data" });
      }
    } catch (error) {
      console.error('Error finding student:', error.message);
      reject({ status: false, msg: "Error in finding student" });
    }
  });
};
