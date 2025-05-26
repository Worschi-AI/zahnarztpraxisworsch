
import React from 'react';
import ZahnersatzIntro from './zahnersatz/ZahnersatzIntro';
import ZahnersatzServicesOverview from './zahnersatz/ZahnersatzServicesOverview';
import ZahnersatzKronen from './zahnersatz/ZahnersatzKronen';
import ZahnersatzBruecken from './zahnersatz/ZahnersatzBruecken';
import ZahnersatzProthesen from './zahnersatz/ZahnersatzProthesen';
import ZahnersatzMaterialien from './zahnersatz/ZahnersatzMaterialien';
import ZahnersatzBehandlungsablauf from './zahnersatz/ZahnersatzBehandlungsablauf';
import ZahnersatzCTA from './zahnersatz/ZahnersatzCTA';

const ServiceContentZahnersatz = () => {
  return (
    <>
      <ZahnersatzIntro />
      <ZahnersatzServicesOverview />
      <ZahnersatzKronen />
      <ZahnersatzBruecken />
      <ZahnersatzProthesen />
      <ZahnersatzMaterialien />
      <ZahnersatzBehandlungsablauf />
      <ZahnersatzCTA />
    </>
  );
};

export default ServiceContentZahnersatz;
