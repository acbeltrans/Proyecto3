import { Meteor } from "meteor/meteor";
import { WebApp } from "meteor/webapp";
import "../imports/api/items.js";
import "../imports/api/events.js";

Meteor.startup(() => {
  WebApp.addHtmlAttributeHook(() => ({ lang: "en" }));
});
