import { scroll } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm"

const container = document.querySelector('.container')

scroll((progress) => {
  container.style.setProperty('--progress', progress)
}, { target: container })