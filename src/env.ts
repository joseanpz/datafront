const env = process.env.VUE_APP_ENV;

let envApiUrl = '';

if (env === 'production') {
  envApiUrl = `http://${process.env.VUE_APP_DOMAIN_PROD}`;
} else if (env === 'staging') {
  envApiUrl = `http://${process.env.VUE_APP_DOMAIN_STAG}`;
} else if (env === 'development'){
  envApiUrl = `http://${process.env.VUE_APP_DOMAIN_DEV}`;
} else {
  envApiUrl = `http://${process.env.VUE_APP_DOMAIN_LOCAL}`;
}

export const apiUrl = envApiUrl;
export const appName = process.env.VUE_APP_NAME;
