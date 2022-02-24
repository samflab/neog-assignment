import React from "react";

export default function Figma() {
  return (
    <div>
      <h2>Mini Figma</h2>
      <div className="text">
        <p>Big brown fox jumps over the lazy dog.</p>
      </div>

      <div>
        <h3>Tools</h3>
        <div>
          <h4>Font Size</h4>
          <button> + </button>
          <button> - </button>
        </div>

        <div>
          <h4>Font Family</h4>
          <button> Roboto </button>
          <button> Lato </button>
        </div>
      </div>
    </div>
  );
}
