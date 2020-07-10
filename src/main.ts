import Aurelia, { RouterConfiguration } from "aurelia";
import { MyApp } from "./my-app";

import {
  FASTDesignSystemProvider,
  FASTAnchor,
  FASTButton,
} from "@microsoft/fast-components";

FASTDesignSystemProvider;
FASTAnchor;
FASTButton;

Aurelia.register(RouterConfiguration)
  // To use HTML5 pushState routes, replace previous line with the following
  // customized router config.
  // .register(RouterConfiguration.customize({ useUrlFragmentHash: false }))
  .app(MyApp)
  .start();
