import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import GroupsIcon from '@mui/icons-material/Groups';
import MoneyIcon from '@mui/icons-material/Money';
import ArticleIcon from '@mui/icons-material/Article';

interface AppBarItem {
  id: number;
  icon: JSX.Element;
  label: string;
  route: string;
}

export const AppBarItems: AppBarItem[] = [
  {
    id: 0,
    icon: <SelfImprovementIcon />,
    label: 'Pro',
    route: 'https://www.npmjs.com/products/pro',
  },
  {
    id: 1,
    icon: <GroupsIcon />,
    label: 'Teams',
    route: 'https://www.npmjs.com/products/teams',
  },
  {
    id: 2,
    icon: <MoneyIcon />,
    label: 'Pricing',
    route: 'https://www.npmjs.com/products',
  },
  {
    id: 3,
    icon: <ArticleIcon />,
    label: 'Documentation',
    route: 'https://docs.npmjs.com/',
  },
];

// SETTINGS

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
