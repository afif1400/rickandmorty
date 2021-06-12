import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

// import Swiper core and required modules

const Navbar: React.FC = () => {
	const [toggle, setToggle] = useState(false);

	const toggleMenu = () => {
		setToggle(!toggle);
	};
	return (
		<div className='page-header'>
			<div className='page-header__top'>
				<div className='page-header__logo'>Quotes</div>
				<div className='page-header__toggle' onClick={() => toggleMenu()}>
					☰
				</div>
			</div>
			<nav className='page-header__bottom'>
				<ul
					id='navigation'
					className={toggle ? `navigation navigation--visible` : `navigation`}
				>
					<li className='navigation__item'>
						<Link to='/'>Home</Link>
					</li>
					<li className='navigation__item'>
						<Link to='/rick'>Rick</Link>
					</li>
					<li className='navigation__item'>
						<Link to='/morty'>Morty</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
