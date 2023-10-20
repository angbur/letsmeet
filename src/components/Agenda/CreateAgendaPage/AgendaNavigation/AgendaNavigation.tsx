import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import styled from '@mui/material/styles/styled';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';
import {
  detailsItems,
  accessesItems,
  SectionItems,
  selectDetails,
  selectAccesses,
  setActive,
  selectLanguage,
  languages,
  setCurrentLanguage,
  Language,
} from '@store/createAgendaSlice';

const sectionTitleToCreateAgendaStateKeyof = {
  '1. Details': 'details',
  '2. Accesses': 'accesses',
  '3. Languages section': 'languages',
} as const;

const NavSection = ({ palette, title, items, addDivider = true }: NavSectionProps) => {
  const dispatch = useDispatch();
  const details = useSelector(selectDetails);
  const accesses = useSelector(selectAccesses);
  const currentLanguage = useSelector(selectLanguage);

  const isListItemActive = (item: string): boolean => {
    if (title === '1. Details' || title === '2. Accesses') {
      const section = sectionTitleToCreateAgendaStateKeyof[title];
      const sectionItems = { details, accesses }[section];
      const itemProperty = sectionItems[item.toLowerCase() as keyof typeof sectionItems];
      return itemProperty.active;
    } else {
      return false;
    }
  };

  const handleChangeActive = (event: React.MouseEvent<HTMLDivElement>) => {
    const eventTargetText = (event.target as HTMLDivElement).innerText.toLowerCase();
    if (title === '1. Details' || title === '2. Accesses') {
      dispatch(
        setActive({
          section: sectionTitleToCreateAgendaStateKeyof[title],
          item: eventTargetText,
        }),
      );
    }
    if (title === '3. Languages section' && eventTargetText !== currentLanguage) {
      dispatch(setCurrentLanguage(eventTargetText as Language));
    }
  };

  return (
    <Fragment>
      <StyledNavSectionTitle palette={palette} variant="h3">
        {title}
      </StyledNavSectionTitle>
      <StyledList palette={palette}>
        {items.map((item, index) => (
          <StyledListItemButton
            key={index}
            selected={
              title === '3. Languages section'
                ? item.toLowerCase() === currentLanguage
                : isListItemActive(item.toLowerCase())
            }
            onClick={handleChangeActive}
          >
            {title === '3. Languages section' && item.toLowerCase() === currentLanguage ? (
              <CheckIcon sx={{ marginRight: '0.5rem' }} />
            ) : null}
            <StyledTypography variant="h4">{item}</StyledTypography>
          </StyledListItemButton>
        ))}
      </StyledList>
      {addDivider ? <Divider sx={{ marginTop: '0.5rem' }} /> : null}
    </Fragment>
  );
};

const AgendaNavigation = () => {
  const { palette } = useTheme();
  const languageArray = languages.map((language) => language.charAt(0).toUpperCase() + language.slice(1));

  return (
    <StyledBox palette={palette}>
      <NavSection palette={palette} title="1. Details" items={getNavigationLabels(detailsItems)} />
      <NavSection palette={palette} title="2. Accesses" items={getNavigationLabels(accessesItems)} />
      <NavSection palette={palette} title="3. Languages section" items={languageArray} addDivider={false} />
    </StyledBox>
  );
};

export default AgendaNavigation;

const getNavigationLabels = (sectionItem: SectionItems) => {
  return Object.keys(sectionItem).map((item) => item.charAt(0).toUpperCase() + item.slice(1));
};

type NavSectionProps = {
  palette: Theme['palette'];
  title: string;
  items: string[];
  addDivider?: boolean;
};

const StyledBox = styled(Box)<Pick<Theme, 'palette'>>(({ palette }) => ({
  backgroundColor: palette.secondary.light,
  padding: '0.75rem',
  marginTop: '2px',
  borderRadius: '16px',
  width: '270px',
}));

const StyledList = styled(List)<Pick<Theme, 'palette'>>(({ palette }) => ({
  '&& .Mui-selected, && .Mui-selected:hover': {
    backgroundColor: palette.secondary.main,
  },
  '& .MuiListItemButton-root:hover': {
    backgroundColor: `${palette.secondary.main}70`,
  },
}));

const StyledNavSectionTitle = styled(Typography)<Pick<Theme, 'palette'>>(({ palette }) => ({
  color: palette.primary.main,
  fontSize: '0.9rem',
  fontWeight: 500,
  lineHeight: '142%',
  letterSpacing: '0.1px',
  padding: '1.125rem 1rem',
}));

const StyledListItemButton = styled(ListItemButton)({
  paddingLeft: '2rem',
});

const StyledTypography = styled(Typography)({
  fontSize: '0.9rem',
  fontWeight: 500,
  lineHeight: '142%',
  letterSpacing: '0.1px',
});
