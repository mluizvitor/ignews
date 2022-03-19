import AppPackage from '../../package.json';
import Stripe from 'stripe';

const { version } = AppPackage;

export const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  apiVersion: '2020-08-27',
  appInfo: {
    name: 'Ignews',
    version,
  },
});
