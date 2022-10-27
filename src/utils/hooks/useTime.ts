export const useTime = () => {
  const hour = new Date().getHours();
  const timeText =
    hour < 6
      ? '眼睛要休息一会哟'
      : hour < 9
      ? '早啊 吃早饭了吗'
      : hour < 11
      ? '早上好 开启幸福的一天！'
      : hour < 13
      ? '午安~记得午休呦'
      : hour < 17
      ? '下午好 起来喝水啦'
      : hour < 19
      ? '出来透透风 看日落啦'
      : '晚上好 记得做运动呦';

  return { timeText };
};
