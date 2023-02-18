# ipp5-backend-static-launcher

~~~~~ sh
npm install e53e04ac/ipp5-backend-static-launcher
~~~~~

~~~~~ mjs
import { Ipp5BackendStaticLauncher } from 'e53e04ac/ipp5-backend-static-launcher';
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
  subgraph "dependencies";
    B_0(["e53e04ac/azure-terraformer"]);
    B_1(["e53e04ac/event-emitter"]);
    B_2(["e53e04ac/file-entry-native"]);
    B_3(["e53e04ac/hold"]);
  end;
  subgraph "devDependencies";
    B_4(["@types/node"]);
    B_5(["e53e04ac/file-entry"]);
    B_6(["e53e04ac/ipp5-types"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  A ----> B_5;
  A ----> B_6;
  click B_0 "https://github.com/e53e04ac/azure-terraformer/tree/d06bdbf9137216f62d5e8731c79aa3ee8e3d7f4a";
  click B_1 "https://github.com/e53e04ac/event-emitter/tree/19614365368936f6974a633d25a1109a3465a99d";
  click B_2 "https://github.com/e53e04ac/file-entry-native/tree/9e08b922f13bb758e8a7d30ef925a82a96284e4e";
  click B_3 "https://github.com/e53e04ac/hold/tree/3191dd4704f3e5f90d6c27f288ede7700f5fdb66";
  click B_4 "https://www.npmjs.com/package/@types/node/v/18.14.0";
  click B_5 "https://github.com/e53e04ac/file-entry/tree/c972d64414ab71efd73ea068fd42583938be938c";
  click B_6 "https://github.com/e53e04ac/ipp5-types/tree/a52c2b739c3d68e21dd63da9cb3e603732acc3d1";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-backend-static-launcher";
    E_0(["Ipp5BackendStaticLauncher"]);
  end;
  M(["index.mjs"])
  subgraph "azure-terraformer";
    I_0_0(["AzureTerraformer"]);
  end;
  subgraph "event-emitter";
    I_1_0(["EventEmitter"]);
  end;
  subgraph "file-entry-native";
    I_2_0(["FileEntry"]);
  end;
  subgraph "hold";
    I_3_0(["hold"]);
    I_3_1(["unwrap"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_3_1;
  E_0 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-backend-static-launcher";
    E_0(["namespace Ipp5BackendStaticLauncher"]);
    E_1(["type Ipp5BackendStaticLauncher"]);
    E_2(["const Ipp5BackendStaticLauncher"]);
  end;
  M(["index.d.ts"])
  subgraph "azure-terraformer";
    I_0_0(["AzureTerraformer"]);
  end;
  subgraph "event-emitter";
    I_1_0(["EventEmitter"]);
  end;
  subgraph "file-entry";
    I_2_0(["FileEntry"]);
  end;
  subgraph "hold";
    I_3_0(["Get"]);
    I_3_1(["ValueOrGet"]);
  end;
  subgraph "ipp5-types";
    I_4_0(["Ipp5BackendStaticEnvMap"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_3_0;
  M ----> I_3_1;
  M ----> I_4_0;
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
~~~~~
