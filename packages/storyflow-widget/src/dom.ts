
type KeyValue<T> = { [key: string]: T };

interface ElementProps {
  type?: string;
  styles?: KeyValue<string | number | boolean>;
  attributes?: KeyValue<string>;
  eventHandlers?: KeyValue<any>;
  innerHTML?: string;
}

// generic dom element constructor
export function createElement({ type = 'div', styles = {}, attributes = {}, eventHandlers = {}, innerHTML }: ElementProps): HTMLElement {
  const element = document.createElement(type);
  for (const key in styles) { element.style[key] = styles[key] }
  for (const key in attributes) { element.setAttribute(key, attributes[key]) }
  for (const key in eventHandlers) { element.addEventListener(key, eventHandlers[key]) }
  if (innerHTML) element.innerHTML = innerHTML;
  return element;
}

// remove element from dom
export function removeElementbyId(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    element.remove();
  }
}

// drag element
export function dragElement(element: HTMLElement): void {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  element.onmousedown = dragMouseDown;

  function dragMouseDown(e: any) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e: any) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// create image
export function createImage(src: string) {
  const image = new Image();
  image.src = src;
  image.height = 24;
  image.width = 24;
  return image;
}

// disable btn element
export function disableBtn(element: HTMLButtonElement): void {
  element.style.opacity = '0.5';
  element.style.cursor = 'unset';
  element.disabled = true;
}

// enable btn element
export function enableBtn(element: HTMLButtonElement): void {
  element.style.opacity = '1';
  element.style.cursor = 'pointer';
  element.disabled = false;
}

export function loadJS(src: string, doc: Document): void {
  doc = doc || document;
  // DOM: Create the script element
  const script = doc.createElement("script");
  // set the type attribute
  script.type = "text/javascript";
  // load behaviour
  script.defer = true;
  script.async = true;
  // make the script element load file
  script.src = src;
  // finally insert the element to the body element in order to load the script
  doc.head.appendChild(script);
}

export function loadCSS(href: string, doc: Document): void {
  doc = doc || document;
  // DOM: Create the link element
  const link = doc.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  // finally insert the element to the head element in order to load the css
  doc.head.appendChild(link);
}
