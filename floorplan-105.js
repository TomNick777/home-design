// 105-A1 HouseSpec. Millimetres; x right, y down. Geometry lives only here.
// bearing=true is a conservative editing lock, NOT a structural determination.
const HOUSE_SPEC = {
  name: '105-A1 · 三室两卫', height: 2800, phase: 'renovate', autoElec: true,
  look: {style: 'real', palette: 'plan'},
  underlay: {image: '../assets/105-A1-source.png', mmPerPx: 9500/279, x: -2*9500/279, y: -420*9500/279},
  walls: [], rooms: [], furniture: [], structs: []
};
const wall = (a,b,t,openings=[]) => HOUSE_SPEC.walls.push({a,b,t,bearing:true,openings});
const op = (type,from,to,extra={}) => ({type,from,to,...extra});
wall([0,0],[3600,0],240,[op('door',200,1200,{entry:true,into:[750,1500]}),op('window',2100,3250)]);
wall([3600,0],[3600,900],240);
wall([3600,900],[9500,900],200,[op('window',3850,5000),op('window',5650,7200),op('highWindow',8050,8950)]);
wall([9500,900],[9500,8500],240,[op('highWindow',1750,2450),op('window',5550,7550)]);
wall([6400,8500],[9500,8500],240,[op('window',6850,9050)]);
wall([6400,8500],[6400,10000],160);
wall([0,10000],[6400,10000],160,[op('window',400,5350,{sill:1100})]);
wall([0,0],[0,10000],240,[op('window',2850,3500),op('window',5850,7550)]);
wall([0,8500],[6400,8500],200,[op('sliding',350,3250),op('window',3900,5850)]);
wall([1500,0],[1500,2400],120);
wall([1500,2400],[3600,2400],120,[op('sliding',2500,3400)]);
wall([3600,900],[3600,8500],240,[op('hole',3700,4750),op('door',4900,5750,{hinge:'from',into:[4500,6200]})]);
wall([5200,900],[5200,3600],120);
wall([7800,900],[7800,3600],120);
wall([3600,3600],[9500,3600],120,[op('door',4250,5050,{hinge:'from',into:[4600,2700]}),op('door',5500,6350,{into:[6200,2700]}),op('door',8050,8850,{into:[8500,2700]})]);
wall([6400,3600],[6400,8500],160,[op('door',3850,4700,{hinge:'to',into:[7400,4500]})]);
wall([3600,4900],[6400,4900],120);
wall([5800,8500],[5800,10000],100,[op('highWindow',8900,9700)]);
// Mechanical ledge above guest bathroom; no ceiling or interior lighting.
wall([3600,0],[5200,0],120,[op('highWindow',3750,5050,{sill:1000,head:2800})]);
wall([5200,0],[5200,900],120);
const room=(name,at,mat)=>HOUSE_SPEC.rooms.push({name,at,mat});
room('玄关 · 客餐厅',[1800,4500],'tile'); room('厨房',[2550,1200],'bath');
room('客卫',[4400,2400],'bath'); room('北卧室',[6500,2250],'oak');
room('主卫',[8650,2450],'bath'); room('过道',[5000,4250],'tile');
room('南卧室',[5000,6800],'oak'); room('主卧 · 更衣区',[7950,5900],'walnut');
room('阳台',[2800,9300],'deck'); room('空调机位',[4700,450],'deck'); room('设备位',[6100,9200],'deck');
const furn=(key,x,y,w,d,rot=0,extra={})=>HOUSE_SPEC.furniture.push({key,at:[x,y],w,d,rot,...extra});
furn('shoeCabinet',1280,1850,800,300,90);
furn('fridge',1930,1850,560,600);
furn('lCounter',2700,1100,1500,1500,0,{kit:{shape:'L',corner:'right',depth:500,wall:false,hood:true,sink:{leg:1,at:650,w:600},hob:{leg:0,at:750,w:600}}});
furn('diningTable',1900,3300,1000,650,0);
furn('chair',1600,2700,400,420,0); furn('chair',2200,2700,400,420,0);
furn('chair',1600,3900,400,420,180); furn('chair',2200,3900,400,420,180);
furn('sofa',3020,6900,2200,800,90); furn('coffeeTable',2050,6750,1100,600,90);
furn('tvCabinet',340,4700,1500,360,270); furn('armchair',2150,7750,700,700,180);
furn('sideTable',3020,7950,400,400);
furn('bed12',6200,1950,1200,1800,270); furn('wardrobe',7410,2450,1900,500,90);
furn('bed15',5100,7050,1500,2000,90); furn('wardrobe',5600,5260,1300,550);
furn('nightstand',6000,6000,350,350); furn('nightstand',6000,8030,350,350);
furn('bed18',8000,6950,1800,2000,90); furn('nightstand',9090,5800,350,350); furn('nightstand',9090,8060,350,350);
furn('wardrobe',9060,4420,1350,560,90); furn('wardrobe',7900,5200,1500,500,180);
for (const x of [4400,8650]) {
 furn('shower',x,1450,1150,800); furn('bathHeater',x,2250,300,300);
 HOUSE_SPEC.structs.push({kind:'drain',at:[x,1200]});
}
furn('toilet',4060,2480,400,650,270); furn('vanity',4010,3190,650,450,270);
furn('toilet',9050,2480,400,650,90); furn('vanity',9080,3190,650,450,90);
HOUSE_SPEC.structs.push({kind:'drain',at:[5400,9300]});
HOUSE_SPEC.structs.push({kind:'sewer',at:[3940,2480]},{kind:'sewer',at:[9180,2480]});
furn('washer',5380,8940,600,600); furn('clothesRack',2800,9300,2200,450);
furn('gasHeater',3390,560,360,180,90);
furn('acWall',3350,4800,850,260,90); furn('acWall',7050,3410,800,260,180);
furn('acWall',3850,7100,800,260,270); furn('acWall',6610,6500,800,260,270);
furn('curtain',6425,1160,1950,140); furn('curtain',5000,8240,2350,140,180);
furn('curtain',7950,8240,2550,140,180); furn('curtain',9230,6600,2400,140,90);
furn('curtain',270,6700,2000,140,270); furn('curtain',1800,8240,3100,140,180);
// Only the lower/right dimension chains belong to this apartment.
HOUSE_SPEC.elec=[{kind:'cold',at:[5600,8580],rot:0}];
const SOURCE_DIMENSIONS = {x:[3500,2900,3100], xUpper:[3600,1600,2600,1700], y:[900,2700,4900,1500]};
if(typeof module!=='undefined') module.exports={HOUSE_SPEC,SOURCE_DIMENSIONS};
