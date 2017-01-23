

type MessageType = 'error' | 'success';

export class ShowToasterAction {
  readonly type = 'ShowToaster';
  constructor(
    public readonly message: string,
    public readonly messageType: MessageType,
  ) {}
}

export class CloseToasterAction {
  readonly type = 'CloseToaster';
}

export type Toast = {
  message: string;
  messageType: MessageType;
}

export class ToasterState {
  displayed?: Toast;
}

type AllToastActions = ShowToasterAction
  | CloseToasterAction

export function toasterReducer(state: ToasterState = new ToasterState, action: AllToastActions) {
  switch(action.type) {
    case "ShowToaster" :
      const {
        message,
        messageType,
      } = action;

      return {
        ...state,
        displayed: {
          message,
          messageType,
        },
      };

    case "CloseToaster":
      return {
        ...state,
        displayed: null,
      }

    default:
      return state;
  }
}
