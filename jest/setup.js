jest.mock('react-native-localize', () => ({
  RNLanguages: {
    language: 'en',
    languages: ['en'],
  },
}));