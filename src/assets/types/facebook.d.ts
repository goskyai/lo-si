type MessengerExtCallbackFn = (resp: string | number) => unknown;

interface IMessengerExtensions {
  requestCloseBrowser: (
    fn?: MessengerExtCallbackFn,
    fn?: MessengerExtCallbackFn,
  ) => unknown;
}
