import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ChooseBarber({ setSelectedBarber }) {
  const navigate = useNavigate();
  const [checked, setChecked] = React.useState(null);

  const handleToggle = (value) => () => {
    setChecked(checked === value ? null : value);
  };

  const Barbers = [
    "Thayssa", "Amarilto"
  ]

  const handleClick = () => {
    setSelectedBarber(checked);
    navigate('/agenda');
  };

  return (
    <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper', flexGrow: 1 }}>
      {Barbers.map((service, index) => {
        const labelId = `checkbox-list-label-${service}`;

        return (
          <ListItem em
            key={index}
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(service)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked === service}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${service}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
      <Button sx={{ width: '100%'}} variant='contained' onClick={() => { handleClick() }}>
        Agendar
      </Button>
    </List>
  );
}
