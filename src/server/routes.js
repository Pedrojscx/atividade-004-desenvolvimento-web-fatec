import express from "express";

export const listRoutes = express.Router();

listRoutes.get("/", function (_req, res) {
  res.render("index.html");
});

listRoutes.get("/1dsm", function (_req, res) {
  res.render("pages/1dsm.html");
});

listRoutes.get("/2dsm", function (_req, res) {
  res.render("pages/2dsm.html");
});

listRoutes.get("/3dsm", function (_req, res) {
  res.render("pages/3dsm.html");
});

listRoutes.get("/4dsm", function (_req, res) {
  res.render("pages/4dsm.html");
});

listRoutes.get("/5dsm", function (_req, res) {
  res.render("pages/5dsm.html");
});

listRoutes.get("/6dsm", function (_req, res) {
  res.render("pages/6dsm.html");
});
