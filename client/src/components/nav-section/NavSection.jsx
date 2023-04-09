import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
import { useState } from 'react';
// @mui
import { Box, List, ListItemText, Collapse,ListItemButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
//
import { StyledNavItem, StyledNavItemIcon } from './styles';

// ----------------------------------------------------------------------

NavSection.propTypes = {
  data: PropTypes.array,
};

export default function NavSection({ data = [], ...other }) {
  const [open, setOpen] = useState({title: '', open: false});
  console.log(open)
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1}}>
        {data.map((item, index) => (
          <>
          <ListItemButton onClick={()=>setOpen({title: item.title , open: !open.open } )} >
          <NavItem key={item.title} item={item} sx={{color:"white"}}/> {open.title === item.title && item.children && !open.open && <ArrowDropDownIcon/>} {open.title === item.title && open.open && item.children && <ArrowDropUpIcon/>}
          </ListItemButton>
          <Collapse in={(open===item.title || open.open) } timeout="auto" unmountOnExit>
          {item.children && (
            <List disablePadding sx={{ pl: 3 }}>
              {item.children.map((child) => (
                <NavItem key={child.title} item={child} />
              ))}
            </List>
          )}
          </Collapse>
          </>
        ))}
      </List>
    </Box>
  );
}

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
};

function NavItem({ item }) {
  const { title, path, icon, info } = item;

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      sx={{
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',
          fontWeight: 'fontWeightBold',
        },
      }}
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />

      {info && info}
    </StyledNavItem>
  );
}
