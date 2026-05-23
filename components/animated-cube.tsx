"use client"

import React from "react"

export function AnimatedCube() {
  return (
    <div className="cube-wrapper hidden lg:block" aria-hidden>
      <div className="cube" aria-hidden>
        <div className="face face-front" />
        <div className="face face-back" />
        <div className="face face-right" />
        <div className="face face-left" />
        <div className="face face-top" />
        <div className="face face-bottom" />
      </div>
    </div>
  )
}

export default AnimatedCube
