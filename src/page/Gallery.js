import React from "react";
import Images from "../components/Images";

export default function Gallery() {
  return (
    <section className="flex justify-center">
      {console.log("re-render")}
      <div className="w-1/2">
        <div className="text-center">
          <Images />
        </div>
      </div>
    </section>
  );
}
