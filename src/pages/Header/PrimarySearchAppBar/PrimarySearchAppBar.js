import * as React from 'react';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import useAuth from '../../../Hooks/useAuth';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));



export default function PrimarySearchAppBar() {
    const history = useHistory()
    const { user, error, setUserEmail, setUserPass, handleLogOut } = useAuth()

    const logOutHandleAndRedirect = () => {
        handleLogOut()
        history.push("/home")
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleProfileRoute = () => history.push('/profile')

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        user.email &&
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
            style={{ marginTop: '62px' }}
        >
            <MenuItem onClick={handleMenuClose, handleProfileRoute}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            <MenuItem onClick={handleMenuClose, logOutHandleAndRedirect}>Sign Out</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <div>
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                id={mobileMenuId}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={isMobileMenuOpen}
                onClose={handleMobileMenuClose}
            >
                <MenuItem>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="error">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <p>Messages</p>
                </MenuItem>
                <MenuItem>
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={17} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <p>Notifications</p>
                </MenuItem>
                <MenuItem >
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
                <MenuItem onClick={handleLogOut} >
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="primary-search-account-menu"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <ExitToAppIcon />
                    </IconButton>
                    <p>Sign Out</p>
                </MenuItem>

                <Link className="transition font-semibold hover:text-yellow-600 flex justify-center items-center w-full" to="/home">
                    <MenuItem >
                        <p>Home</p>
                    </MenuItem>
                </Link>

                <Link className="flex justify-center items-center w-full transition font-semibold hover:text-yellow-600" to="/rooms">
                    <MenuItem >
                        <p>Our Rooms</p>
                    </MenuItem>
                </Link>

                <Link className="flex justify-center items-center w-full transition font-semibold hover:text-yellow-600" to="/about">
                    <MenuItem >
                        <p>About</p>
                    </MenuItem>
                </Link>

            </Menu>
        </div>
    );

    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" className="py-3 " style={{ backgroundColor: '#374151', }}>
                <div className="sm:w-full w-11/12 mx-auto">
                    <Toolbar className="">
                        <div>
                            <a href=""><img className="w-20" src={logo} alt="" /></a>
                        </div>
                        <div className="ml-16 text-lg sm:hidden">
                            <Link className="mr-10 transition font-semibold hover:text-yellow-600" to="/home">Home</Link>
                            <Link className="mr-10 transition font-semibold hover:text-yellow-600" to="/rooms">Our Rooms</Link>
                            <Link className="mr-10 transition font-semibold hover:text-yellow-600" to="/about">About</Link>
                        </div>

                        <Box sx={{ flexGrow: 1 }} />
                        {user.email ?
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                    <Badge badgeContent={4} color="error">
                                        <MailIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    size="large"
                                    aria-label="show 17 new notifications"
                                    color="inherit"
                                >
                                    <Badge badgeContent={17} color="error">
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                                <Avatar
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                    style={{ backgroundColor: 'gray', marginLeft: '30px', cursor: 'pointer' }}
                                >
                                    {
                                        user.displayName &&
                                        user.displayName.slice(0, 1)
                                    }
                                </Avatar>
                            </Box>
                            : <div>
                                <Link className="mr-10 transition font-semibold hover:text-yellow-600" to="/login">Log In</Link>
                                <Link className="mr-10 transition font-semibold hover:text-yellow-600" to="/registration">Registration</Link>
                            </div>
                        }


                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <MenuIcon
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </MenuIcon>
                        </Box>
                    </Toolbar>
                </div>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}