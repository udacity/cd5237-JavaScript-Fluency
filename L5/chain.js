/* The Scope Chain Example */
// <-- 4. JavaScript engine looks here last
const globalVar = "I am in the global scope";

function outerOuterFunction() {
  // <-- 3. JavaScript engine looks here third
  const outerOuterVar = 'I am in the outerOuterFunction scope';
  function outerFunction() {
    // <-- 2. JavaScript engine looks here second
    const outerVar = 'I am in the outerFunction scope';
    function innerFunction() {
      // <-- 1. JavaScript engine looks here first
      const innerVar = 'I am in the innerFunction scope';
      console.log(globarVar);
    }
  }
}


/* Quiz 1 */
const a = 1;
function x() {
  const b = 2;
  function y() {
    const c = 3;
    function z() {
      const d = 4;
    }
    z();
  }
  y();
}

x();