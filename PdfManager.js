/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable strict */
/* eslint-disable no-param-reassign */
/**
 * Copyright (c) 2017-present, Wonday (@wonday.org)
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

const PdfManagerNative = require("react-native").NativeModules.PdfManager;

export default class PdfManager {
  static loadFile(path, password) {
    console.log("LOG: PdfManager.js: loadFile:", path, password);
    if (typeof path !== "string") {
      throw new TypeError("path must be a valid string.");
    }

    if (password === undefined) {
      password = "";
    }

    return PdfManagerNative.loadFile(path, password);
  }
}
