function sayHello(theName, theGender) {
  if(theGender === "Male") {
    document.writeln(`Hello Mr ${theName}<br>`);
  }else if (theGender === "Female"){
    document.writeln(`Hello Miss ${theName}<br>`);
  }else { 
      document.writeln(`Hello ${theName}<br>`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"