import React from 'react';
import HeaderContent from '../HeaderContent/HeaderContent';
import BodyContent from '../BodyContent/BodyContent';
import CardContent from '../CardContent/CardContent';
import LogoContent from '../LogoContent/LogoContent';
import FinalContent from '../FinalContent/FinalContent';
import DetailContent from '../DetailContent/DetailContent';
import FormContent from '../FormContent/FormContent';
import DesContent from '../DesContent/DesContent';
import LangContent from '../LangCotent/LangContent';

function HomeContent() {
  return (
    <div>
      <HeaderContent />
      <BodyContent />
      <DetailContent/>
      <LogoContent />
      <FormContent/>
      <CardContent />
      <DesContent/>
      <FinalContent />
    </div>
  );
}

export default HomeContent;
