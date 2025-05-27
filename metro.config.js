const { getDefaultConfig } = require("@expo/metro-config");
const {
  wrapWithReanimatedMetroConfig,
} = require("react-native-reanimated/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

// Konfigurasi untuk react-native-svg-transformer
defaultConfig.transformer.babelTransformerPath = require.resolve(
  "react-native-svg-transformer/expo"
);

defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter(
  (ext) => ext !== "svg"
);
defaultConfig.resolver.sourceExts.push("svg", "cjs");

// Membungkus konfigurasi dengan reanimated
const config = wrapWithReanimatedMetroConfig(defaultConfig);

module.exports = config;
