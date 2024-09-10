import { User } from '@/interfaces/user';

const userData: { [key: string]: User } = {
  '001': {
    intra: 'hauchida',
    profileImg: 'https://avatars.githubusercontent.com/u/94820598?v=4',
    profileDescription: 'はじめまして！！hello world',
    userPosts: [
      {
        description: 'hello world',
        uploadedAt: new Date(),
        viewNum: 0,
        loveNum: 0
      },
      {
        description: 'はじめました',
        uploadedAt: new Date(),
        viewNum: 0,
        loveNum: 0
      },
    ],
  },
  '002': {
    intra: 'kmoriyam',
    profileImg:
      'https://assets.cake.jp/bp/img/campaigns/tj_cheesecake/img_about_jerry.png',
    profileDescription: 'はじめまして！！hello world',
    userPosts: [
      {
        description: 'hello world',
        uploadedAt: new Date(),
        viewNum: 0,
        loveNum: 0
      },
    ],
  },
  '003': {
    intra: 'fhoshina',
    profileImg:
      'https://wwws.warnerbros.co.jp/tomandjerry/img/top/visual_chara01.png',
    profileDescription: 'はじめまして！！hello world',
    userPosts: [
      {
        description: 'hello world',
        uploadedAt: new Date(),
        viewNum: 0,
        loveNum: 0
      },
    ],
  },
  '004': {
    intra: 'rkaga',
    profileImg: 'https://avatars.githubusercontent.com/u/148623943?v=4&size=64',
    profileDescription: 'はじめまして！！hello world',
    userPosts: [
      {
        description: 'hello world',
        uploadedAt: new Date(),
        viewNum: 0,
        loveNum: 0
      },
    ],
  },
};

export default userData;
