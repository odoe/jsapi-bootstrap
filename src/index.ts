import "./config";

import $ from "jquery";

import "bootstrap";

import "@dojo/framework/shim/Promise";

import App from "./widgets/App";

$('#myModal').on('show.bs.modal', (event: any) => {
  console.log(event);
})

$("#myModal").modal("show");

/**
 * Initialize application
 */
export const app = new App({
  appName: "Template App",
  container: document.getElementById("app") as HTMLElement
});
