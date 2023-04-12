import PropTypes from "prop-types";
import React from 'react'
import { NavLink as RouterLink } from "react-router-dom";
import { useState } from "react";
// @mui
import {
  Box,
  List,
  ListItemText,
  Collapse,
  ListItemButton,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
//
import { StyledNavItem, StyledNavItemIcon } from "./styles";
// ----------------------------------------------------------------------

NavSection.propTypes = {
  data: PropTypes.array,
};

export default function NavSection({ data = [], ...other }) {
  const [open, setOpen] = useState({ title: "", open: false });
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <ListItemButton
              onClick={() => setOpen(open === index ? null : index)}
            >
              <NavItem item={item} sx={{ color: "white" }} />
              {open === index && item.children && <ArrowDropUpIcon />}
              {open !== index && item.children && <ArrowDropDownIcon />}
            </ListItemButton>
            <Collapse in={open === index} timeout="auto" unmountOnExit>
              {item.children && (
                <List disablePadding sx={{ pl: 3 }}>
                  {item.children.map((child) => (
                    <NavItem key={child.title} item={child} />
                  ))}
                </List>
              )}
            </Collapse>
          </React.Fragment>
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
        "&.active": {
          color: "text.primary",
          bgcolor: "action.selected",
          fontWeight: "fontWeightBold",
        },
      }}
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />

      {info && info}
    </StyledNavItem>
  );
}
