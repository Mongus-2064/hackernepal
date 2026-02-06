"use client";

import React from "react";

export default function Gridbackground() {
  return (
    <div className="relative bg-black min-h-screen  overflow-hidden">
<div
    className="absolute inset-0 "
      style={{
        backgroundImage: ` 
        linear-gradient(to right,rgba(114,114,114,0.1) 1px, transparent 1px),
        linear-gradient(to bottom,rgba(114,114,114,0.1) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
        
      }}
    ></div>
    </div>
    
  );
}




