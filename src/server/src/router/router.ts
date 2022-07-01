import { Router } from "express";

const router = Router();

router.get("/", (req, res)=>{
  res.render("index.njk");
});

router.get("/design-system/grid/padding", (req, res)=>{
  res.render("designSystem/grid/padding.njk");
});

router.get("/design-system/grid/margin", (req, res)=>{
  res.render("designSystem/grid/margin.njk");
});

router.get("/design-system/grid/examples", (req, res)=>{
  res.render("designSystem/grid/examples.njk");
});

router.get("/design-system/colors/scheme", (req, res)=>{
  res.render("designSystem/colors/scheme.njk");
});

router.get("/design-system/colors/examples", (req, res)=>{
  res.render("designSystem/colors/examples.njk");
}); 

router.get("/design-system/fonts/size", (req, res)=>{
  res.render("designSystem/fonts/size.njk");
});

router.get("/design-system/fonts/color", (req, res)=>{
  res.render("designSystem/fonts/color.njk");
});

router.get("/design-system/fonts/examples", (req, res)=>{
  res.render("designSystem/fonts/examples.njk");
});

router.get("/design-system/box/outline", (req, res)=>{
  res.render("designSystem/box/outline.njk");
});

router.get("/design-system/box/background", (req, res)=>{
  res.render("designSystem/box/background.njk");
});

router.get("/design-system/box/examples", (req, res)=>{
  res.render("designSystem/box/examples.njk");
});

router.get("/components/:component", (req, res)=>{
  res.render(`components/${req.params.component}.njk`);
});

export default router;
