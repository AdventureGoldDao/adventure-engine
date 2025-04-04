/*
 * Create the system calls that the client can use to request
 * changes in the World state (using the System contracts).
 */

import { getComponentValue } from "@latticexyz/recs";
import { ClientComponents } from "./createClientComponents";
import { SetupNetworkResult } from "./setupNetwork";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls(
  /*
   * The parameter list informs TypeScript that:
   *
   * - The first parameter is expected to be a
   *   SetupNetworkResult, as defined in setupNetwork.ts.
   *
   *   From this parameter, we only care about two fields:
   *   - worldContract (from getContract, see
   *     https://github.com/AdventureGoldDao/adventure-engine/blob/main/templates/threejs/packages/client/src/mud/setupNetwork.ts#L61-L67).
   *
   *   - waitForTransaction (from syncToRecs, see
   *     https://github.com/AdventureGoldDao/adventure-engine/blob/main/templates/threejs/packages/client/src/mud/setupNetwork.ts#L75-L81).
   *
   * - From the second parameter, which is a ClientComponent,
   *   we only care about Counter. This parameter comes to us
   *   through createClientComponents.ts, but it originates in
   *   syncToRecs
   *   (https://github.com/AdventureGoldDao/adventure-engine/blob/main/templates/threejs/packages/client/src/mud/setupNetwork.ts#L75-L81).
   */
  { worldContract, waitForTransaction, playerEntity }: SetupNetworkResult,
  { Position }: ClientComponents,
) {
  const moveTo = async (x: number, y: number, z: number) => {
    /*
     * Since MoveSystem is in the root namespace, .move can be
     * called directly on the World contract.
     */
    const tx = await worldContract.write.app__move([x, y, z]);
    await waitForTransaction(tx);
  };

  const moveBy = async (deltaX: number, deltaY: number, deltaZ: number) => {
    console.log({ Position, playerEntity });
    const playerPosition = getComponentValue(Position, playerEntity);

    if (playerPosition) {
      await moveTo(playerPosition.x + deltaX, playerPosition.y + deltaY, playerPosition.z + deltaZ);
    } else {
      await moveTo(deltaX, deltaY, deltaZ);
    }
  };

  return {
    moveTo,
    moveBy,
  };
}
