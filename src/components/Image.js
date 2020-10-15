import React, { useEffect } from "react";

function Image() {
  //const [myInterval, setmyInterval] = useState(null);
  useEffect(() => {
    console.log("Images comp Mounted");
     const interval = setInterval(() => {
        console.log("Hallo");
      }, 1000);
    
    return()=>clearInterval(interval)
  }, []);

  return (
    <img
      src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1311&q=80"
      alt="imagehalo"
    />
  );
}
export default Image;
