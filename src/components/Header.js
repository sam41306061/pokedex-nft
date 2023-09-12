import React from 'react';
import Pokedex from "../assets/images/pokedex.png";

import { Button } from '@material-ui/core';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

class Header extends React.Component {

    changeTheme = () => {

        // debugger
        const currentTheme = document.documentElement.getAttribute('data-theme');
        // console.log(currentTheme);

        let targetTheme = "light";

        if (currentTheme === "light") {
            targetTheme = "dark";

            this.setState({
                isChecked: true,
            })

            // console.log(targetTheme);
        } else {
            this.setState({
                isChecked: false,
            })
        }
        document.documentElement.setAttribute('data-theme', targetTheme)
    }

    openGithub = () => {
        window.open("https://github.com/s1varam/pokedex");
    }

    render() {
        return (
            <>
                <div className="app__header">
                    <div className="switch">

                        <div className="toggle">
                            <label htmlFor="themeSwitch"></label>
                            <input type="checkbox" name="swich-theme" id="themeSwitch" onClick={this.changeTheme} defaultChecked />
                            <div className="toggle-bg"></div>
                            <div className="toggle-thumb">
                                <i className="fas fa-sun"></i>
                                <i className="fas fa-moon"></i>
                            </div>
                        </div>
                    </div>
                    <div className="poke__logos noselect">
                        <img src={Pokedex} alt="pokelogo" className="poke__logo" />
                    </div>
                    <div className="pokeball__box">
                        <Button variant="outlined" startIcon={<AddShoppingCartIcon />}> 
                         1 
                        </Button>
                    </div>
                </div>
            </>
        )
    }
}

export default Header;