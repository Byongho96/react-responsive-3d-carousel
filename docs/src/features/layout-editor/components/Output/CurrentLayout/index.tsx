import { useEffect, useMemo, useRef } from "react";
import { useLayoutContext } from "../../../context/LayoutContext";
import styles from './styles.module.scss'


export default function CurrentJSON(): JSX.Element {
  const {state, dispatch} = useLayoutContext()
  const scannerRef = useRef(null)
  
  const carouselProp = useMemo(() => {
    const json = { ...state.currentLayout }
    delete json.name
    delete json.id
    return JSON.stringify(json, null, 2)
  }, [state.currentLayout])

  useEffect(() => {
    const handleAnimationEnd = () => {
      scannerRef.current.classList.remove(styles['scanning'])
    }
    scannerRef.current.addEventListener('animationend', handleAnimationEnd);
  }, [])
  
  const handleCopy = () => {
    navigator.clipboard.writeText(carouselProp)
    scannerRef.current.classList.add(styles['scanning'])
  }

  const handleSave = () => {
    dispatch({
      type: 'SAVE_LAYOUT',
      payload: structuredClone(state.currentLayout),
    })
  }

  const handleSaveAsCopy = () => {
    const layout = structuredClone(state.currentLayout)
    delete layout.id
    delete layout.name
    dispatch({
      type: 'SAVE_LAYOUT',
      payload: layout,
    })
  }

  return (
    <div className={`pico ${styles['container']}`} ref={scannerRef}>
      <pre>
        {carouselProp}
      </pre>
      <div className={styles['button-container']}>
        <button className="secondary" onClick={handleCopy}>Copy</button>
        <button className="secondary" onClick={handleSave}>Save</button>
        {state.currentLayout.id && <button className="secondary" onClick={handleSaveAsCopy}>Save as Copy</button>}
      </div>
    </div>
  )
}

