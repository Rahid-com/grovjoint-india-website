export type Product = { 
  name: string;
  model: string;
  category: string;
  summary: string;
  page: number;
  image?: string;
  imageVerified?: boolean;
};
export const products: Product[] = [
 {name:'Rigid Coupling',model:'GJRC50G',category:'Couplings',summary:'Rigid grooved coupling for restrained pipe connections in grooved piping systems.',page:5},
 {name:'Flexible Coupling',model:'GJFC12G',category:'Couplings',summary:'Flexible grooved coupling designed to accommodate angular movement and axial displacement.',page:6},
 {name:'Flexible Coupling – Large Size',model:'GJFC12L',category:'Couplings',summary:'Large-size flexible coupling for grooved pipe systems.',page:7},
 {name:'Rigid Coupling – Large Size',model:'GJRC50L',category:'Couplings',summary:'Large-size rigid coupling for restrained grooved connections.',page:7},
 {name:'Flexible Coupling Heavy',model:'GJFC11G',category:'Couplings',summary:'Heavy-duty flexible coupling for grooved piping applications.',page:8},
 {name:'Grooved Reducing Coupling',model:'GJRC25G',category:'Couplings',summary:'Connects different pipe diameters while accommodating movement.',page:9},
 {name:'One-Bolt Push-On Coupling',model:'GJPLC10',category:'Couplings',summary:'One-bolt push-on coupling designed for quick grooved pipe installation.',page:10},
 {name:'Quick-Lock Rigid Coupling',model:'GJQRC19',category:'Couplings',summary:'Quick-lock rigid coupling for restrained grooved connections.',page:11},
 {name:'Quick-Lock Flexible Coupling',model:'GJQFC29',category:'Couplings',summary:'Quick-lock flexible coupling for grooved piping systems.',page:12},
 {name:'Angle Pad Coupling',model:'GJRC10A',category:'Couplings',summary:'Angle-pad coupling for grooved piping applications.',page:13},
 {name:'Grooved Elbow 90° Long',model:'GJ1090L',category:'Elbows & Bends',summary:'Long-radius 90-degree grooved elbow.',page:14},
 {name:'Grooved Elbow 90° Short',model:'GJ1590S',category:'Elbows & Bends',summary:'Short-radius 90-degree grooved elbow.',page:15},
 {name:'Grooved Elbow 45°',model:'GJ1645S',category:'Elbows & Bends',summary:'45-degree grooved elbow for directional changes.',page:16},
 {name:'Grooved Elbow 22.5°',model:'GJ1222R',category:'Elbows & Bends',summary:'22.5-degree grooved elbow for gradual directional changes.',page:17},
 {name:'Grooved Elbow 11.25°',model:'GJ1311R',category:'Elbows & Bends',summary:'11.25-degree grooved elbow.',page:18},
 {name:'Grooved Equal Tee – Long Radius',model:'GJET11L',category:'Tees & Crosses',summary:'Equal tee for joining two pipes of equal diameter at right angles.',page:19},
 {name:'Equal Tee – Short Radius',model:'GJET17S',category:'Tees & Crosses',summary:'Short-radius equal tee for branch connections.',page:20},
 {name:'Grooved Cross Tee',model:'GJXT35G',category:'Tees & Crosses',summary:'Grooved cross tee for four-way pipe connections.',page:21},
 {name:'U-Bolt Mechanical Tee – Threaded',model:'GJMT13U',category:'Mechanical Tees',summary:'Mechanical tee with threaded outlet connection.',page:22},
 {name:'Mechanical Tee – Grooved Ends',model:'GJMT15G',category:'Mechanical Tees',summary:'Mechanical tee providing a grooved branch outlet.',page:23},
{
  name:'Mechanical Tee – Threaded Ends',
  model:'GJMT16T',
  category:'Mechanical Tees',
  summary:'Mechanical tee with threaded branch outlet.',
  page:25,
  image:'/images/products/GJMT16T.jpg',
  imageVerified:false
},
 {name:'Grooved Concentric Reducer',model:'GJRC40G',category:'Reducers',summary:'Concentric reducer for short centre-to-end dimensions.',page:27},
 {name:'Grooved Concentric Reducer – Threaded Ends',model:'GJRC40T',category:'Reducers',summary:'Concentric reducer with threaded end configuration.',page:29},
 {name:'Grooved Reducing Tee – Grooved Ends',model:'GJRT15G',category:'Reducing Tees',summary:'Reducing tee for joining different pipe diameters.',page:31},
 {name:'Grooved Reducing Tee – Threaded Ends',model:'GJRT15T',category:'Reducing Tees',summary:'Reducing tee with threaded branch connection.',page:33},
 {name:'Grooved Eccentric Reducer',model:'GJER45G',category:'Reducers',summary:'Eccentric reducer for offset pipe transitions.',page:35},
 {name:'Grooved Flange PN-16',model:'GJF14PN',category:'Flanges & Adaptors',summary:'Grooved flange providing a rigid transition to a grooved piping system.',page:36},
 {name:'Grooved Flange ANSI Class-150',model:'GJFL14A',category:'Flanges & Adaptors',summary:'Grooved flange supplied in ANSI Class 150 drilling pattern.',page:36},
 {name:'Grooved Flange Threaded PN-16',model:'GJFA19T',category:'Flanges & Adaptors',summary:'Threaded flange adaptor for a rigid flanged component.',page:36},
 {name:'Grooved Flange Adapter PN-16',model:'GJFA19P',category:'Flanges & Adaptors',summary:'Flange adapter for grooved piping transitions.',page:37},
 {name:'Grooved Flange Adapter ANSI Class-150',model:'GJFA19A',category:'Flanges & Adaptors',summary:'Flange adapter in ANSI Class 150 pattern.',page:37},
 {name:'Grooved End Cap',model:'GJCP55G',category:'End Caps',summary:'End cap designed to terminate a grooved piping end.',page:38},
 {name:'Grooved End Cap – Threaded',model:'GJCP55T',category:'End Caps',summary:'Threaded grooved end cap for terminating a piping end.',page:38}
];
export const categories = [...new Set(products.map(p=>p.category))];
