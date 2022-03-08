function isStdObj(obj) {
  typeof obj === "object" && !Array.isArray(obj) && obj !== null;
}

function makeNode(type, children = [], attributes = {}) {
  //allows passing attributes as a lone first non-type
  //argument without requiring parameter name
  //   if (isStdObj(children) && attributes == {}) {
  //     children = [];
  //     attributes = children;
  //   }

  var node = document.createElement(type);
  Object.entries(attributes).forEach(([k, v]) => {
    switch (k) {
      case "class":
        if (Array.isArray(v)) {
          var valsString = "";
          v.forEach((className) => {
            valsString += className + " ";
          });
          v = valsString;
        }
        break;
    }
    node.setAttribute(k, v);
  });
  if (!Array.isArray(children)) children = [children];
  children.forEach((child) => {
    let toAdd;
    if (typeof child === "string") toAdd = document.createTextNode(child);
    else toAdd = child;
    node.appendChild(toAdd);
  });
  return node;
}

function body(children = [], attributes = {}) {
  return makeNode("body", attributes, children);
}

function h1(children = [], attributes = {}) {
  return makeNode("h1", attributes, children);
}

function h2(children = [], attributes = {}) {
  return makeNode("h2", attributes, children);
}

function h3(children = [], attributes = {}) {
  return makeNode("h3", attributes, children);
}

function h4(children = [], attributes = {}) {
  return makeNode("h4", attributes, children);
}

function p(children = [], attributes = {}) {
  return makeNode("p", attributes, children);
}

function div(children = [], attributes = {}) {
  return makeNode("div", attributes, children);
}

function ul(children = [], attributes = {}) {
  return makeNode("ul", attributes, children);
}

function li(children = [], attributes = {}) {
  return makeNode("li", attributes, children);
}

var testDom = div([
  h1("hello I am a very cool kiddo"),
  div(
    [
      p("This is some random text", { id: "random text" }),
      ul([
        li("this is a sexy list"),
        li("this is a sexy list indeed, brother"),
      ]),
    ],
    { class: ["window", "gigachad"] }
  ),
]);
console.log(testDom);
