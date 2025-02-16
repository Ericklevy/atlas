import React from 'react';

import { useTheme } from '@mui/material/styles';

import { useSidebar } from '@context/sidebarContext';

import { SummaryCard } from './SummaryCard';
import { CloroplethLegend } from './CloroplethLegend';
import * as Styles from './styles';

export default function InformationBar() {
  const { isSidebarOpen } = useSidebar();
  const theme = useTheme();

  return (
    <Styles.SideInformationsContainer theme={theme} isSidebarOpen={isSidebarOpen}>
      <SummaryCard />
      <CloroplethLegend />
    </Styles.SideInformationsContainer>
  );
}
