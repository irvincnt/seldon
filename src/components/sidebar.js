import React, {PureComponent} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faCaretDown, faBars, faAlignLeft } from '@fortawesome/free-solid-svg-icons'

import '../styles/sidebar.scss'

class Sidebar extends PureComponent {
  render() { 
    return (
    <>
      <div className="sidebar">
        <div className="sidebar--logo">
          <h1>Seldon</h1>
          <FontAwesomeIcon icon={faBars} size="md"/>
        </div>
        <div className="sidebar--item">
          <div className="sidebar--item__label">
            <FontAwesomeIcon icon={faAlignLeft} size="md"/>
            <p>Componentes</p>
          </div>
          <FontAwesomeIcon icon={faCaretDown} size="sm"/>
        </div>
        <div className="sidebar--item-active">
          <div className="sidebar--item__label">
            <FontAwesomeIcon icon={faAlignLeft} size="md"/>
            <p>Listas</p>
          </div>
          <FontAwesomeIcon icon={faCaretDown} size="sm"/>
        </div>
        <div className="sidebar--item">
          <div className="sidebar--item__label">
            <FontAwesomeIcon icon={faAlignLeft} size="md"/>
            <p>modales</p>
          </div>
          <FontAwesomeIcon icon={faCaretDown} size="sm"/>
        </div>
      </div>
    </>
    );
  }
}
 
export default Sidebar ;