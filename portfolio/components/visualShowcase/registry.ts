
import React from 'react';
import { VisualShowcaseConcept, VisualShowcaseVariant } from '../../types';

import { ArcLeagueFront } from './cards/ArcLeagueFront';
import { ArcLeagueBack } from './cards/ArcLeagueBack';
import { ApexLegendFront } from './cards/ApexLegendFront';
import { ApexLegendBack } from './cards/ApexLegendBack';
import { PremiumGolfFront } from './cards/PremiumGolfFront';
import { PremiumGolfBack } from './cards/PremiumGolfBack';
import { PrismaticFront } from './cards/PrismaticFront';
import { PrismaticBack } from './cards/PrismaticBack';
import { BattleRapFront } from './cards/BattleRapFront';
import { BattleRapBack } from './cards/BattleRapBack';
import { FuturisticFront } from './cards/FuturisticFront';
import { FuturisticBack } from './cards/FuturisticBack';
import { FashionFront } from './cards/FashionFront';
import { FashionBack } from './cards/FashionBack';
import { MusicFront } from './cards/MusicFront';
import { MusicBack } from './cards/MusicBack';
import { CyberFront } from './cards/CyberFront';
import { CyberBack } from './cards/CyberBack';
import { SciFiScoutFront } from './cards/SciFiScoutFront';
import { SciFiScoutBack } from './cards/SciFiScoutBack';
import { UnitedMonoFront } from './cards/UnitedMonoFront';
import { UnitedMonoBack } from './cards/UnitedMonoBack';
import { StreetFront } from './cards/StreetFront';
import { StreetBack } from './cards/StreetBack';
import { DefaultFront } from './cards/DefaultFront';
import { DefaultBack } from './cards/DefaultBack';

export type RegistryKey = VisualShowcaseVariant | 'default';

export const getCardVariant = (item: VisualShowcaseConcept): RegistryKey => {
  return item.variant || 'default';
};

export const FRONT_COMPONENTS: Record<RegistryKey, React.FC<{ item: VisualShowcaseConcept }>> = {
  arcLeague: ArcLeagueFront,
  apexLegend: ApexLegendFront,
  premiumGolf: PremiumGolfFront,
  prismatic: PrismaticFront,
  battleRap: BattleRapFront,
  futuristic: FuturisticFront,
  fashion: FashionFront,
  music: MusicFront,
  cyber: CyberFront,
  sciFiScout: SciFiScoutFront,
  unitedMono: UnitedMonoFront,
  street: StreetFront,
  default: DefaultFront,
};

export const BACK_COMPONENTS: Record<RegistryKey, React.FC<{ item: VisualShowcaseConcept }>> = {
  arcLeague: ArcLeagueBack,
  apexLegend: ApexLegendBack,
  premiumGolf: PremiumGolfBack,
  prismatic: PrismaticBack,
  battleRap: BattleRapBack,
  futuristic: FuturisticBack,
  fashion: FashionBack,
  music: MusicBack,
  cyber: CyberBack,
  sciFiScout: SciFiScoutBack,
  unitedMono: UnitedMonoBack,
  street: StreetBack,
  default: DefaultBack,
};
