import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "light",

    brandTitle: "A design system for life",
    brandUrl: "https://chan.dev",
    // brandImage: "",
    brandTarget: "_self",

    // colorSecondary: "#ffcc00",
    // appBg: "#f0f0f0",
    // appBorderColor: "#ccc",
    // textColor: "#333",
    // barTextColor: "#666"
  })
})