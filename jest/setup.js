jest.mock('react-native-localize', () => ({
  RNLanguages: {
    language: 'en',
    languages: ['en'],
  },
}));


jest.mock('NativeModules', () => ({
  UIManager: {
    RCTView: () => ({
      directEventTypes: {},
    }),
  },
  KeyboardObserver: {},
  RNGestureHandlerModule: {
    attachGestureHandler: jest.fn(),
    createGestureHandler: jest.fn(),
    dropGestureHandler: jest.fn(),
    updateGestureHandler: jest.fn(),
    State: {},
    Directions: {},
  },
  PlatformConstants: {
    forceTouchAvailable: false,
  },
}))