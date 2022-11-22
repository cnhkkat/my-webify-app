import React from 'react';

import MarkDown from '@/features/MarkDown';

interface Props {
  content?: string;
}

const AboutText: React.FC<Props> = ({ content }) => {
  return <MarkDown content={content || ''} />;
};

export default AboutText;
