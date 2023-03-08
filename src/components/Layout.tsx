import { Container, Grid, Icon, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material'
import { FC, ReactNode } from 'react'
import { Link, Outlet } from 'react-router-dom'

interface LayoutProps {
  children?: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <Container maxWidth="md">
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <MenuList>
          <MenuItem component={Link} to="/">
            <ListItemIcon>
              <Icon>house</Icon>
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </MenuItem>
          <MenuItem component={Link} to="/table">
            <ListItemIcon>
              <Icon>table chart</Icon>
            </ListItemIcon>
            <ListItemText>Table</ListItemText>
          </MenuItem>
          <MenuItem component={Link} to="/todos">
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

export default Layout
