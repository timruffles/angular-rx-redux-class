/**
 * How to handle a long process in Redux
 *
 * - model it with plain JS - actions + reducers
 * - use Effects to schedule any particularly complex UI/server interactions
 * - otherwise simply move the state through a number of states
 *
 * - consider using an explicit state-machine reducer
 */

class AccountDeletionState {
  quickConfirmed: boolean;
  serverConfirmedNoOutstandingPayment: boolean;
  agreedToLoseData: boolean;
  currentModal: {
    state: "first" | "second" | "third";
  },
}
