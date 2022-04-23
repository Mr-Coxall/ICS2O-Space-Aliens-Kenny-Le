/* global Phaser */

// Copyright (c) 2022 Kenny Le All rights reserved
//
// Created by: Kenny Le
// Created on: Apr 2022
// This is the Splash Scene

class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: "splashScene" })
  }

  // initial
  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  // preload
  preload() {
    console.log("Splash Scene")
  }

  // create
  create(data) {}

  // update
  update(time, delta) {}
}

export default SplashScene
