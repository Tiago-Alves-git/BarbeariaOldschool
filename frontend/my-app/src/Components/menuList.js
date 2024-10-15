import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function CheckboxList({ setServices }) {
  const navigate = useNavigate();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const Services = [
    {Name: 'Corte', Value: 39.90},
    {Name: 'Barba', Value: 39.90},
  ]

  const handleClick = () => {
    setServices(checked);
    navigate('/barber');
  };

  return (
    <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper', flexGrow: 1 }}>
      {Services.map((service, index) => {
        const labelId = `checkbox-list-label-${service.Name}`;

        return (
          <ListItem em
            key={index}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <Typography>
                  { `${service.Value} $` }
                </Typography>
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(service.Name)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.includes(service.Name)}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${service.Name}`} />
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
