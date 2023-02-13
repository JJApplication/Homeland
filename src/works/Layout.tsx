import React from "react";
import './works.css';

export default function WorkLayout({name, children}: {
  name: string,
  children: React.ReactNode
}) {
  return (
    <div className="works">
      <div>
        <span className="head">{name}</span>
      </div>

      <main>{children}</main>
    </div>
  )
}