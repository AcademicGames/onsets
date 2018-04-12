import { injectGlobal } from "styled-components";

/* eslint no-unused-expressions: 0 */

/*
 * TODO:
 * - use color more sparinly.
 * - use more transparent/lighter background colors.
 * - implement Drag/Drop on gameboard.
 */
export const Colors = {
  bg: "#f4f9fd",
  bgRed: "#7f0000",
  bgYel: "#c77800",
  // fgRed: "#b71c1c",
  fgRed: "#a3101a",
  fgYel: "#ffa726",
  lightYel: "rgba(255, 167, 38, .8)",
  font: "#434e5a",
  hlRed: "#f05545",
  hlYel: "#ffd95b",
  txtYel: "#f7ee7f",
  primary: "#ff3b30",
  lightRed: "#9f4948",
  brightRed: "rgba(196, 7, 7, 0.7)",
  banner: "blue",
  alert: "#f7ee7f",
  metal: "#b5c2b7",
  modal: "rgba(126, 1, 1, 0.68)",
  modalTxt: "black",
  cube: "#fff3e6",
  scratchPad: "rgba(255, 255, 255, 0.8)",
  cubeSelected: "#679ef7"
};

injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }


  body.fontLoaded {
    font-family: 'Vollkorn', serif;
    background-color: #f2f2f2;
  }

`;