/**
 * Executes the corresponding function according to the direction of the touch swipe
 * @param containerRef HTML elements to detect touch events
 * @param onSwipeLeft Function to run when swiping to the left
 * @param onSwipeRight Function to run when swiping to the right
 */
declare const useSwipe: (containerRef: React.RefObject<HTMLDivElement>, onSwipeLeft: () => void, onSwipeRight: () => void) => void;
export default useSwipe;
