import { defineWorld } from "@latticexyz/world";

export default defineWorld({
  namespace: "",
  tables: {
    Tasks: {
      schema: {
        id: "bytes32",
        createdAt: "uint256",
        completedAt: "uint256",
        description: "string",
      },
      key: ["id"],
    },
  },
});
