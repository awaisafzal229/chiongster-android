// hooks/useFonts.ts
import { useFonts } from 'expo-font';

export function useCustomFonts() {
  const [fontsLoaded, fontError] = useFonts({
    'Futura-Bold': require('../assets/fonts/Futura Bold.otf'),
    'Futura-Medium': require('../assets/fonts/Futura Medium.otf'),
    'Futura-Book': require('../assets/fonts/Futura Book.otf'),
  });

  return { fontsLoaded, fontError };
}