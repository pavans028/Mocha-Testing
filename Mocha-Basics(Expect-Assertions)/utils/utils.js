module.exports.add = (a, b) => a + b;

module.exports.asyncAdd = (a, b , callback) => {
  setTimeout(()=>{
    callback(a+b)
  },1000)
}

module.exports.square = (x) => x * x;

module.exports.setName = (user, fullName) => {
  //[user.firstName, user.lastName] = fullName.split(" ");
  var names = fullName.split(" ");
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
};
