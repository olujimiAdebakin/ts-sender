

"use client";

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { zksync, anvil, base } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Tx SENDER",
  projectId: "process.env.NEXT_PUBLIC_PROJECT_ID",
  chains: [zksync, anvil, base],
  ssr: false,
});
