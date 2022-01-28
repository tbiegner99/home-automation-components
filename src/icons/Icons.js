import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync,faTrash, faCaretUp,faCaretDown} from "@fortawesome/free-solid-svg-icons"

// eslint-disable-next-line react/jsx-props-no-spreading
export const createIcon = (icon) => (props) => <i {...props} ><FontAwesomeIcon icon={icon}/></i>;
export const createGraphicIcon = (icon) => (props) => <g {...props} ><FontAwesomeIcon icon={icon}/></g>;


export const RefreshIcon = createIcon(faSync);
export const DeleteIcon = createIcon(faTrash);
export const MoveUpIcon = createIcon(faCaretUp);
export const MoveDownIcon = createIcon(faCaretDown);
