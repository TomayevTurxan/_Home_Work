import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CurrentUserContex } from '../../../services/context/CurrentUser';

const AdminNavbar = () => {
  const { user } = useContext(CurrentUserContex);

  return (
    <AppBar sx={{ background: 'red' }} position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {'Admin Side'}
        </Typography>
        {user && user.isAdmin && (
          <>
            <Button color="inherit">
              <Link style={{ color: 'white' }} to={'/admin'}>
                Dashboard
              </Link>
            </Button>
            <Button color="inherit">
                <Link style={{ color: "white" }} to={"/admin/BasketAdmin"}>
                  Basket
                </Link>
              </Button>
            <Button color="inherit">
              <Link style={{ color: 'white' }} to={'/admin/add-category'}>
                Add Category
              </Link>
            </Button>
            <Button color="inherit">
              <Link style={{ color: 'white' }} to={'/admin/categories'}>
                Categories
              </Link>
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default AdminNavbar;
