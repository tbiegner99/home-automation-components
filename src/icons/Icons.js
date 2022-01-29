import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync,faTrash, faCaretUp,faCaretDown,faHome} from "@fortawesome/free-solid-svg-icons"

export const createIcon = (icon) => (props) => <i {...props} ><FontAwesomeIcon icon={icon}/></i>;
export const createGraphicIcon = (icon) => (props) => <g {...props} ><FontAwesomeIcon icon={icon}/></g>;


export const RefreshIcon = createIcon(faSync);
export const DeleteIcon = createIcon(faTrash);
export const MoveUpIcon = createIcon(faCaretUp);
export const MoveDownIcon = createIcon(faCaretDown);
export const HomeIcon = createIcon(faHome);
