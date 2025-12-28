import { reactRouter } from "@react-router/dev/vite";
import { sentryReactRouter, type SentryReactRouterBuildOptions } from "@sentry/react-router";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "finward-vo",
  project: "javascript-react",
  // An auth token is required for uploading source maps.
  authToken: "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"
  // ...

}

export default defineConfig(config => {
  return {
  plugins: [tailwindcss(),tsconfigPaths(), reactRouter(),sentryReactRouter(sentryConfig, config)],
  sentryConfig,
  ssr:{
    noExternal: [/@syncfusion/]
  }}
});

