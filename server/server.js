const express = require("express");
const app = express();
const port = 5001;
const path = require("path");

const header = {
  setHeaders: (res, path) => {
    setCachePolicy(res, path);
  },
};

app.use(express.static(path.join(__dirname, "../build"), header));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

const setCachePolicy = (res, path) => cachePolicyByExt(res, path);

const extProcessFunctionMap = {
  js: (res) => {
    res.setHeader("Cache-Control", "public, max-age=31536000");
    return res;
  },
  css: (res) => {
    res.setHeader("Cache-Control", "public, max-age=31536000");
    return res;
  },
  html: (res) => {
    res.setHeader("Cache-Control", "no-cache");
    return res;
  },
};

const ext = (path) => path.split(".").at(-1);

const cachePolicyByExt = (res, path) => {
  extProcessFunctionMap[ext(path)]?.(res) || defaultExtProcessFunction(res);
};

const defaultExtProcessFunction = (res) => {
  res.setHeader("Cache-Control", "no-store");
  return res;
};
