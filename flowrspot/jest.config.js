module.exports = {
    preset: 'jest-expo',
    transform: {
        '\\.js$': './node_modules/react-native/jest/preprocessor.js',
    }
};