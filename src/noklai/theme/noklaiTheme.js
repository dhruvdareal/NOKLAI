// NOKLAI design system — refreshed 2026 UI
export const noklaiTheme = {
  colors: {
    primary: '#5B3E96', primaryLight: '#7959B6', primaryDark: '#3F286C', primarySoft: '#F1ECFA',
    patientGreen: '#2F7D57', patientGreenLight: '#EAF6EF', patientGreenDark: '#205B3F',
    background: '#F7F8F4', backgroundDark: '#11151B', cardBackground: '#FFFFFF', cardBackgroundDark: '#1A2028',
    surfaceSubtle: '#EEF1EC', surfaceSubtleDark: '#242C36', border: '#DFE4DE', borderDark: '#303944', borderFocus: '#5B3E96',
    textPrimary: '#20262D', textPrimaryDark: '#F4F7F7', textSecondary: '#64707B', textSecondaryDark: '#A8B0B8', textMuted: '#8B959F',
    activeGreen: '#2F8A5B', activeGreenSoft: '#E2F4E9', amber: '#C77A13', amberSoft: '#FFF3DB', orange: '#D86A25', orangeSoft: '#FCEBDD', rose: '#C64B63', roseSoft: '#FCE9EE', blue: '#3172B8', blueSoft: '#EAF2FB',
    insightGreenBg: '#EAF6EF', insightGreenBorder: '#C9E5D3', insightGreenText: '#256541',
    insightBlueBg: '#ECF3FA', insightBlueBorder: '#D0E1F1', insightBlueText: '#2D5F8D',
    insightRoseBg: '#FCEFF1', insightRoseBorder: '#F0D3D8', insightRoseText: '#8B3648',
    tabBarBg: '#FFFFFF', tabBarBgDark: '#171C24', tabBarActive: '#5B3E96', tabBarInactive: '#8E98A2',
    white: '#FFFFFF', black: '#000000',
  },
  typography: { fontFamily: undefined, sizes: { xs: 12, sm: 14, base: 16, md: 18, lg: 21, xl: 25, xxl: 31, hero: 38 }, weights: { normal: '400', medium: '500', semiBold: '600', bold: '700', heavy: '800' } },
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 32 },
  radii: { sm: 10, md: 14, lg: 18, xl: 22, xxl: 28, full: 9999 },
  shadows: {
    card: { shadowColor: '#1B2520', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.07, shadowRadius: 12, elevation: 2 },
    button: { shadowColor: '#5B3E96', shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.18, shadowRadius: 10, elevation: 3 },
    floating: { shadowColor: '#1B2520', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.14, shadowRadius: 16, elevation: 6 },
  },
  quotes: [
    { text: 'Small steps make a big difference.', author: 'Noklai Care' },
    { text: 'Care is a journey we walk together.', author: 'Family Support' },
    { text: 'Culture connects. Care continues.', author: 'Noklai Wisdom' },
    { text: 'Every smile remembers love.', author: 'Memory Care' },
  ],
};
export default noklaiTheme;
