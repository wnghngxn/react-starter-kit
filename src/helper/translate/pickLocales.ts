const pickLocales = <T, B extends keyof T>(
  locales: {
    'zh-CN': T;
    'zh-TW': T;
  },
  key: B,
) => {
  return {
    'zh-CN': locales['zh-CN'][key],
    'zh-TW': locales['zh-TW'][key],
  };
};

export default pickLocales;
