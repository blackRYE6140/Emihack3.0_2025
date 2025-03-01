import { Tldraw } from 'tldraw';
import 'tldraw/tldraw.css';

const Whiteboard = () => {
  

  return (
    <div className="containerDraw">
        <div style={{ width: '50%', height: '80vh',backgroundColor:"#16a34a" }}>
        <Tldraw persistenceKey="whiteboard-storage" />
        </div>
    </div>
  );
};

export default Whiteboard;
