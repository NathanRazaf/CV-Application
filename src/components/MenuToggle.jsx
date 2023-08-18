import img from '../assets/chevron-down.svg';

function MenuToggle({ toggle, isToggled }) {
    return (
        <button onClick={toggle} className='menu-toggle'>
            <img src={img} alt="menu toggle" style={{ transform: isToggled ? 'rotate(0deg)' : 'rotate(180deg)'}} />
        </button>
    );
}

export default MenuToggle;

