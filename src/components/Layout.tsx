import Container  from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Icon from '@mui/material/Icon'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import { type FC, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

type Tab = 'home' | 'table' | 'todos'

const Layout: FC = () => {
  const [currentTab, setCurrentTab] = useState<Tab>('home')

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <MenuList>
            <MenuItem selected={currentTab === 'home'} onClick={() => setCurrentTab('home')} component={Link} to="/">
              <ListItemIcon>
                <Icon>house</Icon>
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </MenuItem>
            <MenuItem selected={currentTab === 'table'} onClick={() => setCurrentTab('table')} component={Link} to="/table">
              <ListItemIcon>
                <Icon>table chart</Icon>
              </ListItemIcon>
              <ListItemText>Table</ListItemText>
            </MenuItem>
            <MenuItem selected={currentTab === 'todos'} onClick={() => setCurrentTab('todos')} component={Link} to="/todos">
              <ListItemIcon>
                <Icon>toc</Icon>
              </ListItemIcon>
              <ListItemText>
                Todo
              </ListItemText>
            </MenuItem>
          </MenuList>
        </Grid>
        <Grid item xs={8}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Layout
