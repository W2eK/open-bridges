import './src/styles/global.css';

window.addGlobalVariables = variables => {
  for(const key in variables) window[key] = variables[key]
}