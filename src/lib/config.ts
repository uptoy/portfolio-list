// eslint-disable-next-line import/prefer-default-export
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
export const GTM = process.env.NEXT_PUBLIC_GTM;
export const PRO_MEMBERSHIP_CHECKOUT_URL =
  'https://academy.Yuta.dev/offers/2SzqqoYt?coupon_code=LAUNCH';

export const SOCIALS: { [k: string]: string } = {
  Youtube: 'https://www.youtube.com/channel/UCYSa_YLoJokZAwHhlwJntIA',
  LinkedIn: 'https://www.linkedin.com/in/vadimsavin/',
  Twitter: 'https://twitter.com/VadimYutaDev',
  Instagram: 'https://www.instagram.com/VadimYutaDev/',
};

export const CONVERTKIT = {
  FORM_SRC: process.env.NEXT_PUBLIC_CONVERTKIT_FORM_SRC,
  FORM_ID: process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID,
  subscribers: 33521,
  subscribersUpdatedOn: '2023-06-06',
  averageNewSubscribersPerDay: 50,
};

export const SEO = {
  title: 'Yuta Development',
  description:
    'Become a full-stack developer by building real projects. Learn React, React Native, AWS Amplify and other modern technologies that power WEB and Mobile',
  author: 'Vadim Savin',
  keywords: 'React Native, React, Typescript, AWS Amplify',
  hostname: 'https://www.Yuta.dev',
  image: '/images/YutaCover.jpg',
  twitter: '@VadimYutaDev',
};
