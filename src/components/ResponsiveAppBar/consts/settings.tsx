

interface Setting {
  id: number;
  label: string;
  route: string;
}

export const Settings: Setting[] = [
  {
    id: 0,
    label: 'Sign Up',
    route: 'https://www.npmjs.com/signup',
  },
  {
    id: 1,
    label: 'Sign In',
    route: 'https://www.npmjs.com/login',
  },
];
