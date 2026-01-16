import './style.css'
import p5 from 'p5'
import { doodles, doodleNames } from './doodles'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class="app">
    <header>
      <h1>p5.js Doodle Library</h1>
    </header>
    <label class="picker">
      <span>Doodle:</span>
      <select id="doodle-select"></select>
    </label>
    <div id="canvas-root"></div>
  </main>
`

const select = document.querySelector<HTMLSelectElement>('#doodle-select')!
select.innerHTML = doodleNames
  .map((name) => `<option value="${name}">${name}</option>`)
  .join('')

let instance: p5 | null = null

const mountDoodle = (name: string) => {
  if (instance) {
    instance.remove()
  }
  instance = new p5(doodles[name])
}

select.addEventListener('change', () => {
  mountDoodle(select.value)
})

mountDoodle(doodleNames[0])
