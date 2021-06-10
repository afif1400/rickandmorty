import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar: React.FC = () => {
	const [toggle, setToggle] = useState(false);

	const toggleMenu = () => {
		setToggle(!toggle);
	};
	return (
		<div className='page-header'>
			<div className='page-header__top'>
				<div className='page-header__logo'>Rick and Morty Quotes</div>
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
						<Link to='/'></Link>
						Home
					</li>
					<li className='navigation__item'>
						<Link to='/rick'>Rick</Link>
					</li>
					<li className='navigation__item'>
						<Link to='/rick'>Morty</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
