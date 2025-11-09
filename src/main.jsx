
import { createRoot } from 'react-dom/client'


createRoot(document.getElementById('root')).render(
<div id="root">
  <h1 id="title">가위바위보 게임임</h1>
  <h2>패를 골라주세요</h2>
  <button className="hand">가위</button>
  <button className="hand">바위</button>
  <button className="hand">보</button>
</div>

);