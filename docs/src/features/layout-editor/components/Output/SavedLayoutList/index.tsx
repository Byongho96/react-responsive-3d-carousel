import { useRef, useState } from 'react';
import styles  from './styles.module.scss'
import XIcon from '@site/static/svg/x-square.svg'
import UploadIcon from '@site/static/svg/upload.svg'
import { useLayoutContext } from '../../../context/LayoutContext';


declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

type SavedJSONItemProps = {
  layout: any;
}

function SavedJSONItem({layout}: SavedJSONItemProps): JSX.Element {
  const { state, dispatch } = useLayoutContext();

  const itemRef = useRef(null);
  const [isNameEditing, setIsNameEditing] = useState(false);

  const isCurrent = state.currentLayout.id === layout.id;
  
  const handleBlur = (e) => {
    dispatch({
      type: 'UPDATE_NAME',
      payload: {
        id: layout.id as number,
        value: e.target.value
      }
    });
    setIsNameEditing(false);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleBlur(e);
  }

  const handleSelect = () => {
    dispatch({
      type: 'SELECT_LAYOUT',
      payload: layout.id
    });
  }

  const handleDelete = () => {
    itemRef.current.classList.add(styles['fade-out']);
    itemRef.current.addEventListener('transitionend', () => {
      dispatch({
        type: 'DELETE_LAYOUT',
        payload: layout.id
      });
    });
  };

  return (
    <article className={`${isCurrent ? styles['selected'] : ''} ${styles['layout-item']}`} ref={itemRef}>
      {
        isNameEditing
        ? <input defaultValue={layout.name} onBlur={handleBlur} onKeyDown={handleKeyDown}/>
        : <span onDoubleClick={() => setIsNameEditing(true)}>{layout.name}</span>
      }
      <div className={styles['button-container']}>
        <button className="outline" onClick={handleSelect}>
          <UploadIcon />
        </button>
        <button className="outline" onClick={handleDelete}>
          <XIcon/>
        </button>
      </div>
    </article>
  )
}

export default function SavedJSONList(): JSX.Element {
  const { state, dispatch } = useLayoutContext();

  const listRef = useRef(null);
  const targetIndexRef = useRef(null);
  const draggingIndexRef = useRef(null);

  const handleDragStart = (e, index) => {
    targetIndexRef.current = index; 
    draggingIndexRef.current = index; 

    e.currentTarget.classList.add(styles['dragging']);
    listRef.current.classList.add(styles['dragging']);

    const img = new Image();
    img.src = '';
    e.dataTransfer.setDragImage(img, 0, 0); 
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();

    if (draggingIndexRef.current === index) return;
    draggingIndexRef.current = index; 

    const items = listRef.current.querySelectorAll('li');
    items.forEach((item, i) => {
      if (i === targetIndexRef.current) {
        item.style.setProperty('--position', `${draggingIndexRef.current}`);
      } else if (i < targetIndexRef.current) {
        if (i < draggingIndexRef.current) {
          item.style.setProperty('--position', `${i}`);
        } else {
          item.style.setProperty('--position', `${i + 1}`);
        }
      } else if (i > targetIndexRef.current) {
        if (i < draggingIndexRef.current + 1) {
          item.style.setProperty('--position', `${i - 1}`);
        } else {
          item.style.setProperty('--position', `${i}`);
        }
      }
    });
  };
  
  const handleDragEnd = (e, index) => {
    e.preventDefault()

    dispatch({
      type: 'UPDATE_ORDER',
      payload: {
        from: targetIndexRef.current,
        to: draggingIndexRef.current
      }
    });
    
    targetIndexRef.current = null;
    draggingIndexRef.current = null;
    
    listRef.current.classList.remove(styles['dragging']); 
    e.currentTarget.classList.remove(styles['dragging']); 
  };


  return (
    <div className={`pico ${styles['container']}`}>
      <div>
        <h2>Saved Layouts</h2>
        <ul>
          <li>
            Drag and drop to reorder
          </li>
          <li>
            Double click to rename
          </li>
        </ul>
      </div>
      <ul className={styles['layout-list']} ref={listRef}>
        {state.layoutList.map((_, i) => (
          <div key={i} style={{'--position': `${i}`}}
          onDragOver={(e) => handleDragOver(e, i)}
          />
        ))}
        {state.layoutList.map((layout, i) => (
          <li key={layout.name} style={{'--position': `${i}`}}
          draggable
          onDragStart={(e) => handleDragStart(e, i)}
          onDragEnd={(e) => handleDragEnd(e, i)}
          >
            <SavedJSONItem layout={layout} />
          </li>
        ))}
      </ul>
    </div>
  )
}

