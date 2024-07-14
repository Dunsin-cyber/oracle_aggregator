import { http, createConfig, createStorage } from "wagmi";
import { sepolia } from "wagmi/chains";
import { injected } from "wagmi/connectors";

// declare module "wagmi" {
//   interface Register {
//     config: typeof config;
//   }
// }

export const config = createConfig({
  chains: [sepolia],
  connectors: [injected()],
  transports: {
    [sepolia.id]: http(),
  },
});

// const storage = createStorage({ storage: localStorage });
