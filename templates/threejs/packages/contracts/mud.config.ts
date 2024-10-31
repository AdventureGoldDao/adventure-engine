import { defineWorld } from "@latticexyz/world";

export default defineWorld({
  namespace: "",
  tables: {
    Position: {
      schema: {
        id: "bytes32",
        x: "int32",
        y: "int32",
        z: "int32",
      },
      key: ["id"],
    },
  },
});
