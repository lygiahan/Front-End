import React from "react";
import TheHeader from "./header/TheHeader";
import TheContent from "./TheContent";

export default function TheLayout(props) {
  return (
    <div>
      <TheHeader />
      <TheContent />
    </div>
  );
}
