declare global {
    // eslint-disable-next-line no-unused-vars
    interface Window {
      gtag: (param1: string, param2: string, param3: object) => void;
    }
  }

export const pageview = (url: any) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || '', {
    page_path: url,
  });
};
