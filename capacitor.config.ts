import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'myAngularApp',
  webDir: 'www',
  "plugins": {
    "GoogleAuth": {
      "scopes": ["profile", "email"],
      "serverClientId": "279236104515-g0ogsc5s112almcbnnd1ofi0egjgd55p.apps.googleusercontent.com",
      "forceCodeForRefreshToken" : true
    }
  },  
};

export default config;
