import { memo } from "react";
import ReactDOM from "react-dom/client";

const aRoot = ReactDOM.createRoot(document.getElementById("main"));
const Button = () => {
  console.log("rendering...");
  aRoot.render(
    <>
      {Date.now()}
      <button>Click</button>
    </>
  );
};

for (var i = 0; i < 10; i++) {
  //   function resolvePromise(i) {
  //     Promise.resolve().then(() => console.log(i));
  //   }
  //   resolvePromise(i);
  //   setInterval(function () {
  //     console.log(i);
  //   }, 0);
}

export default memo(Button);
