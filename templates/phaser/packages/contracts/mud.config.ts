import { defineWorld } from "@latticexyz/world";

export default defineWorld({
  namespace: "",
  tables: {
    Counter: {
      schema: {
        value: "uint32",
      },
      key: [],
    },
  },
});
