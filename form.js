
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCxgmq5LSk_LyY9vjyp8QkYPbv9rcqJDDs",
    authDomain: "login-demo-749c0.firebaseapp.com",
    projectId: "login-demo-749c0",
    storageBucket: "login-demo-749c0.appspot.com",
    messagingSenderId: "844441916007",
    appId: "1:844441916007:web:853cee33f8260884fd7ac2",
    measurementId: "G-BCN94MJ3T6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
      
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    // console.log(email.value,password.value)
    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
//   firebase.auth().onAuthStateChanged((user)=>{
//     if(user){
//       var email = user.email;
//       alert("Active user "+email);

//     }else{
//       alert("No Active user Found")
//     }
//   })