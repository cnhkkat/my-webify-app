import { myAvatar, myDescr, myLink, myName } from '@/utils/constants';

export const useSite = () => {
  const mySite = [
    {
      key: 'name',
      value: myName
    },
    {
      key: 'link',
      value: myLink
    },
    {
      key: 'avatar',
      value: myAvatar
    },
    {
      key: 'desc',
      value: myDescr
    }
  ];

  return { mySite };
};
