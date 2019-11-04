import React, {useState, useCallback} from 'react';
import './ToggleButton.scss';

type ToggleButtonProps = {
    onClick: (name: string) => void;
    children: any;
}

function ToggleButton({onClick, children}: ToggleButtonProps,) {
    const [selected, setSelected] = useState<boolean>(false);

    const handleClick = useCallback(() => {
        setSelected(!selected);
        onClick(children);
    }, [onClick, selected, children]);

    return(
        <div
            className = {'ToggleButton ' + (selected? 'on' : 'off')}
            onClick = { () => handleClick() }>
            {children}
        </div>
    )
}

export default ToggleButton;